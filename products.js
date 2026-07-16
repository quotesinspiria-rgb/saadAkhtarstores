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
  {
    id: "janan-perfum",
    title: "Janan Perfum",
    category: "perfume",
    priceCents: 150000,
    priceDisplay: "Rs 1,500",
    stock: 15,
    description:
      "A long-lasting premium fragrance with an elegant scent. Perfect for daily wear and gifting.",
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
    description:
      "Stylish stainless steel watch with a premium gold finish.",
    images: [
      "gold-steel-watch.webp",
      "gold-steel-watch-2.webp",
      "gold-steel-watch-3.webp"
    ],
    features: [
      "Stainless steel body",
      "Premium design",
      "Comfortable strap"
    ]
  },


 {
    id: "halawa-wax",
    title: "Halawa Wax",
    category: "wax",
    priceCents: 100000,
    priceDisplay: "Rs 1,000",
    stock: 10,
    description:
      "Natural hair removal wax with smooth skin results.",
    images: [
      "images/halawa-wax.jpg",
      "images/halawa-wax-2.jpg",
      "images/halawa-wax-3.jpg"
    ],
    features: [
      "Natural ingredients",
      "Skin friendly",
      "225g pack"
    ]
  },

  {
    id: "mens-shirt-1",
    title: "Men's Premium Shirt",
    category: "fashion",
    priceCents: 249900,
    priceDisplay: "Rs 2,499",
    stock: 20,
    description: "Premium cotton casual shirt.",
    images: [
      "images/mens-shirt-1.jpg"
    ],
    features: [
      "100% Cotton",
      "Slim Fit",
      "Premium Quality"
    ]
  },

  {
    id: "mens-shirt-2",
    title: "Formal White Shirt",
    category: "fashion",
    priceCents: 279900,
    priceDisplay: "Rs 2,799",
    stock: 18,
    description: "Elegant formal shirt.",
    images: [
      "images/mens-shirt-2.jpg"
    ],
    features: [
      "Office Wear",
      "Wrinkle Free",
      "Soft Fabric"
    ]
  },

  {
    id: "mens-jeans-1",
    title: "Blue Denim Jeans",
    category: "fashion",
    priceCents: 329900,
    priceDisplay: "Rs 3,299",
    stock: 15,
    description: "Comfort stretch jeans.",
    images: [
      "images/mens-jeans.jpg"
    ],
    features: [
      "Stretch",
      "Slim Fit",
      "Premium Denim"
    ]
  },

  {
    id: "black-hoodie",
    title: "Black Hoodie",
    category: "fashion",
    priceCents: 349900,
    priceDisplay: "Rs 3,499",
    stock: 15,
    description: "Warm winter hoodie.",
    images: [
      "images/black-hoodie.jpg"
    ],
    features: [
      "Fleece",
      "Winter",
      "Soft"
    ]
  }

