/* =========================
   SHOPS DATA
========================= */
export const shops = [
  {
    id: "shop001",
    name: "Magunas Supermarket",
    img: "assets/images/shops/images (1).jpg",
    description: "Affordable groceries and household essentials",
    categories: ["Groceries", "Beverages", "Household", "Snacks"]
  },
  {
    id: "shop002",
    name: "Kwa Jack Liquor",
    img: "assets/images/shops/133793012_108077117864415_255456880755482874_n.webp",
    description: "Premium wines, spirits and beers",
    categories: ["Wines", "Spirits", "Beers"]
  },
  {
    id: "shop003",
    name: "M&M Organic",
    img: "assets/images/shops/samut-sakhon-thailand-january-30-260nw-2581647283.webp",
    description: "Fresh organic and healthy foods",
    categories: ["Organic", "Fruits", "Vegetables"]
  },
  {
    id: "shop004",
    name: "Hotpoint Store",
    img: "assets/images/shops/images (2).jpg",
    description: "Electronics and appliances",
    categories: ["Electronics", "Home Appliances"]
  },
  {
    id: "shop005",
    name: "Kago Mini Mart",
    img: "assets/images/shops/24-hours-corner-shop-high-holborn-london-england-uk-D549J1.jpg",
    description: "Convenience store for everyday needs",
    categories: ["Groceries", "Snacks"]
  },
  {
    id: "shop006",
    name: "Morales Fries and Chips",
    img: "assets/images/shops/24-hours-corner-shop-high-holborn-london-england-uk-D549J1.jpg",
    description: "Convenience store for everyday needs",
    categories: ["Groceries", "Snacks"]
  },
  {
    id: "shop007",
    name: "Kebenei's Choma Village",
    img: "assets/images/shops/24-hours-corner-shop-high-holborn-london-england-uk-D549J1.jpg",
    description: "Convenience store for everyday needs",
    categories: ["Groceries", "Snacks"]
  },
  {
    id: "shop008",
    name: "Mathais Supermarket",
    img: "assets/images/shops/24-hours-corner-shop-high-holborn-london-england-uk-D549J1.jpg",
    description: "Convenience store for everyday needs",
    categories: ["Groceries", "Snacks"]
  },
  {
    id: "shop009",
    name: "Trade Center Karatina",
    img: "assets/images/shops/24-hours-corner-shop-high-holborn-london-england-uk-D549J1.jpg",
    description: "Convenience store for everyday needs",
    categories: ["Groceries", "Snacks"]
  }
];

