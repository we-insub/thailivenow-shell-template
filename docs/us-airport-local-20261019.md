# United States airport data — local research and integration

## Approved scope

2026-10-19: The owner requests official-source research on United States–Thailand routes and US departure-airport check-in locations and contact channels, adapted to the US-market pages. Local implementation only. No commit, push, deployment or indexing submission is authorized by this task.

Target market: en-us / US. General en is the shared airline search, not the US market. Existing Korean and other-market data and approved Korean hub UX must remain intact. No nationwide all-connection permutation inventory is implied; verify published US–Thailand services and their actual US gateways, clearly identifying nonstop, same-number intermediate-stop and connecting journeys. Do not infer nonstop operation from a booking result or endpoint pair.

Questions: Which verified service can a US traveler use, where does that traveler check in at the US gateway, and which channel handles check-in, reservations, or baggage? Airport-local physical contacts and remote support must have separate roles. Unconfirmed desk numbers, hours and telephone numbers are not invented.

## Baseline

`public/data/airport-markets/en-us.json` has routes=0, airlines=0, services=0, guides=4, coverage=1. It is identical to HEAD at task start. The old coverage note is dated 2026-10-13, and cannot prove current nationwide absence. A baseline copy is saved under artifacts/us-airport-local-20261019/en-us-before.json.

## Research method

Apply AGENTS.md and the internal linking, SEO, detail and date contracts. Research is assigned through the existing Muse AP-WORLD-WEST-01 thread, preserving prior scoped gaps. Collect full official URLs, literal excerpts, observation dates, route validity and role distinctions. Previous July statistics and current schedules remain separate. Newly recovered results must be reviewed before use.

## Planned relationship review

US hub → actual US gateway/airline/route; those detail pages → US hub. Actual US gateway ↔ its operating airline and listed Thailand itinerary; route ↔ actual endpoint airports and airline. Same-market canonical and sitemap entries must match generated initial HTML links. No guessed locale counterparts. Existing generic shared English search may link to the US hub as an explicitly labeled market destination.

## Verification and delivery

Pending research receipt and implementation. Required: fact-to-source review, full tests/build/SEO/date audits, Pages local runtime, relevant PC/mobile links and responsive layout. Actual dates must retain their source meaning; use RuntimeDate and preserve the known deployment date. This record does not claim research completion or production publication.

## Research received and integrated

Muse AP-WORLD-WEST-01 records 54–59 were received through the existing desktop thread. Original receipts stay local in artifacts/us-airport-local-20261019; personal research conversations are not release inputs. Codex independently read the LAX airline directory and July 1, 2026 location PDF and the SFO United international detail. For SFO, the initial directory URL only lists the first alphabetical page: the actual United search and individual official English detail were opened before accepting terminal, level, aisles and phone roles.

- LAX→BKK UA820 and BKK→LAX UA821: intermediate stop at HKG under the same flight number; not nonstop. Official booking observation is for departure December 18, 2026. The older October 26, 2025 TAT announcement is retained as historical corroboration, not used to claim current daily operation. No old launch clock is shown as the current timetable.
- SFO→BKK: United UA877 to HKG, then UA820 to BKK; a flight connection, not a single-number through flight. The December 18 booking observation showed a 2-hour-35-minute connection. No reverse SFO itinerary, weekly schedule or additional dates are inferred.
- LAX United check-in: Terminal 7. General airline phone +1 800-241-6522 is the airport-directory contact, not a check-in-counter direct line. Gate numbers 70–88 are not imported as counter numbers. Exact counter numbers and hours remain unverified and are not populated.
- SFO United international check-in: Dianne Feinstein International Terminal G, Departures Level / Level 3. Aisle 1 is the published Business and Premium check-in row; Aisle 2 is the Economy row. These are not boarding gate numbers. The separate domestic Terminal 2/3 listings are not used for the checked international itinerary.
- SFO official English entry labels 800-538-2929 as General Telephone and 1-800-221-6903 as Baggage Service. They are separate airline-support roles; no physical arrivals-desk or counter direct line is invented. Security checkpoint hours and lounge hours are not check-in opening hours.
- Alaska/Hawaiian SEA–BKK nonstop was not established by the reviewed current pages and checked single-date searches. These limited negative observations remain internal; no nationwide absence conclusion, fake SEA route, airline detail or counter record is published.
- United destination/deal pages for HKT/CNX/CEI do not establish a checked operating segment. No United-operated US–Phuket route or US-market Phuket service record is added from a fare card alone.

