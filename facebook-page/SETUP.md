# SleepLabs Facebook Page: setup

## 0. Who owns the Page (read first)
A Page is created and run from a personal Facebook profile. The Page is only as safe as that profile.

- Use an **existing, real profile in the owner's real name** that has not been disabled.
- **Do not create a new profile** to get round a disabled one. Meta's terms forbid it, Meta links accounts by device, phone, email, payment card and network, and the new profile gets disabled, often taking the Page, ad account and pixel with it. That is what happened on the second account.
- Don't buy, rent or borrow someone else's account to run it.
- If someone else who genuinely works on SleepLabs owns the Page from their own long-standing profile, that is fine. They are the admin and it is their account.

## 1. Create the Page
facebook.com/pages/create

| Field | What to put |
|---|---|
| Page name | `SleepLabs` |
| Category | `Product/service` (add `Shopping & retail` as a second if offered) |
| Bio | `The vibrating alarm only the wearer feels. Wake up at your time, not theirs. Free US shipping.` (96 characters, limit is 101) |

## 2. Photos
| Slot | File |
|---|---|
| Profile picture | `../instagram/SleepLabs-profile-picture-1080.png` |
| Cover photo | `SleepLabs-facebook-cover-1640x624.jpg` |

The cover is cropped so the band (05:30) and the sleeping partner stay visible on phones, where Facebook trims the sides. The bottom-left corner sits behind the profile picture on desktop, so nothing important is there.

## 3. Details (Edit details / Contact info)
| Field | What to put |
|---|---|
| Website | `https://sleeplabs.shop` |
| Email | A business address is better than a personal Gmail. If your domain is managed in Shopify, you can set up forwarding from something like `support@sleeplabs.shop` in Shopify → Settings → Domains. Use the same address on the website. |
| Phone | Leave empty unless you'll answer it |
| Location / hours | Leave empty (online-only shop) |
| Username | `sleeplabs.shop` if free, otherwise `sleeplabsshop` |
| Action button | **Shop now** → `https://sleeplabs.shop/products/sleeplabs-silent-wake-band` |

## 4. First posts
Use the six images in `../instagram/posts/` with the captions in `../instagram/SETUP.md`. Space them out over a week or two rather than posting all six in one go. On Facebook, add the product link as the last line of each caption.

## 5. Connect it to the business side
1. business.facebook.com → **Business settings → Accounts → Pages → Add** → choose SleepLabs.
2. Connect the Page to the Shopify ad account and the pixel (Data sources).
3. **Brand safety → Domains** → add `sleeplabs.shop` and verify it with the meta-tag method (the tag goes into the theme, which can be done for you).
4. Turn on two-factor authentication for every admin: **Settings → Accounts Center → Password and security**.

## 6. Things Meta checks before it trusts a new advertiser
Meta reviews the website ads point to, not just the ads. Current gaps on sleeplabs.shop:

- [ ] **Refund, shipping and terms pages are missing** (only the privacy policy exists). Stores without them often get ads rejected or the ad account restricted.
- [ ] **No contact page details beyond a personal Gmail.**
- [ ] **Product description is empty.**
- [ ] **Product-page reviews.** The 9 "verified buyer" reviews are on a store with no orders yet. Meta's advertising standards and the US FTC rule on fake reviews (in force since October 2024) both treat invented reviews as a violation. This is the biggest single risk on the site.
- [ ] **Ad claims.** Keep "won't wake your partner/baby" claims until the quiet-room test is done; no health or sleep-medical claims; no before/after.

## 7. Don't
- Don't make another personal profile.
- Don't run ads from the Page in its first days; post a few times first.
- Don't let several people log in to one profile; add them as Page admins with their own accounts instead.
