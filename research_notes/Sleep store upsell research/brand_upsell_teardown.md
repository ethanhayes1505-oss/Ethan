# Brand upsell teardown: sleep-niche and small-gadget DTC brands (as of 17 Nov 2026)

Evidence labels used throughout:
- **[SEEN]** = I fetched the brand's own page or public Shopify catalogue (`/products.json`) directly on 2026-11-17 and read the value from it.
- **[SNIPPET]** = taken from a web-search result summary of the linked page; the page itself could not be opened from this session, so treat as lower confidence.
- **[VENDOR]** = a marketing claim published by an app/insurance vendor or agency about its own results. Not independently audited.

Access limits (important for the report writer): this session's network only allowed direct access to fitsleeps.com, hatch.co, mantasleep.com, ozlosleep.com, eightsleep.com, ouraring.com, homedics.com and (intermittently) byloftie.com. These hosts were blocked and could NOT be opened: risebands.com, dawnband.com, pavlok.com, mydodow.com / shop.livlab.care, us.loopearplugs.com, hostagetape.com, intakebreathing.com, gravityblankets.com, sonicalert.com, us.morphee.co, casestudies.com, makebecool.com, conversionrate.store, navidiumapp.com. Everything about those brands below is [SNIPPET] or a gap. Cart drawers, checkout and post-purchase pages are rendered by JavaScript and were not executed, so "where in the purchase" is partly inferred from catalogue data and installed apps.

## 1. What each brand sells as add-ons, accessories, bundles, warranties, memberships, digital content, gifts and consumables, at what price, and where in the purchase

### Takeaway
The closest competitor (FitSleeps, same product, $39 entry price) stacks about ten low-ticket add-ons around a single wristband, three of which ship nothing (a $18 "10-Year Warranty", a $7.95 "Upgrade to Waterproof" toggle, $2.95 shipping insurance), plus quantity breaks and sleep-accessory cross-sells. Larger sleep brands monetise differently: app memberships (Hatch, Oura, Eight Sleep, Loftie), consumable refills on subscription (Hostage Tape, Intake), duo/multi-unit bundles at 8-20% off (Manta, Loop), and third-party protection plans (Ozlo via AKKO).

### Cited Findings

#### Vibrating alarm wristbands

