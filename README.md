# Single-Product E-Commerce Website

A simple, modern one-product store built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

## Folder structure

```
├── index.html      # Main page (hero, benefits, product, reviews, FAQ, footer)
├── checkout.html   # Checkout page (form + order summary)
├── css/
│   └── style.css   # All styling (colors are variables at the top)
└── js/
    └── script.js   # Cart logic, FAQ accordion, mobile menu, checkout form
```

## How to open / preview

Just double-click `index.html` — it opens in your browser and everything works (the cart uses your browser's localStorage, so it persists between pages and reloads).

For a nicer local preview (optional), run one of these from this folder and open http://localhost:8000:

```
python -m http.server 8000
```

or, if you have Node.js:

```
npx serve .
```

## Filling in your product

1. **Product name & price:** open `js/script.js` and edit the `PRODUCT` object at the very top (name and price). This automatically updates the product section, the cart drawer, and the checkout summary.
2. **All other text:** open `index.html` and `checkout.html` and replace anything written in CAPS or labelled "placeholder" (headline, benefits, reviews, FAQ answers, policies, store name, social handles, contact email).
3. **Images:** replace the grey `placeholder-box` divs with `<img>` tags, e.g.
   ```html
   <img src="images/product.jpg" alt="Product" class="product-image">
   ```
4. **Colors:** all colors are CSS variables at the top of `css/style.css` — change them there to restyle the whole site.
5. **Payment:** the checkout "payment" area is a placeholder. Connect Stripe/PayPal/etc. inside the form submit handler in `js/script.js` (`setupCheckoutForm`).
