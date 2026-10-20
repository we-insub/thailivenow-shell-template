# Language and regional settings

ThaiLiveNow supports 11 distinct locale routes: ko, ms, zh-cn, en, en-in, ru, ja, en-gb, en-us, es, zh-tw. English Worldwide, India, UK and US remain separate routes and language choices.

The root and legacy camera links detect the first supported browser language. A valid manual selection saved under `thailivenow.locale` takes precedence. Explicit locale URLs remain explicit. The browser-language button clears the saved selection and detects again. Storage failure does not prevent navigation. Switching language preserves camera/detail path, query string and fragment.

Mappings include en-US → en-us, en-GB → en-gb, en-IN/hi-IN → en-in, generic English → en, zh-Hant/TW/HK/MO → zh-tw, other Chinese → zh-cn. Unsupported languages fall back to global English. Malay is ms-MY. Hindi is not a separate supported language.

Header navigation, explorer controls, gallery notices and camera detail controls use locale dictionaries. Camera location/provider names use English original names outside Korean; detailed source notes remain Korean in the source dataset and use a localized status summary in other locales. Map tile labels are supplied by OpenFreeMap.

The prototype remains noindex. Set SITE_URL to the verified deployment origin when preparing publication; the former example.com placeholder has been removed. Language URLs and hreflang do not by themselves provide market-specific SEO/AEO/GEO content.

Validation: language detection/preference/path cases; all 11 generated home menus, HTML language attributes and representative localized camera routes; browser UI selection, saved preference, automatic reset and query/fragment retention. Astro build passes.

## 현재 정책 우선순위

위 prototype/noindex 문장은 초기 단계 기록이다. 현재 공개·canonical·hreflang 정책은 AGENTS.md와 docs/page-seo-rules.md 및 실제 소스 설정을 우선한다. 이 문서만으로 색인 정책을 변경하지 않는다.

## 쿠폰 내비게이션 보류 — 2026-10-20 사용자 확정

모든 11개 언어·시장, PC·모바일에서 쿠폰 메뉴를 노출하지 않는다. `src/lib/site-navigation.mjs`의 `couponsNavigationEnabled=false`가 공통 제어다. 번역·메뉴 추가·다음 빌드에서 자동으로 다시 열지 않는다. 사용자가 명시적으로 쿠폰을 오픈하라고 지시할 때만 변경한다. 쿠폰 원고·언어별 문구·기존 URL은 보존하며 이번 변경은 메뉴 노출 보류다. 색인 정책 변경·운영 배포는 승인하지 않았다. 쿠폰 보류 동안 공통 메뉴는 11개이며, 나머지 순서는 한국어 기준을 따른다.