## Local implementation

The US hub has a dedicated `src/pages/en-us/airport-assistance/index.astro`, while the shared locale hub excludes only this static US hub to prevent duplicate route generation. The other market hub behavior is preserved. US routes are grouped by travel direction and city names accompany airport codes. Gateway cards link to LAX and SFO details; actual route, airline, airport and airport-pair templates retain bidirectional same-market links. Airport maps are actual official PDF/map links; no rights-unverified raster map or invented pin is added.

Existing `en-us.json` four guide records remain exactly equal to the task baseline. Korean raw data SHA256 remains f570977552e4c9a84384186beac1a29c033e3e14e0d341132468cd8bea9f034e. The US dataset now has 3 directional itineraries, 1 operating airline and 5 role-separated service records across LAX/SFO. The approved Korean hub is preserved.

United detail groups check-in locations before baggage contacts and general airline contacts. Optional US-specific airport/airline copy is data-driven; other-market titles retain their prior fallback. New local Korean review annotations use the existing global review switch. One existing en-us review typo `미국와` is corrected to `미국과` without changing facts or the English text.

Shared English airline search discovers United from the US dataset and links to the US hub. Browser search UA820 returned exactly United. Semantic QA found that the airport lost-property URL matched a broad customer-support regex; it is now labeled `Airport lost property · LAX`, preserving the distinction from airline baggage support. All original sources remain in the closed disclosure.

Source observations and actual content modifications are recorded separately in data/site-date-observations.json. Known deployment date remains 2026-10-18. Nothing in this local task is a successful production deployment or an indexing claim.

## Final validation — local only

Final full test run: 66/66 passed. Final build: 2,499 pages / 2,437 indexable; SEO errors 0, duplicate titles 0, duplicate descriptions 0. The existing 251 warnings are unchanged; no new warning was introduced by this scope. Date tests 9/9 and date audit errors 0. Final Pages local runtime check passed for 11 locales, site-date assets and preview protection. Build/runtime/content evidence is in artifacts/us-airport-local-20261019.

The scoped HTML audit covers 11 actual hub/airline/airport/route/pair pages: one H1, self canonical, index policy, sitemap entries, valid internal targets and source disclosures initially closed. All four original US guides and the Korean raw data hash are preserved. The new relationships were implemented and checked manually; no site-wide relationship automation was added.

Final browser checks: actual CSS 1280px PC and actual CSS 390px mobile. All six mobile page types (US hub, LAX, SFO, United, SFO route and SFO pair) have document width 390 and one H1. Earlier wide-tab captures are retained as PC evidence, not counted as mobile acceptance. After source-review tab cleanup, a fresh QA tab was used to apply and verify the actual mobile viewport. Native link flow hub→SFO→United and route→pair→hub passed; telephone hrefs match the separately labeled contacts; official map links match the reviewed source. Sources open and close with a mouse and keyboard. Shared English UA820 search returns exactly United and the LAX lost-property link has the airport-specific label. Temporary viewports were reset and the US hub was left open as the deliverable.

Human copy review removed a research-method paragraph from the public airline page and replaced awkward `checked itinerary` wording with travel instructions. The underlying routing, December 18 observation scope, locations, phone roles, sources and dates were preserved. All final build and scoped checks were rerun after this edit.

No commit, push, deployment, production check, indexing submission, actual indexing or ranking claim was performed. No ongoing automation was created. Source observations remain 2026-10-19 where actually checked, while the known operational deployment date stays 2026-10-18. Remaining unverified scope is explicit above: other dates/weekly patterns, SFO return, nationwide/all-connection completeness, exact unpublished counter numbers/hours, and unestablished SEA nonstop.

