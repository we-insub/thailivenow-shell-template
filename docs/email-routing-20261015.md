# 도메인 메일 전달 설정 — 2026-10-15

사용자 요청으로 Cloudflare Email Routing에 thailivenow.com을 등록하고 다음 규칙을 생성했다.

- 수신 주소: hello@thailivenow.com
- 전달 주소: dnlstjq@gmail.com (기존 등록된 목적지 선택)
- 규칙 상태: Active
- 도메인 Routing status: Enabled
- DNS records: Locked
- MX 3개와 SPF TXT 공개 DNS 조회 확인 완료.
- 기존 충돌 레코드 제거 없이 Cloudflare가 제시한 MX/DKIM/SPF를 활성화했다.
- Catch-all은 기존 Disabled 상태 유지.
- 수신 전달 설정이며 발신 SMTP/보내는 주소 설정은 하지 않았다.
- 실제 테스트 메일 발송/수신 검증은 수행하지 않았다.
- 증빙: artifacts/search-registration/email-routing-20261015.png
