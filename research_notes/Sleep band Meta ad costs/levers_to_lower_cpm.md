# Levers to lower CPM / CPC / cost per purchase on Meta for a ~$45/day e-commerce advertiser (November 2026)

Research caveat for the report writer: page fetching was blocked in this session (every external host failed to resolve), so third-party sources below were read only through search-result summaries and excerpts, not the full pages. Meta Business Help Center articles are the exception: their full text was retrieved through the Meta Ads help-article tool and is quoted directly. Treat third-party numbers as "as reported in search excerpts" and prefer the Meta quotes where the two overlap. Hosts that would need allowing to verify the rest: lebesgue.io, jonloomer.com, mhigrowthengine.com, commonthreadco.com, motionapp.com.

Arithmetic on the advertiser's own numbers (used throughout, not sourced): £126 spend at £54 CPM is roughly 2,300 impressions in total, about 230 per ad across 10 ads. 36 link clicks is a 1.5% link CTR. 2 orders from 36 clicks is a 5.6% click-to-order rate on a sample far too small to trust. Cost per purchase is about £63 (~$81) against a $39.99 product. The brief's own conversion (£35 ≈ $45) implies about $1.29 per £1, so the CPM is about $70 and the cost per link click about $4.50.

## 1. Creative format: do short videos / UGC / Reels beat static images on CPM or CTR?

### Takeaway
The available 2026 data says video does NOT lower CPM: it typically costs 1.3x to 1.4x more per thousand impressions than images, but earns a higher link CTR, so cost per click ends up about level (within roughly 5-7%). The case for adding video is format diversity and conversion lift, not cheaper impressions, and this advertiser's 1.5% link CTR on statics is already at or above the image medians reported.