## Owner-confirmed completion scope — follow-up

The owner explicitly chose: all US–Thailand nonstop services and same-flight-number intermediate-stop services, plus completion of the already listed SFO connecting itinerary. All possible one-stop combinations are excluded. The previous US-airline-only discovery filter is removed for this inventory: an actual qualifying service operated by any airline is relevant to the US market. Current service, announced future service and historical/suspended service must be distinguished. Territorial US gateways must be identified separately if a qualifying service is found. Existing positive LAX/SFO evidence is preserved; limited negative Alaska/Hawaiian observations cannot close nationwide inventory coverage.

The existing AP-WORLD-WEST-01 research thread received this confirmed scope and a request for an official inventory closure matrix, the reverse SFO itinerary and gateway-specific check-in/contact additions. Investigation is in progress. No completion or new nationwide absence assertion is made at this point. Local only; no deployment.

## Follow-up integration — SFO return

Record 61 adds a Bangkok departure on December 18, 2026: UA821 BKK→HKG followed by UA878 HKG→SFO, with a 1-hour-45-minute connection in the observed booking result. This is a change of flight number, not a nonstop or single-number through service. The new route `united-bkk-sfo-via-hkg` is linked through the US hub, United detail, endpoint airport pages and SFO–BKK pair. The outbound validity note now points to the separately dated return instead of saying no return was checked.

An explicit operator line for UA878 was not present in the expanded booking panel. The researcher's initial operator inference from the absence of a partner label was withdrawn and is not imported as a verified operating-carrier claim. Public copy gives the observed UA flight numbers and asks travelers to confirm each segment's operating airline before choosing support. Structured `operatorVerification` preserves this limitation. No unverified counter, phone or hours are added for another carrier.

The current US dataset contains four directional itineraries and the same five role-separated LAX/SFO service records. The original four US guides and Korean raw data hash remain unchanged. New English sentences and the return FAQ have separate Korean review annotations. Source and content dates are October 19; deployment date remains October 18. No production action is authorized or performed.

## Follow-up inventory evidence limits

Records 60–63 and their corrections are retained as local research evidence. Thai Airways' regional destination cards, HNL/GUM/ANC airline directories and limited departure boards do not prove nationwide absence of Thailand services, including services operated by non-Thai airlines. No empty airport or airline detail is generated from a negative directory observation. ANC's first unverified domain is excluded; Alaska DOT&PF's actual official directory was reached through the government airport portal. The CNMI government agency page verifies CPA's official domain, while its actual airport site remained inaccessible.

CAAT was blocked by a Cloudflare security screen, AOT root by a connection reset and the United newsroom by an empty rendered body. Security challenges were not bypassed. A parked nonofficial Suvarnabhumi domain is excluded from official-source evidence; the actual `suvarnabhumi.airportthai.co.th` subdomain is treated separately and its limited flight page does not automatically close national or season-wide coverage. Current status remains `researching`; no all-US completeness or absence assertion is published.

## Follow-up closeout — partial research, validated local implementation

C2 reached the actual official Suvarnabhumi departures page `https://suvarnabhumi.airportthai.co.th/flight?type=d`. The visible same-day board included UA821 to Los Angeles on October 19, 2026, with a check-in row shown for that observation. This is not a complete season timetable: later rows were not loaded, and a dedicated full network menu was not observed. The row's time/counter is retained only as a dated research observation, not copied into a permanent schedule or counter record. No additional qualifying US gateway was positively established by this run. That is not evidence that none exists.

All submitted research runs have returned. The final matrix and corrections are saved under artifacts/us-airport-local-20261019/final-inventory-matrix.json. The national nonstop/same-number inventory is **not closed**: official access failures and partial listing coverage prevent a defensible completeness claim. UA878's explicit operating-carrier label remains unverified. These are research limitations, separate from local implementation acceptance. The request for all-US completeness is therefore still unmet; no completed-all-research claim is authorized by the evidence.