/* =========================
   PRODUCTS DATA
========================= */
export const products = [
  // Magunas Supermarket (8 products)
  { id: "p1", shopId: "shop001", name: "Premium Raha cooking floor 2kg", price: 1200, img: "assets/images/products/31014_main.avif", category: "Groceries", description: "High-quality rice for everyday meals.", popularity: 85 },
  { id: "p2", shopId: "shop001", name: "Fresh Milk 1L", price: 150, img: "assets/images/products/images (5).jpg", category: "Beverages", description: "Pure and fresh milk from local farms.", popularity: 92 },
  { id: "p11", shopId: "shop001", name: "Brown Bread", price: 60, img: "assets/images/products/82689_main.avif", category: "Groceries", description: "Freshly baked brown bread.", popularity: 75 },
  { id: "p12", shopId: "shop001", name: "Freshfri cooking oil 2L", price: 360, img: "assets/images/products/41661_main.avif", category: "Beverages", description: "Refreshing orange juice.", popularity: 80 },
  { id: "p13", shopId: "shop001", name: "Aerial Wasing Powder", price: 450, img: "assets/images/products/23437_main.avif", category: "Household", description: "Powerful cleaning detergent.", popularity: 68 },
  { id: "p14", shopId: "shop001", name: "Potato Chips", price: 120, img: "assets/images/products/images (4).jpg", category: "Snacks", description: "Crispy potato chips.", popularity: 85 },
  { id: "p15", shopId: "shop001", name: "Bentley Tea Bags 100g", price: 380, img: "assets/images/products/1.webp", category: "Beverages", description: "Classic black tea bags.", popularity: 76 },
  { id: "p16", shopId: "shop001", name: "Toilet Paper 10 Pack", price: 550, img: "assets/images/products/22163_main.avif", category: "Household", description: "Soft and strong tissue.", popularity: 71 },

  // Kwa Jack Liquor (8 products)
  { id: "p3", shopId: "shop002", name: "Red Wine Bottle", price: 1800, img: "assets/images/products/images (3).jpg", category: "Wines", description: "Exquisite red wine with rich flavors.", popularity: 70 },
  { id: "p4", shopId: "shop002", name: "Whiskey 750ml", price: 2500, img: "assets/images/products/360_F_322905875_SHqwFv9NJej5fcMUPid9usev2N77Ufym.jpg", category: "Spirits", description: "Smooth whiskey with a hint of oak.", popularity: 65 },
  { id: "p17", shopId: "shop002", name: "Beer Pack (6)", price: 900, img: "assets/images/products/images (6).jpg", category: "Beers", description: "Refreshing lager beer pack.", popularity: 72 },
  { id: "p18", shopId: "shop002", name: "White Wine Bottle", price: 1700, img: "assets/images/products/Buy-Image-Dry-White-Wine-750ml-online-in-Nairobi-Kenya.png", category: "Wines", description: "Smooth white wine.", popularity: 66 },
  { id: "p19", shopId: "shop002", name: "Vodka 1L", price: 2200, img: "assets/images/products/images (7).jpg", category: "Spirits", description: "Premium vodka.", popularity: 69 },
  { id: "p20", shopId: "shop002", name: "Craft Beer", price: 350, img: "assets/images/products/Greenspoon-Kenya-Bila-Shaka-Capitan-Craft-Beer-500ml.jpg", category: "Beers", description: "Locally brewed craft beer.", popularity: 74 },
  { id: "p21", shopId: "shop002", name: "Gin 750ml", price: 2100, img: "assets/images/products/36828_main.avif", category: "Spirits", description: "Botanical gin with citrus notes.", popularity: 67 },
  { id: "p22", shopId: "shop002", name: "Rosé Wine", price: 1600, img: "assets/images/products/Cote-des-roses-rose-magnum-300x300.jpg", category: "Wines", description: "Light and fruity rosé.", popularity: 64 },

  // M&M Organic (8 products)
{ id: "p5",  shopId: "shop003", name: "Organic Apples 1kg", price: 300, img: "assets/images/products/images (8).jpg", category: "Fruits", description: "Crisp and juicy organic apples.", popularity: 88 },
{ id: "p6",  shopId: "shop003", name: "Fresh Kale Bundle", price: 80, img: "assets/images/products/images (9).jpg", category: "Vegetables", description: "Nutrient-rich fresh kale.", popularity: 77 },
{ id: "p23", shopId: "shop003", name: "Organic Bananas 1kg", price: 200, img: "assets/images/products/Marketside-Fresh-Organic-Bananas-Bunch_f17ef225-0999-4035-9ed1-7a06607333b4.7c3b33492f937bcc19fe3339d5230929.avif", category: "Fruits", description: "Sweet organic bananas.", popularity: 83 },
{ id: "p24", shopId: "shop003", name: "Organic Tomatoes 1kg", price: 250, img: "assets/images/products/images (10).jpg", category: "Vegetables", description: "Juicy organic tomatoes.", popularity: 79 },
{ id: "p25", shopId: "shop003", name: "Organic Honey 500g", price: 600, img: "assets/images/products/image-removebg-preview - 2025-09-25T133802.701-800x800.png", category: "Organic", description: "Pure organic honey.", popularity: 88 },
{ id: "p26", shopId: "shop003", name: "Organic Spinach", price: 100, img: "assets/images/products/Greenspoon-1-5.jpg", category: "Vegetables", description: "Fresh organic spinach.", popularity: 82 },
{ id: "p27", shopId: "shop003", name: "Organic Mangoes 1kg", price: 350, img: "assets/images/products/images (11).jpg", category: "Fruits", description: "Ripe organic mangoes.", popularity: 86 },
{ id: "p28", shopId: "shop003", name: "Organic Natural Honey", price: 420, img: "assets/images/products/image-removebg-preview - 2025-09-25T133802.701-800x800.png", category: "Organic", description: "No added sugar peanut butter.", popularity: 81 },

// Hotpoint Store (8 products)
{ id: "p7",  shopId: "shop004", name: "Samsung Microwave", price: 8500, img: "assets/images/products/Samsung-20L-Microwave-Oven-ME731K-B2.png", category: "Home Appliances", description: "Efficient microwave oven for quick cooking.", popularity: 60 },
{ id: "p8",  shopId: "shop004", name: "Von Blender", price: 3200, img: "assets/images/products/VSBT06MNX.png", category: "Electronics", description: "Powerful blender for smoothies and more.", popularity: 90 },
{ id: "p29", shopId: "shop004", name: "Electric Kettle", price: 2200, img: "assets/images/products/sfdgfhgghf.jpg", category: "Home Appliances", description: "Fast-boil electric kettle.", popularity: 78 },
{ id: "p30", shopId: "shop004", name: "Wireless Headphones", price: 4500, img: "assets/images/products/images (12).jpg", category: "Electronics", description: "Noise-cancelling Bluetooth headphones.", popularity: 84 },
{ id: "p31", shopId: "shop004", name: "Smart TV 42\"", price: 32000, img: "assets/images/products/images (13).jpg", category: "Electronics", description: "Full HD smart television with streaming apps.", popularity: 88 },
{ id: "p32", shopId: "shop004", name: "Refrigerator 250L", price: 48000, img: "assets/images/products/images (14).jpg", category: "Home Appliances", description: "Energy-efficient refrigerator with spacious compartments.", popularity: 82 },
{ id: "p33", shopId: "shop004", name: "Toaster 2-Slice", price: 1800, img: "assets/images/products/images (17).jpg", category: "Home Appliances", description: "Compact toaster for quick breakfasts.", popularity: 74 },
{ id: "p34", shopId: "shop004", name: "Laptop Charger", price: 2500, img: "assets/images/products/images (15).jpg", category: "Electronics", description: "Universal laptop charger with fast charging.", popularity: 79 },

// Kago Mini Mart (8 products)
{ id: "p9",  shopId: "shop005", name: "Aerial Washing Powder 1kg", price: 120, img: "assets/images/products/23437_main.avif", category: "Groceries", description: "Effective washing powder for clean clothes.", popularity: 73 },
{ id: "p10", shopId: "shop005", name: "Cooking Oil 2L", price: 550, img: "assets/images/products/41661_main.avif", category: "Groceries", description: "Healthy cooking oil for everyday use.", popularity: 82 },
{ id: "p35", shopId: "shop005", name: "Instant Noodles Pack", price: 80, img: "assets/images/products/images (16).jpg", category: "Snacks", description: "Quick and tasty instant noodles.", popularity: 76 },
{ id: "p36", shopId: "shop005", name: "Soft Drinks 500ml", price: 100, img: "assets/images/products/Sprite-300x300.webp", category: "Groceries", description: "Refreshing carbonated soft drink.", popularity: 79 },
{ id: "p37", shopId: "shop005", name: "Biscuits Pack", price: 150, img: "assets/images/products/Manji Digestive Biscuit 100g.jpg", category: "Snacks", description: "Crunchy biscuits for tea time.", popularity: 74 },
{ id: "p38", shopId: "shop005", name: "Sugar 2kg", price: 300, img: "assets/images/products/lyle1kg-46_1100x_02b44d4e-3aa2-4da1-a160-2d01b06ff843.webp", category: "Groceries", description: "Fine white sugar for cooking and baking.", popularity: 81 },
{ id: "p39", shopId: "shop005", name: "Chocolate Bar", price: 120, img: "assets/images/products/23686_main.avif", category: "Snacks", description: "Delicious milk chocolate bar.", popularity: 85 },
{ id: "p40", shopId: "shop005", name: "Salt 1kg", price: 90, img: "assets/images/products/Kensalt Iodated Table Salt 1Kg.jpg", category: "Groceries", description: "Refined table salt for everyday use.", popularity: 77 },
]