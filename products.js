const PRODUCTS = [

{
  id: "janan-perfum",
  title: "Janan Perfum",
  category: "perfume",
  priceCents: 150000,
  priceDisplay: "Rs 1,500",
  stock: 15,
  description: "A long-lasting premium fragrance with an elegant scent.",
  images: [
    "janan-perfum.webp",
    "janan-perfum-2.webp",
    "janan-perfum-3.webp"
  ],
  features: [
    "Long lasting fragrance",
    "Premium packaging",
    "Suitable for daily use"
  ]
},

{
  id: "gold-steel-watch",
  title: "Men's Luxurious Gold Steel Watch",
  category: "watches",
  priceCents: 200000,
  priceDisplay: "Rs 2,000",
  stock: 20,
  description: "Stylish stainless steel watch.",
  images: [
    "gold-steel-watch.webp",
    "gold-steel-watch-2.webp",
    "gold-steel-watch-3.webp"
  ],
  features: [
    "Stainless Steel",
    "Premium Design",
    "Comfort Strap"
  ]
},

{
  id: "halawa-wax",
  title: "Halawa Wax",
  category: "beauty",
  priceCents: 100000,
  priceDisplay: "Rs 1,000",
  stock: 10,
  description: "Natural Hair Removal Wax.",
  images: [
    "images/halawa-wax.jpg"
  ],
  features: [
    "Natural",
    "Skin Friendly",
    "225g"
  ]
},

{
  id:"fashion1",
  title:"Men Cotton T Shirt",
  category:"fashion",
  priceCents:149900,
  priceDisplay:"Rs 1,499",
  stock:25,
  description:"Premium Cotton T Shirt",
  images:["images/fashion1.jpg"],
  features:["Cotton","Soft","Premium"]
},

{
  id:"fashion2",
  title:"Blue Denim Jeans",
  category:"fashion",
  priceCents:249900,
  priceDisplay:"Rs 2,499",
  stock:20,
  description:"Stretch Denim Jeans",
  images:["images/fashion2.jpg"],
  features:["Stretch","Slim Fit","Premium"]
},

{
  id:"fashion3",
  title:"Black Hoodie",
  category:"fashion",
  priceCents:299900,
  priceDisplay:"Rs 2,999",
  stock:18,
  description:"Winter Hoodie",
  images:["images/fashion3.jpg"],
  features:["Warm","Soft","Premium"]
},

{
  id:"fashion4",
  title:"Running Shoes",
  category:"fashion",
  priceCents:399900,
  priceDisplay:"Rs 3,999",
  stock:15,
  description:"Sports Running Shoes",
  images:["images/fashion4.jpg"],
  features:["Comfort","Lightweight","Rubber Sole"]
},

{
  id:"fashion5",
  title:"Leather Wallet",
  category:"fashion",
  priceCents:129900,
  priceDisplay:"Rs 1,299",
  stock:25,
  description:"Premium Wallet",
  images:["images/fashion5.jpg"],
  features:["Leather","Gift","Premium"]
},

{
  id:"clothing1",
  title:"Men Black Kurta",
  category:"clothing",
  priceCents:259900,
  priceDisplay:"Rs 2,599",
  stock:20,
  description:"Premium Cotton Kurta",
  images:["images/clothing1.jpg"],
  features:["Cotton","Comfort","Premium"]
},

{
  id:"clothing2",
  title:"Formal Shirt",
  category:"clothing",
  priceCents:199900,
  priceDisplay:"Rs 1,999",
  stock:18,
  description:"Office Shirt",
  images:["images/clothing2.jpg"],
  features:["Office","Soft","Premium"]
},
{
  id:"clothing3",
  title:"Men Cotton Trouser",
  category:"clothing",
  priceCents:169900,
  priceDisplay:"Rs 1,699",
  stock:20,
  description:"Comfortable cotton trouser.",
  images:["images/clothing3.jpg"],
  features:["Cotton","Comfort","Premium"]
},

{
  id:"clothing4",
  title:"Winter Jacket",
  category:"clothing",
  priceCents:449900,
  priceDisplay:"Rs 4,499",
  stock:12,
  description:"Premium winter jacket.",
  images:["images/clothing4.jpg"],
  features:["Warm","Winter","Premium"]
},

{
  id:"clothing5",
  title:"Sports Tracksuit",
  category:"clothing",
  priceCents:329900,
  priceDisplay:"Rs 3,299",
  stock:15,
  description:"Sports tracksuit.",
  images:["images/clothing5.jpg"],
  features:["Stretch","Sports","Premium"]
},

{
  id:"beauty1",
  title:"Garnier Face Wash",
  category:"beauty",
  priceCents:89900,
  priceDisplay:"Rs 899",
  stock:30,
  description:"Vitamin C Face Wash.",
  images:["images/beauty1.jpg"],
  features:["Vitamin C","Bright Skin","100ml"]
},

{
  id:"beauty2",
  title:"Vitamin C Serum",
  category:"beauty",
  priceCents:159900,
  priceDisplay:"Rs 1,599",
  stock:20,
  description:"Premium face serum.",
  images:["images/beauty2.jpg"],
  features:["Glowing Skin","30ml","Premium"]
},

{
  id:"beauty3",
  title:"Matte Lipstick",
  category:"beauty",
  priceCents:69900,
  priceDisplay:"Rs 699",
  stock:25,
  description:"Long lasting lipstick.",
  images:["images/beauty3.jpg"],
  features:["Matte","Waterproof","Premium"]
},

{
  id:"beauty4",
  title:"Herbal Shampoo",
  category:"beauty",
  priceCents:119900,
  priceDisplay:"Rs 1,199",
  stock:18,
  description:"Hair care shampoo.",
  images:["images/beauty4.jpg"],
  features:["Anti Hair Fall","400ml","Natural"]
},

{
  id:"beauty5",
  title:"Face Cream",
  category:"beauty",
  priceCents:99900,
  priceDisplay:"Rs 999",
  stock:20,
  description:"Daily moisturizing cream.",
  images:["images/beauty5.jpg"],
  features:["Moisturizer","Soft Skin","Premium"]
},

{
  id:"tech1",
  title:"Wireless AirPods",
  category:"tech",
  priceCents:349900,
  priceDisplay:"Rs 3,499",
  stock:15,
  description:"Bluetooth AirPods.",
  images:["images/tech1.jpg"],
  features:["Bluetooth","Noise Cancel","Premium"]
},

{
  id:"tech2",
  title:"20000mAh Power Bank",
  category:"tech",
  priceCents:299900,
  priceDisplay:"Rs 2,999",
  stock:18,
  description:"Fast charging power bank.",
  images:["images/tech2.jpg"],
  features:["20000mAh","Fast Charge","Dual USB"]
},

{
  id:"tech3",
  title:"Smart Watch",
  category:"tech",
  priceCents:549900,
  priceDisplay:"Rs 5,499",
  stock:10,
  description:"Series 9 Smart Watch.",
  images:["images/tech3.jpg"],
  features:["Heart Rate","Bluetooth","Premium"]
},

{
  id:"tech4",
  title:"Bluetooth Speaker",
  category:"tech",
  priceCents:249900,
  priceDisplay:"Rs 2,499",
  stock:16,
  description:"Portable speaker.",
  images:["images/tech4.jpg"],
  features:["Bass","Bluetooth","Rechargeable"]
},

{
  id:"tech5",
  title:"Wireless Mouse",
  category:"tech",
  priceCents:179900,
  priceDisplay:"Rs 1,799",
  stock:20,
  description:"Gaming mouse.",
  images:["images/tech5.jpg"],
  features:["RGB","Rechargeable","1600 DPI"]
},

{
  id:"perfume1",
  title:"Lattafa Asad",
  category:"perfume",
  priceCents:399900,
  priceDisplay:"Rs 3,999",
  stock:20,
  description:"Arabic perfume.",
  images:["images/perfume1.jpg"],
  features:["100ml","Long Lasting","Original"]
},

{
  id:"perfume2",
  title:"Janan Gold",
  category:"perfume",
  priceCents:249900,
  priceDisplay:"Rs 2,499",
  stock:18,
  description:"Premium fragrance.",
  images:["images/perfume2.jpg"],
  features:["100ml","Premium","Fresh"]
},

{
  id:"perfume3",
  title:"Body Spray",
  category:"perfume",
  priceCents:89900,
  priceDisplay:"Rs 899",
  stock:25,
  description:"Daily body spray.",
  images:["images/perfume3.jpg"],
  features:["150ml","Fresh","Long Lasting"]
},

{
  id:"perfume4",
  title:"Oud Attar",
  category:"perfume",
  priceCents:159900,
  priceDisplay:"Rs 1,599",
  stock:15,
  description:"Premium Attar.",
  images:["images/perfume4.jpg"],
  features:["Alcohol Free","12ml","Premium"]
},

{
  id:"perfume5",
  title:"Luxury Gift Set",
  category:"perfume",
  priceCents:499900,
  priceDisplay:"Rs 4,999",
  stock:10,
  description:"Luxury perfume gift set.",
  images:["images/perfume5.jpg"],
  features:["Gift Box","Luxury","Original"]
}

];  