Final local validation after copy correction: full tests 66/66; build 2,500 pages / 2,438 indexable; SEO errors 0, duplicate titles/descriptions 0, existing 251 warnings unchanged; date tests 9/9 and date audit errors 0; Pages local runtime passed. Scoped HTML audit covers 12 pages with no errors and preserves the four original US guides. PC 1280px and mobile 390px browser checks cover the US hub, new return route, United detail, SFO detail and SFO–BKK pair; each has one H1 and no horizontal overflow. Return links and UA878 content are present in the related initial HTML and browser DOM; the return page itself correctly has no self-link requirement. New route sources start closed and open/close by mouse and keyboard. The final screenshot uses the reset desktop viewport and is not misreported as the 1280px measurement. Viewport overrides were reset.

The server remains local at port 4348. No commit, push, deployment, production verification, indexing request or automation was performed.

## Owner-directed continuation — alternative official sources

The owner rejects closing at partial research and explicitly authorizes further official-source investigation until the missing US–Thailand nonstop/same-number inventory and UA878 operating carrier are resolved. This supersedes the previous research-run stop and path-expansion restriction; deployment remains prohibited. Existing positive evidence and source corrections remain intact.

The same AP-WORLD-WEST-01 parent received actual execution instructions for two new official-source lanes: UA878 through official HKIA/SFO/United operational information, and US DOT/BTS T-100 International Market (All Carriers), with current-season differences checked separately from lagged traffic data. The Market table is distinct from the previously attempted Segment table. Dataset documentation confirms the US/territory coverage and class definitions; actual row scope and publication delay must be retained. A new independent verification source is the City of San Francisco SFO Gate and Stand Assignment dataset, described by the US government's catalog as airport finance/operations data for actual flights and billing. The official source links and field schema were supplied for investigation, not accepted as UA878 proof before an actual row is read.

Research is active; prior partial closeout is not the status of the renewed task. No new operational release, commit or push is authorized.

### UA878 current operator resolved — record 67

The current operating airline is United Airlines. Muse recovered United's dated October 18 flight-status detail, SFO's official arrival record and HKIA's October 19 departure row. Codex independently opened HKIA's official passenger departures page, filtered flight 878 and read the row: 22:30, United Airlines, UA878, San Francisco, Terminal 1. The official screen's date is October 19, 2026 and its update line reads 12:33 HKT. The October 19 status column was not populated, so that row is scheduled service, not a completed operation. October 18 completed operation comes from the separate dated airline/SFO record. The 2024 DataSF operational rows corroborate history but are not the current-service basis.

The local return route now records United as UA878's verified operator, with record 67, actual source links and observation scope. The limited December 18 booking-panel observation is preserved inside verification metadata; it no longer blocks an operator conclusion supported by independent current sources. The public notice and United FAQ now explain the operating airline, while future schedule/operator changes still require the traveler's own ticket. No historic gate is reused as a current gate or check-in location. Shared English United search copy now includes the UA821→UA878 return connection. Existing five service records and four US guides remain preserved.

Evidence: artifacts/us-airport-local-20261019/current-operator-record67-received.json and hkia-ua878-independent-review.txt. Updated local implementation still requires final build/runtime/render validation after the national inventory work.

### Recovered all-carrier original and independent inventory review — record 68

The actual BTS original ZIP was recovered through the Muse attachment and saved locally. ZIP: 1,150,481 bytes, SHA256 903ba00cbcffb2740e4eb83a45581ba307cd6e44c20a30d92b7fe196e5708596. Its CSV: 9,946,685 bytes, SHA256 7d17193e5ccbc09b47194f40ae28aaca5cf0be9543931648cf28c22653d75ad4. Codex parsed all 42,543 rows and 34 columns independently, confirming January through July 2026, 278 directional country pairs and all 23 Thailand-containing rows. No US-country prefilter was applied before examining Thailand rows. Original and independent analysis are retained in artifacts/us-airport-local-20261019. These are actual files, not a download promise or screenshot alone.

All scheduled passenger rows with positive passengers are United LAX–BKK in both directions across all seven months: 17,361 toward Bangkok and 16,476 toward Los Angeles. The BTS Market definition follows flight numbers and includes intermediate stops; it does not prove nonstop operation. United's current official route overview identifies the Hong Kong stop, so these rows are classified as same-number intermediate-stop service.

