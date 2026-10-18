# ja 原稿・表示辞書レビュー

対象は日本語市場（ja）のタイ旅行、ルーフトップ、カメラ。2026-10-18承認のローカル現地化のみ。自分の変更は `src/data/localized/ja/` と `artifacts/localization-20261018/ja/` に限定した。共有コード、ルート、日付台帳、他言語、コミット、プッシュ、運営公開、インデックス送信は担当していない。

## 読んだ原文と範囲

`docs/LOCALIZATION-ORCHESTRATION-20261018.md`、`AGENTS.md`、`docs/INTERNAL-LINKING-CONTRACT.md`、`docs/page-seo-rules.md`、`docs/natural-korean-copy.md`、`docs/sirocco-user-full-reference-20261014.txt`（変更前後と反復部分を含む）、`docs/detail-template-rules.md`、`docs/SITE-DATES.md`、`docs/page-generation-date-contract.md`、`docs/operations-site-dates.md`、`docs/language-settings.md`を原文で読んだ。大きな出力の欠落は小分けに再読した。

旅行関連は travel-seasons-korean-rewrite-20261015 / travel-seasons-review-20261014 / travel-seasons-menu-meta-20261015 / entry-korean-editorial-review-20261014 / travel-hub-entry-copy-review-20261014。カメラは camera-preview-restoration-20261018 / breadcrumb-camera-release-20261018 / camera-beginner-review-local-20261017 / camera-place-review-local-20261018 / camera-sources。実データは travel-seasons-ko.json全72か月、entry-guides-ko.json全4案内の公開本文・FAQ・入力欄・画像説明、rooftops.json全44公開施設の対象表示値、camera-editorial-ko.json全29項目の公開本文を読んで対応させた。

実テンプレートは RooftopDetail / RooftopHub / RooftopMap / CameraKoreanDetail / CameraGallery / CameraDirectory / CameraMapResults / CameraComparison / CameraAreaMap / TravelSeasonPage / EntryGuideLayout / TopicHub / LocalePagination / LocaleConnections / DetailHeader / SiteFooter。実動的表示は saved-cameras.ts、camera-weather.ts、camera-viewing-copy.mjs、camera-video-preview.mjsとlocale-text.mjsを読んだ。

## 旅行

目的地は13ID。ホテルでの休息、寺院や街歩き、ビーチ滞在など元の目的と対象を保ち、日本語では「何を楽しむか」「どう過ごすか」が読める文にした。語尾だけを変えず、シロッコの具体的な行動と場面のつながりを比較した。

季節は6地域×12か月。`month/mean/high/low/rain/rainDays`の全360気候数値と月IDを原本とプログラムで照合した。地域ID、観測所、PDFページ、pattern、period、source、checkedAtは同値。月ごとのseason/advantage/caution、intro、cardSummary、bestAnswer、outdoor/indoorを省略せず日本語化した。冬のチェンマイの上着、海の旗・遊泳禁止・運航判断、雨の日数と終日降雨の違い、平年値と当日予報の違いを保つ。年間で同じ乾季を全海岸に当てはめていない。

入国はentry/tdac/visa/tourist-visaの4ID。TDACの11段階、全画像ファイル名、入力欄の配列、QR例が本人の書類ではない点、更新不可の氏名・旅券番号・国籍・生年月日、乗継例外、英語入力、到着日を含む3日、任意出国情報と入国審査の準備の違いを維持した。画像は既存英語画面を保持し、健康画面が韓国を選んだ既存例である事実も明示した。`paragraphAudiences`は実レンダラーがmarketと比較することを読み、日本一般旅券向け段落をJPに揃え、非日本国籍者の在留カード条件の専用段落はnon-JPとして内部保存し、日本一般旅券の本文から除外した。

日本国籍固有事項は `entry-evidence.json` に公館・実際に開いたURL・適用範囲・例外を記録した。大阪総領事館の2026-09-15改定通知と公式画像を実見し、日本一般旅券は30日区分と確認。韓国の双務90日を流用しない。大阪の観光ビザPDF2ページ、e-Visa PDF1ページを全て読み、関西・四国対象、3/6か月有効・60日滞在、5500/26000円、オンライン支払、15営業日案内を日本向けにした。韓国の手数料免除・7営業日・K-ETA・韓国外国人登録証条件を日本の要件として表示していない。韓国の元検証メタデータは履歴として保ち、日本現行根拠ではない旨を付記した。元checkedAtと日本新確認日は別にした。

保留：大阪の読んだTR PDFに明記されていない旅券残存6か月と延長30日を、日本公館の確定条件へ昇格させていない。延長を保証せず、現地別途審査と説明している。これは韓国原本を消したという意味ではなく、国籍・申請公館条件を混同しないための適用保留。

## ルーフトップ44施設

750の固有表示文字列を直接日本語で作成し、同じ原文が繰り返される項目へ対応させた。外部翻訳・LLM APIは使っていない。名前、建物、紹介、facts原キー、理由の見出しと本文、メニュー、各利用案内、FAQ、access、写真説明、出典表示名を対象とした。

