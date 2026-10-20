# 해변 JA·CN·TW 원고 독립 검수

2026-10-20. Reviewer navigation_contract; writer beach_locales. 해당 세 언어 원고는 직접 수정하지 않았으며 수정 요청을 작성자에게 전달한 뒤 바뀐 필드만 다시 읽었다. 별도 Malay 원고 ms.json은 navigation_contract가 작성하고 root가 독립 검수하므로 이 문서의 승인 범위에 포함하지 않는다.

## 범위와 방법

한국어 beaches.json의 pilot 19개 소개·경험·접근·시설·물놀이·날씨·교통·FAQ 전체와 docs/beaches/20261020/의 19개 MD 전체(사진 근거·원출처·실제 확인일·미확보 항목 포함)를 읽었다. 기준은 최신 사용자 시로코 문체와 상세·SEO·날짜·내부 연결·저자/공유 이미지 계약이다. 기존 해변 작업 MD 및 후속 문장 검수 기록도 확인했다.

JA/CN/TW 각 19개 9필드 원고 전체를 읽고 같은 해변 한국어 정본과 대조했다. 이어서 공통 UI의 날씨·빨간 깃발 FAQ·마야 별도 규칙, 각 언어 19개 제목/설명 쌍·9개 도시 이름/소개·별도 사진 촬영연도 캡션 전체도 읽었다. 자동 필드 수·표현 검색은 사람이 읽은 의미 대조를 보조한다.

## 지적과 수정 후 재독

- TW: 단순 번체 전환으로 남은 酒店/搜索/鏈接/船游/計劃/運營 등을 飯店/搜尋/連結/搭船遊覽/計畫/營運으로 수정 요청했다. 변경된 사용자용 필드를 전부 다시 읽었다. 지역명도 芭達雅/蘇美島/喀比 등 해당 시장 표현으로 유지한다.
- TW: Ao Nang의 甲米大陸, Sai Kaew의 從大陸班佩는 喀比本土·從泰國本土的班佩로 바뀌어 중국 본토로 오해할 수 있는 문맥을 해결했다. 접근 관계·보트 이용 조건은 같다.
- JA: Lamai와 Wong Duean의 曲がった砂浜/曲がった海岸을 弧を描く 표현으로 바꾸었다. Chaweng의 모호한 出方는 ビーチまでの行き方로, Railay의 船で尋ね는 乗船時にRailay Westで降りるか尋ね로 구체화했다. 岩登りの活動은 ロッククライミング으로 수정했다. 해당 필드를 다시 읽어 사실과 동작이 유지됨을 확인했다.
- CN/TW: 长长沙滩/長長沙灘 조사 누락과 現場旗幟를 그 지시로 읽도록 한 표현을 수정 요청하고 바뀐 FAQ·메타·도시 필드를 다시 읽었다. TW 離島游船는 離島遊船行程으로 교정했다.

## 최종 원고 판단

검수한 범위에서 차단하는 사실·조건 누락이나 잘못된 적용 범위를 발견하지 않았다. 단순한 소개 요약만 제공하지 않고 두 경험 문단·접근·물놀이·시설·교통·고유 FAQ가 각 해변별로 유지된다. 공통 날씨 문단 및 마지막 빨간 깃발 FAQ는 UI에 완전한 문장으로 보존되어 조립되며, 이 항목을 override 파일에 중복시키지 않은 구조다.

특히 카론 노이의 투숙객 접근, 카타 노이·차웽 노이 별도 해변, 라마이의 깊은 수심·강한 파도, 마야 베이 2026-10-01 재개방과 지정 구역 수영 금지·날씨/깃발과 무관한 제한·상륙 여부, 라일레이 동서 해안과 아오낭에서 배 접근, 낭통 저조 때 드러나는 지면과 항상 걸을 수 없음, 화이트 샌드 마을 핀과 불규칙 수심, 램차이쳇 바위 곶 물놀이 부적합, 사이깨우 동명 싸타힙 구분과 반페/나단·국립공원 조건, 웡드안 직접 도착/나단 경유를 보존한다. 확인되지 않은 가격·시간·수영 안전 보장·주차·샤워·여권 자격을 추가하지 않았다.

사진 캡션의 실제 촬영연도는 유지한다. 원저작자·권리·좌표·원출처·실제 확인일은 기존 한국어 데이터에서 조립하는 계약이다. 실제 생성 결과의 protected fields·공유 이미지 장소 일치와 출처를 통합 검수에서 다시 확인해야 한다. 이 원고 검수는 전체 생성 HTML·빌드·Pages 런타임·PC/모바일·배포·색인을 완료 처리하지 않는다.

