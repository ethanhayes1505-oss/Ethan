# SleepLabs v8 (full redesign)

Lives on the unpublished theme **"SleepLabs – Premium v8 (full redesign)"** (theme id 212024099155), a copy of the live v7 theme. The live theme is untouched.

Preview: https://sleeplabs.shop/products/sleeplabs-silent-wake-band?preview_theme_id=212024099155

## Product page order
1. Gallery + buy box (unchanged)
2. Spec strip (replaces the trust strip that repeated the badges under the button)
3. Videos (unchanged)
4. "Different alarm times. Same bed." (unchanged)
5. Feature cards: "Built for one job. Done quietly." (new, `sl-feature-cards`)
6. Three steps (compact rows on phones, 05:30 photo for step three)
7. "Made for mornings like these" tiles (one per ad angle)
8. Comparison table (same rows, readable band thumbnail)
9. Reviews (unchanged)
10. Survey figures (AASM, sourced)
11. In the box (photo now shows the band, cable and box)
12. FAQ (unchanged)
13. "Choose your set" (replaces the plain call-to-action block)

Removed: the "Why people switch" checklist, which was a near copy of FitSleeps' page.

## Other pages
- Header: store name set in the brand serif font.
- Contact: new `sl-contact` section with guidance and an order-number field.
- 404: "This page is still asleep." plus the choose-your-set block; no product grid.
- Cart: "You may also like" row removed (it listed Shipping Protection as a product).

## New theme files
`assets/sl-pdp.css`, `sections/sl-feature-cards.liquid`, `sections/sl-contact.liquid`
Changed: `templates/product.json`, `templates/page.contact.json`, `templates/404.json`, `templates/cart.json`, `sections/header-group.json`
