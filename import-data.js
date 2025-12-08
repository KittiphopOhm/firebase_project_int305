var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = getFirestore()

var brands = [
  {
    "name": "Apple"
  },
  {
    "name": "Sony"
  },
  {
    "name": "Edifier"
  },
  {
    "name": "Marshall"
  },
    {
    "name": "JBL"
  },
  {
    "name": "Sennheiser"
  },
  {
    "name": "Beyerdynamic"
  },
  {
    "name": "HyperX"
  },
  {
    "name": "Logitech"
  },
  {
    "name": "Audio‑Technica"
  },
]

var products = [
  // === Apple (5) ===
  {
    "model": "AirPods 4",
    "price": 129.00,
    "brand": "Apple",
    "title": "The next evolution of sound and comfort.",
    "colors": ["White"],
    "rating": 4.8,
    "category": "Earbuds",
    "stock": 25,
    "images": [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=Qklmb1JJend3cVIxSUxIeFBIRk96cUNGMHVRUVpqOEFiUFU4R0xNRVFxdkhJa2hkRmxkTlJIMk9SdFNSaWFNODE1UUxLT2t0cW42N3FvQzVqaGhrVVcvdmFyQU52eG9rbk9Lb1pmQWN1MGgrYWpGdS9XeFgvbS9ITnNYOEhYaG4"
    ]
  },
  {
    "model": "AirPods Pro 3",
    "price": 249.00,
    "brand": "Apple",
    "title": "Now with the world’s best in‑ear Active Noise Cancellation,Footnote¹ all‑new heart rate sensing,Footnote² and up to 8 hours of battery life.Footnote¹⁴",
    "colors": ["White"],
    "rating": 4.9,
    "category": "Earbuds",
    "stock": 18,
    "images": [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509?wid=976&hei=916&fmt=jpeg&qlt=90&.v=cmp4MmZ6OWxOeHNNTXh4SzlBNUpEb1RucE9zZTI5eEREaWZpY29lSld3eWVDYXovZDMyN1dXU211bjZoVlVUcWJGcXNRQnFCV0w3WVRjTExvdm1ic1YxRUxFRmRlWDBITzhnRmZ5OTRmaVdKTExiOEFsRmxtQ2Nua0tRSC83MkI"
    ]
  },
  {
    "model": "AirPods Max",
    "price": 549.00,
    "brand": "Apple",
    "title": "High-fidelity audio with industry-leading ANC.",
    "colors": ["Space Gray", "Silver", "Green", "Sky Blue", "Pink"],
    "rating": 4.7,
    "category": "Headphones",
    "stock": 10,
    "images": [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-midnight_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=azQxRkVJKzd6V3J0aGNqWFhLMzBmdmVWNWdHYnp5cHkwMldsSElEOHpyd0cyWGRFNFZ5QTk3bFlteis2Q2NNaWpENFdPQTN0TWQ4ejhtTWxrUHVDeElGZGV2eWhZaEljUzNSeDlxcDVuWGszbTFldUtUQzN0ellEWHZ3UUFYSS8",
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-blue_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=azQxRkVJKzd6V3J0aGNqWFhLMzBmaVZsckZUTTZZd1pFb3lRTGNlYkF0Yy9BSXRGSWdwVEs0NXdLd3JPRVQ3TGROL2hTdHRlcnVBMFhCNlFSVHgrS01jL2RQeWJYZ1FmWXUzRFBMSzJrTlJTZy9JeUNjV2pzbzd6anYzTldHVWw",
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-purple_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=azQxRkVJKzd6V3J0aGNqWFhLMzBmdEFZMGtjOXNTYXJEaHFYa1lFVzIyUnJHdFc3SWNOdWRSclF6WTRFc2h1eFJnYUxCQWt1UDJiRlJNZVhPYkVVc2hXdERnUW81QWI5aTlucjZuTWh1dnhzQVNZV1grZHBseDduSWhqSlA3QUE",
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-starlight_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=azQxRkVJKzd6V3J0aGNqWFhLMzBmdWd1NjlYUXFPTDZEK2xySGJScW1PS1Rpbjg5MjlaRWkwN0JTZEtNR2p3b2dmcFJCOTlLWlREUEJzL3lTN2VnL0cvVnNUQWxFNHNrME94a1pxdUNOU29FM01jakdGSHhMVXhHQ21YeXBIKzU",
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-orange_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=azQxRkVJKzd6V3J0aGNqWFhLMzBmbVl3dU4zNmtlQ1czYnJUSEJUcWowRnJHdFc3SWNOdWRSclF6WTRFc2h1eFJnYUxCQWt1UDJiRlJNZVhPYkVVc2hXdERnUW81QWI5aTlucjZuTWh1dnk3Zm5tZm5FR0tlWnFHbkRhQU5lZmc",
    ]
  },
  {
    "model": "Beats Studio Buds+",
    "price": 169.00,
    "brand": "Apple",
    "title": "Powerful, balanced sound in a compact design.",
    "colors": ["Black", "Transparent", "Ivory"],
    "rating": 4.6,
    "category": "Earbuds",
    "stock": 22,
    "images": [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQLK3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=bjY0YUU1NzZUMlNjU2NxM2hCUWpGZ2tuVHYzMERCZURia3c5SzJFOTlPaHZFQUJIbmZ4VXcyazFhTmppb1Z1MThNNkpjb0x4Tzg2SnBBR1lHbTM2elE",
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQLH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=MTluT0ZyajVOVWM5UWJvc3FGTFFTUWtuVHYzMERCZURia3c5SzJFOTlPaHZFQUJIbmZ4VXcyazFhTmppb1Z1MUNYVEpnZm1ueXJtM1ZsNUVyQ3dJTEE",
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQLJ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=bkhzS0gwM3BZWncxU0lsMWx3WDlZUWtuVHYzMERCZURia3c5SzJFOTlPaHZFQUJIbmZ4VXcyazFhTmppb1Z1MTBVV3NKSzk0YVc0NnJNK1NOOUVSZVE"
    ]
  },
  {
    "model": "Beats Studio Pro Wireless",
    "price": 349.99,
    "brand": "Apple",
    "title": "Secure-fit wireless headphones for active use.",
    "colors": ["Black", "Navy", "Sandstone", "Deep Brown"],
    "rating": 4.7,
    "category": "Headphones",
    "stock": 20,
    "images": [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTP3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=SUFReFd6NEVVOW50TTcxUzVyWlhHZ2tuVHYzMERCZURia3c5SzJFOTlPZ3oveDdpQVpwS0ltY2w2UW05aU90TzVtaW9peGdOaitwV1Nxb1VublZoTVE",
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=dkp4djAxbnA1NnpYWDIvVklnLzRpUWtuVHYzMERCZURia3c5SzJFOTlPZ3oveDdpQVpwS0ltY2w2UW05aU90T1lYTmlwOFY3ZXdFd0FRY2dWaUc5UlE",
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=SmFOSTFzWmdkMW1XWjFUWXBDRzdBd2tuVHYzMERCZURia3c5SzJFOTlPZ3oveDdpQVpwS0ltY2w2UW05aU90T0huV2F0aExud1Z0YndiMUgwNXJZQnc",
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTT3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=UExiSjRVaHROemRXOFVQQ2xaUFRQQWtuVHYzMERCZURia3c5SzJFOTlPZ3oveDdpQVpwS0ltY2w2UW05aU90T0g0a0s3aExTcHlWcGd4blovYUJPa0E",
    ]
  },

  // === Sony (5) ===
  {
    "model": "WF-1000XM5",
    "price": 299.00,
    "brand": "Sony",
    "title": "Industry-leading noise cancellation with premium sound.",
    "colors": ["Silver"],
    "rating": 4.9,
    "category": "Earbuds",
    "stock": 15,
    "images": [
      "https://sony.scene7.com/is/image/sonyglobalsolutions/03_M?$productIntroPlatemobile$&fmt=png-alpha",
      "https://sony.scene7.com/is/image/sonyglobalsolutions/9_M?$productIntroPlatemobile$&fmt=png-alpha",
      "https://sony.scene7.com/is/image/sonyglobalsolutions/10_M?$productIntroPlatemobile$&fmt=png-alpha",
    ]
  },
  {
    "model": "WH-1000XM5",
    "price": 399.00,
    "brand": "Sony",
    "title": "Flagship noise canceling wireless headphones.",
    "colors": ["Black"],
    "rating": 4.8,
    "category": "Headphones",
    "stock": 12,
    "images": [
      "https://media-cdn.bnn.in.th/203794/Sony-WH-1000XM5-Black-4-square_medium.jpg",
      "https://media-cdn.bnn.in.th/203795/Sony-WH-1000XM5-Black-5-square_medium.jpg",
      "https://media-cdn.bnn.in.th/203792/Sony-WH-1000XM5-Black-2-square_medium.jpg",
      "https://media-cdn.bnn.in.th/203793/Sony-WH-1000XM5-Black-3-square_medium.jpg",
    ]
  },
  {
    "model": "LinkBuds S",
    "price": 199.00,
    "brand": "Sony",
    "title": "Small, light, and naturally transparent ambient sound.",
    "colors": ["Black", "White", "Beige"],
    "rating": 4.6,
    "category": "Earbuds",
    "stock": 20,
    "images": [
      "https://mediam.dotlife.store/media/catalog/product/cache/3b7e899159f673788675d87d1d929a98/_/s/_sony_wf-ls900n_linkbuds_s_truly_wireless.001.jpeg"
    ]
  },
  {
    "model": "WH-1000XM6",
    "price": 419.00,
    "brand": "Sony",
    "title": "Everyday noise canceling headphones.",
    "colors": ["Black"],
    "rating": 5.0,
    "category": "Headphones",
    "stock": 28,
    "images": [
      "https://sony.scene7.com/is/image/sonyglobalsolutions/WH1000XM6_Product_intro_01_M?$productIntroPlatemobile$&fmt=png-alpha",
      "https://sony.scene7.com/is/image/sonyglobalsolutions/WH1000XM6_Product_intro_02_M?$productIntroPlatemobile$&fmt=png-alpha",
      "https://sony.scene7.com/is/image/sonyglobalsolutions/WH1000XM6_Product_intro_03_M?$productIntroPlatemobile$&fmt=png-alpha",
      "https://sony.scene7.com/is/image/sonyglobalsolutions/WH1000XM6_Product_intro_07_M?$productIntroPlatemobile$&fmt=png-alpha",
    ]
  },
  {
    "model": "WH-CH720N",
    "price": 149.00,
    "brand": "Sony",
    "title": "Lightweight wireless headphones with ANC.",
    "colors": ["Black", "White", "Blue"],
    "rating": 4.4,
    "category": "Headphones",
    "stock": 30,
    "images": [
      "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_black01_M?$productIntroPlatemobile$&fmt=png-alpha",
      "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_black05_M?$productIntroPlatemobile$&fmt=png-alpha",
      "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_black06_M?$productIntroPlatemobile$&fmt=png-alpha",
      "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_black07_M?$productIntroPlatemobile$&fmt=png-alpha"
    ]
  },

  // === Edifier (5) ===
  {
    "model": "W820NB Plus",
    "price": 99.00,
    "brand": "Edifier",
    "title": "Hybrid active noise cancellation over-ear headphones.",
    "colors": ["Black", "White", "Gray"],
    "rating": 4.6,
    "category": "Headphones",
    "stock": 35,
    "images": [
      "https://new-edifier-us-oss.edifier.com/images/20230328/d355c57c4f4a47b7f109c7f6bd50ee20.png",
      "https://new-edifier-us-oss.edifier.com/images/20230328/bf78d44d13ea49afc4f17d9617948cf0.png",
      "https://new-edifier-us-oss.edifier.com/images/20230328/b0d03c8c6e0604478b2f3a184654121e.png",
      "https://new-edifier-us-oss.edifier.com/images/20230328/e9c9f1ee1412d7d710ac0eb90b2b58df.png"
    ]
  },
  {
    "model": "W830NB",
    "price": 129.00,
    "brand": "Edifier",
    "title": "Hi-Res Audio wireless headphones with ANC.",
    "colors": ["Black", "Silver"],
    "rating": 4.7,
    "category": "Headphones",
    "stock": 22,
    "images": [
      "https://new-edifier-us-oss.edifier.com/images/20240611/b663595f88c520daa9d3cbf1423c9fd5.png",
      "https://new-edifier-us-oss.edifier.com/images/20240611/5c74e5ff454a504437f7d9b2d6d8030d.png",
      "https://new-edifier-us-oss.edifier.com/images/20240611/d29c43ddc3ef680db925f41f73074d1e.png",
      "https://new-edifier-us-oss.edifier.com/images/20240611/20c7a06a809b5345b776ffddecc36fe1.png"
    ]
  },
  {
    "model": "TWS1 Pro",
    "price": 59.00,
    "brand": "Edifier",
    "title": "Compact true wireless earbuds with strong bass.",
    "colors": ["Black", "White"],
    "rating": 4.4,
    "category": "Earbuds",
    "stock": 40,
    "images": [
      "https://new-edifier-us-oss.edifier.com/images/20221122/03cafb31f46d5b8b750f38f60d894ede.png",
      "https://new-edifier-us-oss.edifier.com/images/20221122/784fa57ea7fef42f6591cd2a8c85f867.png",
      "https://new-edifier-us-oss.edifier.com/images/20221122/3b195688bb41e26ae0cae0da52d7fdcb.png",
      "https://new-edifier-us-oss.edifier.com/images/20221122/1cd07c13d42e292ffb651ae241b9a147.png"
    ]
  },
  {
    "model": "NeoBuds Pro",
    "price": 129.00,
    "brand": "Edifier",
    "title": "Hybrid ANC true wireless earphones with Hi-Res.",
    "colors": ["Black"],
    "rating": 4.6,
    "category": "Earbuds",
    "stock": 25,
    "images": [
      "https://new-edifier-us-oss.edifier.com/images/20221123/811a4f67d16b98072e34638ab9384c7e.png",
      "https://new-edifier-us-oss.edifier.com/images/20221123/ab0d8e3be7d73e119961f957952ce58e.png",
      "https://new-edifier-us-oss.edifier.com/images/20221123/1a045548597a87976c682cb4a21230ab.png",
      "https://new-edifier-us-oss.edifier.com/images/20221123/c21707608fbe3330d2423b4c3aa6954e.png",
    ]
  },
  {
    "model": "W240TN",
    "price": 79.00,
    "brand": "Edifier",
    "title": "Hybrid ANC earbuds for immersive sound.",
    "colors": ["Black", "Ivory"],
    "rating": 4.5,
    "category": "Earbuds",
    "stock": 33,
    "images": [
      "https://new-edifier-us-oss.edifier.com/images/20221125/ced0027e6ab10592dfc773fd6856042c.png",
      "https://new-edifier-us-oss.edifier.com/images/20221125/fe4353af3733cf58257a85ec2cf459da.png",
      "https://new-edifier-us-oss.edifier.com/images/20221125/d6312a9f553f0698ba79738b2b0e6b02.png",
      "https://new-edifier-us-oss.edifier.com/images/20221125/d9e8c8a1fea8c21a1cd71e1ddc3ccff2.png"
    ]
  },

  // === Marshall (5) ===
  {
    "model": "Motif II A.N.C.",
    "price": 199.00,
    "brand": "Marshall",
    "title": "True wireless earbuds with signature Marshall sound.",
    "colors": ["Black"],
    "rating": 4.7,
    "category": "Earbuds",
    "stock": 14,
    "images": [
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2023/09/Product/marshall-motif-ii-anc-true-wireless-black-front-view.jpg"
    ]
  },
  {
    "model": "Minor IV",
    "price": 129.00,
    "brand": "Marshall",
    "title": "Comfort-focused earbuds with balanced sound.",
    "colors": ["Black", "Cream"],
    "rating": 4.5,
    "category": "Earbuds",
    "stock": 20,
    "images": [
      "https://media-cdn.bnn.in.th/394407/Marshall-Minor-IV-Black-7-square_medium.jpg"
    ]
  },
  {
    "model": "Major IV",
    "price": 149.00,
    "brand": "Marshall",
    "title": "Iconic on-ear design with wireless charging.",
    "colors": ["Black", "Brown"],
    "rating": 4.6,
    "category": "Headphones",
    "stock": 18,
    "images": [
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2021/10/Product/marshall-major-iv-wireless-headphone-brown-02.jpg"
    ]
  },
  {
    "model": "Monitor II A.N.C.",
    "price": 299.00,
    "brand": "Marshall",
    "title": "Over-ear headphones with powerful noise canceling.",
    "colors": ["Black"],
    "rating": 4.8,
    "category": "Headphones",
    "stock": 10,
    "images": [
      "https://media-cdn.bnn.in.th/52712/Marshall-Headphone-with-Mic-Wireless-Monitor-II-A.N.C-Black-1-square_medium.jpg"
    ]
  },
  {
    "model": "Emberton II",
    "price": 169.00,
    "brand": "Marshall",
    "title": "Portable speaker with 360° sound experience.",
    "colors": ["Black", "Cream"],
    "rating": 4.7,
    "category": "Speaker",
    "stock": 16,
    "images": [
      "https://media-cdn.bnn.in.th/230709/Marshall-Emberton-II-Black-and-Brass-01-square_medium.jpg"
    ]
  },

  // === JBL (5) ===
  {
    "model": "Tune 230NC TWS",
    "price": 99.00,
    "brand": "JBL",
    "title": "True wireless earbuds with active noise canceling.",
    "colors": ["Black", "White", "Blue"],
    "rating": 4.5,
    "category": "Earbuds",
    "stock": 36,
    "images": [
      "https://th.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw5d565d6e/1.JBL_TUNE_230NC_Product image_Hero_Blue.png?sw=537&sfrm=png"
    ]
  },
  {
    "model": "Live Pro 2",
    "price": 149.00,
    "brand": "JBL",
    "title": "Premium noise canceling true wireless earbuds.",
    "colors": ["Black", "Silver", "Blue", "Pink"],
    "rating": 4.6,
    "category": "Earbuds",
    "stock": 25,
    "images": [
      "https://jblthailand.com/cdn/shop/files/JBL_LIVE_PRO_2_Black535x535_1024x1024.png?v=1698719054"
    ]
  },
  {
    "model": "Tune 760NC",
    "price": 129.00,
    "brand": "JBL",
    "title": "Over-ear wireless headphones with ANC.",
    "colors": ["Black", "White"],
    "rating": 4.4,
    "category": "Headphones",
    "stock": 30,
    "images": [
      "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw10baef83/1.JBL_TUNE_760NC_Product Image_Hero_Black.png?sw=535&sh=535",
      "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw69230793/2.JBL_TUNE_760NC_Product Image_Front_Black.png?sw=535&sh=535"
    ]
  },
  {
    "model": "Quantum 910",
    "price": 299.00,
    "brand": "JBL",
    "title": "Wireless gaming headset with spatial sound.",
    "colors": ["Black"],
    "rating": 4.7,
    "category": "Gaming Headset",
    "stock": 14,
    "images": [
      "https://jblthailand.com/cdn/shop/files/2.JBL_QUANTUM_910_Wireless_ProductImage_535x535px_600x600.png?v=1698739533",
      "https://jblthailand.com/cdn/shop/files/002_JBL_QUANTUM_910_Wireless_ProductImage_Front_535x535px_600x600.png?v=1708498854",
      "https://jblthailand.com/cdn/shop/files/007_JBL_QUANTUM_910_Wireless_ProductImage_Detail_535x535px_600x600.png?v=1708498853"
    ]
  },

  // === Sennheiser (5) ===
  {
    "model": "Momentum True Wireless 4",
    "price": 299.00,
    "brand": "Sennheiser",
    "title": "Audiophile-grade sound with adaptive ANC.",
    "colors": ["Black", "White", "Copper"],
    "rating": 4.8,
    "category": "Earbuds",
    "stock": 12,
    "images": [
      "https://cdn14.425degree.com/media/catalog/product/cache/16f787c0803d70727d149195af4aa9dd/m/t/mtw4750_2_.jpg"
    ]
  },
  {
    "model": "HD 450BT",
    "price": 149.00,
    "brand": "Sennheiser",
    "title": "Wireless noise canceling headphones.",
    "colors": ["Black", "White"],
    "rating": 4.5,
    "category": "Headphones",
    "stock": 22,
    "images": [
      "https://media-cdn.bnn.in.th/14901/Sennheiser-Headphone-with-Mic-Wireless-HD-450BT-1-square_medium.jpg"
    ]
  },
  {
    "model": "CX Plus True Wireless",
    "price": 179.00,
    "brand": "Sennheiser",
    "title": "Wireless earbuds with powerful bass and ANC.",
    "colors": ["Black", "White"],
    "rating": 4.6,
    "category": "Earbuds",
    "stock": 18,
    "images": [
      "https://cdn14.425degree.com/media/amasty/webp/catalog/product/cache/16f787c0803d70727d149195af4aa9dd/s/e/sencxplus750_jpg.webp"
    ]
  },
  {
    "model": "Momentum 4 Wireless",
    "price": 349.00,
    "brand": "Sennheiser",
    "title": "Premium comfort and exceptional battery life.",
    "colors": ["Black", "White"],
    "rating": 4.9,
    "category": "Headphones",
    "stock": 9,
    "images": [
      "https://cdn14.425degree.com/media/catalog/product/cache/16f787c0803d70727d149195af4aa9dd/s/e/sennmtw4750.jpg",
      "https://cdn14.425degree.com/media/catalog/product/cache/16f787c0803d70727d149195af4aa9dd/s/e/sennmtw4750_2_.jpg"
    ]
  },

  // === Beyerdynamic (5) ===
  {
    "model": "DT 770 Pro",
    "price": 159.00,
    "brand": "Beyerdynamic",
    "title": "Closed-back studio headphones for monitoring.",
    "colors": ["Black"],
    "rating": 4.7,
    "category": "Headphones",
    "stock": 20,
    "images": [
      "https://api.beyerdynamic.de/media/catalog/product/d/t/dt-770-pro-headphones-beyerdynamic-perspective_transparent_1.png?store=en&image-type=image",
    ]
  },
  {
    "model": "DT 990 Pro",
    "price": 169.00,
    "brand": "Beyerdynamic",
    "title": "Open-back studio headphones for mixing.",
    "colors": ["Black"],
    "rating": 4.6,
    "category": "Headphones",
    "stock": 17,
    "images": [
      "https://www.atprosound.com/wp-content/uploads/2020/05/Beyerdynamic-DT-990-PRO-250-ohms-Headphone-1-700x700.jpg"
    ]
  },
  {
    "model": "Lagoon ANC",
    "price": 249.00,
    "brand": "Beyerdynamic",
    "title": "Wireless headphones with personalized sound.",
    "colors": ["Black", "Brown"],
    "rating": 4.5,
    "category": "Headphones",
    "stock": 11,
    "images": [
      "https://www.atprosound.com/wp-content/uploads/2025/10/Beyerdynamic-Lagoon-ANC-Over-Ear-Headphones-Black.jpg"
    ]
  },
  {
    "model": "Free Byrd",
    "price": 199.00,
    "brand": "Beyerdynamic",
    "title": "True wireless earbuds with rich clarity.",
    "colors": ["Black"],
    "rating": 4.4,
    "category": "Earbuds",
    "stock": 19,
    "images": [
      "https://api.beyerdynamic.de/media/catalog/product/f/r/free-byrd-beyerdynamic-perspective_transparent.png?store=en&image-type=image"
    ]
  },
  {
    "model": "Amiron Wireless",
    "price": 599.00,
    "brand": "Beyerdynamic",
    "title": "Tesla technology for high-end wireless listening.",
    "colors": ["Black"],
    "rating": 4.9,
    "category": "Headphones",
    "stock": 6,
    "images": [
      "https://api.beyerdynamic.de/media/catalog/product/b/e/beyerdynamic-amiron-wireless-perspective_transparent.png?store=www_en&image-type=image"
    ]
  },

  // === HyperX (5) ===
  {
    "model": "Cloud II Wireless",
    "price": 149.00,
    "brand": "HyperX",
    "title": "Legendary comfort with wireless gaming freedom.",
    "colors": ["Black"],
    "rating": 4.7,
    "category": "Gaming Headset",
    "stock": 24,
    "images": [
      "https://www.jib.co.th/img_master/product/original/2021033013495746075_1.jpg",
      "https://www.jib.co.th/img_master/product/original/2021033013495746075_2.jpg",
      "https://www.jib.co.th/img_master/product/original/2021033013495746075_4.jpg"
    ]
  },
  {
    "model": "Cloud Alpha Wireless",
    "price": 199.00,
    "brand": "HyperX",
    "title": "Dual chamber drivers with ultra-long battery life.",
    "colors": ["Black"],
    "rating": 4.8,
    "category": "Gaming Headset",
    "stock": 18,
    "images": [
      "https://www.jib.co.th/img_master/product/original/2022060815084353647_1.jpg",
      "https://www.jib.co.th/img_master/product/original/2022060815084353647_2.jpg",
      "https://www.jib.co.th/img_master/product/original/2022060815084353647_4.jpg"
    ]
  },
  {
    "model": "Cloud III",
    "price": 129.00,
    "brand": "HyperX",
    "title": "Improved comfort and clearer in-game audio.",
    "colors": ["Black", "Red"],
    "rating": 4.6,
    "category": "Gaming Headset",
    "stock": 30,
    "images": [
      "https://www.jib.co.th/img_master/product/original/2023060215264860060_1.jpg",
      "https://www.jib.co.th/img_master/product/original/2023060215264860060_2.jpg",
      "https://www.jib.co.th/img_master/product/original/2023060215264860060_4.jpg"
    ]
  },
  {
    "model": "Cloud Buds",
    "price": 79.00,
    "brand": "HyperX",
    "title": "Lightweight earbuds for gaming on the go.",
    "colors": ["Black"],
    "rating": 4.4,
    "category": "Earbuds",
    "stock": 34,
    "images": [
      "https://media-cdn.bnn.in.th/169934/Hyper-X-Gaming-Headphones-Cloud-Buds-Wireless-1-square_medium.jpg"
    ]
  },
  {
    "model": "Cloud Stinger 2 Wireless",
    "price": 99.00,
    "brand": "HyperX",
    "title": "Affordable wireless headset with great comfort.",
    "colors": ["Black"],
    "rating": 4.5,
    "category": "Gaming Headset",
    "stock": 26,
    "images": [
      "https://www.jib.co.th/img_master/product/original/2023040508472758820_1.jpg",
      "https://www.jib.co.th/img_master/product/original/2023040508472758820_2.jpg",
      "https://www.jib.co.th/img_master/product/original/2023040508472758820_2.jpg"
    ]
  },

  // === Logitech (5) ===
  {
    "model": "G Pro X Wireless",
    "price": 199.00,
    "brand": "Logitech",
    "title": "LIGHTSPEED wireless gaming headset.",
    "colors": ["Black"],
    "rating": 4.8,
    "category": "Gaming Headset",
    "stock": 15,
    "images": [
      "https://www.jib.co.th/img_master/product/original/2021091010510448564_1.jpg"
    ]
  },
  {
    "model": "G733 Lightspeed",
    "price": 149.00,
    "brand": "Logitech",
    "title": "Lightweight headset with RGB lighting.",
    "colors": ["Black", "White", "Blue"],
    "rating": 4.6,
    "category": "Gaming Headset",
    "stock": 22,
    "images": [
      "https://www.jib.co.th/img_master/product/original/2020111317085443665_1.jpg"
    ]
  },
  {
    "model": "G435",
    "price": 79.00,
    "brand": "Logitech",
    "title": "Ultra-light wireless gaming headset.",
    "colors": ["Black", "Blue", "Purple"],
    "rating": 4.4,
    "category": "Gaming Headset",
    "stock": 40,
    "images": [
      "https://www.jib.co.th/img_master/product/original/2021100214052748971_1.jpg"
    ]
  },
  {
    "model": "Zone Vibe 100",
    "price": 129.00,
    "brand": "Logitech",
    "title": "Work and play wireless headphones.",
    "colors": ["Rose"],
    "rating": 4.5,
    "category": "Headphones",
    "stock": 28,
    "images": [
      "https://www.jib.co.th/img_master/product/original/2025062811395478034_1.jpg"
    ]
  },
  {
    "model": "Astro A50 X",
    "price": 379.00,
    "brand": "Logitech",
    "title": "Premium wireless gaming headset and base station.",
    "colors": ["Black"],
    "rating": 4.9,
    "category": "Gaming Headset",
    "stock": 8,
    "images": [
      "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/astro-a50-x/product-gallery/astro-a50-x-white-gallery-3.png"
    ]
  },

  // === Audio-Technica (5) ===
  {
    "model": "ATH-M50xBT2",
    "price": 199.00,
    "brand": "Audio-Technica",
    "title": "Studio sound with wireless freedom.",
    "colors": ["Black"],
    "rating": 4.8,
    "category": "Headphones",
    "stock": 18,
    "images": [
      "https://audiocity.co.th/pub/media/catalog/product/cache/765fdf86a9e550514b9df31691b36e7f/a/u/audio-technica-ath-m50xbt2-1200-8.jpg"
    ]
  },
  {
    "model": "ATH-SQ1TW",
    "price": 129.00,
    "brand": "Audio-Technica",
    "title": "Compact true wireless earbuds with clear sound.",
    "colors": ["Black", "White", "Green"],
    "rating": 4.5,
    "category": "Earbuds",
    "stock": 24,
    "images": [
      "https://cdn14.425degree.com/media/amasty/webp/catalog/product/cache/16f787c0803d70727d149195af4aa9dd/a/u/audio_technica_ath_sq1tw_8_jpg.webp"
    ]
  },
  {
    "model": "ATH-ANC700BT",
    "price": 249.00,
    "brand": "Audio-Technica",
    "title": "QuietPoint active noise canceling headphones.",
    "colors": ["Black"],
    "rating": 4.6,
    "category": "Headphones",
    "stock": 12,
    "images": [
      "https://mercular.s3.ap-southeast-1.amazonaws.com/upload/products/2018/06/%E0%B8%AB%E0%B8%B9%E0%B8%9F%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A3%E0%B9%89%E0%B8%AA%E0%B8%B2%E0%B8%A2-Audio-Technica-ATH-ANC700BT-Headphone-%E0%B9%80%E0%B8%97%E0%B8%B23.jpg"
    ]
  },
]

products.forEach((obj) => {
  db.collection("products").add({
    model: obj.model,
    price: obj.price,
    brand: obj.brand,
    title: obj.title,
    color: obj.colors,
    rating: obj.rating,
    category: obj.category,
    stock: obj.stock,
    images: obj.images
  })
})


brands.forEach((obj) => {
  db.collection("brands").add({
    name: obj.name
  }).then(docRef => {console.log("Brand Document written with ID : "+ docRef.id)})
})
