import sys, os
from PIL import Image, ImageFilter
import numpy as np
left_p, right_p, text_p, out_dir = sys.argv[1:5]
LEFT, RIGHT = Image.open(left_p).convert("RGB"), Image.open(right_p).convert("RGB")
ALPHA = np.clip(np.asarray(Image.open(text_p).convert("RGB")).astype(np.float32).max(axis=2) / 245.0, 0, 1)
CREAM = np.array([245, 241, 234], np.float32); NAVY = np.array([14, 20, 36], np.float32)
CAP_L, CAP_R, FOOT = (76, 208), (416, 548), (1244, 1300)
P = "SleepLabs-A2-Ad2-"
def L(c):
    c = c / 255.0; c = np.where(c <= 0.03928, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)
    return 0.2126 * c[..., 0] + 0.7152 * c[..., 1] + 0.0722 * c[..., 2]
def panel(src, pw, ph, z, fx, fy):
    s = ph / src.height * z
    if src.width * s < pw: s = pw / src.width
    im = src.resize((int(src.width * s), int(src.height * s)), Image.LANCZOS)
    cx, cy = int(fx * im.width), int(fy * im.height)
    x0 = min(max(cx - pw // 2, 0), im.width - pw); y0 = min(max(cy - ph // 2, 0), im.height - ph)
    return np.asarray(im.crop((x0, y0, x0 + pw, y0 + ph))).astype(np.float32)
def grad(a, y0, y1, a0, a1):
    for y in range(max(0, min(y0, y1)), min(a.shape[0], max(y0, y1))):
        t = (y - y0) / (y1 - y0); k = a0 + (a1 - a0) * t; a[y] = a[y] * (1 - k) + NAVY * k
    return a
def put(a, rows, cols, dx, dy, scale=1.0):
    m = ALPHA[rows[0]:rows[1], cols[0]:cols[1]]
    if scale != 1.0:
        im = Image.fromarray((m * 255).astype(np.uint8)); im = im.resize((int(im.width * scale), int(im.height * scale)), Image.LANCZOS); m = np.asarray(im).astype(np.float32) / 255
    m = m[:, :, None]; h, w = m.shape[:2]; region = a[dy:dy + h, dx:dx + w]; bgp = region[m[:, :, 0] > 0.25]
    if len(bgp): print(f"  text {rows} @({dx},{dy}): worst contrast {((L(CREAM) + .05) / (np.percentile(L(bgp), 99.5) + .05)):.1f}")
    a[dy:dy + h, dx:dx + w] = region * (1 - m) + CREAM * m; return a
def divider(a, x, y0, y1):
    a[y0:y1, x - 1:x + 1] = a[y0:y1, x - 1:x + 1] * 0.6 + CREAM * 0.4; return a
def save(a, n): Image.fromarray(a.clip(0, 255).astype(np.uint8)).save(os.path.join(out_dir, P + n), optimize=True); print("^", n)
def comparison(W, H, top, ph, lz, rz, cap_y, cap_scale, foot_y, foot_scale, pad, rfx=0.40, rfy=0.60, topk=0.62):
    a = np.zeros((H, W, 3), np.float32) + NAVY; pw = W // 2
    a[top:top + ph, :pw] = panel(LEFT, pw, ph, lz, 0.36, 0.50)
    a[top:top + ph, pw:] = panel(RIGHT, W - pw, ph, rz, rfx, rfy)
    if top > 0: a = grad(a, top, top + 140, 1.0, 0.0)
    if top + ph < H: a = grad(a, top + ph - 140, top + ph, 0.0, 1.0)
    a = grad(a, 0, cap_y + int(330 * cap_scale), topk, 0.0)
    a = grad(a, foot_y - 120, foot_y - 10, 0.0, 0.55); a = grad(a, foot_y - 10, H, 0.55, 0.8)
    a = divider(a, pw, top + 30, top + ph - 30)
    a = put(a, CAP_L, (40, 560), pad, cap_y, cap_scale)
    a = put(a, CAP_R, (40, 560), pw + pad, cap_y, cap_scale)
    a = put(a, FOOT, (60, 1020), pad + 12, foot_y, foot_scale)
    return a
save(comparison(1080, 1350, 0, 1350, 1.0, 1.35, 56, 0.86, 1258, 1.0, 34), "feed-4x5-1080x1350.png")
save(comparison(1080, 1920, 240, 1440, 1.0, 1.35, 300, 0.86, 1478, 1.0, 34), "stories-reels-9x16-1080x1920.png")
save(comparison(1080, 1080, 0, 1080, 1.0, 1.35, 40, 0.8, 1012, 1.0, 30), "square-1x1-1080x1080.png")
save(comparison(1200, 628, 0, 628, 1.75, 2.1, 30, 0.62, 574, 0.6, 22, rfx=0.40, rfy=0.58, topk=0.80), "horizontal-1.91x1-1200x628.png")