**FitSleeps (fitsleeps.com) - verified and extended**
- [SEEN] Live band prices: Pulse Standard+ $39 (compare-at $85), Pulse Pro+ $59 (compare-at $129), Pulse Shock $69 (compare-at $149). Older listings still in the catalogue at $49 / $63 / $84 / $89 ("100% Wake-Up Alarm" range), i.e. the brand has cut its entry price over time. — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
- [SEEN] Product page shows "Buy 2 Save 10%" and "Buy 3 Save 20%" quantity breaks (so 2 x Standard = $70.20, 3 x Standard = $93.60 by arithmetic). — [FitSleeps Pulse Standard page](https://fitsleeps.com/products/fitsleeps-pulse-standard)
- [SEEN] Non-shipping add-ons (catalogue flag `requires_shipping: false`): "10-Year Warranty" $18 (compare-at $27); "Upgrade to Waterproof" $7.95 (compare-at $9.95); "Shipping Insurance" $2.95. — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
- [SEEN] The "10-Year Warranty" product's URL handle is `add-a-2-year-protection-plan-copy` (created 2026-01-29), and its description promises "free replacement or repair", "covers accidental drops and normal-use malfunctions", "parts, labor, and shipping included", "lasts 10 years". It is an own-brand promise sold as a Shopify product, with no third-party insurer named. — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
- [SEEN] The same product page separately advertises a free "2-Year Warranty", a "100-day money-back guarantee" and "free shipping on all orders... Delivery typically takes 5-10 business days". — [FitSleeps Pulse Standard page](https://fitsleeps.com/products/fitsleeps-pulse-standard)
- [SEEN] "Upgrade to Waterproof" carries the Shopify product type "Slidecart - Shipping Protection" and its whole description is "100% Shower & Sweat Resistance". That product type is the slot SlideCart uses for its cart-drawer toggle, so this is a paid toggle in the cart drawer, not a separate physical item. — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
- [SEEN] Physical accessories: "Add Extra Strap" $25; "FitSleeps Bracelet" / "Bracelet with Clasp" $25; "Bracelet with buckle" $30; "Bicep Band" $35; "Add a Storage Case" $9.95 (compare-at $17); "Add a charger" (USB adapter, US/EU/UK variants) $8.80 (compare-at $20). — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
- [SEEN] Sleep-category cross-sells: Premium Sleep Mask $22.85 (compare-at $54); Premium Mouth Tape $23 (compare-at $39); Premium Nasal Strips $24 (compare-at $39); Blue Light Glasses $36 (compare-at $71); "Easy Sleep" white noise machine $79 (compare-at $121.50); a "Complete your set up" bundle at $30 (compare-at $51). — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
- [SEEN] The white noise machine ($79, "35% off"), blue-light glasses ($36, "49% off") and strap ($25) appear on the band's product page itself with an "Add +" button, i.e. cross-sells are shown before the cart. — [FitSleeps Pulse Standard page](https://fitsleeps.com/products/fitsleeps-pulse-standard)
- [SEEN] Two $0 digital items: "Calm Start - Guided Breathwork to Wake Up Clear & Calm" and "Night Reset - Guided Breathwork to Fall Asleep Faster" (both created 2026-02-17). Gift card in $25 / $40 / $50 / $75 / $100. — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
- [SEEN] Apps loaded on the product page: Kaching Bundles (quantity breaks), SlideCart (cart drawer with an upsell carousel, a rewards progress bar with tiers and a "free gifts" header), AfterSell (post-purchase offers), Okendo and Klaviyo. — [FitSleeps Pulse Standard page](https://fitsleeps.com/products/fitsleeps-pulse-standard)
- [SEEN] The catalogue contains duplicate test listings (handles ending `-abnewpdp` and `-test-new-offer-pdp`), showing the brand A/B tests product-page and offer layouts. — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
- [SEEN] Observations only, not tactics to copy: the page shows "SITEWIDE 54% OFF", "51,837 reviews" and "72% of stock sold already!" while the page's own embedded product data reports an inventory quantity of 10,746 units for that variant. — [FitSleeps Pulse Standard page](https://fitsleeps.com/products/fitsleeps-pulse-standard)

**Homedics WakeBand**
- [SEEN] Homedics sells a "WakeBand" silent vibrating wristband at $39.99 in four colours (Black, Blue, Cream, Pink), no compare-at price, listed since 2025-11-05. — [Homedics catalogue](https://www.homedics.com/products.json?limit=250)
- [SEEN] The WakeBand page shows a cart message "Free shipping with $99.00 purchase", so a single band does not qualify and the threshold pushes shoppers to add items. Rebuy (cart/recommendation app) is installed. No warranty or protection-plan offer text was found in the static page. — [Homedics WakeBand page](https://www.homedics.com/products/wakeband)
- [SNIPPET] A UK grocer listing shows the Homedics WakeBand at £48.30. — [McGrocer listing](https://mcgrocer.com/products/homedics-wakeband-silent-vibrating-alarm-2026413514)

**Pavlok / Shock Clock**
- [SNIPPET] Shock Clock 3 list price about $159.99 at resellers; an April 2026 Slickdeals post showed it at $119.99 on Amazon (from $159) with a 1-year warranty. — [Slickdeals](https://slickdeals.net/f/19391121-pavlok-shock-clock-3-smart-alarm-for-heavy-sleepers-habit-breakers-vibration-beep-safe-zap-wake-up-app-controlled-waterproof-sweatproof-silent-alarm-119-99)
- [SNIPPET] The Pavlok app's App Store listing shows in-app purchases: Premium Monthly $4.99, Challenge Monthly $9.99, Premium Yearly $29.99 (the listing snapshot may be dated). — [App Store: Pavlok](https://apps.apple.com/us/app/pavlok/id1537943606)
- [SNIPPET] A Pavlok store review mentions a watch-clip accessory; another describes paying about $19/month for a Shock Clock 3 with billing continuing until the device is returned (single reviews, unverified). — [Pavlok store reviews (Loox)](https://loox.io/s/6GR81cvDTo?page=10)

**Rise Bands and Dawn Band**
- [SNIPPET] No official Rise Bands or Dawn Band page could be opened or found in search. Walmart marketplace listings for a generic "Rise Alarm Band" show $12.98-$13.99 (options up to $56.99), and look-alike vibrating wristbands at about $10-$21. — [Walmart listing](https://www.walmart.com/ip/19353965549); [Walmart listing](https://www.walmart.com/ip/18943400322)

**Sonic Alert / Sonic Bomb**
- [SNIPPET] The accessory model is spare parts: the replacement "Super Shaker" bed shaker for Sonic Bomb clocks sells for $17.99 at Walmart and Diglo, $22.49 on eBay. — [Diglo](https://www.diglo.com/sonic-alert-super-shaker-12v-white-bed-shaker;sku=SA-SS12VW;s=516;p=SA-SS12VW); [Walmart Sonic Alert brand page](https://www.walmart.com/c/brand/sonic-alert)

#### Sleep gadgets and sleep DTC

**Hatch**
- [SEEN] Restore 3 $169.99 (shown as $42.50 instalments), with "Free Shipping & Returns", "30-Night Bedside Trial", "1-Year Product Warranty" and "30 days of Hatch+ included". — [Hatch Restore 3](https://www.hatch.co/restore-3)
- [SEEN] Hatch+ renews at $5.99/month or $59.99/year after the 30-day trial; the customer is "given the option to activate a monthly or annual Hatch+ subscription when you set up your Restore" (i.e. sold after purchase, in the app). The device still works without it, with limited content. — [Hatch Restore 3 FAQ](https://www.hatch.co/restore-3)
- [SEEN] Other prices: Hatch Sleep Clock $249.99; Hatch Baby $89.99; Hatch Go $39.99; Hatch Baby + Hatch Go bundle $119.98 (was $129.98, $10 off); replacement power cords $16.99 (Restore 3) and $15.99 (Baby). "Gift Hatch" is a top-level navigation item. — [Hatch accessories](https://www.hatch.co/accessories)

**Loftie**
- [SEEN] Catalogue: Loftie Clock $199.99; Loftie Lamp $279.99; refurbished Clock $120 and refurbished Lamp $230; Mouth Tape $29.99; LoftiePM $29.99; Sleep Mask $25.99; Night Lights $39.99; Woodland Wonder Bedtime Spray $59.99; Stick'ems $10.99; Dark Dots sticker sheet $10.99; "The Mysteries of Sleep" book $44.99; puzzle $39.99; Sleep Sweatshirt $59.99; "Loftie Card" $59.99; gift cards $50-$600. — [Loftie catalogue](https://byloftie.com/products.json?limit=250)
- [SNIPPET] Loftie+ pricing conflicts across Loftie's own pages: the 2026 "Loftie+ Habit System" is $9.99/month (after a 30-day trial) or $59.99/year; older membership pages list $5.99/month or $49.99/year, and one product page $4.99/month. A 2026 promotion bundles "Loftie+ For Life" free with every clock. — [Loftie Storymaker page](https://byloftie.com/pages/storymaker); [Loftie monthly membership product](https://byloftie.com//products/loftie-monthly-membership); [Loftie birthday promo](https://byloftie.com/pages/loftie-birthday-2026); [TrendHunter](https://www.trendhunter.com/trends/habit-system)

**Manta Sleep**
- [SEEN] Core masks: ORIGINAL $39; PRO $85-$89; SILK $75; STEAM $49; COOL $49; WEIGHTED $49; KIDS $35; SOUND (Bluetooth) $159-$169. — [Manta catalogue](https://mantasleep.com/products.json?limit=250)
- [SEEN] "DUO" two-unit bundles at roughly 7-10% off: ORIGINAL DUO $71 (vs $78); PRO DUO $155 (vs $170); SILK DUO $139 (vs $150); SOUND DUO $287 (vs $318); STEAM DUO and COOL DUO $89 (vs $98); KIDS DUO $65 (vs $70); Earplugs Twin Set $63 (vs $70). — [Manta catalogue](https://mantasleep.com/products.json?limit=250)
- [SEEN] Cross-category bundles: Wake Up Ready Bundle $134 (vs $149); Breathe Easy Bundle $161 (vs $178); SOUND+ Deep Sleep Bundle $205 (vs $227); Dual Defense Bundle $103 (vs $114); Blackout Barrier Bundle $89 (vs $114); Bestseller Bundle $175 (vs $209). — [Manta catalogue](https://mantasleep.com/products.json?limit=250)
- [SEEN] Low-ticket add-ons and consumables: Blackout Stickers $13; Anti-Snore Nose Vents $13; AROMA Dots $13 single pack / $39; Nasal Strips $25; Travel & Laundry Bag $15; Sleep Journal $19; TrueRed Night Light $29; Bedside Caddy $29; Earplugs $35; Travel Pillow $35. Replacement parts: ORIGINAL eye cups $23, PRO eye cups $49, ORIGINAL head strap $23, PRO head strap $41. — [Manta catalogue](https://mantasleep.com/products.json?limit=250)
- [SEEN] The catalogue holds hidden duplicate listings titled "... - 10% Off" (e.g. ORIGINAL mask $35 vs $39; PRO $77 vs $85; White Noise Machine $54 vs $60) and several items tagged "Upsell - Start ...", plus a "FREE Manta Blackout Stickers" gift listing. — [Manta catalogue](https://mantasleep.com/products.json?limit=250)
- [SEEN] Site banner: "Free shipping on orders over $105, plus free 60-day returns within the US" and "Early Black Friday Sale is on. Free gift for first 880 orders." Rebuy (cart) and Zipify (one-click upsell) scripts are loaded. — [Manta ORIGINAL mask page](https://mantasleep.com/products/manta-sleep-mask); [Manta cart page](https://mantasleep.com/cart)

**Ozlo Sleepbuds**
- [SEEN] Sleepbuds 2 $279; Ozlo Sleepbuds $349 (Ozlo x Calm edition $299). — [Ozlo catalogue](https://ozlosleep.com/products.json?limit=250)
- [SEEN] On the Sleepbuds product page, under "Frequently purchased with this": "Add Ozlo Care Protection... powered by AKKO... $60 $40 per year". A separate "Ozlo Care (30+ Days)" listing at $60 exists for people buying cover later. — [Ozlo Sleepbuds page](https://ozlosleep.com/products/sleepbuds); [Ozlo catalogue](https://ozlosleep.com/products.json?limit=250)
- [SEEN] Accessories, all shown at half their compare-at price: Sleep Mask $14.50, USB-C Charging Block $14.50, Travel Case $14.50, charging cable $9.50, replacement eartips $10 per size; single replacement earbud (left or right) $75; gift cards $25-$349. — [Ozlo catalogue](https://ozlosleep.com/products.json?limit=250)
- [SEEN] The page embeds a "Guide Shipping Protection" widget ("covers packages that are lost, damaged, or stolen during transit") and offers HSA/FSA payment through Flex at checkout. — [Ozlo Sleepbuds page](https://ozlosleep.com/products/sleepbuds)

**Oura**
- [SEEN] Oura Ring 5 from $399 (several finishes $499). Membership $5.99/month or $69.99/year in the US, first month free for new members, starts when the ring is activated. — [Oura store](https://ouraring.com/store); [Oura membership](https://ouraring.com/membership)
- [SEEN] Accessories: Charging Case $99; replacement Charger $59; Stelo glucose biosensor 2-pack $99; gift cards from $25 (US only). — [Oura store](https://ouraring.com/store)

**Eight Sleep**
- [SEEN] "Autopilot membership required." Plans: Standard $17/mo ($199 billed annually, 2-year warranty); Enhanced $25/mo ($299 billed annually, adds a 5-year warranty); Elite $33/mo ($399 billed annually). Rental starts at $149/month. — [Eight Sleep Pod page](https://www.eightsleep.com/product/pod-cover/); [Eight Sleep Autopilot](https://www.eightsleep.com/autopilot/)
- [SEEN] Accessories: Base $1,799 (was $1,999); Blanket $899 (was $999); Pillow Cover $949 (was $999); Pillow $199; Pod Protector $119; Duvet Cover $199; Pod Sheet Set $189; a sheet-set + protector + two-pillow bundle at $415 ("save $200"). Consumables: Jet Lag supplement $49 (was $99); Sleep Elixir $39 (was $79). — [Eight Sleep accessories](https://www.eightsleep.com/accessories/)

**Hostage Tape**
- [SNIPPET] Mouth tape 3-month subscription $49.99 billed every 3 months ($0.55/night; 90 strips, storage tin, free shipping) versus $59.99 as a one-time 90-night purchase. — [Hostage Tape landing page](https://hostagetape.com/pages/mt-why-mouthtape-mouthbreathing-sleep-sub)
- [SNIPPET] A 90-night starter pack is shown as "$140 $59, 57% OFF" with free nose strips, nasal sticks and a storage tin; "The Freedom Bundle" $99.85 (regular $185); "Hostage Nose Strips Year" $149.99. — [Hostage Tape product page](https://hostagetape.com/pages/product-hostage-tape); [Freedom Bundle](https://hostagetape.com/products/the-freedom-bundle); [1-year supply](https://hostagetape.com/products/1-year-supply)
- [SNIPPET] Trustpilot TrustScore 2.5/5 with a complaint about spin-the-wheel "deals" (observation only). — [Trustpilot](https://ca.trustpilot.com/review/hostagetape.com)

**Intake Breathing**
- [SNIPPET] Starter kit MSRP $39.99 (kit + 15 uses) or $49.99 (kit + 30 uses). — [Intake press fact sheet](https://www.intakebreathing.com/pages/press-fact-sheet)
- [SNIPPET] 30-use refill pack: regular $32.99, sale $22.99, "Free Shipping For Subscription"; starter kit page: "Save 40% on Intake Tabs when you enable automatic refills. Cancel anytime." — [Intake refill pack](https://www.intakebreathing.com/products/refill-pack-30); [Intake starter kit](https://intakebreathing.com/products/intake-kit)
- [SNIPPET] Bundles: 3 refill packs + case ("$40 savings"); a gift bundle at $69.99 (was $118.99) with free mouth tape and prep pads, with a refill subscription add-on at 35% off delivered every 30 days. — [Intake 90-day refill bundle](https://intakebreathing.com/products/bfcm-90-day-refill-bundle); [Intake Father's Day bundle](https://www.intakebreathing.com/products/fathers-day-bundle)
- [SNIPPET] One Trustpilot reviewer reports being charged for a refill subscription after a starter-kit order that never arrived (single review). — [Trustpilot](https://uk.trustpilot.com/review/intakebreathing.com)

**Loop Earplugs**
- [SNIPPET] Bundles are priced at 20% off the sum of parts: Full Coverage Bundle $147.88 (vs $184.85); Deluxe Bundle $104.60 (vs $130.75); an older Earplug Bundle $75.88 (vs $94.85). Single pairs: Quiet 2 $24.95, Experience 2 $34.95. — [Loop Full Coverage Bundle](https://us.loopearplugs.com/en-ca/products/full-coverage-bundle); [Loop Deluxe Bundle](https://us.loopearplugs.com/products/deluxe-bundle); [Loop collections](https://us.loopearplugs.com/collections)

**Dodow, Morphee**
- [SNIPPET] Dodow $59.99 at a third-party sleep store; a coupon site claims 35% off when buying 3 (unverified); the maker's shop has a "Get a FREE Dodow" promotional page. — [SleepScore store](https://shop.sleepscore.com/products/dodow-sleep-aid-device); [PromoCodes](https://www.promocodes.com/dodow-coupons); [Livlab shop](https://shop.livlab.care/en-us/pages/get-a-free-dodow)
- [SNIPPET] Morphee Zen $79.99 on the US site; the UK site sells a parent + child pack at 20% off (£107.92). — [Morphee US](https://us.morphee.co/products/morphee-zen-international); [Morphee UK bundle](https://uk.morphee.co/products/parent-child-bundle-morphee-my-little-morphee)

### Inferences
- FitSleeps' flow, reconstructed from its apps and catalogue (not observed end to end): quantity breaks and three cross-sells on the product page (Kaching + theme); strap / case / charger / warranty / waterproof toggle / shipping insurance in the SlideCart drawer, with a free-gift rewards bar (the $0 breathwork guides are the likely reward items); one-click offers after payment via AfterSell.
- FitSleeps sells a "10-Year Warranty" for $18 on a $39 band it advertises with a free 2-year warranty, and sells "Upgrade to Waterproof" as a non-shipping $7.95 line. Unless a different unit is actually dispatched, the waterproof line is a paid claim about the same product; that is a consumer-protection risk and not something to copy without a genuinely different SKU.
- Manta's hidden "- 10% Off" duplicates and "Upsell - Start..." tags are most consistent with discounted add-a-second-item offers served through Rebuy/Zipify in cart or post-purchase, rather than a public discount.
- The client's existing bundle discounts (2 for $64.99 = 18.7% off; 3 for $89.99 = 25% off) are already deeper than FitSleeps' 10% / 20% and Manta's 7-10% duo discounts.
- A mainstream brand (Homedics) retails the same product type at $39.99 and marketplace generics sit at $10-$21, so the client's $39.99 is at the top of the commodity range; add-ons, not band price, are where FitSleeps finds extra revenue.

### Gaps
- Rise Bands and Dawn Band: official sites unreachable and nothing reliable in search; no prices or upsells recorded.
- Pavlok: official shop unreachable; current device price, membership tiers and accessories on pavlok.com unconfirmed.
- Gravity Blanket: site unreachable and search returned nothing brand-specific; no data.
- Loop: standalone accessory prices (ear tips, carry case, Loop Link, Mute) not confirmed; search surfaced only look-alike non-official storefronts, which were disregarded.
- Dodow and Morphee official multi-pack pricing not confirmed.
- Exact cart-drawer, checkout and post-purchase offers for every brand were not observed (JavaScript not executed, no test orders placed). Which FitSleeps items appear in AfterSell offers is unknown.
- Loftie+ current price is ambiguous ($9.99/mo vs older $4.99-$5.99/mo) and needs a live check.

## 2. Which brands make recurring revenue from a one-off gadget, and at what prices

### Takeaway
Recurring revenue comes from two mechanisms: app/content memberships attached to connected hardware ($5.99-$9.99/month, or $60-$70/year, up to $199-$399/year at Eight Sleep) and consumable refills on subscription (Hostage Tape, Intake). None of the vibrating-wristband sellers examined has a real recurring product; FitSleeps has none in its catalogue.

### Cited Findings
- [SEEN] Hatch+: $5.99/month or $59.99/year after a 30-day trial bundled with the device; device works without it. — [Hatch Restore 3](https://www.hatch.co/restore-3)
- [SEEN] Oura Membership: $5.99/month or $69.99/year (US), first month free; Oura states benefits are "much more limited" without it. — [Oura membership](https://ouraring.com/membership)
- [SEEN] Eight Sleep Autopilot (mandatory): $199 / $299 / $399 per year (Standard / Enhanced / Elite); the two higher tiers bundle a 5-year warranty. — [Eight Sleep Autopilot](https://www.eightsleep.com/autopilot/)
- [SNIPPET] Loftie+: $9.99/month or $59.99/year (2026 pages); older pages $4.99-$5.99/month or $49.99/year. — [Loftie Storymaker page](https://byloftie.com/pages/storymaker); [Loftie monthly membership product](https://byloftie.com//products/loftie-monthly-membership)
- [SEEN] Ozlo Care device protection is billed per year ($40 promotional, $60 list), i.e. protection as an annual recurring line. — [Ozlo Sleepbuds page](https://ozlosleep.com/products/sleepbuds)
- [SNIPPET] Pavlok app in-app purchases: Premium $4.99/month or $29.99/year; Challenge $9.99/month. — [App Store: Pavlok](https://apps.apple.com/us/app/pavlok/id1537943606)
- [SNIPPET] Hostage Tape: $49.99 every 3 months on subscription versus $59.99 one-time (about 17% subscription discount). — [Hostage Tape landing page](https://hostagetape.com/pages/mt-why-mouthtape-mouthbreathing-sleep-sub)
- [SNIPPET] Intake Breathing: refill tabs $32.99 regular per 30 uses; 40% off refills on auto-refill; free shipping on subscription. — [Intake refill pack](https://www.intakebreathing.com/products/refill-pack-30); [Intake starter kit](https://intakebreathing.com/products/intake-kit)
- [SEEN] Consumables sold one-off (no subscription detected in catalogue): Manta AROMA Dots $13/$39, Nasal Strips $25, Nose Vents $13; Ozlo eartips $10; Eight Sleep supplements $39-$49; FitSleeps mouth tape $23 and nasal strips $24. — [Manta catalogue](https://mantasleep.com/products.json?limit=250); [Ozlo catalogue](https://ozlosleep.com/products.json?limit=250); [Eight Sleep accessories](https://www.eightsleep.com/accessories/); [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
- [SEEN] FitSleeps' catalogue has no selling plans (subscriptions) on the band and no membership product; its only digital items are two $0 breathwork guides. — [FitSleeps Pulse Standard page](https://fitsleeps.com/products/fitsleeps-pulse-standard); [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
- [SNIPPET] Hostage Tape (a consumable-subscription brand) reported about $14M revenue in its second year and a "$40M revenue in year 3" framing in a June 2024 podcast. — [2X eCommerce podcast](https://www.audioscrape.com/podcast/2x-ecommerce-podcast/episode/40m-revenue-in-year-3-how-meta-ads-strategic-branding-and-influencers-drive-hostage-tapes-success-alex-neist-80800)
- [VENDOR] An agency case study for SleepyPatch (kids' sleep patches) reports +23% average revenue per user after adding Subscribe & Save. — [conversionrate.store](https://conversionrate.store/case-studies/sleepypatch)

### Inferences
- Membership revenue depends on an app and ongoing content the client does not have. The only recurring model that fits a non-connected $40 wristband is a consumable sold alongside it (mouth tape, nasal strips), and those ship physically, which conflicts with the "no extra shipping" goal unless the supplier packs them in the same parcel.
- Annual protection (Ozlo Care style) is the one recurring line that needs no parcel, but it relies on a licensed third party (AKKO) and a $279+ device; it does not scale down to a $40 item.

### Gaps
- No subscriber counts, attach rates or churn for Hatch+, Oura, Loftie+ or Hostage Tape were found in sources opened.
- Hostage Tape and Intake prices are from search snippets of their pages and promotional pages vary; live prices unverified.
- Gravity Blanket, Dodow, Morphee, Loop: no recurring products identified, but their sites could not be opened to confirm absence.

## 3. Extended warranty and protection: own-brand vs third party, and price relative to the product

### Takeaway
At the $40 price point, protection is sold as an own-brand line item (FitSleeps: $18, or 46% of the band's price) because third-party plans are built for higher-ticket goods; premium brands either use a licensed third party (Ozlo with AKKO at $40-$60/year on a $279-$349 device, 11-21%) or fold the warranty into a membership tier (Eight Sleep). Shipping protection is the low-ticket universal: FitSleeps $2.95, Ozlo via Guide, with self-funded apps like Navidium letting the merchant keep the fee and bear the claims.

### Cited Findings
- [SEEN] FitSleeps "10-Year Warranty" $18 (compare-at $27), non-shipping, own-brand, on bands priced $39 / $59 / $69 (46% / 31% / 26% of band price by arithmetic). A 2-year warranty is advertised as included free. — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250); [FitSleeps Pulse Standard page](https://fitsleeps.com/products/fitsleeps-pulse-standard)
- [SEEN] FitSleeps "Shipping Insurance" $2.95, non-shipping (7.6% of a $39 order by arithmetic). — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
- [SEEN] Ozlo Care is listed with vendor "AKKO", tagged digital, $40 (compare-at $60) per year, offered on the product page; a $60 version exists for purchase 30+ days after buying. — [Ozlo catalogue](https://ozlosleep.com/products.json?limit=250); [Ozlo Sleepbuds page](https://ozlosleep.com/products/sleepbuds)
- [SNIPPET] Ozlo Care covers accidental damage including liquid, parts and battery failure after warranty, and loss or theft, with a $0 deductible; regular price $60/year with a $40 launch offer stated to run until January 16, 2026 (the site still showed $40 on 2026-11-17). — [Ozlo Care page](https://ozlosleep.com/pages/ozlo-care)
- [SEEN] Ozlo uses Guide (guideprotection.com) for shipping protection: "covers packages that are lost, damaged, or stolen during transit". — [Ozlo Sleepbuds page](https://ozlosleep.com/products/sleepbuds)
- [SEEN] Eight Sleep ties warranty length to membership tier: Standard ($199/yr) has a 2-year warranty; Enhanced ($299/yr) and Elite ($399/yr) are required for the 5-year warranty. — [Eight Sleep Pod page](https://www.eightsleep.com/product/pod-cover/)
- [SEEN] Hatch includes a 1-year product warranty and a 30-night trial; no paid protection plan is shown on the Restore 3 page. — [Hatch Restore 3](https://www.hatch.co/restore-3)
- [SNIPPET] Shock Clock 3 listings describe a 1-year warranty. — [Slickdeals](https://slickdeals.net/f/19391121-pavlok-shock-clock-3-smart-alarm-for-heavy-sleepers-habit-breakers-vibration-beep-safe-zap-wake-up-app-controlled-waterproof-sweatproof-silent-alarm-119-99)
- [VENDOR] Navidium (self-funded shipping protection): claims a 40-80% attachment rate and that merchants keep the fees; "We don't take any % of your revenue, nor do we collect any money from your customers." — [Navidium](https://navidiumapp.com/navidium-shipping-protection)
- [SNIPPET] Navidium pricing is a flat monthly fee, with sources disagreeing on the entry tier: Shopify listing shows Essential $29.99/month for up to 50 orders with usage charges above; Navidium's page lists Growth $49.99 (up to 1,000 orders) and Enterprise $99.99 (unlimited); one directory shows a free tier up to 50 orders. Fee can be a percentage of order value, tiers or a flat rate. — [Navidium on Shopify App Store](https://apps.shopify.com/navidium-shipping-protection); [StoreCensus](https://www.storecensus.com/shopify-apps/navidium-shipping-protection)
- [SNIPPET] Navidium is "not an insurance provider", so fees go to the merchant, who carries the replacement risk; Route is described as licensed third-party insurance funded by the consumer. — [ShipAid comparison](https://www.shipaid.com/blogs/shopify-app-comparisons/navidium-shipping-protection-vs-route-protection-and-tracking-an-in-depth-comparison); [AfterShip comparison](https://www.aftership.com/blog/aftership-vs-route-navidium-extend-shipping-protection)
- [VENDOR] Extend product-protection attach rates on small electronics: Boogie Board 13.5%; 1More 14.6% (+2.3% revenue); Car and Truck Remotes 9.7%; Baby Brezza 8.8% (AOV +15%). — [Extend: Boogie Board](https://www.extend.com/merchant-case-studies/boogie-board); [Extend: 1More](https://extend.com/merchants-stories/1more); [Extend: Car and Truck Remotes](https://extend.com/merchant-case-studies/car-and-truck-remotes); [Extend: Baby Brezza](https://www.extend.com/merchant-case-studies/baby-brezza)
- [VENDOR] Extend shipping protection at Felix Gray: 40% attach rate once the offer was pre-checked (opt-out); its product-protection attach rate earlier rose from about 2-3% to 8-9%, then 19.3% overall. — [Extend: Felix Gray pre-checked](https://www.extend.com/merchant-case-studies/felix-gray-pre-checked-shipping-protection); [Extend: Felix Gray](https://www.extend.com/merchant-case-studies/felix-gray)
- [VENDOR] Clyde: EVO Gimbals reported 10% higher AOV with protection plans. — [Clyde case study listing](https://www.casestudies.com/company/clyde/case-study/evo-gimbals-boosts-aov-10-with-clyde)
- [VENDOR] Benchmarks from protection vendors' blogs: warranty revenue of about 8-12% of product price per SKU; consumer-electronics claim rates around 1.4%. — [Umbrella](https://www.myumbrella.ai/blog/maximizing-warranty-revenue); [Corso](https://www.corso.com/post-purchase-resource-center/product-protection-plans-by-merchandise-category)

### Inferences
- FitSleeps prices its warranty far above the 8-12%-of-product norm vendors cite (46% of a $39 band) because the plan costs it nothing to issue and a replacement band costs only a few dollars; for the client, a replacement is about $8.33 plus shipping, so even one claim in two would leave an $18 plan roughly break-even or better. The exposure is the length of the promise (a 10-year obligation from a store with 2 orders), not unit cost.
- Third-party plans (Extend, Clyde, AKKO) are unlikely to be practical for a 2-order store selling a $40 item; a self-administered, honestly-termed replacement guarantee (e.g. 1-2 years) is the transferable version.
- Self-funded shipping protection at $2.95-$2.99 is nearly pure margin when the merchant already reships lost parcels; the client already has this at $2.99. A flat-fee app at $29.99+/month would cost more than the add-on earns at current volume.
- Vendor-reported opt-in attach rates for product protection on small electronics cluster around 9-15%; shipping protection reaches 40%+ mainly when pre-selected.

### Gaps
- No evidence found of Route, Extend, Clyde, Seel or Navidium on FitSleeps, Manta, Homedics or Hatch (static page checks only; checkout not inspected).
- Gravity Blanket, Loop, Hostage Tape, Intake, Dodow, Morphee protection offers: unknown (sites unreachable).
- Whether pre-selected (opt-out) shipping protection is still permitted in Shopify checkout was not verified in this research; Shopify's rules on auto-added charges should be checked before using any pre-checked toggle. No source was retrieved for this, so treat it as an open question.
- Ozlo's Guide shipping-protection fee and FitSleeps' warranty claim rate / attach rate are not public.

## 4. Upsells that need no extra parcel: named examples and prices

### Takeaway
Named no-parcel upsells in this niche fall into five groups: paid warranty, shipping protection, "upgrade" toggles, memberships/digital content, and extra units packed in the same box. No brand examined visibly sells priority handling or gift messaging as a paid line.

### Cited Findings
- Paid warranty / device protection (no parcel):
  - [SEEN] FitSleeps 10-Year Warranty $18. — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
  - [SEEN] Ozlo Care $40/year (list $60), AKKO-backed. — [Ozlo Sleepbuds page](https://ozlosleep.com/products/sleepbuds)
  - [SEEN] Eight Sleep: 5-year warranty via the $299/yr Enhanced tier instead of the $199/yr Standard tier (a $100/yr step). — [Eight Sleep Autopilot](https://www.eightsleep.com/autopilot/)
- Shipping protection (no parcel):
  - [SEEN] FitSleeps Shipping Insurance $2.95. — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
  - [SEEN] Ozlo: Guide Shipping Protection widget (price not shown in static page). — [Ozlo Sleepbuds page](https://ozlosleep.com/products/sleepbuds)
- "Upgrade" toggle (no parcel):
  - [SEEN] FitSleeps "Upgrade to Waterproof" $7.95 (compare-at $9.95), flagged as not requiring shipping and typed as a SlideCart protection toggle. — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
- Memberships and digital content (no parcel):
  - [SEEN] Hatch+ $5.99/month or $59.99/year. — [Hatch Restore 3](https://www.hatch.co/restore-3)
  - [SEEN] Oura Membership $5.99/month or $69.99/year. — [Oura membership](https://ouraring.com/membership)
  - [SNIPPET] Loftie+ $9.99/month or $59.99/year. — [Loftie Storymaker page](https://byloftie.com/pages/storymaker)
  - [SEEN] FitSleeps gives its digital content away: two guided-breathwork items at $0 (used as value-add, not revenue). — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
- Gift cards (no parcel):
  - [SEEN] FitSleeps $25-$100; Ozlo $25-$349; Loftie $50-$600; Oura from $25. — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250); [Ozlo catalogue](https://ozlosleep.com/products.json?limit=250); [Loftie catalogue](https://byloftie.com/products.json?limit=250); [Oura store](https://ouraring.com/store)
- Second unit in the same parcel:
  - [SEEN] FitSleeps Buy 2 save 10% / Buy 3 save 20%. — [FitSleeps Pulse Standard page](https://fitsleeps.com/products/fitsleeps-pulse-standard)
  - [SEEN] Manta DUO packs, e.g. ORIGINAL DUO $71 vs $78 for two singles. — [Manta catalogue](https://mantasleep.com/products.json?limit=250)
  - [SEEN] Hatch Baby + Hatch Go $119.98 vs $129.98. — [Hatch accessories](https://www.hatch.co/accessories)
  - [SNIPPET] Loop bundles at 20% off, e.g. Deluxe Bundle $104.60 vs $130.75. — [Loop Deluxe Bundle](https://us.loopearplugs.com/products/deluxe-bundle)
  - [SNIPPET] Hostage Tape sells longer supplies in one shipment (90-night pack; 1-year supply). — [Hostage Tape product page](https://hostagetape.com/pages/product-hostage-tape)
- Small accessories that can ride in the same parcel if the supplier packs them:
  - [SEEN] FitSleeps extra strap $25, storage case $9.95, USB charger $8.80. — [FitSleeps catalogue](https://fitsleeps.com/products.json?limit=250)
  - [SEEN] Ozlo travel case $14.50, charging block $14.50, eartips $10. — [Ozlo catalogue](https://ozlosleep.com/products.json?limit=250)
  - [SEEN] Manta blackout stickers $13, nose vents $13, travel bag $15. — [Manta catalogue](https://mantasleep.com/products.json?limit=250)
- Free-shipping thresholds used to pull a second item into the same parcel:
  - [SEEN] Manta: free shipping over $105 (PRO mask is $85-$89). — [Manta ORIGINAL mask page](https://mantasleep.com/products/manta-sleep-mask)
  - [SEEN] Homedics: free shipping with $99 purchase (WakeBand is $39.99). — [Homedics WakeBand page](https://www.homedics.com/products/wakeband)

### Inferences
- Using the client's own numbers (band cost about $8.33; 1 for $39.99, 2 for $64.99, 3 for $89.99): each extra band adds $25.00 revenue for about $8.33 cost, roughly $16.67 gross per extra unit before payment fees, with no second parcel if the supplier combines units. A warranty at FitSleeps' $18 price or a shipping-protection line at $2.99 has higher percentage margin but lower absolute dollars than a second band.
- Transferable without new stock: (a) quantity breaks (already live), (b) an honestly-termed paid replacement guarantee, (c) shipping protection (already live), (d) a digital sleep/wake guide either sold cheaply or given free as a bundle incentive, (e) gift cards. Transferable only if the AliExpress supplier can add items to the same parcel: spare strap, USB charger, case.
- Not transferable honestly: a "waterproof upgrade" line that ships the same unit, and compare-at prices or stock bars that are not real.

### Gaps
- No named example found of paid priority handling / "skip the line" processing or paid gift messaging / gift wrap among the reachable brands; could not check the unreachable ones. Manta, Hatch and Loftie emphasise gifting (gift sets, "Gift Hatch", gift guides) but a paid gift-message line was not observed.
- Whether FitSleeps' strap, case and charger ship in the same parcel as the band is unknown.

## 5. Public teardowns, founder interviews and case studies on what lifted average order value

### Takeaway
No public AOV teardown exists for any vibrating-wristband brand; the usable evidence is vendor case studies for the same apps FitSleeps runs, which report roughly +15-30% AOV from cart/post-purchase upsells and quantity breaks, and two sleep-niche agency cases showing that defaulting to a multi-pack and showing per-unit price lifted AOV 27%. All are self-reported by sellers of the tools and come from stores with far more traffic than the client's.

### Cited Findings
- Post-purchase one-click upsells:
  - [VENDOR] Aftersell: True Classic post-purchase revenue up more than 20% (17.3% click-through, 14.6% conversion on offers); Ridge 13.2% click-through, 8.2% conversion and a sustained 15% AOV lift; Jones Road Beauty 12.9% click-through, 13.3% conversion. — [Aftersell on Shopify App Store](https://apps.shopify.com/aftersell)
  - [VENDOR] Upsell.com: Cooper's Treats reported a 3% AOV lift (a modest-end benchmark). — [Upsell.com case study listing](https://www.casestudies.com/company/upsell/case-study/how-coopers-treats-increased-aov-by-3-with-upsellcom)
- Cart-drawer upsells (Rebuy, used by Manta and Homedics):
  - [VENDOR] Magic Spoon +14.75% AOV with Smart Cart; Legendary Foods +15% AOV with 39.44% of orders using a Rebuy add-on; Angela Caglia Skincare +30.99% AOV with 33.55% of orders using an add-on; Luno +10.17%; Manssion +18.65%; MOSH +19%. — [Rebuy: Magic Spoon](https://www.casestudies.com/company/rebuy-engine/case-study/magic-spoon-casts-a-spell-with-smart-cart-boosts-aov-1475); [Rebuy: Legendary Foods](https://www.casestudies.com/company/rebuy-engine/case-study/legendary-foods-boosts-aov-by-15-with-rebuy); [Rebuy: Angela Caglia](https://www.casestudies.com/company/rebuy-engine/case-study/angela-caglia-skincare-boosts-aov-3099); [Rebuy: Luno](https://www.rebuyengine.com/case-studies/luno); [Rebuy: Manssion](https://www.casestudies.com/company/rebuy-engine/case-study/manssion-finds-the-perfect-fit-boosts-aov-by-1865); [Rebuy: MOSH](https://www.casestudies.com/company/rebuy-engine/case-study/mosh-increased-aov-19-and-turned-a-surge-of-tv-fueled-traffic-into-long-term-subscriber-growth-with-rebuy)
- Quantity breaks (Kaching Bundles, used by FitSleeps):
  - [VENDOR] Axzenia +23% AOV and $109,800 additional revenue; Flush Packaging +23% AOV; TrailSurvivor "doubles AOV"; HELLO $609,000 additional sales; Vistevas add-to-cart rate 6% to 8%. — [Kaching: Axzenia](https://www.casestudies.com/company/kaching-appz/case-study/how-axzenia-boosted-their-aov-by-23-and-generated-109800-in-additional-revenue); [Kaching: Flush Packaging](https://www.casestudies.com/company/kaching-appz/case-study/flush-packaging-boosts-aov-by-23-and-makes-shopping-more-efficient-with-kaching-appz); [Kaching: TrailSurvivor](https://www.casestudies.com/company/kaching-appz/case-study/trailsurvivor-doubles-aov-with-kaching-bundle-quantity-breaks); [Kaching: HELLO](https://www.casestudies.com/company/kaching-appz/case-study/hello-does-609000-in-additional-sales-using-kaching-bundle-quantity-breaks); [Kaching case studies index](https://www.casestudies.com/company/kaching-appz)
- Sleep-niche specific:
  - [VENDOR] SomniFix (mouth strips): making the three-pack the default selection, showing a per-unit price breakdown and simplifying mobile checkout lifted AOV by 27% and average revenue per user by 23%; before the change most purchases were the smallest pack because it was pre-selected. — [conversionrate.store: SomniFix](https://conversionrate.store/increase-ecommerce-store-sales/)
  - [VENDOR] Sonno (Malaysian sleep brand): a higher-priced "Starter Bundle" (topper + bedsheet) sold in similar quantities to a cheaper bundle but generated about RM68,000 versus RM7,000-8,000. — [MakeBeCool](https://makebecool.com/blog/how-product-bundles-worked-for-a-shopify-store-in-the-sleep-segment)
  - [SNIPPET] Hostage Tape founder Alex Neist: about $14M in year two, run profitably, with the founder running his own Facebook ads; framed as $40M in year three (June 2024). No AOV or upsell numbers disclosed in the material found. — [2X eCommerce podcast](https://www.audioscrape.com/podcast/2x-ecommerce-podcast/episode/40m-revenue-in-year-3-how-meta-ads-strategic-branding-and-influencers-drive-hostage-tapes-success-alex-neist-80800)
- Protection as an AOV lever:
  - [VENDOR] Baby Brezza: 8.8% attach, AOV +15% (Extend); EVO Gimbals: AOV +10% (Clyde); Felix Gray: 40% shipping-protection attach when pre-checked (Extend); Navidium claims 40-80% attach. — [Extend: Baby Brezza](https://www.extend.com/merchant-case-studies/baby-brezza); [Clyde: EVO Gimbals](https://www.casestudies.com/company/clyde/case-study/evo-gimbals-boosts-aov-10-with-clyde); [Extend: Felix Gray pre-checked](https://www.extend.com/merchant-case-studies/felix-gray-pre-checked-shipping-protection); [Navidium](https://navidiumapp.com/navidium-shipping-protection)
- General bundle economics:
  - [SNIPPET] A CFO-advisory article cites a typical bundle lift of 15-30% in AOV and argues contribution dollars per order is the better metric, because bundles spread fixed per-order costs over more units. — [EightX](https://eightx.co/blog/bundle-pricing-strategy)
  - [SNIPPET] Shopify Masters episode title: "How Offering Bundles Doubled Lume Cube's Average Order Value" (small-gadget brand; details not opened). — [Shopify Masters episode listing](https://chartable.com/podcasts/shopify-masters/episodes/84255404-how-offering-bundles-doubled-lume-cubes-average-order-value)

### Inferences
- The best-evidenced, lowest-cost lever for a one-product store is presentation of the multi-unit offer: pre-select the 2-pack and show the per-band price (SomniFix pattern). It needs no new product or parcel and fits the client's existing 2-for-$64.99 / 3-for-$89.99 ladder.
- Vendor figures of "+15-30% AOV" come from stores with catalogue depth and thousands of orders; with one SKU and 2 orders the client cannot measure a lift yet, so app subscriptions (AfterSell, Rebuy, Kaching, Navidium paid tiers) should be judged on fixed monthly cost versus current order volume.
- FitSleeps' stack (Kaching + SlideCart + AfterSell) mirrors the three placements the vendor case studies cover: product page quantity breaks, cart-drawer add-ons, post-purchase one-click.

### Gaps
- No founder interview, teardown or case study found for FitSleeps, Rise Bands, Dawn Band, Pavlok or Homedics WakeBand describing AOV, attach rates or upsell take rates.
- No Rebuy/Zipify case study for Manta Sleep surfaced; Manta founder interviews found (Mark Zhang) do not give AOV or bundle numbers.
- The Kaching, Rebuy, Extend, MakeBeCool and conversionrate.store case-study pages could not be opened (hosts blocked), so baselines, time periods and sample sizes are unverified; figures are from search-result summaries. The SomniFix subscription-share figure was truncated and is not recorded.
- No independent (non-vendor) benchmark of upsell or protection attach rates for sub-$50 gadgets was found.
