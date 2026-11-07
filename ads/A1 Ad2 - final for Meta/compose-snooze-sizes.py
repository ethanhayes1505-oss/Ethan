import sys, os
from PIL import Image, ImageFilter
import numpy as np
bg_path, text_path, out_dir = sys.argv[1:4]
SRC = Image.open(bg_path).convert("RGB").resize((1080, 1340), Image.LANCZOS)
TL = np.asarray(Image.open(text_path).convert("RGB")).astype(np.float32)
ALPHA = np.clip(TL.max(axis=2) / 245.0, 0, 1)
CREAM = np.array([245, 241, 234], np.float32)
NAVY = np.array([14, 20, 36], np.float32)
TIMES, HEAD, FOOT = (62, 392), (412, 642), (1248, 1298)

def scene(W, H, shift, src=SRC):
    """Photo at vertical offset `shift`; empty bands filled with a mirrored, blurred continuation."""
    sw, sh = src.size
    can = Image.new("RGB", (W, H)); x = (W - sw) // 2
    can.paste(src, (x, shift))
    top, bot = max(shift, 0), min(shift + sh, H)
    out = np.asarray(can).astype(np.float32)
    if top > 0:
        strip = can.crop((0, top, W, top + top)).transpose(Image.FLIP_TOP_BOTTOM).filter(ImageFilter.GaussianBlur(30))
        out[:top] = np.asarray(strip).astype(np.float32)[:top]
    if bot < H:
        h = H - bot
        strip = can.crop((0, bot - h, W, bot)).transpose(Image.FLIP_TOP_BOTTOM).filter(ImageFilter.GaussianBlur(30))
        out[bot:] = np.asarray(strip).astype(np.float32)[:h]
    img = Image.fromarray(out.clip(0, 255).astype(np.uint8))
    blurred = np.asarray(img.filter(ImageFilter.GaussianBlur(24))).astype(np.float32)
    res = np.asarray(img).astype(np.float32)
    for seam, sign in [(top, -1), (bot, 1)]:
        if 0 < seam < H:
            for y in range(max(0, seam - 120), min(H, seam + 120)):
                t = max(0.0, 1 - abs(y - seam) / 120)
                res[y] = res[y] * (1 - t) + blurred[y] * t
    return res

def grad(a, y0, y1, a0, a1):
    for y in range(max(0, min(y0, y1)), min(a.shape[0], max(y0, y1))):
        t = (y - y0) / (y1 - y0); k = a0 + (a1 - a0) * t
        a[y] = a[y] * (1 - k) + NAVY * k
    return a

def put(a, rows, dx, dy, scale=1.0, opacity=1.0, cols=(0, 1080)):
    m = ALPHA[rows[0]:rows[1], cols[0]:cols[1]]
    if scale != 1.0:
        im = Image.fromarray((m * 255).astype(np.uint8))
        im = im.resize((int(im.width * scale), int(im.height * scale)), Image.LANCZOS)
        m = np.asarray(im).astype(np.float32) / 255
    m = m[:, :, None] * opacity
    h, w = m.shape[:2]
    bgp = a[dy:dy + h, dx:dx + w][m[:, :, 0] > 0.25 * opacity]
    if len(bgp):
        def L(c):
            c = c / 255.0; c = np.where(c <= 0.03928, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)
            return 0.2126 * c[..., 0] + 0.7152 * c[..., 1] + 0.0722 * c[..., 2]
        txt = L(CREAM * opacity + bgp.mean(0) * (1 - opacity)) if opacity < 1 else L(CREAM)
        worst = np.percentile(L(bgp), 99.5)
        print(f"  {rows} at y{dy}: contrast worst {((txt + .05) / (worst + .05)):.1f}")
    a[dy:dy + h, dx:dx + w] = a[dy:dy + h, dx:dx + w] * (1 - m) + CREAM * m
    return a

def save(a, name):
    Image.fromarray(a.clip(0, 255).astype(np.uint8)).save(os.path.join(out_dir, name), optimize=True)

TIME_OP = 0.55
# 4:5 feed
a = scene(1080, 1350, 160)
a = grad(a, 0, 780, 0.55, 0.0); a = grad(a, 1170, 1240, 0.0, 0.55); a = grad(a, 1240, 1350, 0.55, 0.78)
a = put(a, TIMES, 0, TIMES[0], opacity=TIME_OP); a = put(a, HEAD, 0, HEAD[0]); a = put(a, FOOT, 0, FOOT[0])
print("^ above:"); save(a, "SleepLabs-A1-Ad2-feed-4x5-1080x1350.png")
# 9:16 stories/reels: text inside safe zone (269..1536)
a = scene(1080, 1920, 413)
a = grad(a, 0, 1010, 0.60, 0.0); a = grad(a, 1440, 1490, 0.0, 0.62); a = grad(a, 1490, 1920, 0.62, 0.80)
a = put(a, TIMES, 0, 300, opacity=TIME_OP); a = put(a, HEAD, 0, 300 + (HEAD[0] - TIMES[0])); a = put(a, FOOT, 0, 1492)
print("^ above:"); save(a, "SleepLabs-A1-Ad2-stories-reels-9x16-1080x1920.png")
# 1:1 square: text scaled 0.8 above the band
a = scene(1080, 1080, -170)
a = grad(a, 0, 600, 0.74, 0.0); a = grad(a, 930, 1000, 0.0, 0.55); a = grad(a, 1000, 1080, 0.55, 0.75)
s = 0.8
a = put(a, TIMES, 14, 44, scale=s, opacity=TIME_OP)
a = put(a, HEAD, 14, 44 + int((HEAD[0] - TIMES[0]) * s), scale=s)
a = put(a, FOOT, 0, 1010)
print("^ above:"); save(a, "SleepLabs-A1-Ad2-square-1x1-1080x1080.png")
# 1.91:1 horizontal: navy text panel left, photo right
W, H = 1200, 628
can = np.zeros((H, W, 3), np.float32) + NAVY
photo = Image.fromarray(scene(1080, 1340, 0).clip(0, 255).astype(np.uint8)).crop((60, 520, 1080, 1180)).resize((640, 414 if False else 640), Image.LANCZOS)
ph = np.asarray(photo).astype(np.float32)[6:634]
can[:, W - 640:] = ph
for i in range(170):
    t = i / 170; can[:, W - 640 + i] = can[:, W - 640 + i] * t + NAVY * (1 - t)
s = 0.66
can = put(can, TIMES, 30, 40, scale=s, opacity=TIME_OP, cols=(0, 640))
can = put(can, HEAD, 30, 40 + int((HEAD[0] - TIMES[0]) * s), scale=s, cols=(0, 900))
can = put(can, FOOT, 34, 560, scale=0.56, cols=(60, 1020))
print("^ above:"); save(can, "SleepLabs-A1-Ad2-horizontal-1.91x1-1200x628.png")
print("ok")
