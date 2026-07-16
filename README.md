# Your Store — high-converting storefront

A fast, mobile-first, one-page storefront built for conversion:
sticky CTA header, urgency announcement bar, trust badges, discount tags,
social proof, FAQ (objection handling), and an email-capture block.

## Add your products (the only file you edit)

Open **`js/products.js`**:

1. **`PRODUCTS`** — one block per item. Set the name, price, old price
   (for the strikethrough discount), photo path, badge (e.g. "Only 1 left"),
   condition, size, and the **`link`** — paste your Vinted/Depop/eBay listing
   URL or a PayPal/Stripe payment link, and the Buy Now button will send
   buyers straight there.
2. **`SITE`** — your store name, headline, announcement bar text, and your
   Instagram/Vinted/contact links.

## Add photos

Drop your product photos into an `images/` folder, then set
`image: "images/your-photo.jpg"` on the product. Square photos look best.

## Change the look

All colours live at the top of `css/style.css` (`:root` block). Change
`--accent` to instantly re-theme buttons and highlights.

## Run it

It's a static site — just open `index.html` in a browser, or host it free
on GitHub Pages / Netlify / Vercel (no build step needed).

## Email capture

The signup form currently shows a success message only. To collect real
emails, connect it to Mailchimp, ConvertKit, or a Formspree endpoint.
