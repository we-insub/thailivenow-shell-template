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
