/* ============================================================
   ADD YOUR PRODUCTS HERE — this is the only file you need to edit.

   Each product needs:
   - name:      product title
   - price:     current price (number, no currency symbol)
   - oldPrice:  original price for the strikethrough (or null to hide)
   - image:     path to your photo e.g. "images/hoodie.jpg"
                (leave as null to show a colour placeholder)
   - badge:     small label like "Best Seller", "Only 1 left", "New In"
                (or null to hide)
   - condition: e.g. "Brand new", "Like new", "Good"
   - size:      e.g. "M", "UK 9", "One size"
   - link:      where the Buy button goes — your Vinted/Depop/eBay
                listing URL, PayPal link, or Stripe payment link
   ============================================================ */

const CURRENCY = "£";

const PRODUCTS = [
  {
    name: "Example Product 1 — replace me",
    price: 34.99,
    oldPrice: 55.0,
    image: null,
    badge: "Best Seller",
    condition: "Like new",
    size: "M",
    link: "#",
  },
  {
    name: "Example Product 2 — replace me",
    price: 24.5,
    oldPrice: null,
    image: null,
    badge: "Only 1 left",
    condition: "Brand new",
    size: "L",
    link: "#",
  },
  {
    name: "Example Product 3 — replace me",
    price: 49.0,
    oldPrice: 80.0,
    image: null,
    badge: "New In",
    condition: "Excellent",
    size: "UK 9",
    link: "#",
  },
  {
    name: "Example Product 4 — replace me",
    price: 18.99,
    oldPrice: 30.0,
    image: null,
    badge: null,
    condition: "Good",
    size: "S",
    link: "#",
  },
  {
    name: "Example Product 5 — replace me",
    price: 65.0,
    oldPrice: 95.0,
    image: null,
    badge: "Rare Find",
    condition: "Like new",
    size: "One size",
    link: "#",
  },
  {
    name: "Example Product 6 — replace me",
    price: 29.99,
    oldPrice: null,
    image: null,
    badge: null,
    condition: "Brand new",
    size: "XL",
    link: "#",
  },
];

/* ============================================================
   SITE SETTINGS — change the text of the whole site here.
   ============================================================ */

const SITE = {
  brandName: "YOUR STORE",             // shown in the header + footer
  heroHeadline: "Premium pieces. Reseller prices.",
  heroSub: "Hand-picked, authenticated items at up to 60% off retail. New drops every week — once they're gone, they're gone.",
  heroCta: "Shop the drop",
  announcement: "🔥 FREE UK shipping on orders over £40 — this week only",
  instagram: "#",                      // your Instagram URL
  vintedProfile: "#",                  // your Vinted profile URL
  email: "hello@yourstore.com",        // your contact email
};