### Cited Findings
- Across 162 accounts running both formats, video ads averaged $20.73 CPM, 1.34% link CTR and $1.55 CPC, against $15.72 CPM, 0.94% CTR and $1.66 CPC for image ads. The authors state they did not control for placement, audience or creative quality, and the data covers one quarter. — [AdManage.ai](https://admanage.ai/blog/facebook-video-ads-vs-image-ads)
- Across 74 DTC brands, January to September 2026, video had a median link CTR of 1.98% and CPM of $27.41, against 1.38% and $19.42 for image; CPC was almost level at $1.48 (video) against $1.52 (image). — [MHI Growth Engine](https://mhigrowthengine.com/blog/meta-ads-video-vs-image-benchmarks-2026/)
- Static can win in direct-response settings: one 2025 dataset showed static image ads averaging a 1.2% CTR against video's 1.0% in conversion campaigns on warm audiences. — [Stackmatix](https://stackmatix.com/blog/static-image-ads-when-they-outperform-video)
- A vendor guide claims video CTR of 1.84% against static 0.92% and that video wins on every metric; this is a marketing page and is not supported by the two larger datasets above on CPM. — [Fluxnote](https://fluxnote.io/guides/video-ads-vs-static-ads-roi-2026)
- Meta guidance, as relayed by Madgicx, is that campaigns with both static images and video had a 17% higher rate of conversion lift than image-only campaigns. Second-hand; the original Meta study was not located. — [Madgicx](https://madgicx.com/blog/meta-ad-creative-best-practices)
- Motion's Creative Benchmarks 2026 covers $1.29 billion of Meta spend across 578,750 creatives and 6,015 advertiser accounts, for creatives launched 1 September 2025 to 1 January 2026, and includes a hit-rate-by-asset-type table. The values were not visible in the excerpts. — [Motion](https://motionapp.com/library/research/creative-benchmarks-2026/)
- A third-party recap of a Motion talk says only about 5 to 8% of ads become winners. Second-hand. — [Motion talk listing](https://motionapp.com/library/talk/we-analyzed-5000-meta-ads-the-2026-creative-benchmarks-report/)
- A blog attributes to Motion the claim that UGC-style creative beats polished brand content by 27% on CTR and 19% on conversion rate for DTC e-commerce on Meta. It could not be verified against Motion's own pages. — [Webtonic](https://www.webtonic.io/blog/e-commerce-ad-creative-statistics)
- AppsFlyer's creative data (app advertising, not Meta e-commerce) finds neither format outperforms the other as a category. — [AppsFlyer](https://www.appsflyer.com/resources/creative-optimization-report/)
- Meta states that ad relevance (estimated action rates plus ad quality) is part of the auction, so "an ad that's more relevant to a person could win an auction against ads with higher bids", and that "engaging in clickbait and engagement bait does not improve ad performance". — [Meta: About ad auctions](https://www.facebook.com/business/help/430291176997542)

### Inferences
- Expected effect of adding 1-2 honest short videos (product demo, the wristband vibrating, a real customer or founder talking): CPM likely flat to higher, link CTR possibly +0.3 to +0.6 percentage points, CPC roughly unchanged. Any gain in cost per purchase would come from better conversion after the click, which the benchmark data does not measure well. Uncertainty is high; both datasets are observational and confounded by placement (video is served into Reels and Stories, which price differently).
- The advertiser's creative is not the obvious problem. A 1.5% link CTR on images is above both reported image medians (0.94% and 1.38%). The outlier is the CPM: about $70 against reported image medians of $16-$19. Changing format will not close a 3x to 4x CPM gap.
- A silent vibrating alarm is a product whose benefit is hard to show in a still image, so a demo video is a reasonable test on product grounds, independent of the cost data.
- Trade-off: video costs time or money to make; adding ads to the live ad set is a "significant edit" that restarts learning (see section 5); UGC must be genuine and disclosed, not scripted fake testimonials.

### Gaps
- No Meta-published 2026 benchmark comparing CPM or CTR by format was found.
- Motion's actual hit rates and share of spend by format were not readable; Triple Whale, Foxwell Digital, Barry Hott and Varos format data were not surfaced by search.
- No source isolates Reels placement CPM against Feed for a sales campaign in 2026.
- No evidence was found on how much a high-engagement creative lowers CPM in percentage terms; Meta confirms the mechanism but publishes no magnitude.

## 2. Number of creatives: how many ads in one ad set at ~$45/day?

### Takeaway
Ten ads is too many for this budget. Meta itself tells advertisers to "avoid high ad volumes" because the system learns less about each ad, and practitioner rules of thumb converge on roughly 4 to 6 distinct concepts per ad set, with fewer at low budgets.

### Cited Findings
- Meta: "Avoid high ad volumes. When you create many ads and ad sets, the delivery system learns less about each ad and ad set than when you create fewer ads and ad sets." — [Meta: About the learning phase](https://www.facebook.com/business/help/112167992830700)
- Meta lists "running too many ads at the same time" among causes of Learning Limited status. — [Meta: About learning limited](https://www.facebook.com/business/help/269269737396981)
- Meta dropped its older "no more than six ads" recommendation; the right count is now said to depend on budget, because the Andromeda retrieval system can handle more volume only when budget supports learning. Third-party report of Meta's position. — [Top Growth Marketing](https://topgrowthmarketing.com/meta-andromeda-update/)
- Top Growth Marketing recommends counting concepts, not ads: 4 to 6 distinct concepts per ad set, each changing persona, problem, format or setting. Its arithmetic: one ad set needs about $350/day to reach 50 weekly purchases at a $49.04 cost per purchase. — [Top Growth Marketing](https://topgrowthmarketing.com/meta-andromeda-update/)
- Chatterbuzz recommends 6-8 creatives per ad set, reserves 15-25 for accounts spending $5K+ per month, and flags less than $50/day per ad set as a red flag. — [Chatterbuzz Media](https://www.chatterbuzzmedia.com/blog/meta-andromeda-creative-targeting/)
- Common Thread Collective scales output with spend: 8-12 new, conceptually distinct creatives per month for accounts under $10K/month. — [Common Thread Collective](https://commonthreadco.com/blogs/coachs-corner/meta-andromeda-roas-creative-strategy-2026)
- Jon Loomer: lower budgets get diminishing returns from extra ad variations; budget per ad set matters more than total daily budget; with a small budget "there's no reason to micromanage your ads when you're dealing with small sample size results". — [Jon Loomer Pubcast: When Your Budget Is Just Too Small](https://pubcast.jonloomer.com/when-your-budget-is-just-too-small/); [Jon Loomer: How to Think About Your Meta Advertising Budget](https://www.jonloomer.com/meta-advertising-budget/)
- A one-ad-per-ad-set testing setup is described for small budgets, with the stated risk of too few ads per round, each on thin budget. — [AdLibrary](https://adlibrary.com/posts/facebook-ads-creative-testing-small-budget)

### Inferences
- With about 2,300 impressions spread over 10 ads, no individual ad has enough data to be judged; Meta will already have concentrated delivery on one to three of them. Cutting to the 3-5 ads that are actually receiving spend removes little, but turning ads off is cleaner than adding or editing.
- Expected effect on CPM of going from 10 ads to 4-5: small and unproven. No source measured it. The benefit is faster signal per ad, not a cheaper auction.
- If the 10 statics are variations of one idea (same image style, different headline), they count as one or two concepts under the "concepts, not ads" framing, so the account may be under-diversified and over-populated at once.
- Trade-off: pausing ads within an ad set is not on Meta's list of significant edits, but "any change to ad creative" and "adding a new ad" are, so swap-ins should be batched rather than done one at a time.

### Gaps
- No controlled test of 3-6 ads against 10 at budgets near $45/day was found. All figures are rules of thumb.
- Whether pausing individual ads restarts learning is not stated explicitly in the Meta articles retrieved.

## 3. Optimisation event: when to move from Purchase to Add to Cart / Initiate Checkout, or run traffic / engagement to "warm the pixel"

### Takeaway
At £35/day this ad set cannot reach Meta's ~50 purchases a week, so it will sit in Learning Limited whatever is done. Meta's own listed fix includes moving "from purchases to add to cart", while Jon Loomer's position is to keep optimising for purchases even at low budgets; both agree that link-click, landing-page-view and engagement optimisation buy cheap, low-intent traffic.

### Cited Findings
- Meta: ad sets exit learning "after about 50 results in the week after the ad set's last significant edit"; during learning "ad sets are less stable and usually have a higher CPA". — [Meta: About the learning phase](https://www.facebook.com/business/help/112167992830700)
- Meta: "Learning limited isn't a penalty"; it means the system "can't optimize performance with your current setup". Listed causes: "small audience size, low budget, low bid or cost control, high auction overlap, an infrequent optimization event, or other issues such as running too many ads at the same time". — [Meta: About learning limited](https://www.facebook.com/business/help/269269737396981)
- Meta's listed fixes for Learning Limited: combine ad sets and campaigns; expand your audience; raise your budget; raise your bid or cost control; "Change your optimization event. Consider choosing an optimization event that occurs more frequently. For example, move from purchases to add to cart." — [Meta: About learning limited](https://www.facebook.com/business/help/269269737396981)
- Jon Loomer's stated default is that if you want purchases you should optimise for purchases, even on a low budget and even if you are unlikely to exit learning. Search found no Loomer post giving an explicit rule for switching to add to cart. — [Jon Loomer: How to Get Sales with a Low Budget](https://www.jonloomer.com/qvt/how-to-get-sales-with-a-low-budget/)
- Loomer on click-level goals: Meta's algorithm "had only one concern when you created your ad set optimized for Link Clicks or Landing Page Views: Get Link Clicks or Landing Page Views at the lowest cost. No concern about what those people do after landing on your website." He does not generally recommend optimising for link clicks, landing page views, ThruPlay or other engagement-level actions. — [Jon Loomer: Common Ad Set Optimization Mistakes](https://www.jonloomer.com/common-ad-set-optimization-mistakes/)
- In one Loomer test, 96% of landing page views came from Audience Network; he notes it is unclear whether those were accidental clicks, bots or click farms. — [Jon Loomer: Quality Traffic Test #2](https://www.jonloomer.com/quality-traffic-test-2-the-impact-of-meta-ads-placement/)
- Loomer split test: a "quality visitor" cost over $50 when optimising for link clicks, over $13 when optimising for landing page views, and about $1 when optimising for a custom quality-visitor event; CPC was lowest for link clicks, about twice that for landing page views and about 5x for the quality-visitor event. These articles are roughly 6 to 20 months old. — [Jon Loomer: Which Optimization Leads to the Most High-Quality Traffic?](https://www.jonloomer.com/split-test-which-optimization-leads-to-the-most-high-quality-traffic/)
- Third-party threshold rules: use Purchase only above about 10 purchases a week and otherwise move to a higher-funnel event; a Shopify-focused guide tiers the event by weekly order volume. Not Loomer, not Meta. — [Weltpixel](https://weltpixel.com/blogs/news/which-event-should-a-low-volume-shopify-store-optimize-for)
- A Shopify community respondent says they generally skip Add to Cart because it does not always correlate with completed purchases. Anecdote. — [Shopify Community](https://community.shopify.com/t/new-meta-pixel-with-no-purchase-data-best-optimization-strategy-for-a-new-store/650420)
- Wpromote's study on 2020 holiday data concluded add-to-cart-optimised campaigns can put customers on a path to purchase; the numeric results were not visible, and the data predates iOS 14.5 and Advantage+. — [Wpromote Challenger Labs](https://www.wpromote.com/?p=12953)
- Loomer on warming up: asked whether a new page, ad account and pixel need preparation before sales campaigns, his answer was that the priority for a new account is getting money flowing rather than waiting or warming up. Only the summary was readable. — [Jon Loomer Pubcast: Do You Need to Warm Up a New Ad Account?](https://pubcast.jonloomer.com/do-you-need-to-warm-up-a-new-ad-account/)

### Inferences
- The 50-a-week bar is out of reach on Purchase: £245 a week would need a cost per purchase near £4.90. So "exit learning" is not a realistic goal for this account on any budget it can afford; the realistic goal is the best signal per pound.
- Switching to Add to Cart or Initiate Checkout would very likely lower CPM and CPC, because Meta would be bidding for a more common, cheaper action from a wider pool of people. Whether it lowers cost per purchase is uncertain and could go either way: more optimisation events for the system, but people selected for adding to cart, not paying. No source gives a reliable magnitude.
- A defensible order of preference for this account: (a) stay on Purchase and stop editing for at least 7 days after Cyber Monday so the read is not confounded by peak pricing; (b) if add-to-cart volume is running at several a day and purchases stay near zero, test Initiate Checkout or Add to Cart as a time-boxed experiment, judged on orders in the store, not on cheap clicks; (c) do not run traffic, landing-page-view or engagement campaigns to "warm" the pixel.
- Changing the optimisation event is a significant edit and restarts learning, so it should be one deliberate change, not a daily toggle.

### Gaps
- No recent (2025-2026) controlled test comparing Purchase against Add to Cart optimisation on cost per purchase at small budgets was found.
- Loomer's full reasoning on low budgets and on warming up could not be read.
- No data on this account's add-to-cart and initiate-checkout counts was available to say whether a higher-funnel event would reach meaningful volume.

## 4. Audience, placements and geography

### Takeaway
Meta's own guidance is that broader audiences and all placements lower cost per result (11.7% lower CPA for Advantage+ placements in a 147k-campaign experiment), and on Sales campaigns the per-ad-set placement selector is being removed anyway. The US is the dearest English-speaking market in most datasets, with UK, Canada and Australia usually 10-30% cheaper on CPM, but sources disagree and a cheaper CPM does not guarantee a cheaper sale.

### Cited Findings
- Meta: "In an experiment, ad sets using Advantage+ placements delivered an 11.7% lower cost per action (CPA) on average compared to ad sets using manual placement settings." Source note: "budget-controlled experiments on 147k campaigns that ran from August 30 to September 7, 2025". — [Meta: About Advantage+ placements](https://www.facebook.com/business/help/196554084569964)
- Meta: for the leads, app promotion and sales objectives, "these objectives now default to Advantage+ placements and the option to make placement selections is removed in ad sets" (gradual rollout). Awareness, traffic and engagement campaigns still allow placement selection. — [Meta: About Advantage+ placements](https://www.facebook.com/business/help/196554084569964)
- Meta: account-level controls still apply "even if you're using Advantage+ placements", so exclusions remain possible at ad account level. — [Meta: Best alternatives to excluding ad placements](https://www.facebook.com/business/help/338215489130978)
- Meta: "To reduce your overall cost per result, you can expand your audience instead of excluding placements. When your audience is too specific, it may cost more to reach your relevant audience." — [Meta: Best alternatives to excluding ad placements](https://www.facebook.com/business/help/338215489130978)
- Meta: "Advantage+ placements are typically the most efficient use of your budget and helps control costs"; "If your audience is too specific it may cost more to reach your relevant audience." — [Meta: Best practices to potentially reduce cost per result](https://www.facebook.com/business/help/321695409726523)
- A single advertiser A/B test (25 purchases, average CPA about $40) concluded Advantage+ placements were cheaper because budget moved to placements with slightly cheaper conversions. Small, uncontrolled. — [Lebesgue](https://lebesgue.io/facebook-ads/automatic-advantage-or-manual-ad-placement)
- Loomer: CPM is driven by audience size, competition, seasonality, placements and ad quality; narrow targeting raises CPM and broad cold targeting usually lowers it; US-only targeting costs much more than, for example, India. He also says CPM is not a KPI: "A high CPM isn't necessarily bad." — [Jon Loomer: Meta Ads Performance and the Impact of CPM](https://www.jonloomer.com/meta-ads-performance-cpm/)
- Loomer, April 2026, answering an advertiser whose US CPM was about double the UK's on identical ads: country gaps come from competition, a higher CPM does not automatically mean worse performance, and budget should follow conversions; a third-party summary adds that keeping both countries in one ad set lets Meta balance spend. — [Jon Loomer Pubcast: Does a Higher CPM Mean You Should Spend More?](https://pubcast.jonloomer.com/does-a-higher-cpm-mean-you-should-spend-more/)
- E-commerce CPM by country (Lebesgue, 2026): US about $16.08, UK about $11.81, Australia about $11.63, Canada about $11.47. — [Lebesgue](https://lebesgue.io/facebook-ads/facebook-cpm-by-country)
- Other 2026 estimates: US $23, Canada $13.40, Australia $18.50 (range $15-$22). — [Adamigo](https://www.adamigo.ai/blog/meta-ads-cpm-cpc-benchmarks-by-country-2026)
- Other 2026 estimates: US $10.50-$16.80, UK $8.40-$13.60, Canada $9.20-$14.50; large US metros above $20. — [Stackmatix](https://stackmatix.com/blog/facebook-ads-cpm-by-country-2026)
- UK about $10.85 and Canada about $14.03. — [AdManage.ai](https://admanage.ai/blog/facebook-cpm-benchmarks-by-industry)
- GBP-billed accounts show a median CPM of £13.61. — [MHI Growth Engine](https://mhigrowthengine.com/blog/meta-ads-benchmarks-by-billing-currency-2026/)
- Meta's Q3 2026 earnings showed average price per ad up 14% worldwide and 23% in the US and Canada. — [Single Grain](https://www.singlegrain.com/blog-posts/facebook-ads-cost)

### Inferences
- On the Lebesgue figures the UK, Canada and Australia run about 27-29% below the US on CPM; on Adamigo, Canada is about 42% below and Australia about 20% below. A fair summary is "usually 10-30% cheaper, sometimes more, with wide disagreement between sources". None of these gaps is anywhere near the 3x to 4x by which this account's CPM exceeds US benchmarks.
- Adding countries is only sensible if the store can actually ship there at a workable cost and delivery time, with correct pricing, duties and returns stated honestly. For a UK-based seller the UK may be the cheapest market to serve, but a UK price in pounds changes the unit economics and needs its own check.
- Audience Network: on a Purchase-optimised campaign, Meta only buys Audience Network impressions when it predicts a purchase, so excluding it is unlikely to help and Meta's own experiment points the other way. The risk Loomer documents (96% of landing page views from Audience Network) applies to click-optimised campaigns, which is a further reason not to run them.
- Widening age (for example opening above 65 or below 25) is consistent with Meta's "expand your audience" guidance and may lower CPM slightly, but only makes sense if those buyers are plausible. With Advantage+ audience the system already treats most inputs as suggestions, so the effect is probably small.
- Expected size of effect from audience and placement changes for this account: low single digits to perhaps 10%, since it already uses Advantage+ audience and all placements. Trade-off: any targeting change is a significant edit and restarts learning.

### Gaps
- No published test of excluding Audience Network specifically (through account controls) against all placements on cost per purchase was found.
- Jon Loomer's test "Advantage+ Audience vs. Detailed Targeting and Lookalikes" and Wicked Reports' study of 55,661 campaigns appeared in search by title only; their results could not be read.
- How age limits behave under Advantage+ audience in November 2026 (which bounds are hard controls and which are suggestions) was not confirmed from a Meta source in this session. Background knowledge, unverified here: a minimum age can be set as a control and the upper bound is treated as a suggestion.
- Country CPM sources use different methods, dates and verticals, and none is a Meta-published figure. No CPC or conversion-rate comparison by country for a low-ticket gadget was found.

## 5. Budget and structure: budget level, daily vs lifetime, bid strategy, edits and pausing

### Takeaway
Keep one campaign and one ad set, stay on Highest Volume, and stop editing. Meta's list of "significant edits" is explicit: any change to targeting, creative, optimisation event or bid strategy, adding an ad, or pausing for 7 days or longer restarts learning, and learning means "less stable performance and a higher cost per result".

### Cited Findings
- Meta's significant edits: "any change to targeting", "any change to ad creative", "any change to optimization event", "adding a new ad to your ad set", "pausing your ad set for 7 days or longer (the ad set reenters the learning phase once you unpause the ad set)", "changing bid strategy". — [Meta: Significant edits and learning phase](https://www.facebook.com/business/help/316478108955072)
- Meta: budget, spending-limit and bid or cost-goal changes "may or may not be significant, depending on the magnitude"; "if you increase your budget from $100 to $101, that isn't likely to cause one or more ad sets to reenter the learning phase. However, if you change your budget from $100 to $1000, one or more ad sets may reenter". Meta gives no percentage threshold. — [Meta: Significant edits and learning phase](https://www.facebook.com/business/help/316478108955072)
- The widely repeated "20% budget rule" appears in third-party guides only, and they phrase it inconsistently. — [WordStream](https://www.wordstream.com/blog/facebook-learning-phase); [ppc.land](https://ppc.land/learning-phase/)
- Meta: "Wait to edit your ad set until it's out of the learning phase... By editing an ad, ad set or campaign during the learning phase, you reset learning and delay our delivery system's ability to optimize." — [Meta: About the learning phase](https://www.facebook.com/business/help/112167992830700)
- Meta: "Use realistic budgets. If you set a small or inflated budget, the delivery system has an inaccurate indicator of the people for whom the delivery system should optimize. Set a budget large enough to get the total results needed and avoid frequent budget changes." — [Meta: About the learning phase](https://www.facebook.com/business/help/112167992830700)
- Meta on budget and cost: "We will leverage your budget in the ad auction to capture as many opportunities for the lowest cost first. We will then move on to more costly opportunities." So raising budget tends to raise cost per result. — [Meta: Best practices to potentially reduce cost per result](https://www.facebook.com/business/help/321695409726523)
- Loomer: costs tend to climb as more budget goes to an asset. — [Jon Loomer: Meta's Breakdown Effect](https://www.jonloomer.com/breakdown-effect/)
- Loomer: a low budget can be $50 or $100 a day depending on product and expected CPA; consolidate budget; accept slow results and do not micromanage small samples; copying big-budget testing tactics is pointless. Dated April 2025. — [Jon Loomer Pubcast: When Your Budget Is Just Too Small](https://pubcast.jonloomer.com/when-your-budget-is-just-too-small/)
- Bid strategy: guides recommend Highest Volume for new campaigns, switching only after 2-3 weeks and at least 50 conversions. — [TheOptimizer](https://theoptimizer.io/blog/meta-ads-bidding-in-2026-cost-cap-vs-bid-cap-and-when-to-use-each)
- A cost cap set below what the auction requires can stall spending. — [Triple Whale](https://www.triplewhale.com/blog/cost-caps-facebook)
- Suggested cost cap sizing is 20-30% above the current Highest Volume CPA; switching bid strategy restarts learning. — [MHI Growth Engine](https://mhigrowthengine.com/blog/cost-cap-vs-bid-cap-meta/)
- One third-party source claims that after an April 2026 Andromeda update more edits trigger resets and typical exit times stretched to 7-14 days. Single unverified claim. — [ppc.land](https://ppc.land/learning-phase/)

### Inferences
- A cost cap is not usable here yet: there is no stable cost per purchase to anchor it to (2 orders), and at £35/day a cap near break-even would most likely stop delivery. It protects against overspending only by not spending.
- Lowering the budget would not meaningfully lower CPM at this level. Meta's "cheapest opportunities first" logic implies some effect, but £35/day is already tiny relative to the US audience; the main result of cutting budget is slower learning.
- The campaign is 4 days old with roughly 2,300 impressions. Most of what looks like poor performance is within the range of noise for a new ad set in learning during the dearest week of the year. The edits most likely to be made in a panic (new ads, new audience, new event, cost cap) are exactly the ones Meta lists as restarting learning.
- A pause shorter than 7 days is not on Meta's significant-edit list, so a short pause over Black Friday to Cyber Monday (about 5 days) should not by itself restart learning. This is a reading of Meta's wording, not a tested result.

### Gaps
- No evidence was found comparing daily and lifetime budgets on CPM or cost per result. Lifetime budgets allow scheduling and uneven pacing, but no source measured a cost difference.
- No data was found relating budget level to CPM at the under-$100/day scale.
- Common Thread Collective's cost-controls study (Taylor Holiday and Andrew Faris) was found by title only; its numbers could not be read. — [Common Thread Collective](https://commonthreadco.com/blogs/coachs-corner/meta-cost-controls-study-taylor-holiday-andrew-faris)

## 6. Timing: spend through Black Friday / Cyber Monday or pause and resume in December / January?

### Takeaway
BFCM week is the most expensive week of the year for impressions (median CPM about +59% to +84% against September in 2025) but for established brands conversion rates rise enough to offset it. That offset depends on having an offer and a store that converts, which a 4-day-old store with 2 orders has not shown, so a tiny advertiser has a reasonable case for cutting back or pausing for under 7 days and resuming once CPMs ease in December.

### Cited Findings
- 2025 season: median brand CPM peaked at +84% against September on Black Friday and +71% on Cyber Monday, and was still +20% on 3 December; CPMs fell quickly after Cyber Monday but had not fully normalised by 3 December. — [Lebesgue](https://lebesgue.io/facebook-ads/are-meta-ads-worth-it-black-friday)
- Black Friday week median CPM change against September: +80% in 2024 and +59% in 2025. Brands ranged from a 51% fall to a 172% rise. Lebesgue's sample is the largest Meta spenders. — [Lebesgue](https://lebesgue.io/facebook-ads/are-meta-ads-worth-it-black-friday); [NA Media Experts recap](https://www.namediaexperts.com/blog-posts/black-friday-q4-ad-cost-benchmarks-2026-cpm-cpc-by-channel)
- Against September, the median brand's Black Friday week conversion rate rose 48%, cost per purchase fell 20% and Meta-reported ROAS rose 19%. Lebesgue advises judging on profit, not Meta's ROAS. — [Lebesgue](https://lebesgue.io/facebook-ads/are-meta-ads-worth-it-black-friday)
- In 2025 Meta CPMs began rising in the week of 10 November, later than in 2024. — [Lebesgue](https://lebesgue.io/facebook-ads/are-meta-ads-worth-it-black-friday)
- Billy Grace's 2025 analysis found cost per order fell 18% in Black Friday week, with CPM and CPC topping out on Black Friday and easing afterwards. — [ppc.land](https://ppc.land/cost-per-order-drops-18-in-2025-black-friday-week-billy-grace-finds/)
- Early December: Geist reported an 11% increase in CPMs at the beginning of December 2025; for 2024 it saw CPMs stable through the first half of December. — [Geist](https://geistm.com/blog/meta-rate-trends-q4-2025/)
- Late December: CPMs dip between 18 December and the first week of January, and the auction is less competitive in the last week of December. — [Gupta Media](https://www.guptamedia.com/insights/q5-marketing-holiday-advertising)
- January as cheapest month: US CPM lowest at $17.12 in January 2026 against a November 2025 peak of $28.09, and November running 60-100% above January. Single vendor blog. — [Stackmatix](https://stackmatix.com/blog/seasonal-ad-cost-fluctuations-2026)
- Lebesgue: January is generally one of the cheapest months because far fewer advertisers compete; CPMs peak in November and fall sharply in mid-December. — [Lebesgue](https://lebesgue.io/questions/question/what-is-good-cpm)
- Contradicting signal: Northbeam reports CPMs rose 10-20% on average starting January 2026, calling it a normal trend seen several years running, with CPM and CPC trending up through H1 2026. — [Northbeam](https://themediabuyer.northbeam.io/p/data-why-is-everybody-s-meta-performance-tanking)
- Triple Whale data shows a platform-wide CPM increase of 13.24% from August 2025 to July 2026. — [Triple Whale](https://triplewhale.com/blog/facebook-ads-benchmarks)
- Some media buyers plan to buy during "Q5" (late December into January) instead of the holidays. Anecdotal. — [Marketing Brew](https://marketingbrew.com/stories/media-buyers-navigating-higher-ad-prices-on-meta)
- Loomer has argued that rising holiday CPMs were once automatic but are no longer guaranteed. — [Jon Loomer on LinkedIn](https://www.linkedin.com/posts/jonloomer_dont-assume-that-meta-ad-cpms-will-go-up-activity-7132389641021730817-3Bcg)

### Inferences
- Part of the £54 CPM is seasonal. If the seasonal premium on 19 November is in the region of +30% to +60% over a September baseline (the 2025 pattern had CPMs rising from 10 November), the same campaign in mid-December or January might run at very roughly £34-£42 CPM with nothing else changed. That is a rough extrapolation from median-brand data, and it still leaves the CPM well above benchmark.
- The "BFCM pays for itself" finding comes from established brands with offers, email lists, retargeting pools and trained pixels. A new store with no purchase history gets the higher CPM without the proven conversion lift. No source measured BFCM outcomes for new, tiny advertisers.
- Reasonable options: (a) keep running at the current or a reduced budget through BFCM with a genuine, honestly stated offer and accept that the data will be noisy; (b) pause from about Thanksgiving to Cyber Monday (under 7 days, so not a significant edit on Meta's list) and resume in the first week of December; (c) concentrate spend on 26 December to mid-January. Option (c) fits a sleep product if New Year demand is real, but that demand was not verified here.
- The honest-marketing constraint matters most in this week: a discount must be a real reduction from a price that was really charged, with a real end date.

### Gaps
- No source reports BFCM results for new or very small advertisers.
- No day-by-day Meta CPM series for late December 2025 to January 2026 was found, and the two strongest sources on January (Stackmatix and Northbeam) point in opposite directions, probably because one compares January with November and the other with December or the prior trend.
- No data was found on January demand for sleep products or on New Year resolution effects for sleep aids and alarms; this needs checking (for example in Google Trends) before relying on it.
- 2026 BFCM CPM data does not yet exist; all figures are from 2024 and 2025.

## 7. Landing page and post-click: does conversion rate feed back into CPM?

### Takeaway
No evidence was found that a better landing-page conversion rate directly lowers CPM. Meta's auction uses the estimated probability that an impression leads to the advertiser's chosen outcome, so a store that converts gives a Purchase-optimised campaign more and cleaner signal over time, but the proven benefit of conversion-rate work is a lower cost per purchase, not cheaper impressions.

### Cited Findings
- Meta defines estimated action rates as "an estimate of whether a particular person engages with or converts from a particular ad (in other words, the probability that showing an ad to a person leads to that desired outcome of the advertiser)". — [Meta: About ad auctions](https://www.facebook.com/business/help/430291176997542)
- Meta defines ad quality as determined "from many sources including feedback from people viewing or hiding the ad and assessments of low-quality attributes in the ad, such as withholding information, sensationalized language and engagement bait". — [Meta: About ad auctions](https://www.facebook.com/business/help/430291176997542)
- Meta: the winner is the ad with the highest total value, combining bid, estimated action rates and ad quality, "subject to a price floor". Meta publishes no formula; third-party guides state both additive and multiplicative versions. — [Meta: About ad auctions](https://www.facebook.com/business/help/430291176997542)
- Loomer: a high estimated action rate could help win the auction with a lower bid; low-quality ads (clickbait, engagement bait) lead to higher CPM, which he treats as separate from estimated action rate; in one of his examples the cost difference "isn't due to the offer or conversion rate". — [Jon Loomer: Meta Ads Performance and the Impact of CPM](https://www.jonloomer.com/meta-ads-performance-cpm/)
- A practitioner rule of thumb says a CPM above $42 signals that Facebook dislikes something in the ads or on the landing page. Heuristic, undocumented. — [Social Media Examiner](https://www.socialmediaexaminer.com/facebook-ads)
- Diagnostic framing: when conversion rate is below target, the ads may be fine and the site is failing to convert the traffic. — [Storetasker](https://resources.storetasker.com/blog/the-two-meta-ads-metrics-that-actually-matter-joes-lead-factors-framework)

### Inferences
- Mechanism, as far as Meta documents it: with Purchase optimisation, the estimated action rate is the predicted chance of a purchase. Predictions for a new pixel with 2 purchases are weak, so Meta is effectively guessing. More purchases per click gives the model more positive examples sooner. This supports "conversion rate helps delivery indirectly and slowly", not "conversion rate lowers CPM".
- The arithmetic matters more than the auction: at about $4.50 per click, a $39.99 product needs an implausibly high conversion rate to pay back. Even at a typical $1.50 click, a 3% conversion rate is a $50 cost per purchase. Lower CPM alone is unlikely to make a single $39.99 unit profitable on cold traffic; average order value (bundles, multi-packs), conversion rate and repeat or referral value have to carry part of the load.
- Honest levers after the click: page speed on mobile, a clear demonstration of how the band wakes one person without waking another, real reviews only, clear delivery times and returns, and a checkout with no surprise costs. Expected effect on cost per purchase is proportional to the conversion-rate change (a move from 2% to 3% cuts cost per purchase by a third); effect on CPM is unproven.

### Gaps
- No controlled test holding the ad constant while changing only the landing page, and measuring CPM, was found.
- Meta does not publish how post-click behaviour (bounce, dwell time, page speed) feeds ad quality in 2026.
- The store's true conversion rate is unknown; 2 orders from 36 clicks is compatible with almost any rate from under 1% to over 15%.

## 8. Things that do NOT work, or are myths

### Takeaway
Meta states outright that clickbait and engagement bait do not improve ad performance and count against ad quality. Warming up an account, running engagement or traffic campaigns to prime a pixel, repeatedly duplicating ad sets, and frequent tinkering are not supported by Meta documentation or by the more careful practitioners.

### Cited Findings
- Meta: "Engaging in clickbait and engagement bait does not improve ad performance." Ad quality is marked down for "withholding information, sensationalized language and engagement bait". — [Meta: About ad auctions](https://www.facebook.com/business/help/430291176997542)
- Loomer: Meta uses signals from users to detect clickbait and engagement bait, and low-quality ads lead to higher CPM. — [Jon Loomer: Meta Ads Performance and the Impact of CPM](https://www.jonloomer.com/meta-ads-performance-cpm/)
- Account warming: Loomer's answer on a new page, ad account and pixel is that the priority is getting money flowing, not waiting or warming up. A Telegram channel claims the opposite (new accounts get throttled after heavy day-one spend); this is anonymous, undocumented and concerns large day-one spend. — [Jon Loomer Pubcast](https://pubcast.jonloomer.com/do-you-need-to-warm-up-a-new-ad-account/); contradicted by [ScaleOrStall on Telegram](https://t.me/s/ScaleOrStall/9)
- Warming a pixel with traffic or engagement campaigns: Loomer does not recommend optimising for link clicks, landing page views or engagement-level actions because the algorithm then has no concern for what people do afterwards. — [Jon Loomer: Common Ad Set Optimization Mistakes](https://www.jonloomer.com/common-ad-set-optimization-mistakes/)
- Duplicating ad sets: Loomer says identical targeting and optimisation can hurt through auction overlap and that duplication is not necessary for scaling, while allowing that advertisers who find it beneficial can keep doing it. — [Jon Loomer: Should You Duplicate Ad Sets When Scaling?](https://www.jonloomer.com/qvt/should-you-duplicate-ad-sets-when-scaling/)
- Loomer ran identical ad sets against each other and titled the result "Identical Ad Sets, a Split Test, and Chaos", which is evidence that duplicates produce different results by chance. The numbers were not readable. — [Jon Loomer: Results: Identical Ad Sets](https://www.jonloomer.com/results-identical-ad-sets/)
- Meta lists "high auction overlap" as a cause of Learning Limited and recommends combining ad sets. — [Meta: About learning limited](https://www.facebook.com/business/help/269269737396981)
- One vendor argues duplicating campaigns restarts learning and splits conversion signals; another treats duplication as a way to give a poorly started ad set a second chance. — [Aimerce](https://www.aimerce.ai/blogs/why-duplicating-campaigns-to-scale-doesn-t-work-anymore); contradicted by [Birch](https://bir.ch/blog/duplicate-facebook-ad)
- Frequent edits: Meta says editing during learning resets it and to "only edit your ads or ad set when you have reason to believe that the edit should improve performance". — [Meta: About the learning phase](https://www.facebook.com/business/help/112167992830700)
- Excluding placements to save money: Meta's own experiment found the opposite (11.7% lower CPA with all placements). — [Meta: About Advantage+ placements](https://www.facebook.com/business/help/196554084569964)
- Treating CPM as the goal: Loomer says CPM is not a KPI and a high CPM is not necessarily bad. — [Jon Loomer: Meta Ads Performance and the Impact of CPM](https://www.jonloomer.com/meta-ads-performance-cpm/)

### Inferences
- "Duplicate and hope" works, when it works, by re-rolling the dice on early delivery. At £35/day, splitting the budget across duplicates halves the data each one gets, which is the opposite of what Meta and Loomer advise.
- The cheapest way to lower CPM is to change what Meta is asked to buy (clicks, landing page views, engagement, cheaper countries with no real demand). That lowers the headline number and usually raises cost per sale. Any CPM reduction should be judged on orders in the store.
- Outdated advice to flag for this advertiser: interest stacking and narrow detailed targeting; manual placement selection on Sales campaigns (being removed); the "six ads maximum" rule and the "20% budget rule" as if they were Meta policy; lookalike audiences as a starting point for a pixel with 2 purchases.
- Non-compliant shortcuts are also poor economics: fake reviews, fake countdown timers, invented "was" prices and engagement bait risk ad rejection, account restriction and consumer-law exposure, and Meta says engagement bait lowers ad quality.

### Gaps
- No controlled evidence on account or pixel warming exists either way; the claim that it is unnecessary rests on Loomer's opinion and on the absence of any Meta documentation supporting it.
- The specific results of Loomer's identical-ad-set test could not be read.
- Views from Foxwell Digital, Barry Hott, Andrew Faris, Depesh Mandalia, Varos and Madgicx on these myths were not surfaced by search and could not be fetched.
