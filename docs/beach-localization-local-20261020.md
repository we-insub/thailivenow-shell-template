# 海滩 / Beach localization — local scope, 2026-10-20

Checkout `/Users/matowe/Desktop/ThaiLiveNow`, branch main. Owner `/root/beach_locales` owns the native beach adapter, new components, routes, UI/cities/photo captions/metadata and EN/CN/TW/JA full manuscripts. Parent explicitly delegates MS manuscript to `/root/navigation_contract` and RU/ES manuscripts to `/root/delivery_locales`, with parent integration and independent review. This is local-only work; no commit, push, deployment or indexing submission is authorized by this record.

## Purpose and coverage

The beach navigation and main sea category lead to a national hub, nine real town/island hubs, and the same nineteen current Korean pilot beach details. The central question is which beach to visit, what experience to expect, how to reach it and return, and which access/swimming conditions apply. Markets are `en`, `en-us`, `en-gb`, `en-in`, `ms`, `zh-cn`, `zh-tw`, `ru`, `ja`, `es`. The current Korean baseline is expressly authorized for localization; Korean files remain unchanged. No additional beaches, research, routes, eligibility rules, prices, transport times, facilities, park dates or photos were invented.

Each foreign market adds 1 national hub + 9 city hubs + 19 details = 29 routes, 290 total. The four English routes share destination facts and differ in normal US spelling where needed; no nationality-specific beach conditions were inferred. Other markets have full native introductions, two experience sections, access conditions, swimming conditions, surrounding facilities, getting-there instructions and every original FAQ. Shared seasonal guidance and the final red-flag FAQ are localized separately and appended by the adapter; Maya Bay keeps its designated-area swimming prohibition regardless of flag colour.

## Read sources and workflow

Read AGENTS.md; detail-editorial-policy, INTERNAL-LINKING-CONTRACT, page-seo-rules, detail-template-rules, natural-korean-copy, full sirocco-user-full-reference-20261014.txt; SITE-DATES, page-generation-date-contract, operations-site-dates, language-settings; all prior `docs/beach*.md` and all nineteen `docs/beaches/20261020/{id}.md` originals. Read the localized-writing skill, shared README and EN/US/India/CN/TW/JA native profiles. ThaiLiveNow's actual locale routes and Thai place names take precedence over that skill's Japan-specific place display examples. Missing MS/RU/ES/UK profiles are not replaced with another country's travel conditions.

Facts were read from full Korean original manuscripts before native writing. EN and CN/JA were drafted from the complete place-specific content. TW received character conversion followed by native Taiwan vocabulary and complete reading; mechanical conversion was not treated as editorial approval. Native reviewer found and writer corrected TW 飯店/搜尋/連結/營運 vocabulary, ambiguity in 大陸, and minor Japanese action/curved-coast wording. Reviewer reread those changed fields; acceptance covers meaning and native manuscript only, separate from rendered integration. See `docs/beach-independent-review-local-20261020.md`. Parent independently reads EN/MS/RU/ES.

Compare with Sirocco's introduction, experience, directions, conditions and direct FAQ answers. The adapted pages lead with what visitors see/do, then explain actual destinations and restrictions; no author-asides or claims of visits, popularity or professional credentials were added. Metadata is separately authored; long body paragraphs are not cut to make snippets.

## Files and preservation

New `src/lib/beach-localization.mjs` exports `beachLocales` and `getBeachLocale(locale) => {beaches,cities,ui}`. For Korean it returns the unchanged source objects. For foreign routes it overlays native display fields and retains original IDs, official English/Thai names, coordinates/evidence, city membership, area/province filters, source URLs, directions URLs, actual source date, photo URLs/dimensions/creator/title/license/license URL/rights, missing-information records and camera relationships. The old Korean editorial pass is not reused as a new language pass.

New data: `src/data/beach-localized/{en,ms,zh-cn,zh-tw,ja,ru,es}.json`, `ui.json`, `cities.json`, `meta.json`, `photo-captions.json`. Photo captions retain actual years, scenery and direction. Thirty-eight existing photographs remain; no missing-place-image exception is introduced by these beach pages.

New components: `LocalizedBeachHub.astro`, `LocalizedBeachDetail.astro`, `LocalizedBeachMap.astro`. Detail layout keeps the Korean reading widths, photograph/map/access/basic facts/experience/swimming/FAQ/related/sources order, no table of contents, and short native emphasis. Same-source photographs retain nearby creator/license links. Sources use native closed-by-default details/summary. The map uses the shared resilient real basemap and verified coordinates, actual pan/zoom controls with native labels, pins and direct links, and OSM attribution. Initial HTML also contains all place links, independently of map scripts. Shared middleware applies author/organization, public-date suppression, canonical and sharing-image policy; `isDetailPath` already covers these beach detail paths.

New routes: `src/pages/[locale]/beaches/index.astro`, `[id].astro`, `cities/[id].astro`. No Korean route was changed. Korean evidence snapshot and hashes were saved under `artifacts/beach-localization-local-20261020/source-baseline/` before integration handoff.

## Connections and holds

National hub ↔ all city hubs ↔ correct pilot details are emitted as same-market initial HTML anchors. Same-city beach siblings are connected. Exactly the pre-existing eight same-beach camera relationships are preserved; native detail links use existing native camera routes. Parent handles corresponding camera incoming links, destination incoming city links, header/footer/LanguagePicker/hreflang, main sea mode and dates registry.

No beach-specific validated station/pier/transport-detail relationship exists in this baseline; do not invent one from matching city names. No actual published itinerary containing these beaches is in the source, so no itinerary is created. No same-city rooftop link is inferred. Unknown public toilet/shower opening and charges, parking, rentals and individual business costs remain in internal gaps rather than empty public rows. Resort access, Karon Noi guest access, distinct Noi beaches, Maya Bay reopening date and designated-area ban, Nang Thong tide-dependent ground, Lamai depth/waves, White Sand uneven depths, Laem Chai Chet rocky cape and actual arrival/return-boat distinctions are retained.

## Checks at writer handoff

- `node --test tests/beach-localization.test.mjs`: 3 tests passed. Every market's 19 published IDs/9 city IDs, protected fields, 38 photos and rights, source/directions URLs, original source date, FAQ/experience cardinality, native visible fields, red-flag/season semantics and distinct metadata were checked. This is technical coverage, not automatic language quality approval.
- Astro compiler transformed all 6 new component/route files with zero diagnostics after fixes.
- No root full build was run in this lane. Parent owns isolated full tests/build, SEO/date/image/editorial/design audits, actual Pages runtime, all generated HTML, desktop/mobile map/links/keyboard sources verification. This record does not claim those gates passed.
- Local manuscript/native-meaning review and shared source checks are distinct from build/runtime, production, indexing, ranking and AI citation; unexecuted gates remain pending parent evidence.