## 최종 검수 지문

원고 파일은 실제 파일 SHA256이며 공통 JSON은 해당 언어 subtree를 JSON.stringify에 준하는 compact JSON으로 직렬화한 SHA256이다. 다른 언어를 나중에 추가해도 이 검수 범위의 변경 여부를 구분한다.
- src/data/beach-localized/ja.json: fffa29610c0653dd0d2b9365504f47b415f74a761352c843fd3b22487c95b2c6
- src/data/beach-localized/zh-cn.json: d13c0729d4a3510d3292febe3a47a81b05d766b3b11a35daedfbc9867adf4e01
- src/data/beach-localized/zh-tw.json: 46eefae76331018f87b33a01c393232bc7f75c194700e4fbe304d4f6e1dac423
- src/data/beach-localized/ui.json#ja: 83605fa6e44a799568abe9c412adc9c5a737eff43d15d38350fa3a7c617945b4
- src/data/beach-localized/ui.json#zh-cn: aedb5d0a9e11d1bed2b7609d1fbfd2c1068695398267a7d94f633528d81b47bf
- src/data/beach-localized/ui.json#zh-tw: 66fb03d360e4fc4263334c6d16c6a6aa37509571350ece9e3e17be8c00b12d92
- src/data/beach-localized/meta.json#ja: ae7493f7f1ea6057e0d029a2638354716bc0ed020fbb195876b2df5d2dff704a
- src/data/beach-localized/meta.json#zh-cn: b440a8b9a7611e3e7e8559df56d288a8b5ace7968eb1f40aaea764a30d565a61
- src/data/beach-localized/meta.json#zh-tw: f2344a51415ca744248aed14cc413cdd8e64faa2b7578d6800b506c85d7da206
- src/data/beach-localized/cities.json#ja: 24de58873ff4e23854783805a32a201f38ce3a738b158b247f638b00097dd0d5
- src/data/beach-localized/cities.json#zh-cn: 8bd5d69ee0891e74f910b4401a7914ef885a39427d3872d3a0be13cb582b1ce5
- src/data/beach-localized/cities.json#zh-tw: 37ccb5a04ec52db638181b803e83eff4c10cb4cbadda671bf92ad100f5a2dc20
- src/data/beach-localized/photo-captions.json#ja: e1650fb47a936fa8d9514f64db5795420c966a0df6b8f47d0e4573abf3979bd3
- src/data/beach-localized/photo-captions.json#zh-cn: bbf36e6c2efb4ebb74ed576438653b45df459c67604e36fa3b2cc3da71b08db1
- src/data/beach-localized/photo-captions.json#zh-tw: f80012771315efa953fd0d9ccc697201b881d220baaf58c879c54e4bb775d786

## 조립 모듈·상세 출력 경로 검토

후속 src/lib/beach-localization.mjs와 LocalizedBeachDetail.astro의 소개·사진·지도·접근·정보·경험·물놀이·FAQ·관련 링크·출처 출력 코드를 읽었다. 원본 자료에서 실제 좌표·확인일·원출처·사진가/라이선스·gaps를 보존하면서 본문 필드를 현지어로 조립한다. 공통 날씨/마야 별도 날씨 및 빨간 깃발 FAQ가 실제 배열에 붙고, 상세에서 초기 HTML과 FAQ schema에 같은 배열을 출력한다. KO editorialReview pass를 번역판 승인으로 승격하지 않는다. 현재 사진의 changes 필드는 모두 없어서 한국어 changes 잔여 문구가 노출되지 않는다.

`node --test tests/beach-localization.test.mjs`: 3/3 PASS. 10시장 19ID·도시·외부URL·교통원출처·사진권리·FAQ개수·진짜날짜·언어필드 완결성과 영어시장 철자를 확인했다. 이 테스트는 독립 문장 검수를 대체하지 않고 실제 생성HTML·브라우저·서버 런타임 검수와도 구분한다.
03170d0a2fc8e421c6c316158101727f9e1688df9118b9109259a55aa7ea329e  src/lib/beach-localization.mjs
486b9141348dd6ff504facc20bf3d3ae63e6fa9f65328f08e831ab4a8ffcb669  src/components/LocalizedBeachDetail.astro
