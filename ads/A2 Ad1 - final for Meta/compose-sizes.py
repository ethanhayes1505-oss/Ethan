import sys, os
from PIL import Image, ImageFilter
import numpy as np
bg_path, text_path, out_dir = sys.argv[1:4]
SRC = Image.open(bg_path).convert("RGB").resize((1105, 1373), Image.LANCZOS)
ALPHA = np.clip(np.asarray(Image.open(text_path).convert("RGB")).astype(np.float32).max(axis=2) / 245.0, 0, 1)
CREAM = np.array([245, 241, 234], np.float32); NAVY = np.array([14, 20, 36], np.float32)
HEAD, FOOT = (60, 320), (1244, 1300)
P = "SleepLabs-A2-Ad1-"
def L(c):
    c = c / 255.0; c = np.where(c <= 0.03928, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)
    return 0.2126 * c[..., 0] + 0.7152 * c[..., 1] + 0.0722 * c[..., 2]
def scene(W, H, y0):
    can = Image.new("RGB", (W, H)); top_img = int(round(y0 - 11.3)); can.paste(SRC, (-12, top_img))
    top, bot = max(top_img, 0), min(top_img + 1373, H); arr = np.asarray(can).astype(np.float32)
    if top > 0:
        arr[:top] = np.asarray(can.crop((0, top, W, 2 * top)).transpose(Image.FLIP_TOP_BOTTOM).filter(ImageFilter.GaussianBlur(28))).astype(np.float32)
    if bot < H:
        h = H - bot; arr[bot:] = np.asarray(can.crop((0, bot - h, W, bot)).transpose(Image.FLIP_TOP_BOTTOM).filter(ImageFilter.GaussianBlur(28))).astype(np.float32)
    img = Image.fromarray(arr.clip(0, 255).astype(np.uint8)); bl = np.asarray(img.filter(ImageFilter.GaussianBlur(22))).astype(np.float32); res = np.asarray(img).astype(np.float32)
    for seam in [top, bot]:
        if 0 < seam < H:
            for y in range(max(0, seam - 120), min(H, seam + 120)):
                t = max(0.0, 1 - abs(y - seam) / 120); res[y] = res[y] * (1 - t) + bl[y] * t
    return res
def grad(a, y0, y1, a0, a1):
    for y in range(max(0, min(y0, y1)), min(a.shape[0], max(y0, y1))):
        t = (y - y0) / (y1 - y0); k = a0 + (a1 - a0) * t; a[y] = a[y] * (1 - k) + NAVY * k
    return a
def put(a, rows, dx, dy, scale=1.0, cols=(0, 1080)):
    m = ALPHA[rows[0]:rows[1], cols[0]:cols[1]]
    if scale != 1.0:
        im = Image.fromarray((m * 255).astype(np.uint8)); im = im.resize((int(im.width * scale), int(im.height * scale)), Image.LANCZOS); m = np.asarray(im).astype(np.float32) / 255
    m = m[:, :, None]; h, w = m.shape[:2]; region = a[dy:dy + h, dx:dx + w]
    bgp = region[m[:, :, 0] > 0.25]
    if len(bgp): print(f"  text {rows} @y{dy}: worst contrast {((L(CREAM) + .05) / (np.percentile(L(bgp), 99.5) + .05)):.1f}")
    a[dy:dy + h, dx:dx + w] = region * (1 - m) + CREAM * m; return a
def save(a, n): Image.fromarray(a.clip(0, 255).astype(np.uint8)).save(os.path.join(out_dir, P + n), optimize=True); print("^", n)
cfg = dict(arg.split("=") for arg in sys.argv[4:])
T45, T916, T11 = float(cfg.get("t45", .55)), float(cfg.get("t916", .6)), float(cfg.get("t11", .6))
a = scene(1080, 1350, 0); a = grad(a, 0, 560, T45, 0.0); a = grad(a, 1160, 1240, 0.0, 0.55); a = grad(a, 1240, 1350, 0.55, 0.78)
a = put(a, HEAD, 0, 30); a = put(a, FOOT, 0, FOOT[0]); save(a, "feed-4x5-1080x1350.png")
y0 = 285; a = scene(1080, 1920, y0); a = grad(a, 0, 920, T916, 0.0); a = grad(a, 1440, 1490, 0.0, 0.62); a = grad(a, 1490, 1920, 0.62, 0.80)
a = put(a, HEAD, 0, 280); a = put(a, FOOT, 0, 1492); save(a, "stories-reels-9x16-1080x1920.png")
a = scene(1080, 1080, 40); a = grad(a, 0, 420, T11, 0.0); a = grad(a, 930, 1000, 0.0, 0.55); a = grad(a, 1000, 1080, 0.55, 0.78)
a = put(a, HEAD, 0, 14); a = put(a, FOOT, 0, 1012); save(a, "square-1x1-1080x1080.png")
W, H = 1200, 628; can = np.zeros((H, W, 3), np.float32) + NAVY
frame = Image.fromarray(scene(1080, 1350, 0).clip(0, 255).astype(np.uint8))
ph = np.asarray(frame.crop((90, 200, 1080, 1190)).resize((640, 640), Image.LANCZOS)).astype(np.float32)[6:634]
can[:, W - 640:] = ph
for i in range(170): t = i / 170; can[:, W - 640 + i] = can[:, W - 640 + i] * t + NAVY * (1 - t)
can = put(can, (76, 248), 48 - 42, 150, scale=0.70, cols=(60, 780)); can = put(can, (262, 306), 52 - 42, 286, scale=0.64, cols=(60, 860)); can = put(can, (1250, 1296), 52 - 34, 540, scale=0.56, cols=(60, 1020))
save(can, "horizontal-1.91x1-1200x628.png")