,
{
  id: "fashion-shirt-01",
  title: "Men's Cotton T-Shirt",
  category: "fashion",
  priceCents: 149900,
  priceDisplay: "Rs 1,499",
  stock: 25,
  description: "Premium cotton t-shirt for daily wear.",
  images: ["images/fashion-shirt-01.jpg"],
  features: ["100% Cotton", "Soft Fabric", "Regular Fit"]
},
{
  id: "fashion-jeans-01",
  title: "Blue Denim Jeans",
  category: "fashion",
  priceCents: 249900,
  priceDisplay: "Rs 2,499",
  stock: 18,
  description: "Stretchable blue denim jeans.",
  images: ["images/fashion-jeans-01.jpg"],
  features: ["Slim Fit", "Premium Denim", "Comfort Wear"]
},
{
  id: "fashion-hoodie-01",
  title: "Black Hoodie",
  category: "fashion",
  priceCents: 299900,
  priceDisplay: "Rs 2,999",
  stock: 15,
  description: "Warm fleece hoodie for winter.",
  images: ["images/fashion-hoodie-01.jpg"],
  features: ["Winter Wear", "Soft Fleece", "Premium Quality"]
},
{
  id: "fashion-shoes-01",
  title: "Sports Running Shoes",
  category: "fashion",
  priceCents: 399900,
  priceDisplay: "Rs 3,999",
  stock: 20,
  description: "Comfortable lightweight running shoes.",
  images: ["images/fashion-shoes-01.jpg"],
  features: ["Lightweight", "Rubber Sole", "Breathable"]
},
{
  id: "fashion-watch-01",
  title: "Luxury Men's Watch",
  category: "fashion",
  priceCents: 349900,
  priceDisplay: "Rs 3,499",
  stock: 12,
  description: "Elegant stainless steel wrist watch.",
  images: ["images/fashion-watch-01.jpg"],
  features: ["Water Resistant", "Steel Strap", "Premium Finish"]
,
{
  id: "clothing-kurta-01",
  title: "Men's Black Kurta",
  category: "clothing",
  priceCents: 279900,
  priceDisplay: "Rs 2,799",
  stock: 20,
  description: "Premium cotton black kurta for casual and formal wear.",
  images: ["images/clothing-kurta-01.jpg"],
  features: ["100% Cotton", "Soft Fabric", "Regular Fit"]
},
{
  id: "clothing-shirt-01",
  title: "Formal Office Shirt",
  category: "clothing",
  priceCents: 199900,
  priceDisplay: "Rs 1,999",
  stock: 15,
  description: "Elegant office shirt for men.",
  images: ["images/clothing-shirt-01.jpg"],
  features: ["Wrinkle Free", "Premium Fabric", "Comfort Fit"]
},
{
  id: "clothing-trouser-01",
  title: "Men's Cotton Trouser",
  category: "clothing",
  priceCents: 169900,
  priceDisplay: "Rs 1,699",
  stock: 18,
  description: "Comfortable cotton trouser for daily use.",
  images: ["images/clothing-trouser-01.jpg"],
  features: ["Soft Cotton", "Elastic Waist", "Premium Quality"]
},
{
  id: "clothing-jacket-01",
  title: "Winter Jacket",
  category: "clothing",
  priceCents: 449900,
  priceDisplay: "Rs 4,499",
  stock: 10,
  description: "Warm winter jacket with stylish design.",
  images: ["images/clothing-jacket-01.jpg"],
  features: ["Water Resistant", "Warm", "Premium"]
},
{
  id: "clothing-track-01",
  title: "Sports Tracksuit",
  category: "clothing",
  priceCents: 329900,
  priceDisplay: "Rs 3,299",
  stock: 14,
  description: "Comfortable tracksuit for gym and jogging.",
  images: ["images/clothing-track-01.jpg"],
  features: ["Breathable", "Lightweight", "Stretchable"]
,
{
  id: "beauty-facewash-01",
  title: "Garnier Bright Complete Face Wash",
  category: "beauty",
  priceCents: 89900,
  priceDisplay: "Rs 899",
  stock: 30,
  description: "Brightening face wash for daily skincare.",
  images: [
    "images/beauty-facewash-01.jpg"
  ],
  features: [
    "Vitamin C",
    "Deep Cleansing",
    "All Skin Types"
  ]
},
{
  id: "beauty-serum-01",
  title: "Vitamin C Face Serum",
  category: "beauty",
  priceCents: 159900,
  priceDisplay: "Rs 1,599",
  stock: 18,
  description: "Skin brightening serum with Vitamin C.",
  images: [
    "images/beauty-serum-01.jpg"
  ],
  features: [
    "Glowing Skin",
    "Anti Dark Spots",
    "30ml"
  ]
},
{
  id: "beauty-lipstick-01",
  title: "Matte Lipstick",
  category: "beauty",
  priceCents: 69900,
  priceDisplay: "Rs 699",
  stock: 40,
  description: "Long lasting waterproof matte lipstick.",
  images: [
    "images/beauty-lipstick-01.jpg"
  ],
  features: [
    "Waterproof",
    "Matte Finish",
    "Long Lasting"
  ]
},
{
  id: "beauty-shampoo-01",
  title: "Herbal Shampoo",
  category: "beauty",
  priceCents: 119900,
  priceDisplay: "Rs 1,199",
  stock: 22,
  description: "Herbal shampoo for healthy hair.",
  images: [
    "images/beauty-shampoo-01.jpg"
  ],
  features: [
    "Anti Hair Fall",
    "Natural Herbs",
    "400ml"
  ]
},
{
  id: "beauty-cream-01",
  title: "Moisturizing Face Cream",
  category: "beauty",
  priceCents: 99900,
  priceDisplay: "Rs 999",
  stock: 25,
  description: "Daily moisturizing cream for soft skin.",
  images: [
    "images/beauty-cream-01.jpg"
  ],
  features: [
    "24 Hour Moisture",
    "Non Greasy",
    "Dermatologically Tested"
  ]
,
{
  id: "tech-airpods-01",
  title: "Wireless AirPods Pro",
  category: "tech",
  priceCents: 349900,
  priceDisplay: "Rs 3,499",
  stock: 15,
  description: "Premium wireless earbuds with noise cancellation.",
  images: [
    "images/tech-airpods-01.jpg"
  ],
  features: [
    "Bluetooth 5.3",
    "Noise Cancellation",
    "24 Hours Battery"
  ]
},
{
  id: "tech-powerbank-01",
  title: "20000mAh Fast Charging Power Bank",
  category: "tech",
  priceCents: 299900,
  priceDisplay: "Rs 2,999",
  stock: 18,
  description: "High-capacity fast charging power bank.",
  images: [
    "images/tech-powerbank-01.jpg"
  ],
  features: [
    "20000mAh",
    "Fast Charging",
    "Dual USB Output"
  ]
},
{
  id: "tech-smartwatch-01",
  title: "Smart Watch Series 9",
  category: "tech",
  priceCents: 549900,
  priceDisplay: "Rs 5,499",
  stock: 12,
  description: "Smart watch with fitness tracking and Bluetooth calling.",
  images: [
    "images/tech-smartwatch-01.jpg"
  ],
  features: [
    "Heart Rate Monitor",
    "Bluetooth Calling",
    "Water Resistant"
  ]
},
{
  id: "tech-speaker-01",
  title: "Portable Bluetooth Speaker",
  category: "tech",
  priceCents: 249900,
  priceDisplay: "Rs 2,499",
  stock: 20,
  description: "Portable speaker with deep bass and long battery life.",
  images: [
    "images/tech-speaker-01.jpg"
  ],
  features: [
    "Deep Bass",
    "Bluetooth 5.0",
    "10 Hours Playback"
  ]
},
{
  id: "tech-mouse-01",
  title: "Wireless Gaming Mouse",
  category: "tech",
  priceCents: 179900,
  priceDisplay: "Rs 1,799",
  stock: 22,
  description: "High precision wireless gaming mouse.",
  images: [
    "images/tech-mouse-01.jpg"
  ],
  features: [
    "RGB Lights",
    "1600 DPI",
    "Rechargeable"
  ]
,
{
  id: "perfume-asad-01",
  title: "Lattafa Asad Perfume",
  category: "perfume",
  priceCents: 399900,
  priceDisplay: "Rs 3,999",
  stock: 20,
  description: "Premium Arabic fragrance with long lasting scent.",
  images: [
    "images/perfume-asad-01.jpg"
  ],
  features: [
    "100ml",
    "Long Lasting",
    "Original Arabic Perfume"
  ]
},
{
  id: "perfume-janan-01",
  title: "Janan Gold Perfume",
  category: "perfume",
  priceCents: 249900,
  priceDisplay: "Rs 2,499",
  stock: 18,
  description: "Elegant fragrance for everyday use.",
  images: [
    "images/perfume-janan-01.jpg"
  ],
  features: [
    "100ml",
    "Premium Bottle",
    "Fresh Fragrance"
  ]
},
{
  id: "perfume-bodyspray-01",
  title: "Body Spray For Men",
  category: "perfume",
  priceCents: 89900,
  priceDisplay: "Rs 899",
  stock: 30,
  description: "Refreshing body spray for daily use.",
  images: [
    "images/perfume-bodyspray-01.jpg"
  ],
  features: [
    "Long Lasting",
    "Fresh Scent",
    "150ml"
  ]
},
{
  id: "perfume-attar-01",
  title: "Oud Attar",
  category: "perfume",
  priceCents: 159900,
  priceDisplay: "Rs 1,599",
  stock: 15,
  description: "Alcohol-free premium oud attar.",
  images: [
    "images/perfume-attar-01.jpg"
  ],
  features: [
    "Alcohol Free",
    "Long Lasting",
    "12ml"
  ]
},
{
  id: "perfume-gift-01",
  title: "Perfume Gift Set",
  category: "perfume",
  priceCents: 499900,
  priceDisplay: "Rs 4,999",
  stock: 10,
  description: "Luxury perfume gift set for men and women.",
  images: [
    "images/perfume-gift-01.jpg"
  ],
  features: [
    "Gift Box",
    "Premium Collection",
    "Best for Gifts"
  ]
}
