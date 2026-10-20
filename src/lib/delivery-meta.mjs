// Search summaries have their own sentences; the complete guide introductions stay intact.
const ids=['food-delivery','grabfood','line-man','shopeefood','robinhood'];
const copy={
en:[
 ['Food delivery in Thailand: apps and ordering','Compare GrabFood, LINE MAN, ShopeeFood and Robinhood in Thailand. Find delivery areas, payment options, fees and how to collect food at your hotel.'],
 ['GrabFood Thailand: ordering and payment','Learn how GrabFood orders work in Thailand, from delivery pins and payments to overseas payment fees, pickup and cancellation conditions.'],
 ['LINE MAN Thailand: how to order food','Use LINE MAN with your LINE ID to order food in Thailand. Set the hotel address, choose a restaurant and review delivery charges before paying.'],
 ['ShopeeFood Thailand: how to order meals','Find ShopeeFood in the Thai Shopee app, set your hotel address and review meal delivery charges. Keep food orders separate from shopping deliveries.'],
 ['Robinhood Thailand: food delivery guide','Order food with Robinhood in Bangkok and nearby areas. Set your hotel address, see available restaurants and review the total before ordering.']
],
ja:[
 ['タイのフードデリバリー｜アプリと注文方法','GrabFood・LINE MAN・ShopeeFood・Robinhoodを比較。タイでの配達エリア、支払い、料金の見方やホテルでの受け取り方を案内します。'],
 ['タイのGrabFood｜注文・支払い・キャンセル','タイでGrabFoodを注文する手順を紹介。ホテルの住所とピンの指定、支払い、海外決済手数料、受け取りやキャンセル条件を確認できます。'],
 ['タイのLINE MAN｜料理を注文する方法','LINE IDを使ってタイのLINE MANで料理を注文する手順を紹介。ホテルの住所、配達可能なお店、配達料を含む合計金額の見方を案内します。'],
 ['タイのShopeeFood｜料理の注文方法','タイ版ShopeeアプリのShopeeFoodから料理を注文する手順を紹介。ホテルの住所や配達料を確認し、通販商品の配送と区別して利用しましょう。'],
 ['タイのRobinhood｜フードデリバリーの使い方','バンコクと周辺でRobinhoodを使う手順を紹介。ホテルの住所を指定し、配達可能なお店と配達料を含む合計金額を確認して注文できます。']
],
'zh-cn':[
 ['泰国外卖指南：平台选择与下单方法','比较GrabFood、LINE MAN、ShopeeFood和Robinhood，了解泰国外卖配送范围、付款方式、费用和酒店取餐方法。'],
 ['泰国GrabFood：下单、付款与取消订单','了解在泰国使用GrabFood的流程，包括设置酒店地址与地图图钉、付款、境外付款手续费、取餐和取消订单条件。'],
 ['泰国LINE MAN：如何点外卖','介绍使用LINE ID在泰国LINE MAN点餐的步骤：设置酒店地址、选择可配送餐厅，并在付款前查看包含配送费的总额。'],
 ['泰国ShopeeFood：外卖下单指南','了解泰国版Shopee应用内的ShopeeFood点餐流程，包括酒店地址和配送费用，并区分外卖订单与购物包裹配送。'],
 ['泰国Robinhood：曼谷外卖使用指南','介绍在曼谷及周边使用Robinhood点外卖的方法。填写酒店地址，查看可配送餐厅和包含配送费的总额后再下单。']
],
'zh-tw':[
 ['泰國外送指南：平台選擇與訂餐方法','比較GrabFood、LINE MAN、ShopeeFood與Robinhood，了解泰國外送範圍、付款方式、費用，以及在飯店領餐的方法。'],
 ['泰國GrabFood：訂餐、付款與取消訂單','了解在泰國使用GrabFood的流程，包括設定飯店地址與地圖圖釘、付款、海外付款手續費、領餐與取消訂單條件。'],
 ['泰國LINE MAN：如何訂外送','介紹使用LINE ID在泰國LINE MAN訂餐的步驟：設定飯店地址、選擇可外送餐廳，並在付款前查看含外送費的總金額。'],
 ['泰國ShopeeFood：外送訂餐指南','了解泰國版Shopee App內的ShopeeFood訂餐流程，包括飯店地址與外送費用，並區分餐點外送與購物包裹配送。'],
 ['泰國Robinhood：曼谷外送使用指南','介紹在曼谷及周邊使用Robinhood訂外送的方法。填寫飯店地址，查看可外送餐廳與含外送費的總金額後再下單。']
],
ms:[
 ['Penghantaran makanan di Thailand: cara memesan','Bandingkan GrabFood, LINE MAN, ShopeeFood dan Robinhood di Thailand. Lihat kawasan penghantaran, bayaran, caj dan cara menerima makanan di hotel.'],
 ['GrabFood Thailand: pesanan dan bayaran','Ketahui cara memesan melalui GrabFood di Thailand, menetapkan pin hotel, membayar, menyemak caj bayaran luar negara dan membatalkan pesanan.'],
 ['LINE MAN Thailand: cara memesan makanan','Gunakan LINE ID untuk memesan makanan melalui LINE MAN di Thailand. Tetapkan alamat hotel dan semak jumlah termasuk caj penghantaran.'],
 ['ShopeeFood Thailand: panduan memesan makanan','Cari ShopeeFood dalam aplikasi Shopee Thailand, tetapkan alamat hotel dan semak caj penghantaran makanan. Bezakan pesanan makanan daripada pesanan barangan.'],
 ['Robinhood Thailand: panduan penghantaran makanan','Pesan makanan melalui Robinhood di Bangkok dan kawasan sekitarnya. Tetapkan alamat hotel, pilih restoran dan semak jumlah sebelum memesan.']
],
ru:[
 ['Доставка еды в Таиланде: приложения и заказ','Сравните GrabFood, LINE MAN, ShopeeFood и Robinhood в Таиланде: зоны доставки, способы оплаты, сборы и получение заказа в отеле.'],
 ['GrabFood в Таиланде: заказ и оплата','Как заказать еду через GrabFood в Таиланде: адрес и метка отеля, оплата, комиссия за зарубежные платежи, получение еды и условия отмены.'],
 ['LINE MAN в Таиланде: как заказать еду','Используйте LINE ID для заказа еды через LINE MAN в Таиланде. Укажите отель, выберите ресторан и проверьте сумму с учётом доставки.'],
 ['ShopeeFood в Таиланде: как заказать еду','Где найти ShopeeFood в тайском приложении Shopee, как указать отель и проверить стоимость доставки. Заказы еды и товаров оформляются отдельно.'],
 ['Robinhood в Таиланде: доставка еды','Как заказать еду через Robinhood в Бангкоке и окрестностях. Укажите адрес отеля, выберите доступный ресторан и проверьте итоговую сумму.']
],
es:[
 ['Comida a domicilio en Tailandia: apps y pedidos','Compara GrabFood, LINE MAN, ShopeeFood y Robinhood en Tailandia: zonas de reparto, pagos, gastos y recogida del pedido en el hotel.'],
 ['GrabFood Tailandia: pedidos y pagos','Aprende a pedir con GrabFood en Tailandia: dirección y pin del hotel, pagos, comisión por pagos extranjeros, recogida y condiciones de cancelación.'],
 ['LINE MAN Tailandia: cómo pedir comida','Usa tu LINE ID para pedir comida con LINE MAN en Tailandia. Indica el hotel, elige un restaurante y revisa el total con los gastos de reparto.'],
 ['ShopeeFood Tailandia: cómo pedir comida','Encuentra ShopeeFood en la app tailandesa de Shopee, indica el hotel y revisa los gastos. Distingue los pedidos de comida de las compras de productos.'],
 ['Robinhood Tailandia: comida a domicilio','Cómo pedir con Robinhood en Bangkok y alrededores. Introduce la dirección del hotel, elige un restaurante disponible y revisa el total antes de pedir.']
]
};
export function deliveryMetadata(locale,id){const row=(copy[locale]||copy.en)[ids.indexOf(id)];if(!row)throw Error('Unknown delivery metadata: '+id);return {title:row[0],description:row[1]};}
