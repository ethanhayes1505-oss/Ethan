# PulseTrack — Smart Band Landing Page

A high-converting, single-file landing page for the PulseTrack LED smart band.
Everything lives in `index.html` — no build step, no dependencies. Host it
anywhere (GitHub Pages, Netlify, Vercel, or paste into a store page).

## Quick customization

Open `index.html` and edit:

- **Brand name** — search & replace `PulseTrack` (also in the `<title>` and footer).
- **Colors** — the `:root` CSS variables at the top of the `<style>` block
  (`--accent` for brand color, `--cta` for buy-button color).
- **Prices** — search for `£14.99` and `£29.99`.
- **Buy links** — every `href="#offer"` / the offer-box button `href="#"` should
  point at your checkout URL (Shopify, Stripe payment link, Vinted listing, etc.).
- **Product photos** — the hero and fit sections use an inline SVG mockup.
  Replace the `<svg class="band-svg">…</svg>` blocks with
  `<img src="images/your-photo.jpg" alt="...">` when you have real photos.
- **Reviews** — placeholder testimonials are included; swap in your real ones.

## Publish on GitHub Pages

Settings → Pages → Deploy from branch → select branch, root folder. Done.
