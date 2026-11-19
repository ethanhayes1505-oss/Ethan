# Meta ad auction: what sets CPM and CPC, and what makes them high for a very small advertiser (state as of Nov 2026)

Reading notes for the report writer:
- "OFFICIAL" = Meta Business Help Center text, retrieved 19 Nov 2026 through Meta's own help-article lookup, so it reflects the live wording. Quotes are verbatim with capitalisation restored. Help Center articles carry no publication date.
- "PRACTITIONER" = opinion or third-party data. Practitioner sites (jonloomer.com, triplewhale.com and others) could not be opened from this session, so those items rest on search-result excerpts only, not on a full read of the page. Treat exact wording and numbers as unconfirmed.
- Scenario used for arithmetic: one Sales campaign, one ad set, about $45/day, Purchase optimisation, US, Advantage+ audience, Advantage+ placements, 10 static image ads, new pixel (2 purchases, about 3 add-to-carts), about 4 days old, $39.99 product.

## 1. How does Meta's auction compute "total value"?

### Takeaway
Meta says the winner is the ad with the highest "total value", a combination of advertiser bid, estimated action rate and ad quality, so a more relevant ad can beat a higher bid. Meta's Help Center does not publish the equation itself; the only arithmetic it states is that bid per impression = bid per estimated action x estimated action rate.

