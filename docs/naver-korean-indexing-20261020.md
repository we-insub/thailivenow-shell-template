# Naver Korean indexing scope — 2026-10-20

User confirmed: Naver crawls Korean pages only; Google retains Korean and all existing languages. Work is limited to robots generation and a Korean sitemap derived from the same audited indexable canonical URL inventory. No page copy, noindex policy, canonical, photos, dates or other unpublished content is changed.

Base: current verified production commit 5f9312684ee54db516bcab4c254cf098c0588ec7. Isolated checkout: /Users/matowe/.codex/worktrees/naver-korean-indexing/ThaiLiveNow. Owner: Codex root, this request. Existing main checkout changes are preserved.

Live findings: sitemap has 2,547 URLs including 705 Korean URLs. All 705 Korean sitemap URLs return HTTP 200 without noindex or X-Robots-Tag noindex. Root is noindex with English canonical; Korean home is indexable. Existing beach hub remains noindex in production; its unpublished rewrite is outside this release. Personal saved/compare pages and duplicate aliases retain noindex. Naver diagnosis's single collection restriction is historical root redirection, not a robots-wide ban. Naver robots verification reports /ko/ collection possible.

Yeti-specific rules allow /ko/ and shared assets, root discovery and sitemap resources; other language HTML is disallowed. The default group remains Allow: / and the global sitemap remains unchanged. sitemap-ko.xml includes only Korean canonicals already passing the existing SEO audit. Naver should receive the Korean sitemap rather than the multilingual one. robots restrictions govern crawling and do not guarantee removal of already indexed foreign-language URLs; Naver currently reports zero indexed pages.

Validation and submission evidence will be reported separately from actual crawling/indexing. Full release gates and current production baseline checks apply. No indexing outcome is promised.

## Execution results

Commit 495e8ebb56346bc5a7132b82239ac27085511671 deployed at https://41daed38.thai-live-now.pages.dev; production verification passed 18 checks. All 106 tests passed; full 2,609-page build and SEO/date/editorial/runtime audits passed (SEO errors 0; existing warnings 251). Both live robots and Korean sitemap match the audited candidate. Main working checkout received only the four scope files so future development preserves the generator.

Naver accepted sitemap-ko.xml on displayed 26.10.20 21:31:27. Existing multilingual sitemap registration was retained; deletion cancelled. robots re-collection request was accepted and Naver now displays the new rules fetched at 2026.10.20 21:32:03. Important limitation: Naver URL verification still says /en/ collection possible even after reload. This contradicts the specific Yeti policy; its cause is unverified. Neither actual foreign-language exclusion nor actual indexing is claimed complete. All Korean sitemap pages remain indexable. No broad removal of noindex or unpublished Korean content was performed.

Evidence: artifacts/naver-indexing-20261020/completion.json, ko-live-sitemap-audit.json, release-build.log; browser screenshot naver-korean-sitemap-submitted.png in the task visualization folder.

## Follow-up: explicit locale rules and corrected indexing evidence

User requested Korean-only Naver crawling recheck and clarified expectations about next-day metrics. Follow-up commit acd40586b85f2d8f7fe1d1b49fa246cae447af93 puts Yeti first and explicitly disallows the ten other locale prefixes. Full build/audits/runtime and 18 production checks passed; deployment https://5fc2f4ed.thai-live-now.pages.dev. Naver displays the new robots fetched at 2026.10.20 21:45:50. Its URL checker still returns English crawl possible while an independent robots-parser product-token check returns Yeti false for English and true for Korean, Googlebot true for both. Actual Naver exclusion remains unconfirmed; do not claim the UI discrepancy solved.

Important correction to earlier reports: the crawl CSV shows 8 completed collections on 2026-10-16 and no restricted collections. Individual Korean home inspection explicitly says successfully indexed, last updated 26.10.16, crawl allowed/completed yes, HTTP 200, index allowed/completed yes; Korean title/description confirmed. Earlier site diagnosis 0 does not prove current whole-site nonindexing. Existing nine manual crawl requests dated 2026-10-14 also exist. Do not duplicate them or describe today's work as removal of a previous Korean-wide noindex block. No promise of Oct21/22 impressions/clicks; the performance report is delayed and actual impressions remain separate.

Evidence: followup-result.json, independent-robots-parser.json, naver-crawl.csv under artifacts/naver-indexing-20261020; screenshot naver-ko-home-index-details.png in task visualization folder. Main source policy and tests synchronized without unrelated source changes.
