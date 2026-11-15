import os, sys
from PIL import Image, ImageDraw, ImageFont
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
SERIF = "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf"
SERIF_I = "/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf"
SANS = "/usr/share/fonts/truetype/freefont/FreeSans.ttf"
CREAM = (245, 241, 234)
NAVY = (14, 20, 36)
FOOT = "SleepLabs  ·  Silent Wake Band  ·  $39.99  ·  Free US shipping  ·  30-day returns"

# name: (base file, line1, line2 italic, sub, text mode, top gradient strength)
ADS = {
    "N1-sleeps-through": ("b1.png", "Slept through the phone.", "Not this.", "The vibrating alarm you wear to bed.", "light", 0.45),
    "N2-stop-oversleeping": ("b2.png", "Phones are easy to ignore.", "Your wrist isn't.", "The vibrating alarm you wear to bed.", "dark", 0.0),
    "N3-quiet-mornings": ("b3.png", "Quiet mornings,", "for everyone.", "A vibrating alarm only the wearer feels.", "light", 0.55),
    "N4-early-shift": ("b4.png", "Early shift.", "Quiet house.", "The vibrating alarm only the wearer feels.", "light", 0.55),
    "N5-phone-in-kitchen": ("b5.png", "Let your phone sleep", "in the kitchen.", "The vibrating alarm you wear to bed.", "light", 0.65),
    "N6-shared-rooms": ("b6.png", "5 a.m. flight.", "Roommate still asleep.", "Wake without waking anyone.", "light", 0.5),
}


def grad(arr, y0, y1, a0, a1, color):
    c = np.array(color, np.float32)
    for y in range(max(0, min(y0, y1)), min(arr.shape[0], max(y0, y1))):
        t = (y - y0) / (y1 - y0)
        k = a0 + (a1 - a0) * t
        arr[y] = arr[y] * (1 - k) + c * k
    return arr


def build(name, W=1080, H=1350):
    base, l1, l2, sub, mode, top = ADS[name]
    im = Image.open(os.path.join(HERE, "base", base)).convert("RGB").resize((W, H), Image.LANCZOS)
    a = np.asarray(im).astype(np.float32)
    if mode == "light":
        a = grad(a, 0, 520, top, 0.0, NAVY)
    else:
        a = grad(a, 0, 520, 0.38, 0.0, (255, 250, 242))
    a = grad(a, 1180, 1350, 0.0, 0.72, NAVY)
    im = Image.fromarray(a.clip(0, 255).astype(np.uint8))
    d = ImageDraw.Draw(im)
    fg = CREAM if mode == "light" else (30, 28, 34)
    f1, f2, fs = ImageFont.truetype(SERIF, 66), ImageFont.truetype(SERIF_I, 66), ImageFont.truetype(SANS, 31)
    ff = ImageFont.truetype(SANS, 28)
    d.text((70, 78), l1, font=f1, fill=fg)
    d.text((70, 78 + 78), l2, font=f2, fill=fg)
    d.text((70, 78 + 78 + 96), sub, font=fs, fill=fg)
    d.text((70, 1268), FOOT, font=ff, fill=CREAM)
    out = os.path.join(HERE, "out")
    os.makedirs(out, exist_ok=True)
    p = os.path.join(out, f"SleepLabs-{name}-feed-4x5-1080x1350.png")
    im.save(p, optimize=True)
    print("saved", p)


if __name__ == "__main__":
    for n in (sys.argv[1:] or ADS):
        build(n)