### Cited Findings
- OFFICIAL: "To ensure that the winning ad maximizes value for both people and businesses, the winner of the auction is the ad with the highest total value, subject to a price floor (minimum price) that may affect whether an ad is shown and the price paid. The total value is a combination of 3 major factors" — [About ad auctions](https://www.facebook.com/business/help/430291176997542)
- OFFICIAL, factor 1: "Bid: The bid placed by an advertiser for that ad (in other words, what the advertiser is willing to pay to achieve their desired outcome)." — [About ad auctions](https://www.facebook.com/business/help/430291176997542)
- OFFICIAL, factor 2: "Estimated action rates: An estimate of whether a particular person engages with or converts from a particular ad (in other words, the probability that showing an ad to a person leads to that desired outcome of the advertiser)." — [About ad auctions](https://www.facebook.com/business/help/430291176997542)
- OFFICIAL, factor 3: "Ad quality: A measure of the quality of an ad as determined from many sources including feedback from people viewing or hiding the ad and assessments of low-quality attributes in the ad, such as withholding information, sensationalized language and engagement bait." — [About ad auctions](https://www.facebook.com/business/help/430291176997542)
- OFFICIAL: "Together, estimated action rates and ad quality measure ad relevance. Because these are components of the auction, an ad that's more relevant to a person could win an auction against ads with higher bids." — [About ad auctions](https://www.facebook.com/business/help/430291176997542)
- OFFICIAL, the one explicit formula: "Within the auction we will calculate: Bid per impression = Bid per estimated action x Estimated action rate." — [About bid cap](https://www.facebook.com/business/help/272503946776144)
- OFFICIAL: an auction happens for every impression opportunity, and the competitors are every ad whose target audience includes that person ("each time there's an opportunity to show an ad to someone, an auction takes place"). — [About ad auctions](https://www.facebook.com/business/help/430291176997542)
- OFFICIAL, account-level adjustments: "We may use data about you and your ad account to make adjustments that could affect auction outcomes and prices, such as to improve ad quality and relevance, test or support ad types and ad products, optimize the auction or comply with the law, account for regional and other unique business costs, enforce our terms, policies and other standards including fostering a safe and trustworthy environment on our platform. But such auction adjustments will not cause us to charge you more than your bid to show your ad." — [About ad auctions](https://www.facebook.com/business/help/430291176997542)
- OFFICIAL (Instagram Help Center, from a search excerpt, not opened): the auction's machine-learning models calculate a "total value score" from the advertiser bid, the estimated action rate and the ad quality score, and "an advertiser with the highest bid doesn't always win". — [How Instagram ads use machine learning](https://help.instagram.com/119516847899397)
- OFFICIAL: with the default Highest volume strategy the advertiser sets no bid; "we'll aim to get the most results possible from your budget" and "your CPA may fluctuate. For example, if auction competition decreases, costs may go down. If auction competition increases, costs may go up." — [About highest volume](https://www.facebook.com/business/help/721453268045071)
- PRACTITIONER: third-party explainers disagree on the equation. Search results showed three versions: Bid x Estimated Action Rate + Ad Quality, Bid x Estimated Action Rate x Ad Quality, and Bid + Estimated Action Rate + Ad Quality. — [Dotidot](https://www.dotidot.io/post/meta-ads-auction-how-facebook-decides-which-ads-win); [Modern Marketing Institute](https://www.modernmarketinginstitute.com/blog/how-the-meta-ads-auction-actually-works-a-conceptual-deep-dive-for-serious-ad-strategists)

### Inferences
- Combining the two official statements gives the commonly quoted shape: (bid per action x estimated action rate) is the money-denominated part of total value, and ad quality is the third component. The additive form "bid x estimated action rate + quality/user value" is consistent with Meta's wording but is not printed in the Help Center articles retrieved.
- CPM is not a price list. It is the average of what the advertiser's system-generated bids had to clear across the auctions it won. Under Highest volume the system raises or lowers the bid automatically to spend the daily budget, so CPM reflects who is being targeted (and how contested they are), not a penalty Meta applies.
- For this advertiser the estimated action rate is the weak term: with 2 recorded purchases the system has almost nothing account-specific to predict purchase probability from, so predictions lean on general signals.
- The "price floor" and "data about you and your ad account" sentences are the only official wording that admits prices can vary for account-level reasons.

### Gaps
- No Meta page was retrieved that prints the full equation with a plus sign. The report should describe the three factors and the bid-per-impression formula rather than assert a single official equation.
- Meta does not publish how heavily ad quality is weighted against the bid term.

## 2. Why does Purchase optimisation produce a higher CPM than link clicks, landing page views or add to cart, and is that a problem?

### Takeaway
Meta does not publish CPM-by-goal figures, but its auction description explains the pattern: the bid is aimed at people with a high predicted probability of the chosen action, and likely buyers are fewer and more contested than likely clickers. Practitioners agree a high CPM under Purchase optimisation is the expected price of that audience and should be judged by cost per purchase, not by CPM or CPC.

### Cited Findings
- OFFICIAL: the bid in the auction is per estimated action, converted to a per-impression bid by multiplying by the estimated action rate. — [About bid cap](https://www.facebook.com/business/help/272503946776144)
- OFFICIAL: the performance goal tells the delivery system "who to show your ads to"; the Sales objective with a website conversion location offers maximise conversions, maximise value, landing page views, link clicks, daily unique reach and impressions. — [Performance goals available by ad objective and conversion location](https://www.facebook.com/business/help/416997652473726)
- OFFICIAL: "If your goal is to get more conversions: We recommend trying to optimize for conversions first." — [Best practices for landing page view performance goals](https://www.facebook.com/business/help/203012060587398)
- OFFICIAL: landing page view optimisation is recommended over link click optimisation for traffic "since the former can improve traffic quality". — [Best practices for landing page view performance goals](https://www.facebook.com/business/help/203012060587398)
- PRACTITIONER (Jon Loomer, search excerpt): when optimising for link clicks Meta's only concern is getting as many link clicks as possible, which may come from accidental clicks, bots prior to detection, and click-happy people. — [Common Ad Set Optimization Mistakes](https://www.jonloomer.com/common-ad-set-optimization-mistakes/)
- PRACTITIONER (Jon Loomer, search excerpt): CTR, CPC and CPM are "easy to manipulate"; click optimisation gives very high CTRs and very low CPCs that look good on the surface, while conversion optimisation costs more per click. — [Meta Ads Performance and the Impact of CPM](https://jonloomer.com/cpm)
- PRACTITIONER, PRE-2025 AND LIKELY OUTDATED (Jon Loomer, old oCPM-era test, date not confirmed): optimised delivery had a CPM of $5.24 versus $1.37 for unoptimised CPM, with similar cost per link click ($0.09 vs $0.10). Useful only as an illustration that optimised delivery pays more per impression. — [CPM or oCPM](https://www.jonloomer.com/cpm-or-ocpm-facebook-ads/amp/)
- PRACTITIONER (Triple Whale, search excerpt): CPM sits at the top of the metric "waterfall", so a high CPM makes every downstream cost more expensive unless click and conversion rates compensate. — [Triple Whale ad account audit](https://www.triplewhale.com/blog/ad-account-audit)

### Inferences
- Mechanism: under Purchase optimisation the system bids high only where predicted purchase probability is high. Those people are also the ones every other e-commerce advertiser's purchase-optimised campaigns want, so the clearing price per impression is higher. Under link-click optimisation the bid is spread over cheap, click-prone impressions, so CPM falls.
- Therefore CPM under Purchase optimisation cannot be compared with CPM under click or add-to-cart optimisation. The comparable number is cost per purchase.
- The caveat for this account: paying a "likely buyer" price only pays off if Meta's purchase predictions are good. With 2 purchases in the pixel, predictions for this specific product are weak, so the advertiser may be paying a premium CPM without yet getting the targeting accuracy that justifies it.

### Gaps
- No official Meta table or statement of typical CPM by performance goal was found.
- No current (2025-2026) controlled test comparing CPM across goals for the same creative and audience was found; the only numeric test surfaced is the old oCPM one.
- The exact page each Jon Loomer excerpt came from was not confirmed because the site could not be opened.

## 3. What are the learning phase and "learning limited", and what happens with far fewer than about 50 events a week?

### Takeaway
Meta says an ad set leaves learning after about 50 results in the week after its last significant edit, that during learning "ad sets are less stable and usually have a higher CPA", and that Learning limited is "not a penalty" but a sign the budget "isn't being spent effectively". At $45/day on a $39.99 product, 50 purchases a week is arithmetically out of reach.

### Cited Findings
- OFFICIAL: "The learning phase is the period when the delivery system still needs to learn about how an ad set may deliver and perform." — [About the learning phase for ad sets](https://www.facebook.com/business/help/112167992830700)
- OFFICIAL: "ad sets exit the learning phase as soon as they can deliver stably. This usually occurs after about 50 results in the week after the ad set's last significant edit." — [About the learning phase for ad sets](https://www.facebook.com/business/help/112167992830700)
- OFFICIAL: "During the learning phase, ad sets are less stable and usually have a higher CPA." and "performance is less stable, so your results aren't necessarily indicative of future performance." — [About the learning phase for ad sets](https://www.facebook.com/business/help/112167992830700)
- OFFICIAL: "Use realistic budgets. If you set a small or inflated budget, the delivery system has an inaccurate indicator of the people for whom the delivery system should optimize. Set a budget large enough to get the total results needed" — [About the learning phase for ad sets](https://www.facebook.com/business/help/112167992830700)
- OFFICIAL: "Avoid high ad volumes. When you create many ads and ad sets, the delivery system learns less about each ad and ad set than when you create fewer ads and ad sets." — [About the learning phase for ad sets](https://www.facebook.com/business/help/112167992830700)
- OFFICIAL: "Learning limited isn't a penalty – it's an indication that your budget isn't being spent effectively because the ad delivery system can't optimize performance with your current setup." — [About learning limited](https://www.facebook.com/business/help/269269737396981)
- OFFICIAL: "An ad set becomes learning limited when it is unlikely to receive about 50 optimization events in the week after your last significant edit. This diagnosis can happen any time after you create an ad set or make a significant edit" — [About learning limited](https://www.facebook.com/business/help/269269737396981)
- OFFICIAL, causes: "small audience size, low budget, low bid or cost control, high auction overlap, an infrequent optimization event, or other issues such as running too many ads at the same time." — [About learning limited](https://www.facebook.com/business/help/269269737396981)
- OFFICIAL, fixes listed: combine ad sets and campaigns; expand the audience; raise the budget; raise the bid or cost control; change the optimisation event. — [About learning limited](https://www.facebook.com/business/help/269269737396981)
- OFFICIAL: significant edits that restart learning include any change to targeting, any change to ad creative, any change to optimisation event, adding a new ad to the ad set, pausing the ad set for 7 days or longer, and changing bid strategy. Budget changes may or may not count depending on size ("$100 to $101" unlikely, "$100 to $1000" may). — [Significant edits and learning phase](https://www.facebook.com/business/help/316478108955072)
- OFFICIAL: evaluate cost per optimisation event after about 50 events, "but some ad sets stabilize earlier". — [Cost per optimization event](https://www.facebook.com/business/help/1707952432550214)
- OFFICIAL: "A conversion-optimized ad set needs to get about 50 or more of the conversion it's optimized for per week to have a chance at being effective." — [Best practices for landing page view performance goals](https://www.facebook.com/business/help/203012060587398)
- PRACTITIONER (blog summaries, search excerpt): only the event being optimised for counts towards the 50; add-to-carts do not count for a Purchase-optimised ad set. One blog states the roughly 50-per-7-days guidance was unchanged as of July 2026. — [The Ad Spend](https://theadspend.com/blog/learning-phase); [AdManage](https://admanage.ai/blog/facebook-ads-learning-phase-guide)

### Inferences
- Arithmetic for this account: $45/day is $315/week. Fifty purchases a week would need a cost per purchase of $6.30 or less, on a $39.99 product. At the e-commerce benchmark CPA of roughly $38 (see question 9) the budget buys about 8 purchases a week. The ad set will be Learning limited for as long as it optimises for Purchase at this budget.
- Meta's own wording gives three of its named Learning limited causes in this setup: low budget, an infrequent optimisation event, and "running too many ads at the same time".
- At 4 days old, the ad set is still inside its first learning week. Meta explicitly says results in this window "aren't necessarily indicative of future performance", so 4 days of CPM, CPC and CPA data are weak evidence either way.
- Every edit to creative, targeting or optimisation event restarts the clock, so reacting to early numbers by swapping ads prolongs the unstable period.

### Gaps
- Meta gives no number for how much higher CPA or CPM is in learning or Learning limited. A "2.5x higher CPA variability" figure appeared in one blog attributed to Meta but could not be traced to Meta documentation; do not use it.
- A "budget changes under 20% don't reset learning" rule appears in blogs only; Meta's text gives no percentage.

## 4. What does Meta say about choosing a higher-funnel event when purchase volume is too low?

### Takeaway
Meta officially suggests it in two places: move "from purchases to add to cart" as a fix for Learning limited, and use landing page view optimisation when an ad set cannot get about 50 conversions a week. The only threshold Meta gives is that same roughly-50-a-week figure. Practitioners are split, and the best-known one (Jon Loomer) says to keep optimising for Purchase anyway.

### Cited Findings
- OFFICIAL: "Change your optimization event. Consider choosing an optimization event that occurs more frequently. For example, move from purchases to add to cart." — [About learning limited](https://www.facebook.com/business/help/269269737396981)
- OFFICIAL: "Maximize number of conversions does not work for everyone. A conversion-optimized ad set needs to get about 50 or more of the conversion it's optimized for per week to have a chance at being effective. If your ad set doesn't get that many conversions per week, landing page view optimization could be an effective alternative. It's also a good choice if you don't have lower-funnel events (such as purchase conversions) set up yet with your Meta Pixel." — [Best practices for landing page view performance goals](https://www.facebook.com/business/help/203012060587398)
- OFFICIAL: cost per result goal bidding "works best when your ad set gets at least 50-100 weekly conversions"; below that, "consider broadening your audience, increasing your budget, or raising your cost per result goal." — [About cost per result goal](https://www.facebook.com/business/help/272336376749096)
- PRACTITIONER (Jon Loomer, search excerpt): "If you want purchases, optimize for purchases. Even if you have a low budget and are unlikely to exit the learning phase, prioritize optimizing for the action that you want." He also concedes it is "challenging to optimize for a purchase if you're only spending $10 per day". — [Common Ad Set Optimization Mistakes](https://www.jonloomer.com/common-ad-set-optimization-mistakes/)
- PRACTITIONER (Jon Loomer): he has floated add-to-cart as the primary goal when purchases cannot exit learning, framed as a feature he wants from Meta (a secondary performance goal), not a firm recommendation. — [Should Meta offer a secondary performance goal](https://www.jonloomer.com/qvt/should-meta-offer-a-secondary-performance-goal/)
- PRACTITIONER (Shopify Community commenter, anecdotal): Initiate Checkout can be a reasonable temporary step on a very small budget; add to cart is often skipped because it does not always correlate with completed purchases. — [Shopify Community thread](https://community.shopify.com/t/new-meta-pixel-with-no-purchase-data-best-optimization-strategy-for-a-new-store/650420)
- PRACTITIONER (Adzooma, search excerpt): add-to-cart optimisation also needs about 50 events in 7 days to exit learning. — [Adzooma](https://adzooma.com/?p=27155)

### Inferences
- Official guidance and the leading practitioner view conflict. Meta's help text says switch to a more frequent event; Loomer says stay on Purchase. Both accept the trade-off: a higher-funnel event gives the system more signal but aims it at people who add to cart or load the page, who are not the same people as buyers.
- Volume check for this account: about 3 add-to-carts and 2 purchases in 4 days. Even add to cart is far from 50 a week at $45/day (roughly 5 a week at the current rate), so switching to add to cart would not exit learning either. Only link clicks or landing page views would reach 50 a week at this spend.
- A switch of optimisation event is a significant edit and restarts learning.

### Gaps
- Meta gives no decision rule beyond "about 50 a week", and no data comparing purchase outcomes between Purchase-optimised and add-to-cart-optimised ad sets at low volume.
- No reliable recent test data from practitioners was retrieved on this trade-off for sub-$50/day accounts.

## 5. How do ad relevance diagnostics affect cost, and when are they shown?

### Takeaway
The three rankings need at least 500 impressions per ad and are explicitly "not inputs into the ad auction"; they are a readout of the relevance components that are. Meta says more relevant ads "cost less and see more results", and that the rankings should be used only to diagnose under-performing ads.

### Cited Findings
- OFFICIAL: "To ensure ad relevance diagnostics are accurate, ad relevance diagnostics aren't available for ads with fewer than 500 impressions. Ad relevance diagnostics aren't inputs into the ad auction." — [About ad relevance diagnostics](https://www.facebook.com/business/help/403110480493160)
- OFFICIAL: "we consider how relevant each ad is to a person before delivering an ad to that person. Ads that are more relevant cost less and see more results." — [About ad relevance diagnostics](https://www.facebook.com/business/help/403110480493160)
- OFFICIAL: quality ranking is "how your ad's perceived quality compared to ads competing for the same audience", measured through "feedback from people viewing or hiding the ad and assessments of low-quality attributes in the ad, such as withholding information, sensationalized language and engagement bait." — [About quality ranking](https://www.facebook.com/business/help/303639570334185)
- OFFICIAL: engagement rate ranking compares expected engagement rate, "the likelihood that a person will click, react to, comment on, share or expand an ad." — [About engagement rate ranking](https://www.facebook.com/business/help/2351270371824148)
- OFFICIAL: conversion rate ranking compares expected conversion rate against "ads with the same optimization goal competing for the same audience". — [About conversion rate ranking](https://www.facebook.com/business/help/617529305373441)
- OFFICIAL, scale: Above average; Average (35th to 55th percentile); Below average (bottom 35%, bottom 20%, bottom 10% of ads). Rankings are available for the last 35 days only. — [About quality ranking](https://www.facebook.com/business/help/303639570334185)
- OFFICIAL: "use ad relevance diagnostics to diagnose underperforming ads – not to optimize ads that are already meeting your advertising objectives." and "Sometimes high performing ads have below average ad relevance diagnostics rankings and that's OK." — [How to use ad relevance diagnostics](https://www.facebook.com/business/help/436113280262012)
- OFFICIAL: "It's more impactful to move a ranking from low to average than it is to move a ranking from average to above average". — [How to use ad relevance diagnostics](https://www.facebook.com/business/help/436113280262012)
- OFFICIAL, interpretation examples: quality and engagement average or above with conversion below average means "The ad isn't producing conversions. Improve the call-to-action of your ad or post-click experience, or target a higher-intent audience." Quality below, engagement average or above, conversion below means "This ad is click-baity or controversial." — [How to use ad relevance diagnostics](https://www.facebook.com/business/help/436113280262012)
- OFFICIAL: "Some products and services naturally exhibit lower conversion rates than others competing in the same ad auction." — [About conversion rate ranking](https://www.facebook.com/business/help/617529305373441)

### Inferences
- The rankings do not cause cost; the underlying estimated action rate and ad quality do. A "Below average" quality ranking signals that the quality term in total value is low, which means the ad must win with a higher effective bid, which shows up as higher CPM.
- Impression arithmetic for this account: $45/day split evenly over 10 ads is $4.50 per ad per day. At a CPM of $15 to $30 that is 150 to 300 impressions per ad per day, so 2 to 4 days to reach 500 per ad if delivery were even. Delivery is never even, so at day 4 some ads will have rankings and several probably will not. Rankings on a few hundred impressions are thin evidence.
- Conversion rate ranking compares against other purchase-optimised ads, most with far more conversion history, so a new account should expect a weak conversion ranking early.

### Gaps
- Meta does not quantify the cost difference between ranking bands.
- Whether ranking coverage has changed for flexible-format or Advantage+ creative ads in 2026 was not confirmed (the articles say rankings are unavailable for dynamic creative).

## 6. How do too many ads in one ad set at a small budget affect delivery?

### Takeaway
Meta's Help Center says that with too many ads "each ad delivers less often", "fewer ads exit the learning phase", and "too many ads can result in worse performance", and it lists "running too many ads at the same time" as a cause of Learning limited. Its stated fix is fewer ads per ad set with diverse creative. Andromeda-era advice to run many ads comes with a budget condition that a $45/day account does not meet.

### Cited Findings
- OFFICIAL: "When an advertiser runs too many ads at once, each ad delivers less often. This means that fewer ads exit the learning phase, and more budget is spent before the delivery system can optimize performance. In other words, too many ads can result in worse performance." — [About managing ad volume](https://www.facebook.com/business/help/2720085414702598)
- OFFICIAL: "Decrease ads per ad set, but maintain diverse creative assets per ad set. One ad can contain multiple (up to 10) creative assets." — [About managing ad volume](https://www.facebook.com/business/help/2720085414702598)
- OFFICIAL: "Testing new creative and marketing strategies is still important. However, advertisers should balance these tactics with ensuring that the delivery system has ample opportunity to learn about each ad." — [About managing ad volume](https://www.facebook.com/business/help/2720085414702598)
- OFFICIAL, dating note: the same article still recommends dynamic creative for testing variants while carrying a banner that, from June 2024, dynamic creative may be unavailable for Sales campaigns and "using flexible ad format to achieve a similar result is recommended". The body text therefore predates 2025. — [About managing ad volume](https://www.facebook.com/business/help/2720085414702598)
- OFFICIAL: Meta has a "Creative diversity" metric: "calculated by comparing the images and video thumbnails in your ad set to each other to determine similarity. This is converted into a score and given a label of high, medium, or low", used "to determine if more varied images and videos need to be added to an ad set to help prevent creative fatigue and improve performance." It is marked "in development". — [Creative diversity](https://www.facebook.com/business/help/2371176336684086)
- OFFICIAL: adding a new ad to an ad set, or changing ad creative, is a significant edit that restarts learning. — [Significant edits and learning phase](https://www.facebook.com/business/help/316478108955072)
- OFFICIAL, PRE-2025 (Meta Engineering, 2 Dec 2024, search excerpt): Andromeda is "a personalized ads retrieval engine" for the retrieval stage; Meta reports "+6% recall improvement to the retrieval system, delivering +8% ads quality improvement on selected segments". — [Meta Engineering: Andromeda](https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/)
- OFFICIAL, unverified by page read (Meta Engineering, dated 28 Oct 2026 in the search result): a next-generation Andromeda post reports scoring over one billion ads per second, described as a 100x lift over the 2024 system. These are Meta's own infrastructure figures, not advertiser outcomes. — [Meta Engineering: next-gen Andromeda](https://engineering.fb.com/2026/10/28/ml-applications/meta-andromeda-next-gen-ads-retrieval-gpu-co-design/)
- PRACTITIONER (Jon Loomer, search excerpt): Meta once recommended no more than six ads per ad set, saying there was no clear benefit beyond six; he now runs far more, including one ad set with 50 ads. — [Meta Andromeda: What It Means for Your Ad Strategy](https://www.jonloomer.com/meta-andromeda/)
- PRACTITIONER (Hunch, search excerpt): the six-ad recommendation was dropped because Andromeda can handle more volume, "but only when budget supports proper learning". — [Hunch: Meta Andromeda explained](https://www.hunchads.com/blog/meta-andromeda-explained)
- PRACTITIONER (AdExchanger, search excerpt): warns against the belief that 20 or more creatives per ad set is universally beneficial. — [AdExchanger](https://www.adexchanger.com/data-driven-thinking/what-metas-andromeda-update-actually-changes-and-what-it-doesnt/)
- PRACTITIONER (vendor guidance, search excerpt, methodology undisclosed): suggested ranges of 6 to 8 creatives per ad set for smaller accounts, 15 to 25 for accounts spending $5K+ a month; under $10K a month, 8 to 12 new distinct concepts per month. — [Segwise](https://segwise.ai/blog/meta-andromeda-update-creative-strategy-2026.md)
- CONFLICT: Hunch states Meta does not scan ad visuals to judge diversity; Meta's own Creative diversity metric says it compares images and video thumbnails for similarity. — [Hunch](https://www.hunchads.com/blog/meta-andromeda-explained); contradicted by [Creative diversity](https://www.facebook.com/business/help/2371176336684086)

### Inferences
- Ten static images at $45/day is about $4.50 per ad per day if spread evenly. In practice Meta concentrates spend on one to three ads early, so most of the ten get too few impressions to be judged and the "test" produces little information per ad.
- If the ten images are variations of the same concept (same product shot, different headline or background), Meta's own similarity metric would label them low diversity; practitioner Andromeda guidance says near-duplicates add volume without adding distinct signals. Diversity of concept matters, not count.
- Ad count mainly harms learning speed and data per ad. It is not, by itself, an auction penalty that raises CPM; the retrieved Meta text links ad volume to learning and performance, not to price per impression.
- Removing or adding ads now would be a significant edit, so consolidation has a short-term cost (learning restart) against a longer-term benefit (more delivery per ad).

### Gaps
- Meta's current Help Center gives no specific number of ads per ad set. The old six-ad figure is reported by practitioners as retired; no current Meta page stating or retiring it was retrieved.
- No Meta guidance was found tying a recommended ad count to daily budget.
- Whether the Creative diversity score feeds delivery, or is only a reporting diagnostic, is not stated.
- The 2025-2026 Meta creative-diversification guidance widely cited by practitioners (Performance 5 material) was not retrieved directly.

## 7. How do audience breadth, Advantage+ audience, age limits and placement choices affect CPM?

### Takeaway
Meta's official position is that broader is cheaper per result: Advantage+ audience showed 7.2% lower cost per result for Sales objectives and Advantage+ placements 11.7% lower CPA in Meta's own experiments. With Advantage+ audience on, only the minimum age is a hard limit; a 25 to 65 range is otherwise a suggestion. For Sales campaigns manual placement selection is being removed, so placement exclusion is largely no longer an ad set lever.

### Cited Findings
- OFFICIAL: Advantage+ audience "can help your campaign reach people you may not have targeted manually, which can lower your cost per result"; it draws on "past conversions", "Meta pixel data" and "interactions with previous ads". — [About Advantage+ audience](https://www.facebook.com/business/help/273363992030035)
- OFFICIAL, PRE-2025 DATA: "7.2% lower cost per result with the sales and app promotion objectives", from a meta-analysis of 469 A/B studies run 1 Jan 2023 to 1 Aug 2024; setups already using broad audiences were excluded as equivalent. — [About Advantage+ audience](https://www.facebook.com/business/help/273363992030035)
- OFFICIAL: "Audience controls limit who can see your ads. You can choose locations, minimum age, custom audiences to exclude and languages." Audience suggestions (age, gender, detailed targeting, custom audiences) "don't always constrain your audience". — [About audience controls and audience suggestions in Advantage+ audience](https://www.facebook.com/business/help/938372127764391)
- OFFICIAL: "By default, age targeting and gender targeting are set as audience suggestions, apart from minimum age which is an audience control." To hard-limit an age range you select "Further limit the reach of your ads", after which "you may no longer be using Advantage+ audience". — [Age and gender targeting](https://www.facebook.com/business/help/151999381652364); [Choose audience settings in Advantage+ campaigns](https://www.facebook.com/business/help/25941857932125812)
- OFFICIAL: "Only remove a suggestion to reflect business needs, so you don't miss any opportunities to maximize performance." — [Choose audience settings in Advantage+ campaigns](https://www.facebook.com/business/help/25941857932125812)
- OFFICIAL: "Expand your audience. The larger the audience, the more opportunities for people to complete your optimization event." — [About learning limited](https://www.facebook.com/business/help/269269737396981)
- OFFICIAL: "ad sets using Advantage+ placements delivered an 11.7% lower cost per action (CPA) on average compared to ad sets using manual placement settings", from budget-controlled experiments on 147k campaigns, 30 Aug to 7 Sep 2025. — [About Advantage+ placements](https://www.facebook.com/business/help/196554084569964)
- OFFICIAL, 2025-2026 change: "We're gradually rolling out changes to placement settings for the Leads, App promotion and Sales campaign objectives. These objectives now default to Advantage+ placements and the option to make placement selections is removed in ad sets". Awareness, traffic and engagement still allow manual selection; account-level placement controls remain. — [About Advantage+ placements](https://www.facebook.com/business/help/196554084569964)
- OFFICIAL: Advantage+ placements "look across all available placements to identify the most efficient opportunities for every impression" across Facebook, Messenger, Instagram, WhatsApp, Audience Network and Threads. — [About Advantage+ placements](https://www.facebook.com/business/help/196554084569964)
- OFFICIAL: "Audience Network ads use the same targeting, auction, delivery and advertiser campaign measurement systems as Meta ads." — [About Meta Audience Network](https://www.facebook.com/business/help/788333711222886)
- PRACTITIONER (third-party benchmarks, search excerpts, methods undisclosed and mutually inconsistent): Feed is generally the most expensive placement (one source: Facebook Feed CPM $8 to $14); Reels 20 to 40% cheaper than feed; Instagram Stories about $6 to $7; Audience Network about $2 to $5 with weaker quality signals. One source notes lower Reels CPM "does not guarantee lower CPA". — [Top Growth Marketing](https://topgrowthmarketing.com/what-is-good-cpm-for-facebook-and-instagram-ads/); [Influee](https://influee.co/blog/good-cpm-facebook-ads); [Stackmatix](https://www.stackmatix.com/blog/facebook-ads-cost-per-impression)
- PRACTITIONER (Jon Loomer, search excerpt): when optimising for conversions the algorithm adjusts in real time towards placements that produce results. — [Know how the Meta ads algorithm works](https://www.jonloomer.com/qvt/know-how-the-meta-ads-algorithm-works/)

### Inferences
- In this setup the audience is already as broad as Meta recommends (US, Advantage+ audience, all placements). Audience narrowness is not a plausible cause of high CPM here.
- The 25 to 65 setting: 25 as a minimum age is a hard floor; 65 as a maximum is only a suggestion unless Advantage+ audience is turned off. Raising the minimum age above 18 removes cheaper younger inventory, which nudges average CPM up, but it is a legitimate business control for this product.
- Blended CPM depends on placement mix. If purchase optimisation steers delivery to feeds (the dearest inventory), blended CPM will be high; if it leans on Reels, Stories or Audience Network it will be lower. A placement breakdown in Ads Manager is the way to see which applies. Static images in particular tend to earn feed delivery.
- A US-only audience is among the most expensive geographies in practitioner benchmarks, so US CPMs above global averages are expected.

### Gaps
- Meta publishes no CPM-by-placement or CPM-by-age figures. All placement CPM numbers here are third-party and inconsistent with each other.
- Whether this particular account still has manual placement selection for Sales (the removal is a gradual rollout) was not checked.
- No official statement was found on how a raised minimum age changes CPM.

## 8. Does a new ad account, new pixel or low spend history raise costs?

### Takeaway
Documented: delivery is "less stable" with "usually a higher CPA" while learning; Advantage+ audience relies on past conversions and pixel data that a new account lacks; and Meta reserves the right to adjust auction outcomes using "data about you and your ad account". Not documented: any "new account tax", account "trust score" pricing, or a need to "warm up" an account or "season" a pixel. Jon Loomer calls warm-up advice nonsense.

### Cited Findings
- OFFICIAL: Advantage+ audience uses "past conversions", "Meta pixel data" and "interactions with previous ads" to find the audience. — [About Advantage+ audience](https://www.facebook.com/business/help/273363992030035)
- OFFICIAL: during learning "ad sets are less stable and usually have a higher CPA". — [About the learning phase for ad sets](https://www.facebook.com/business/help/112167992830700)
- OFFICIAL: "We may use data about you and your ad account to make adjustments that could affect auction outcomes and prices, such as to improve ad quality and relevance ... enforce our terms, policies and other standards including fostering a safe and trustworthy environment on our platform. But such auction adjustments will not cause us to charge you more than your bid". — [About ad auctions](https://www.facebook.com/business/help/430291176997542)
- PRACTITIONER (Jon Loomer, Pubcast 15 Apr 2026, episode summary only): on a brand-new page, ad account and pixel, he explains "why these recommendations are nonsense and often counterproductive", that building low-quality engagement early can poison remarketing audiences, and that optimising for purchases or leads from day one is the fastest path to real results. He notes new accounts often start with a low daily spending limit. — [Do you need to warm up a new ad account?](https://pubcast.jonloomer.com/do-you-need-to-warm-up-a-new-ad-account/)
- PRACTITIONER (Jon Loomer, search excerpt): costs may be higher with a new pixel because the algorithm takes longer to learn. — [What to do with a new pixel](https://www.jonloomer.com/qvt/what-to-do-with-a-new-pixel/)
- PRACTITIONER, CONFLICTING AND LOW RELIABILITY: agency and forum sources recommend multi-week warm-up protocols and claim new accounts have "no trust history" so the algorithm is cautious. These are commercial or anecdotal. — [AdsX](https://www.adsx.com/blog/ad-account-warm-up-new-pixel-spend-ramp); contradicted by [Jon Loomer Pubcast](https://pubcast.jonloomer.com/do-you-need-to-warm-up-a-new-ad-account/)
- PRACTITIONER (forum, anecdotal): some extreme-CPM complaints trace to a flagged domain or offer rather than the account; if the pattern follows the domain across accounts, a domain or niche trust issue may be the cause. — [Shopify Community: crazy high CPMs](https://community.shopify.com/t/crazy-high-cpms-on-meta-how-to-check-if-our-domain-is-flagged/347759)
- PRACTITIONER (Segwise, search excerpt): part of any CPM rise is the whole auction getting more expensive, not account-specific. — [Segwise](https://segwise.ai/blog/why-is-my-meta-cpm-so-high)

### Inferences
- The defensible summary is "new accounts lack data, they are not surcharged". The effect is on prediction quality (estimated action rate) and stability, which raises cost per result early; there is no documented mechanism that raises the price of an impression because the account is new.
- The "data about you and your ad account" clause means account-level adjustments cannot be ruled out, but Meta frames them around quality, policy and trust enforcement, not account age or spend level.
- "Pixel seasoning" via traffic or engagement campaigns is folklore: it feeds the pixel click-prone, non-buyer signals. This matches Loomer's argument and Meta's own advice to "optimize for conversions first".
- Seasonality matters for this account's timing: it is running in mid-to-late November, in the run-up to Black Friday and Cyber Monday, when auction competition is at its yearly peak. Meta's own text says costs rise when "auction competition increases". Some of the high CPM is the calendar, not the account.

### Gaps
- No Meta document addresses account age, spend history or "trust" as a pricing factor. Absence of documentation is not proof of absence.
- The full Loomer episode and post could not be read; his argument is known only from summaries.
- No official source quantifies Q4 or Black Friday CPM inflation; no seasonal CPM figure was retrieved for November 2026.

## 9. Does CPC relate to CPM arithmetically, and what link CTR is typical?

### Takeaway
Yes, it is an identity: CPC (link) = CPM / (1000 x link CTR as a fraction), or CPM / (10 x CTR%). A high CPC is therefore always some mix of high CPM and low link CTR. Third-party 2026 e-commerce benchmarks put CPM around $14 to $15 and CTR around 2%, but whether those CTRs are link CTR or all-clicks CTR is unclear, and they come from accounts far larger than this one.

### Cited Findings
- OFFICIAL: CTR (link click-through rate) "is calculated as link clicks divided by impressions." — [CTR (link click-through rate)](https://www.facebook.com/business/help/877711998984611)
- OFFICIAL: link clicks and landing page views differ; landing page views count clicks where the destination "successfully loaded", and can be lower when "the web page isn't fully loading". — [Understand the difference between link clicks and landing page views](https://www.facebook.com/business/help/172641445757289)
- OFFICIAL: "Purchases rate per link clicks" is purchases divided by link clicks, multiplied by 100. — [Purchases rate per link clicks](https://www.facebook.com/business/help/1760961084436731)
- PRACTITIONER (Triple Whale, via search excerpt; page shows inconsistent dating): overall Meta CPM $15.06 for Aug 2025 to Jul 2026 versus $13.30 the prior year, up about 13%. Category CTRs: health and wellness 2.70%, food and beverage 1.85%. — [Triple Whale benchmarks](https://www.triplewhale.com/blog/facebook-ads-benchmarks)
- PRACTITIONER (The Ad Spend citing Triple Whale, secondhand): 2026 Meta e-commerce benchmarks of CTR 2.19%, CPM $14.19, CPA $38.19, ROAS 1.86x, CVR 1.57%. — [The Ad Spend](https://theadspend.com/blog/facebook-ads-traffic-ecommerce)
- PRACTITIONER, CONFLICTING: Digital Applied lists general e-commerce CPM at $10.42, well below Triple Whale's figure, probably a different dataset and method. — [Digital Applied](https://www.digitalapplied.com/blog/facebook-ads-benchmarks-2026-cpc-cpm-ctr-industry); contradicted by [Triple Whale benchmarks](https://www.triplewhale.com/blog/facebook-ads-benchmarks)
- PRACTITIONER (Webtonic, search excerpt): CPMs rose about 20% year over year while CPA rose only about 1%. — [Webtonic](https://www.webtonic.io/blog/e-commerce-facebook-ads-statistics)
- PRACTITIONER (Lebesgue, medians across e-commerce businesses, search excerpt): CPC by industry and order-value band ranges roughly $0.38 to $1.40. — [Lebesgue](https://lebesgue.io/facebook-ads/meta-ads-benchmarks-by-industry-and-aov)

### Inferences
- Derivation: CPM = spend / impressions x 1000; CPC = spend / link clicks; CTR = link clicks / impressions. Substituting gives CPC = CPM / (1000 x CTR). Worked examples: CPM $15.06 at 2.19% CTR gives CPC of about $0.69. CPM $30 at 1.0% gives $3.00. CPM $45 at 0.8% gives about $5.63.
- Diagnostic use: split a high CPC into its two parts. If CPM is near benchmark and CTR is low, the problem is the creative. If CTR is fine and CPM is high, the cause is who is being targeted and how contested they are (Purchase optimisation, US, Q4), which is not necessarily a problem.
- Extending the chain: cost per purchase = CPC / (purchases per link click). With a $39.99 product, a CPC of $1.00 needs better than a 2.5% click-to-purchase rate just to match revenue to ad spend before product cost; at the 1.57% benchmark conversion rate, break-even CPC on revenue is about $0.63.
- Purchase-optimised campaigns normally show lower link CTR and higher CPC than click-optimised ones, so benchmarks blended across goals will flatter click campaigns.
- Statistical caution: at $45/day for 4 days (about $180 spent, perhaps 6,000 to 12,000 impressions and 60 to 250 link clicks), CPM and CTR are reasonably measured, but 2 purchases is far too few to estimate a conversion rate or cost per purchase.

### Gaps
- Meta publishes no CTR, CPC or CPM benchmarks. It is not confirmed whether the Triple Whale and Ad Spend CTR figures are link CTR or CTR (all); if they are all-clicks, typical link CTR is lower (commonly quoted around 1%, a figure for which no reliable 2026 source was retrieved).
- Benchmarks come from established brands with seasoned pixels and video-heavy creative; no benchmark specific to sub-$50/day accounts or static-image-only accounts was found.
- The official Help Center definitions of CPM and CPC (cost per link click) were not retrieved, though the identity follows from the standard definitions.
