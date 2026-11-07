import sys
from PIL import Image
import numpy as np
bg_path, text_path, out = sys.argv[1:4]
src = Image.open(bg_path).convert("RGB").resize((1105, 1373), Image.LANCZOS)
# same framing as the approved 4:5 (Canva offset -12.5, -11.3) -> crop square around her face + band + hand
frame = Image.new("RGB", (1080, 1350)); frame.paste(src, (-12, -11))
photo = frame.crop((150, 290, 1080, 1220)).resize((640, 640), Image.LANCZOS)   # 930x930 -> 640
W, H = 1200, 628
NAVY = np.array([18, 24, 40], np.float32)
canvas = np.zeros((H, W, 3), np.float32) + NAVY
ph = np.asarray(photo).astype(np.float32)[6:634]  # 628 tall
x0 = W - 640
canvas[:, x0:] = ph
# soft blend of photo's left edge into the panel
for i in range(160):
    t = i / 160
    canvas[:, x0 + i] = canvas[:, x0 + i] * t + NAVY * (1 - t)
tl = np.asarray(Image.open(text_path).convert("RGB")).astype(np.float32)
alpha = np.clip(tl.max(axis=2) / 245.0, 0, 1)
CREAM = np.array([245, 241, 234], np.float32)
def place(rows, cols, scale, dx, dy):
    a = Image.fromarray((alpha[rows[0]:rows[1], cols[0]:cols[1]] * 255).astype(np.uint8))
    a = a.resize((int(a.width * scale), int(a.height * scale)), Image.LANCZOS)
    a = np.asarray(a).astype(np.float32)[:, :, None] / 255
    h, w = a.shape[:2]
    reg = canvas[dy:dy + h, dx:dx + w]
    canvas[dy:dy + h, dx:dx + w] = reg * (1 - a) + CREAM * a
place((76, 248), (60, 780), 0.70, 48, 150)    # headline lines
place((262, 306), (60, 860), 0.64, 52, 286)   # what-it-is line
place((1250, 1296), (60, 1020), 0.56, 52, 540)  # brand/price/returns
Image.fromarray(canvas.clip(0, 255).astype(np.uint8)).save(out, optimize=True)
print("ok")
