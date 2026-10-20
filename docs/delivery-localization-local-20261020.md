# Food delivery localization — local work, 2026-10-20

## Scope and source

The user authorized the ten foreign markets `en`, `en-us`, `en-gb`, `en-in`, `ms`, `zh-cn`, `zh-tw`, `ru`, `ja`, `es`, with full native manuscripts and local review only. Purpose: choose a Thai food delivery app and complete registration, ordering to a hotel, payment, collection and issue reporting. Navigation: food delivery hub → GrabFood, LINE MAN, ShopeeFood or Robinhood guide → hub. No deployment, commit, push, indexing request or fresh official research in this lane.

Existing Korean source pages and all five `src/data/transport/guides/{food-delivery,grabfood,line-man,shopeefood,robinhood}.json` files were read in full and left unchanged. Each native pack records SHA-256 fingerprints of those exact source files. The existing Korean reference is accepted as the verified factual baseline; a new translation date is not a new source-check date. Existing unrelated dirty changes remain untouched.

Read: AGENTS.md; detail-editorial-policy.md; INTERNAL-LINKING-CONTRACT.md; page-seo-rules.md; detail-template-rules.md; natural-korean-copy.md; the complete sirocco-user-full-reference-20261014.txt; SITE-DATES.md; page-generation-date-contract.md; operations-site-dates.md; language-settings.md; food-editorial-review-20261014.md. Also read the localized writing skill, shared workflow and applicable EN/US/IN/CN/TW/JA profiles. That skill has no dedicated Malay, Russian, Spanish or UK profile; repository market/language rules govern those native texts.

## Manuscript preservation and native writing

All 137 distinct Korean textual slots were written in each of seven native language bases, then expanded into ten market packs. English US uses US spelling and `cart`/`bill`; UK uses `collection`/`note`; India uses clear Indian English. These lexical differences do not invent different Thai service rules or local eligibility. All headings, summaries, paragraphs, ordered steps, FAQ questions and answers, buttons and source labels are translated. Official service names and actual English app controls remain identifiable.

Source structure per guide is retained, including every paragraph and step. Sources and all external URLs are unchanged. Source titles, intros and visible/schema FAQ meanings agree. Natural delivery instructions follow the approved Sirocco principles: say where to set the address, what to check at payment and where to collect the food; avoid abstract preparation language and preserve exceptions in full. No decorative venue story or invented first-hand experience is added.

Specific conditions preserved:

- GrabFood registration example remains explicitly **South Korean phone number** guidance, with SMS and 6-digit code. It is not asserted as evidence for US, UK, Indian or other numbers. Data-only travel lines do not substitute for SMS reception on that Korean number.
- Cash, Thai/foreign credit and debit cards and KakaoPay remain listed with the condition to check actual account/order availability. No invented UPI, Alipay, Japanese-wallet or universal foreign-card guarantee.
- Foreign card/e-wallet fee remains 3% of the total, minimum THB 1; fractional 0.5 baht threshold with both rounding directions. Card issuer fees remain separate. Last-used payment default and no GrabPay/cash split are retained.
- Cancellation remains a request requiring a success notification. Restaurant not accepted, delay over 15 minutes without assigned rider, or delay over 30 minutes with food still at restaurant remain distinct favourable conditions, not a guarantee. Delivery already started/completed, group creator requirement and no automatic free cancellation before assignment are retained.
- Hotel room delivery remains conditional on hotel rules. Pickup/self-collection and delivery remain distinct. App availability, restaurant opening hours and account-dependent payments remain conditional.
- LINE ID; Thai Shopee menu and Thai/English/Burmese support; Robinhood Bangkok/nearby scope; missing-item evidence and order-level support remain intact.

## Files and routes

Owned files:

- `src/data/delivery-localized/{en,en-us,en-gb,en-in,ms,zh-cn,zh-tw,ru,ja,es}.json`
- `src/lib/delivery-localized.mjs`
- `src/components/LocalizedDeliveryGuide.astro`
- `src/pages/[locale]/food-delivery/index.astro`
- `src/pages/[locale]/food-delivery/[platform].astro`
- `tests/delivery-localization.test.mjs`
- this record

50 new localized routes: each locale has `/food-delivery/`, `/food-delivery/grabfood/`, `/food-delivery/line-man/`, `/food-delivery/shopeefood/` and `/food-delivery/robinhood/`.

Shared TransportGuidePage was not edited because it hardcodes Korean UI and language. The dedicated renderer reuses shared DetailHeader, SiteFooter and the standard Astro middleware/SEO/editorial/date policy. Its Article and FAQPage use the actual locale tag; FAQ schema is generated from the same complete visible answers. Key numeric conditions have short native phrase emphasis that keeps amounts together with the governing conditions; no number is bolded alone. App controls are emphasized by their actual labels. Sources use initially closed native details/summary with localized labels. There is no table of contents and no source number links in prose. Responsive cards and step counters follow the shared detail layout, with explicit number-badge padding to avoid shared CSS collisions.

## Internal links, dates and images

Hub → all four same-locale platform details; platform detail → same-locale hub; other platform links remain same locale. Rooftop hub link remains to the existing same-locale route. Hub breadcrumb links to the actual same-market `/food/` hub; no assumed homepage `#food` anchor. Shared navigation, language-picker path preservation and incoming global menu links belong to the navigation lane, not this renderer.

Two original Korean related links to `/ko/transport/guides/taxi/` have no complete corresponding localized taxi guide. Each pack records these in `deferredRelatedLinks`; they are omitted from related recommendations rather than silently linking to Korean or to a missing route. No absent taxi translation is manufactured. Relation rules were applied manually; no generic relation-generation engine was added.

The five source guides contain no actual source-check date and no licensed subject-matched image. No date was invented, no deployment date is displayed and no JSON-LD dateModified was fabricated. The shared detail policy already recognises `food-delivery/:id`; tests verify hub/detail classification for every locale. The 40 new details use the default brand image with `missing-place-image`; the global editorial audit generates the complete route exception list. No new photo or rights claim is introduced. The Korean source’s legacy deployment-derived dates are not copied into the new renderer.

## Validation and remaining integration gates

`node --test tests/delivery-localization.test.mjs`: 4/4 passed. Checks cover all 50 manuscripts, unchanged Korean source fingerprints, full content-slot counts, numeric fact sets, every retained external URL, absence of Korean in native guide data, same-market reciprocal links, explicit taxi deferrals and existing detail-policy classification. The shared editorial transform adds one byline and organization reference and remains idempotent. Emphasis splitting preserves original text exactly, highlights the complete fee phrase and rejects bare-number emphasis in every locale. Native Chinese repeats the rounding threshold to avoid ambiguity; comparison uses numeric sets rather than requiring identical counts of repeated explanations.

Independent reviewer lane read all seven native bases and every English-market changed string against complete Korean sources; reported no blocking manuscript findings and confirmed all sensitive conditions and URLs. Reviewer writes its own SHA-scoped record.

Parent handles isolated integrated full tests/build, SEO/date/editorial/image audits, all 50 generated HTML checks, canonical/hreflang/sitemap/path links, real Pages runtime and PC/mobile browser checks. Astro compiler transformation succeeded for the dedicated renderer and both route files. No full build was run in the shared working tree. This manuscript/source test result does not claim those integration gates, production deployment, indexing or search visibility are complete.