The remaining rows are preserved separately: June BKK–HNL United class F with zero passengers; April–July BKK–CVG AeroLogic class G cargo; July VistaJet DMK–ANC and DMK–TEB class L non-scheduled civilian passenger service, six passengers on each row; July Air Alsie DMK–MMU nine passengers and MMU–DMK one passenger, class L. They are not silently omitted or promoted into regularly bookable passenger routes. No Thailand rows for GU/MP/AS/PR/VI occur in this original reporting period; that historical observation is not a current nationwide absence claim. Exact original rows remain in the audit metadata.

### Current published routing and winter-source review — records 69–70

United's official https://businesstravel.united.com/bangkok-hongkong-usa publishes year-round daily service: UA820/821 maintain the same number across Hong Kong between LAX and Bangkok; the SFO journey changes between UA877 and UA820 outbound, UA821 and UA878 returning. The public copy now explains these differences and the published daily frequency. The static overview does not supply a timetable validity period and its times differ from the separately observed dated booking. Static times were not selected arbitrarily or merged into a guaranteed December timetable. Existing December 18 examples and their direction-specific connection durations remain explicitly dated.

THAI's September 17, 2026 official THAI Talk announcement states a 66-route winter network for October 25, 2026 through March 27, 2027. Its published text contains no US route, launch date or flight number. That is a limited observation about this announcement; the article does not enumerate all 66 routes. The earlier unsupported broad claim that THAI has no transpacific plan is excluded. Q1 MD&A is historical, not an October network guarantee. CAAT's accessible slot report attachments are W24/S25; international allocation entries are from 2014/2016. Neither is accepted as a current all-carrier winter timetable.

The all-carrier January–July inventory and UA878 current operator are resolved; the listed routings have current official crosschecks. No additional qualifying scheduled passenger route was established in the official material reviewed. An all-carrier October/winter timetable was not obtained, so current-season nationwide absence or completeness is not asserted. The dataset uses verified-with-period-scope rather than leaving all verified facts in an undifferentiated researching state. This explicit boundary must survive future reporting; positive current facts and a completed historical census are not proof of every future route.

The five verified US airport service records, original four US guides, unrelated markets and approved Korean hub are preserved. No counter number, direct desk phone, opening time or new airport page was invented for historical cargo/charter/zero-passenger observations. Existing inbound/outbound initial HTML relationships remain in place.

### Renewed task validation — local only

After the final inventory metadata and copy integration: full tests 66/66 passed; full build 2,500 pages / 2,438 indexable; SEO errors 0, duplicate titles/descriptions 0, existing warnings 251 unchanged. Date tests 9/9, date audit errors 0. Final Pages runtime passed for 11 locales. The scoped initial-HTML audit covers 12 pages with no errors, including the four directional route relationships, canonical/index policy/sitemap, source disclosure and guide preservation. Final logs use build-inventory-final, runtime-inventory-final and content-audit-inventory-final names under artifacts/us-airport-local-20261019.

Actual browser CSS widths: PC 1280 and mobile 390. US hub, new return route and United detail each have one H1 and no horizontal overflow. The UA878 operator FAQ opens and displays United Airlines in the rendered English text with the retained Korean review annotation. The new published daily wording is rendered. Sources begin closed. Screenshots are retained; ua878-local-final.png was captured after resetting the viewport, so its 1422px image is not misreported as the measured 1280px PC test. Temporary viewport settings were reset. Five airport services remain equal to the pre-resumption snapshot; the four US guides are equal; Korean raw SHA256 remains f570977552e4c9a84384186beac1a29c033e3e14e0d341132468cd8bea9f034e.

No commit, push, deployment, operational verification, indexing submission or automation was performed. The local review page remains at http://127.0.0.1:4348/en-us/airport-assistance/airlines/united/ . Known deployment date remains October 18, 2026. The reporting-period and current-season evidence boundary above is unchanged by successful technical validation.
