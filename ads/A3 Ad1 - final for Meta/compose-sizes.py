# Angle 3 Ad 1 (gift 2-pack): light, warm layout. Ink text from the Canva text layer on a cream wash.
# usage: python3 compose-sizes.py <photo.png> <canva-text-layer.png> <out_dir>
import sys, os
from PIL import Image, ImageFilter
import numpy as np
photo_p, text_p, out_dir = sys.argv[1:4]
PHOTO = Image.open(photo_p).convert("RGB")
ALPHA = np.clip(np.asarray(Image.open(text_p).convert("RGB")).astype(np.float32).max(axis=2) / 245.0, 0, 1)
INK = np.array([31, 30, 40], np.float32); CREAM = np.array([244, 238, 229], np.float32)
HEAD, SUB, FOOT = (90, 245), (266, 304), (1254, 1294)   # rows in the 1080x1350 Canva layer
P = "SleepLabs-A3-Ad1-"

def L(c):
    c = c / 255.0; c = np.where(c <= 0.03928, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)
    return 0.2126 * c[..., 0] + 0.7152 * c[..., 1] + 0.0722 * c[..., 2]

def fit(src, w, h, fx=0.5, fy=0.5, zoom=1.0):
    s = max(w / src.width, h / src.height) * zoom
    im = src.resize((round(src.width * s), round(src.height * s)), Image.LANCZOS)
    cx, cy = int(fx * im.width), int(fy * im.height)
    x0 = min(max(cx - w // 2, 0), im.width - w); y0 = min(max(cy - h // 2, 0), im.height - h)
    return np.asarray(im.crop((x0, y0, x0 + w, y0 + h))).astype(np.float32)

def wash(a, y0, y1, k0, k1):
    """Blend toward cream between rows y0..y1, strength k0 -> k1 (smoothstep)."""
    for y in range(max(0, min(y0, y1)), min(a.shape[0], max(y0, y1))):
        t = (y - y0) / (y1 - y0); t = t * t * (3 - 2 * t); k = k0 + (k1 - k0) * t
        a[y] = a[y] * (1 - k) + CREAM * k
    return a

def put(a, rows, dx, dy, scale=1.0, cols=(40, 1060)):
    m = ALPHA[rows[0]:rows[1], cols[0]:cols[1]]
    if scale != 1.0:
        im = Image.fromarray((m * 255).astype(np.uint8))
        im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
        m = np.asarray(im).astype(np.float32) / 255
    m = m[:, :, None]; h, w = m.shape[:2]
    w = min(w, a.shape[1] - dx); m = m[:, :w]
    region = a[dy:dy + h, dx:dx + w]; bg = region[m[:, :, 0] > 0.25]
    if len(bg):
        worst = (np.percentile(L(bg), 0.5) + .05) / (L(INK) + .05)
        print(f"  text rows {rows} at ({dx},{dy}): worst-case contrast {worst:.1f}:1")
    a[dy:dy + h, dx:dx + w] = region * (1 - m) + INK * m
    return a

def extend(img, W, H, top):
    """Place img (W wide) at row `top` on an H-tall canvas; fill the rest with a mirrored, blurred copy."""
    h = img.shape[0]; a = np.zeros((H, W, 3), np.float32)
    a[top:top + h] = img
    if top > 0:
        m = np.flipud(img[:top]); a[:top] = np.asarray(Image.fromarray(m.astype(np.uint8)).filter(ImageFilter.GaussianBlur(40))).astype(np.float32)
    if top + h < H:
        r = H - top - h; m = np.flipud(img[-r:]); a[top + h:] = np.asarray(Image.fromarray(m.astype(np.uint8)).filter(ImageFilter.GaussianBlur(40))).astype(np.float32)
    return a

def save(a, n):
    Image.fromarray(a.clip(0, 255).astype(np.uint8)).save(os.path.join(out_dir, P + n), optimize=True); print("saved", n)

# ---- layouts ----
SRC = PHOTO
# Feed 4:5 (1080x1350): straight crop, cream wash behind headline and footer.
a = fit(SRC, 1080, 1350, 0.5, 0.5)
a = wash(a, 0, 400, 0.72, 0.0); a = wash(a, 1190, 1350, 0.0, 0.80)
a = put(a, HEAD, 34, HEAD[0]); a = put(a, SUB, 34, SUB[0]); a = put(a, FOOT, 34, FOOT[0])
save(a, "feed-4x5-1080x1350.png")

# Stories/Reels 9:16 (1080x1920): photo runs to the bottom edge; linen extended above it.
# All three text items sit together at the top, inside the safe zone (y 269..1536).
img = fit(SRC, 1080, 1350, 0.5, 0.5)
a = extend(img, 1080, 1920, 570)
a = wash(a, 0, 900, 0.80, 0.0)
y = 300
a = put(a, HEAD, 34, y); a = put(a, SUB, 34, y + (SUB[0] - HEAD[0])); a = put(a, FOOT, 34, y + (SUB[0] - HEAD[0]) + 62)
save(a, "stories-reels-9x16-1080x1920.png")

# Square 1:1 (1080x1080): crop lower so the box stays whole; smaller type.
a = fit(SRC, 1080, 1080, 0.5, 0.42, zoom=1.0)
a = wash(a, 0, 330, 0.78, 0.0); a = wash(a, 950, 1080, 0.0, 0.75)
s = 0.86
a = put(a, HEAD, 30, 44, s); a = put(a, SUB, 30, 44 + round((SUB[0] - HEAD[0]) * s), s); a = put(a, FOOT, 30, 1028, s)
save(a, "square-1x1-1080x1080.png")

# Horizontal 1.91:1 (1200x628): cream text panel on the left, photo crop on the right.
W, H, PW = 1200, 628, 660
a = np.zeros((H, W, 3), np.float32) + CREAM
photo = fit(SRC, W - PW + 120, H, 0.52, 0.55, zoom=1.15)
a[:, PW - 120:] = photo
for x in range(PW - 120, PW + 40):   # soft blend from panel into the photo
    t = (x - (PW - 120)) / 160; t = t * t * (3 - 2 * t); a[:, x] = CREAM * (1 - t) + a[:, x] * t
s = 0.62
a = put(a, HEAD, 40, 150, s, cols=(40, 560)); a = put(a, SUB, 40, 150 + round((SUB[0] - HEAD[0]) * s), s, cols=(40, 900))
a = put(a, FOOT, 40, 560, 0.62)
save(a, "horizontal-1.91x1-1200x628.png")