44IDすべてについてfactsのキー集合、reasons/faq/access/photos/sourcesの個数、accessの非表示保護フィールド、画像URL・著作者・権利・ライセンス、出典URL、英語/タイ語の運転手向け文が原本と同値であることを照合した。座標・公開状態・確認日をoverlayに新造していない。原本を変更していない。

シロッコは紹介→金色のドーム・夕暮れ→同行者→演奏曜日→予約と服装・荷物の行動へつながる説明として比較。予約72時間前まで無料、それ以後の取消・変更・不来店の返金不可、特別日・団体の例外を保持。0:30閉店と23:00/23:30/0:00の注文締切を区別。衣装の「整ったサンダル」を不自然な直訳として見直し、「きれいめのサンダル」に修正した。

施設の違いも維持。ババ・ネストの宿泊者1500/外来3000(net)、15分席保持・雨天振替、スターのプール内4卓/全42席、展望台とバーの別、同ホテル内SEEN/SIN・CHAR・Red Skyの階と用途の別、20歳/18歳/7歳の条件、Spire20歳未満19:00まで、Doi Suthepの306段とケーブルカーを混同しない。音楽、飲食、寺院・眺望を同じロマンチックな説明に統一していない。

数字抽出の28差分も確認した。韓国語の「한 개/네 개/두 층」を日本語1/4/2へ表記したもの、子ども・階数、深夜12時を0時としたもの、映画の日本語題名などの表記差であり、新しい料金や時間を追加していない。

## カメラ29項目

全319固有表示文字列を日本語化。全ID、basis、relatedIds、およびplaceSources URLを同値確認した。紹介・景色段落・FAQの文数を勝手に減らしていない。地図ピンは設置地点や入口ではない、設置位置不明は新設しない、更新写真を連続動画としない、元運営者不明や現再生未確認をライブ保証にしない条件を保持した。同一海辺の既存関連3組のみを保持し、同都市という理由で新しい場所を関連付けていない。

シロッコの「場所の特徴→見える景色→旅行での選択」を比較し、全項目を視聴手順だけにしなかった。ケープパンワのcontextはカメラが「眺める」でなく「映しています」に、sceneの「一度に入る」は「ひとつの画面で見渡せます」に、抽象的な「海と向き合う旅」は「海を眺めて過ごす旅」に修正。ほかのカメラ主語の同種表現も再読して直した。NĀMA Bayという撮影対象とTang Khen Bay周辺の参考地点を同一の精密位置としない。

## 表示辞書と検証の境界

ui.jsonは実テンプレートの韓国語をキーに持つ辞書。strong前後の分割本文、タイトル/description、写真credit合成、ページ数・件数・月・日・観測所・時間・地名変数、保存・比較・共有・最近見た履歴通知、天気の読み込み/風速/エラーを含む。実際の`${...}`変数表記を保持した。無関係な文を捕捉する韓国語literalなしのbroadパターンは残していない。

総括が生成した当時の `artifacts/localization-20261018/ja/html-audit.json` の881件を、現行 `translateLocaleText(text,dictionary)` に再投入し、韓国語残留0を確認した（ui-gaps-after.json）。既知の実HTML文字列を人が書いた辞書と具体変数パターンで対応させた結果であり、ページの再ビルドやブラウザ動作を自分が完了したという意味ではない。

出力は一時JSONを書いて原子置換。担当は原稿/データ対照/辞書までcomplete、最終HTML・SEO・canonical/hreflang/sitemap・初期HTMLの同市場リンク・PC/モバイル・Pages runtime・最終公開判定は総括の統合検査pending。ページ出力やUIの自己評価だけを最終検収としていない。運営デプロイ・検索エンジン収集・索引・露出は未実施。

### 最後の追加対照

総括の `dynamic-audit.json` は静的HTMLと別の141合成例。地図選択パネルの元リンク、0–29件の地図範囲数、資料確認日付き状態、ローカライズ済みカメラ題名＋動画プレビューの組み合わせを実文字列から追加。報告された40文字列を現行translateLocaleTextへ再投入して、動的残留0（dynamic-gaps-after.json）。最終対照時は101ページ監査の報告259文字列を再投入して残留0を確認。これらは辞書の対照結果であり、新しい全体ビルドやPC/モバイルの機能検査の代わりではない。

tourist-visaの在留カード段落は非日本国籍者専用として `paragraphAudiences[1]='non-JP'` に変更し、`g.market='JP'` の実フィルターでは除外されることを確認した。その他4段落はJPとして表示する。日本国籍者のマイナンバーカード／運転免許証、観光用資金証明、宿泊・旅程、補足書類案内は維持。

最終の実行根拠は artifacts/localization-20261018/ja/validation.json。各原稿、現行翻訳関数、両監査入力のSHAを記録し、保護フィールドとJP audienceを再確認した。
