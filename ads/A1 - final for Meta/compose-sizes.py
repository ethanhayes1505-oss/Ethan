import sys
from PIL import Image, ImageFilter, ImageChops
import numpy as np
bg_path, text_path, out_dir = sys.argv[1], sys.argv[2], sys.argv[3]
src = Image.open(bg_path).convert("RGB").resize((1105, 1373), Image.LANCZOS)
tl = np.asarray(Image.open(text_path).convert("RGB")).astype(np.float32)
alpha_full = np.clip(tl.max(axis=2) / 245.0, 0, 1)  # cream text on black -> alpha
CREAM = np.array([245, 241, 234], np.float32)
NAVY = np.array([14, 20, 36], np.float32)

def scene(W, H, y0):
    """Place the approved image (Canva framing) at y offset y0; extend edges by mirrored blur."""
    canvas = Image.new("RGB", (W, H))
    top_img = int(round(y0 - 11.338))
    canvas.paste(src, (-12, top_img))
    arr = np.asarray(canvas).astype(np.float32)
    img_top, img_bot = max(top_img, 0), min(top_img + 1373, H)
    if img_top > 0:  # top extension
        strip = canvas.crop((0, img_top, W, img_top + img_top)).transpose(Image.FLIP_TOP_BOTTOM)
        strip = strip.filter(ImageFilter.GaussianBlur(28))
        arr[0:img_top] = np.asarray(strip).astype(np.float32)
    if img_bot < H:  # bottom extension
        h = H - img_bot
        strip = canvas.crop((0, img_bot - h, W, img_bot)).transpose(Image.FLIP_TOP_BOTTOM)
        strip = strip.filter(ImageFilter.GaussianBlur(28))
        arr[img_bot:H] = np.asarray(strip).astype(np.float32)
    # soften seams
    out = Image.fromarray(arr.clip(0, 255).astype(np.uint8))
    for seam in [img_top, img_bot]:
        if 0 < seam < H:
            band = out.crop((0, seam - 30, W, seam + 30)).filter(ImageFilter.GaussianBlur(10))
            out.paste(band, (0, seam - 30))
    res = np.asarray(out).astype(np.float32)
    if img_bot < H:  # progressive blur so sharp linen melts into the extension
        blurred = np.asarray(out.filter(ImageFilter.GaussianBlur(22))).astype(np.float32)
        r0, r1 = img_bot - 170, img_bot + 20
        for y in range(max(r0, 0), H):
            t = min(max((y - r0) / (r1 - r0), 0), 1)
            res[y] = res[y] * (1 - t) + blurred[y] * t
    return res

def grad(arr, y_start, y_end, a_start, a_end):
    H = arr.shape[0]
    for y in range(max(0, min(y_start, y_end)), min(H, max(y_start, y_end))):
        t = (y - y_start) / (y_end - y_start)
        a = a_start + (a_end - a_start) * t
        arr[y] = arr[y] * (1 - a) + NAVY * a
    return arr

def put_text(arr, src_rows, dst_y):
    a = alpha_full[src_rows[0]:src_rows[1], :, None]
    h = a.shape[0]
    region = arr[dst_y:dst_y + h]
    arr[dst_y:dst_y + h] = region * (1 - a) + CREAM * a
    return arr

HEAD = (60, 320)      # headline + subline rows in the 4:5 text layer
FOOT = (1244, 1300)   # bottom brand/price line rows

# 9:16 story/reels 1080x1920: image centred; text inside Meta safe zones (top 14%, bottom 20% covered by UI)
y0 = 285
a = scene(1080, 1920, y0)
a = grad(a, 0, 700, 0.55, 0.0)
a = grad(a, 1335, 1440, 0.0, 0.50)
a[1440:1500] = a[1440:1500] * 0.5 + np.array([14,20,36],np.float32) * 0.5
a = grad(a, 1500, 1920, 0.5, 0.72)
a[1500:1920] = a[1500:1920]  # keep
a = put_text(a, HEAD, y0 + HEAD[0])           # headline top ~345 (> 269 safe)
a = put_text(a, FOOT, 1430)                    # footer ~1442-1475 (< 1536 safe)
Image.fromarray(a.clip(0, 255).astype(np.uint8)).save(f"{out_dir}/SleepLabs-A1-stories-reels-9x16-1080x1920.png", optimize=True)

# 1:1 square 1080x1080: image shifted up 110 so band stays central
y0 = -110
a = scene(1080, 1080, y0)
a = grad(a, 0, 520, 0.50, 0.0)
a = grad(a, 905, 1080, 0.0, 0.66)
a = put_text(a, HEAD, 56)
a = put_text(a, FOOT, 1000)
Image.fromarray(a.clip(0, 255).astype(np.uint8)).save(f"{out_dir}/SleepLabs-A1-square-1x1-1080x1080.png", optimize=True)
print("ok")
