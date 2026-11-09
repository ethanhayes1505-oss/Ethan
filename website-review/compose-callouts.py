# Adds three feature callouts (icon + label + leader line) around the band on the main product photo.
# usage: python3 compose-callouts.py <main.png> <canva-labels.png> <out.jpg>
import sys
import numpy as np
from PIL import Image, ImageDraw
main_p, labels_p, out_p = sys.argv[1:4]
base = Image.open(main_p).convert("RGB"); W = base.width            # 2048 x 2048
NAVY = (30, 42, 68); CREAM = (250, 247, 242)

# --- label glyphs from Canva (cream on black) -> alpha masks, 2 lines per callout
lab = np.asarray(Image.open(labels_p).convert("RGB")).astype(np.float32).max(axis=2)
rows = np.where(lab.max(axis=1) > 40)[0]
lines, s, p = [], rows[0], rows[0]
for r in rows[1:]:
    if r > p + 6: lines.append((s, p)); s = r
    p = r
lines.append((s, p))
# merge tiny fragments (comma tails, descenders) into the line above
merged = []
for a, b in lines:
    if merged and (b - a) < 15: merged[-1] = (merged[-1][0], b)
    else: merged.append((a, b))
lines = merged; assert len(lines) == 6, lines
def label_mask(i):
    y0, y1 = lines[2 * i][0] - 6, lines[2 * i + 1][1] + 8
    seg = lab[y0:y1]; cols = np.where(seg.max(axis=0) > 40)[0]
    seg = seg[:, cols.min() - 6: cols.max() + 7]
    im = Image.fromarray(np.clip(seg / 245 * 255, 0, 255).astype(np.uint8))
    return im.resize((round(im.width * 0.92), round(im.height * 0.92)), Image.LANCZOS)

# --- overlay drawn at 2x for smooth edges
S = 2; ov = Image.new("RGBA", (W * S, W * S), (0, 0, 0, 0)); d = ImageDraw.Draw(ov)
def icon(cx, cy, kind, r=74):
    cx, cy, r = cx * S, cy * S, r * S; lw = 5 * S
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=CREAM + (255,), outline=NAVY + (255,), width=4 * S)
    if kind == "vibe":      # band with motion arcs
        d.rounded_rectangle((cx - 15*S, cy - 30*S, cx + 15*S, cy + 30*S), radius=8*S, outline=NAVY, width=lw)
        for k in (1, 2):
            off = (22 + 12 * k) * S
            d.arc((cx - off, cy - off, cx + off, cy + off), 140, 220, fill=NAVY, width=lw)
            d.arc((cx - off, cy - off, cx + off, cy + off), -40, 40, fill=NAVY, width=lw)
    elif kind == "noapp":   # phone with a slash
        d.rounded_rectangle((cx - 19*S, cy - 33*S, cx + 19*S, cy + 33*S), radius=7*S, outline=NAVY, width=lw)
        d.line((cx - 7*S, cy + 23*S, cx + 7*S, cy + 23*S), fill=NAVY, width=lw)
        d.line((cx - 36*S, cy - 36*S, cx + 36*S, cy + 36*S), fill=NAVY, width=lw)
    elif kind == "usb":     # plug and cable
        d.rounded_rectangle((cx - 17*S, cy - 10*S, cx + 17*S, cy + 22*S), radius=5*S, outline=NAVY, width=lw)
        d.rectangle((cx - 10*S, cy - 30*S, cx + 10*S, cy - 10*S), outline=NAVY, width=lw)
        d.line((cx, cy + 22*S, cx, cy + 40*S), fill=NAVY, width=lw)
def leader(x0, y0, x1, y1):
    d.line((x0 * S, y0 * S, x1 * S, y1 * S), fill=NAVY + (200,), width=3 * S)
    r = 9 * S; d.ellipse((x1 * S - r, y1 * S - r, x1 * S + r, y1 * S + r), fill=NAVY)

# positions on the 2048 photo: (icon centre, leader end on the band)
callouts = [
    ("vibe",  (360, 610),  (712, 610)),     # left, upper: band's left edge
    ("noapp", (360, 1380), (700, 1380)),    # left, lower: strap with holes
    ("usb",   (1735, 1010), (1395, 1010)),  # right: band's right edge
]
for kind, (cx, cy), (ex, ey) in callouts:
    sx = cx + 74 if ex > cx else cx - 74
    leader(sx + (10 if ex > cx else -10), cy, ex, ey)
    icon(cx, cy, kind)
ov = ov.resize((W, W), Image.LANCZOS)
out = base.convert("RGBA"); out.alpha_composite(ov)

# labels centred under each icon, navy
arr = np.asarray(out).astype(np.float32)
for i, (kind, (cx, cy), _) in enumerate(callouts):
    m = np.asarray(label_mask(i)).astype(np.float32)[:, :, None] / 255
    h, w = m.shape[:2]; x0 = int(cx - w / 2); y0 = int(cy + 74 + 28)
    reg = arr[y0:y0 + h, x0:x0 + w, :3]; arr[y0:y0 + h, x0:x0 + w, :3] = reg * (1 - m) + np.array(NAVY, np.float32) * m
Image.fromarray(arr[:, :, :3].clip(0, 255).astype(np.uint8)).save(out_p, quality=92)
print("saved", out_p)
