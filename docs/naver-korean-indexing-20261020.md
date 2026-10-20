# Naver Korean indexing scope — 2026-10-20

User confirmed: Naver crawls Korean pages only; Google retains Korean and all existing languages. Work is limited to robots generation and a Korean sitemap derived from the same audited indexable canonical URL inventory. No page copy, noindex policy, canonical, photos, dates or other unpublished content is changed.

Base: current verified production commit 5f9312684ee54db516bcab4c254cf098c0588ec7. Isolated checkout: /Users/matowe/.codex/worktrees/naver-korean-indexing/ThaiLiveNow. Owner: Codex root, this request. Existing main checkout changes are preserved.

Live findings: sitemap has 2,547 URLs including 705 Korean URLs. All 705 Korean sitemap URLs return HTTP 200 without noindex or X-Robots-Tag noindex. Root is noindex with English canonical; Korean home is indexable. Existing beach hub remains noindex in production; its unpublished rewrite is outside this release. Personal saved/compare pages and duplicate aliases retain noindex. Naver diagnosis's single collection restriction is historical root redirection, not a robots-wide ban. Naver robots verification reports /ko/ collection possible.

Yeti-specific rules allow /ko/ and shared assets, root discovery and sitemap resources; other language HTML is disallowed. The default group remains Allow: / and the global sitemap remains unchanged. sitemap-ko.xml includes only Korean canonicals already passing the existing SEO audit. Naver should receive the Korean sitemap rather than the multilingual one. robots restrictions govern crawling and do not guarantee removal of already indexed foreign-language URLs; Naver currently reports zero indexed pages.

Validation and submission evidence will be reported separately from actual crawling/indexing. Full release gates and current production baseline checks apply. No indexing outcome is promised.
