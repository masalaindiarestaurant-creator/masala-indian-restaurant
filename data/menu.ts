export type SpiceLevel = 0 | 1 | 2 | 3 | 4;

export type ProteinPrices = {
  chicken?: number;
  lamb?: number;
  beef?: number;
  prawn?: number;
  fish?: number;
  vegetable?: number;
  special?: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number | ProteinPrices;
  spiceLevel?: SpiceLevel;
  isVegetarian?: boolean;
  isChefSpecial?: boolean;
  image?: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  description?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    description: "Begin your journey with these vibrant appetisers",
    items: [
      { id: "pappadum", name: "Pappadum", price: 1.00, spiceLevel: 0, isVegetarian: true },
      { id: "mix-chutney", name: "Mix Chutney & Dips", price: 2.00, spiceLevel: 0, isVegetarian: true },
      { id: "onion-bhaji", name: "Onion Bhaji", description: "Crispy golden onion fritters seasoned with herbs & spices", price: 4.75, spiceLevel: 2, isVegetarian: true, note: "2 pieces" },
      { id: "veg-samosa", name: "Vegetable Samosa", description: "Flaky pastry filled with spiced potato & peas", price: 4.75, spiceLevel: 1, isVegetarian: true, note: "2 pieces" },
      { id: "meat-samosa", name: "Meat Samosa", description: "Flaky pastry filled with minced spiced lamb", price: 5.50, spiceLevel: 2, note: "2 pieces" },
      { id: "veg-pakora", name: "Vegetable Pakora", description: "Assorted vegetables in a light spiced batter, deep-fried golden", price: 4.75, spiceLevel: 1, isVegetarian: true },
      { id: "chicken-pakora", name: "Chicken Pakora", description: "Tender chicken pieces in a spiced gram flour batter", price: 5.50, spiceLevel: 2 },
      { id: "paneer-pakora", name: "Paneer Pakora", description: "Indian cottage cheese fritters with herbs & chilli", price: 5.50, spiceLevel: 1, isVegetarian: true },
      { id: "gobi-pakora", name: "Gobi Pakora", description: "Cauliflower florets in a crispy spiced batter", price: 4.95, spiceLevel: 1, isVegetarian: true },
      { id: "fish-pakora", name: "Fish Pakora", description: "Fresh fish fillets in a light & aromatic batter", price: 7.50, spiceLevel: 2 },
      { id: "mix-pakora", name: "Mix Pakora Platter", description: "A selection of our finest pakoras — perfect for sharing", price: 6.95, spiceLevel: 2 },
      { id: "prawn-puri", name: "Prawn Puri", description: "Juicy prawns in a tangy masala sauce on crispy puri bread", price: 6.00, spiceLevel: 2 },
      { id: "chana-puri", name: "Chana Puri", description: "Spiced chickpeas on crispy fried puri", price: 5.50, spiceLevel: 1, isVegetarian: true },
      { id: "chicken-puri", name: "Chicken Puri", description: "Tender chicken in rich masala on crispy puri", price: 5.50, spiceLevel: 2 },
      { id: "chicken-chaat", name: "Chicken Chaat", description: "Tangy, sweet & spicy chicken street food classic", price: 5.50, spiceLevel: 2 },
      { id: "chana-chaat", name: "Chana Chaat", description: "Chickpeas with tamarind, yoghurt & fresh herbs", price: 5.00, spiceLevel: 1, isVegetarian: true },
      { id: "chicken-soup", name: "Chicken Soup", description: "A warming spiced broth", price: 4.95, spiceLevel: 1, note: "Served with Pappadum" },
      { id: "veg-soup", name: "Vegetable Soup", description: "Fresh vegetables in a fragrant broth", price: 4.50, spiceLevel: 0, isVegetarian: true, note: "Served with Pappadum" },
      { id: "tomato-soup", name: "Tomato Soup", description: "Tangy tomato with aromatic Indian spices", price: 4.50, spiceLevel: 0, isVegetarian: true, note: "Served with Pappadum" },
    ],
  },
  {
    id: "tandoori",
    label: "Tandoori",
    description: "Marinated & cooked in our authentic clay oven",
    items: [
      { id: "tandoori-chicken-tikka-s", name: "Chicken Tikka", description: "Boneless chicken marinated in yoghurt & spices, chargrilled", price: 5.75, spiceLevel: 2 },
      { id: "tandoori-chicken-s", name: "Tandoori Chicken", description: "Chicken on the bone marinated overnight in tandoori masala", price: 5.75, spiceLevel: 2 },
      { id: "chicken-wings", name: "Chicken Wings", description: "Smoky marinated wings from the tandoor", price: 5.75, spiceLevel: 2 },
      { id: "seekh-kebab-s", name: "Seekh Kebab", description: "Minced lamb with herbs & spices on a skewer", price: 5.95, spiceLevel: 2 },
      { id: "lamb-tikka-s", name: "Lamb Tikka", description: "Tender lamb cubes marinated in aromatic spices", price: 5.95, spiceLevel: 2 },
      { id: "mix-grill-s", name: "Mix Platter", description: "A feast of tandoori starters — chicken tikka, seekh kebab & lamb tikka", price: 6.95, spiceLevel: 2 },
    ],
  },
  {
    id: "tandoori-mains",
    label: "Tandoori Mains",
    description: "Sizzling on a bed of onions, served with curry sauce",
    items: [
      { id: "tm-chicken-tikka", name: "Chicken Tikka", description: "Marinated chicken tikka, sizzling with onions & curry sauce", price: 10.95, spiceLevel: 2 },
      { id: "tm-tandoori-chicken", name: "Tandoori Chicken", description: "Classic tandoor-roasted chicken on a sizzler", price: 10.95, spiceLevel: 2 },
      { id: "tm-seekh-kebab", name: "Seekh Kebab", description: "Minced lamb skewers on a sizzling platter", price: 10.95, spiceLevel: 2 },
      { id: "tm-lamb-tikka", name: "Lamb Tikka", description: "Tender lamb tikka pieces on a sizzling bed of onions", price: 12.95, spiceLevel: 2 },
      { id: "tm-chicken-shashlik", name: "Chicken Tikka Shashlik", description: "Chicken tikka with peppers & onions on a sizzler", price: 14.95, spiceLevel: 2 },
      { id: "tm-prawn-shashlik", name: "Prawn Tikka Shashlik", description: "King prawns with peppers & onions, sizzling", price: 15.95, spiceLevel: 2 },
      { id: "tm-paneer-shashlik", name: "Paneer Tikka Shashlik", description: "Paneer & vegetables on a sizzling platter", price: 12.95, spiceLevel: 1, isVegetarian: true },
      { id: "tm-mix-grill", name: "Mix Grill", description: "The ultimate sizzler — chicken tikka, seekh kebab, lamb tikka & prawn", price: 15.95, spiceLevel: 2 },
    ],
  },
  {
    id: "mains",
    label: "Main Courses",
    description: "Choose your sauce, choose your protein — mild to fiery",
    items: [
      {
        id: "korma",
        name: "Korma",
        description: "Mildly spiced, rich & creamy with coconut and almond",
        price: { chicken: 8.95, lamb: 10.50, beef: 10.95, prawn: 11.50 },
        spiceLevel: 1,
      },
      {
        id: "tikka-masala",
        name: "Tikka Masala",
        description: "Tandoor-roasted meat in a velvety tomato & cream sauce",
        price: { chicken: 10.50, lamb: 11.50, beef: 10.95, prawn: 11.50 },
        spiceLevel: 2,
      },
      {
        id: "curry",
        name: "Curry",
        description: "A classic medium-spiced curry with onions & tomato",
        price: { chicken: 9.95, lamb: 10.95, beef: 10.95, prawn: 11.50, fish: 10.50 },
        spiceLevel: 2,
      },
      {
        id: "rogan-josh",
        name: "Rogan Josh",
        description: "Aromatic Kashmiri sauce with whole spices & tomato",
        price: { chicken: 10.50, lamb: 10.95, beef: 10.95, prawn: 11.50 },
        spiceLevel: 2,
      },
      {
        id: "karahi",
        name: "Karahi",
        description: "Cooked in a wok with peppers, onions & fresh spices",
        price: { chicken: 11.95, lamb: 12.95, beef: 12.95, prawn: 12.95 },
        spiceLevel: 2,
      },
      {
        id: "bhuna",
        name: "Bhuna",
        description: "Dry-cooked with thick tomato & onion masala, intensely flavoured",
        price: { chicken: 10.50, lamb: 10.95, beef: 10.95, prawn: 11.50 },
        spiceLevel: 2,
      },
      {
        id: "balti",
        name: "Balti",
        description: "Cooked & served in a traditional balti bowl with fresh herbs",
        price: { chicken: 9.95, lamb: 10.50, beef: 10.50, prawn: 11.50, special: 13.50 },
        spiceLevel: 2,
      },
      {
        id: "jalfrezi",
        name: "Jalfrezi",
        description: "Stir-fried with peppers, green chillies & a rich masala",
        price: { chicken: 9.95, lamb: 10.75, beef: 10.95, prawn: 11.50 },
        spiceLevel: 3,
      },
      {
        id: "madras",
        name: "Madras",
        description: "Tangy & hot south Indian-inspired curry with coconut",
        price: { chicken: 9.95, lamb: 10.75, beef: 10.95, prawn: 11.50 },
        spiceLevel: 3,
      },
      {
        id: "vindaloo",
        name: "Vindaloo",
        description: "Fiercely hot Goan-style curry — for the brave",
        price: { chicken: 9.95, lamb: 10.95, beef: 10.95, prawn: 11.50 },
        spiceLevel: 4,
      },
      {
        id: "palak",
        name: "Palak",
        description: "Cooked in a fresh spinach & herb sauce, earthy & fragrant",
        price: { chicken: 10.50, lamb: 10.95, beef: 10.95, prawn: 11.50 },
        spiceLevel: 2,
      },
      {
        id: "pathia",
        name: "Pathia",
        description: "Sweet, sour & hot — a Parsi classic with tamarind & chilli",
        price: { chicken: 9.95, lamb: 10.95, beef: 10.95, prawn: 11.50 },
        spiceLevel: 3,
      },
      {
        id: "dhansak",
        name: "Dhansak",
        description: "Slow-cooked with lentils & pineapple, a Parsi favourite",
        price: { chicken: 10.95, lamb: 11.95, beef: 11.95, prawn: 12.95 },
        spiceLevel: 2,
      },
    ],
  },
  {
    id: "chef-specials",
    label: "Chef's Specials",
    description: "Our chef's most celebrated creations",
    items: [
      { id: "butter-chicken", name: "Butter Chicken", description: "Tender chicken in a luscious tomato & butter sauce — a timeless classic", price: 11.50, spiceLevel: 1, isChefSpecial: true },
      { id: "paneer-makhani", name: "Paneer Makhani", description: "Creamy tomato butter sauce with soft paneer cubes", price: 10.95, spiceLevel: 1, isChefSpecial: true, isVegetarian: true },
      { id: "chilli-chicken", name: "Chilli Chicken", description: "Crispy chicken tossed in a bold chilli sauce with peppers", price: 13.50, spiceLevel: 3, isChefSpecial: true },
      { id: "chicken-tikka-jaipuri", name: "Chicken Tikka Jaipuri", description: "Chicken tikka in a rich Rajasthani sauce with almonds", price: 11.50, spiceLevel: 2, isChefSpecial: true },
      { id: "honey-chicken", name: "Honey Chicken", description: "Sweet & aromatic chicken glazed with honey & spices", price: 10.95, spiceLevel: 1, isChefSpecial: true },
      { id: "chicken-mango", name: "Chicken Mango", description: "Exotic mango sauce with a gentle spiced warmth", price: 10.95, spiceLevel: 1, isChefSpecial: true },
      { id: "chicken-chasni", name: "Chicken Chasni", description: "Sweet, tangy & mildly spiced — pink sauce from Punjab", price: 11.50, spiceLevel: 1, isChefSpecial: true },
      { id: "chicken-kashmiri", name: "Chicken Kashmiri", description: "Aromatic sauce with almonds, coconut & dried fruits", price: 11.50, spiceLevel: 1, isChefSpecial: true },
      { id: "chicken-dopiaza", name: "Chicken Dopiaza", description: "Double onion — caramelised & raw — with bold spices", price: 10.95, spiceLevel: 2, isChefSpecial: true },
      { id: "chicken-pasanda", name: "Chicken Pasanda", description: "Mild & creamy almond sauce — a Mughal royal favourite", price: 10.95, spiceLevel: 1, isChefSpecial: true },
    ],
  },
  {
    id: "biryani",
    label: "Biryani",
    description: "Fragrant basmati rice slow-cooked with spices & choice of protein",
    items: [
      { id: "chicken-biryani", name: "Chicken Biryani", description: "Aromatic saffron rice layered with tender chicken & whole spices", price: 12.50, spiceLevel: 2 },
      { id: "lamb-biryani", name: "Lamb Biryani", description: "Slow-cooked lamb with fragrant basmati & caramelised onions", price: 13.50, spiceLevel: 2 },
      { id: "prawn-biryani", name: "Prawn Biryani", description: "King prawns with saffron-infused basmati rice", price: 13.95, spiceLevel: 2 },
      { id: "veg-biryani", name: "Vegetable Biryani", description: "Garden vegetables & paneer in fragrant basmati rice", price: 11.50, spiceLevel: 1, isVegetarian: true },
      { id: "special-biryani", name: "Special Biryani", description: "Mixed chicken, lamb & prawn with the finest saffron basmati", price: 14.50, spiceLevel: 2, isChefSpecial: true },
    ],
  },
  {
    id: "vegetarian",
    label: "Vegetarian",
    description: "Plant-based dishes rich with flavour & tradition",
    items: [
      { id: "aloo-palak", name: "Aloo Palak", description: "Potatoes & fresh spinach in a fragrant masala", price: 8.95, spiceLevel: 2, isVegetarian: true },
      { id: "veg-curry", name: "Vegetable Curry", description: "Seasonal vegetables in a classic spiced curry sauce", price: 8.50, spiceLevel: 2, isVegetarian: true },
      { id: "chana-masala", name: "Chana Masala", description: "Chickpeas slow-cooked in a tangy tomato & spice sauce", price: 8.50, spiceLevel: 2, isVegetarian: true },
      { id: "paneer-jalfrezi", name: "Paneer Jalfrezi", description: "Paneer & peppers stir-fried in a bold spiced sauce", price: 9.50, spiceLevel: 3, isVegetarian: true },
      { id: "veg-korma", name: "Vegetable Korma", description: "Mixed vegetables in a mild, creamy coconut sauce", price: 8.95, spiceLevel: 1, isVegetarian: true },
      { id: "paneer-palak", name: "Paneer Palak", description: "Fresh spinach puree with soft paneer — a beloved classic", price: 8.50, spiceLevel: 1, isVegetarian: true },
      { id: "dal-tarka", name: "Dal Tarka", description: "Yellow lentils tempered with cumin, garlic & chilli", price: 7.95, spiceLevel: 2, isVegetarian: true },
      { id: "bombay-aloo", name: "Bombay Aloo", description: "Potatoes cooked with mustard seeds & aromatic spices", price: 7.95, spiceLevel: 2, isVegetarian: true },
      { id: "gobi-aloo", name: "Gobi Aloo", description: "Cauliflower & potatoes with turmeric & cumin", price: 8.50, spiceLevel: 2, isVegetarian: true },
      { id: "mushroom-bhaji", name: "Mushroom Bhaji", description: "Mushrooms cooked with onions, tomato & fresh coriander", price: 8.50, spiceLevel: 2, isVegetarian: true },
    ],
  },
  {
    id: "breads-rice",
    label: "Breads & Rice",
    description: "The perfect accompaniment",
    items: [
      { id: "plain-naan", name: "Plain Naan", description: "Soft leavened bread from the tandoor", price: 2.75, spiceLevel: 0, isVegetarian: true },
      { id: "garlic-naan", name: "Garlic Naan", description: "Tandoor bread with aromatic garlic & butter", price: 3.00, spiceLevel: 0, isVegetarian: true },
      { id: "cheese-naan", name: "Cheese Naan", description: "Stuffed with melted cheese", price: 3.75, spiceLevel: 0, isVegetarian: true },
      { id: "butter-naan", name: "Butter Naan", description: "Finished with a golden butter glaze", price: 3.75, spiceLevel: 0, isVegetarian: true },
      { id: "keema-naan", name: "Keema Naan", description: "Stuffed with spiced minced lamb", price: 4.25, spiceLevel: 2 },
      { id: "peshwari-naan", name: "Peshwari Naan", description: "Sweet bread filled with almonds, coconut & sultanas", price: 3.95, spiceLevel: 0, isVegetarian: true },
      { id: "tandoori-roti", name: "Tandoori Roti", description: "Wholemeal flatbread baked in the tandoor", price: 2.95, spiceLevel: 0, isVegetarian: true },
      { id: "chapati-roti", name: "Chapati Roti", description: "Thin wholemeal flatbread, pan-cooked", price: 2.95, spiceLevel: 0, isVegetarian: true },
      { id: "boiled-rice", name: "Boiled Rice", description: "Steamed basmati rice", price: 2.95, spiceLevel: 0, isVegetarian: true },
      { id: "pilau-rice", name: "Pilau Rice", description: "Basmati rice with whole spices & saffron colour", price: 3.25, spiceLevel: 0, isVegetarian: true },
      { id: "mushroom-rice", name: "Mushroom Rice", description: "Basmati with sautéed mushrooms & herbs", price: 3.75, spiceLevel: 0, isVegetarian: true },
      { id: "fried-rice", name: "Fried Rice", description: "Egg-fried basmati with vegetables", price: 3.95, spiceLevel: 0, isVegetarian: true },
      { id: "lemon-rice", name: "Lemon Rice", description: "Basmati with lemon, mustard seeds & curry leaves", price: 3.75, spiceLevel: 0, isVegetarian: true },
      { id: "special-rice", name: "Special Rice", description: "Basmati with vegetables, egg, nuts & whole spices", price: 4.95, spiceLevel: 1, isVegetarian: true },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    description: "A sweet finale to your Indian feast",
    items: [
      { id: "mango-kulfi", name: "Mango Kulfi", description: "Traditional Indian ice cream with real Alphonso mango", price: 5.50, spiceLevel: 0, isVegetarian: true },
      { id: "pistachio-kulfi", name: "Pistachio Kulfi", description: "Rich, creamy Indian ice cream with crushed pistachios", price: 5.50, spiceLevel: 0, isVegetarian: true },
      { id: "mango-cream", name: "Mango Cream with Ice Cream", description: "Fresh mango cream alongside a scoop of vanilla ice cream", price: 5.50, spiceLevel: 0, isVegetarian: true },
      { id: "ice-cream", name: "Ice Cream", description: "Two scoops of premium vanilla ice cream", price: 3.95, spiceLevel: 0, isVegetarian: true },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    description: "From masala chai to fine wines & cocktails",
    items: [
      { id: "mango-lassi", name: "Mango Lassi", description: "Creamy yoghurt drink blended with sweet Alphonso mango", price: 4.95, spiceLevel: 0, isVegetarian: true },
      { id: "salt-lassi", name: "Salt Lassi", description: "Cooling salted yoghurt drink with cumin", price: 4.95, spiceLevel: 0, isVegetarian: true },
      { id: "sweet-lassi", name: "Sweet Lassi", description: "Refreshing sweet yoghurt drink", price: 4.95, spiceLevel: 0, isVegetarian: true },
      { id: "masala-tea", name: "Masala Tea", description: "Spiced Indian chai with ginger, cardamom & cinnamon", price: 2.50, spiceLevel: 0, isVegetarian: true },
      { id: "coca-cola", name: "Coca Cola", price: 2.65, spiceLevel: 0 },
      { id: "fanta", name: "Fanta", price: 2.65, spiceLevel: 0 },
      { id: "sprite", name: "Sprite", price: 2.65, spiceLevel: 0 },
      { id: "still-water-small", name: "Still Water (small)", price: 1.75, spiceLevel: 0 },
      { id: "still-water-large", name: "Still Water (large)", price: 2.50, spiceLevel: 0 },
      { id: "sparkling-water", name: "Sparkling Water", price: 2.75, spiceLevel: 0 },
      { id: "small-beer", name: "Beer (small)", description: "Draft beer", price: 2.65, spiceLevel: 0 },
      { id: "large-beer", name: "Beer (large)", description: "Draft beer", price: 3.85, spiceLevel: 0 },
      { id: "cobra", name: "Cobra Beer", description: "Smooth Indian lager, 330ml", price: 3.25, spiceLevel: 0 },
      { id: "house-white", name: "House White Wine (glass)", description: "House Verdejo — crisp & refreshing", price: 2.95, spiceLevel: 0 },
      { id: "house-red", name: "House Red Wine (glass)", description: "House Tempranillo — smooth & fruity", price: 2.95, spiceLevel: 0 },
      { id: "house-rose", name: "House Rosé (glass)", description: "Fresh & delicate house rosé", price: 2.95, spiceLevel: 0 },
      { id: "mojito", name: "Mojito", description: "Rum, fresh mint, lime & soda", price: 7.50, spiceLevel: 0 },
      { id: "espresso-martini", name: "Espresso Martini", description: "Vodka, coffee liqueur & fresh espresso", price: 7.50, spiceLevel: 0 },
      { id: "pina-colada", name: "Piña Colada", description: "Rum, coconut cream & pineapple juice", price: 6.50, spiceLevel: 0 },
      { id: "sangria", name: "Sangria", description: "Red wine punch with fresh fruits", price: 6.50, spiceLevel: 0 },
      { id: "espresso", name: "Espresso", price: 1.75, spiceLevel: 0 },
      { id: "americano", name: "Americano", price: 2.00, spiceLevel: 0 },
      { id: "cappuccino", name: "Cappuccino", price: 2.50, spiceLevel: 0 },
    ],
  },
];

export const spiceLevelLabel: Record<SpiceLevel, string> = {
  0: "No spice",
  1: "Mild",
  2: "Medium",
  3: "Hot",
  4: "Extra Hot",
};

export function formatPrice(price: number | ProteinPrices): string {
  if (typeof price === "number") return `€${price.toFixed(2)}`;
  const min = Math.min(...Object.values(price));
  const max = Math.max(...Object.values(price));
  if (min === max) return `€${min.toFixed(2)}`;
  return `€${min.toFixed(2)} – €${max.toFixed(2)}`;
}
