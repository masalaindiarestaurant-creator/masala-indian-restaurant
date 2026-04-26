import type { MenuCategory, MenuItem, SpiceLevel } from "@/data/menu";
import { menuCategories } from "@/data/menu";

export const locales = ["en", "nl", "es", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const languageLabels: Record<Locale, { name: string; code: string }> = {
  en: { name: "English", code: "EN" },
  nl: { name: "Dutch", code: "NL" },
  es: { name: "Spanish", code: "ES" },
  fr: { name: "French", code: "FR" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(locale: Locale, href: string) {
  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) return href;
  if (href.startsWith("#")) return `/${locale}${href}`;
  const [path, hash = ""] = href.split("#");
  const normalized = path === "/" ? "" : path;
  return `/${locale}${normalized}${hash ? `#${hash}` : ""}`;
}

export function switchLocalePath(pathname: string, locale: Locale) {
  const parts = pathname.split("/");
  if (isLocale(parts[1] ?? "")) {
    parts[1] = locale;
    return parts.join("/") || `/${locale}`;
  }
  return `/${locale}${pathname === "/" ? "" : pathname}`;
}

type SectionCopy = {
  eyebrow: string;
  title: string;
  accent: string;
  body?: string;
};

export type SiteDictionary = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    menuTitle: string;
    menuDescription: string;
  };
  brand: { name: string; descriptor: string };
  nav: {
    home: string;
    menu: string;
    about: string;
    contact: string;
    reserve: string;
    toggle: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    titleTop: string;
    titleAccent: string;
    body: string;
    primary: string;
    secondary: string;
    scroll: string;
  };
  story: SectionCopy & {
    body1: string;
    body2: string;
    primary: string;
    secondary: string;
    stat: string;
  };
  stats: Array<{ value: number; suffix: string; label: string }>;
  featured: {
    eyebrow: string;
    title: string;
    accent: string;
    dishes: Array<{
      name: string;
      tagline: string;
      description: string;
      price: string;
      spice: number;
      image: string;
    }>;
  };
  menuPreview: {
    eyebrow: string;
    title: string;
    accent: string;
    viewMenu: string;
    viewFull: string;
    categories: Array<{ id: string; label: string; tagline: string; image: string }>;
  };
  gallery: SectionCopy;
  values: {
    eyebrow: string;
    title: string;
    accent: string;
    items: Array<{ title: string; text: string }>;
  };
  cta: {
    eyebrow: string;
    title: string;
    accent: string;
    body: string;
    hours: string;
    addressLine: string;
  };
  footer: {
    summary: string;
    navigation: string;
    menu: string;
    visit: string;
    address: string;
    phone: string;
    hours: string;
    rights: string;
    crafted: string;
    links: {
      fullMenu: string;
      starters: string;
      tandoori: string;
      mains: string;
      chef: string;
      drinks: string;
    };
  };
  menuPage: {
    eyebrow: string;
    title: string;
    accent: string;
    vegetarian: string;
    spiceIndicator: string;
    priceNote: string;
    chefSpecial: string;
    proteins: Record<string, string>;
    spice: Record<SpiceLevel, string>;
  };
};

const baseFeatured = [
  { image: "/images/food/14.jpg", spice: 1 },
  { image: "/images/food/9.jpg", spice: 2 },
  { image: "/images/food/3.jpeg", spice: 2 },
];

export const dictionaries: Record<Locale, SiteDictionary> = {
  en: {
    meta: {
      homeTitle: "Masala Indian Restaurant | Authentic Indian Cuisine",
      homeDescription:
        "Experience authentic Indian flavours at Masala Indian Restaurant. Traditional recipes, freshest ingredients, warm hospitality.",
      menuTitle: "Menu | Masala Indian Restaurant",
      menuDescription:
        "Explore our full menu of authentic Indian starters, tandoori dishes, main courses, biryanis, desserts and drinks.",
    },
    brand: { name: "Masala", descriptor: "Indian Restaurant" },
    nav: {
      home: "Home",
      menu: "Menu",
      about: "About",
      contact: "Contact",
      reserve: "Reserve a Table",
      toggle: "Toggle menu",
      language: "Change language",
    },
    hero: {
      eyebrow: "Authentic Indian Cuisine",
      titleTop: "Taste the",
      titleAccent: "Soul of India",
      body:
        "Traditional recipes passed through generations, crafted with the freshest ingredients and served with warmth.",
      primary: "Explore Menu",
      secondary: "Reserve a Table",
      scroll: "Scroll",
    },
    story: {
      eyebrow: "Our Story",
      title: "Where Heritage",
      accent: "Meets Hospitality",
      body1:
        "Masala is more than a restaurant. It is a celebration of Indian culinary heritage, brought to life through generations of family recipes.",
      body2:
        "From the smoky depths of our clay tandoor to the fragrant slow-cooked curries, every plate carries the soul of India.",
      primary: "Book a Table",
      secondary: "View Menu",
      stat: "Years of Flavour",
    },
    stats: [
      { value: 15, suffix: "+", label: "Years of Flavour" },
      { value: 200, suffix: "+", label: "Dishes on Menu" },
      { value: 5, suffix: "★", label: "Star Reviews" },
      { value: 3, suffix: "", label: "Generations of Recipes" },
    ],
    featured: {
      eyebrow: "Signature Dishes",
      title: "Crafted with",
      accent: "Passion",
      dishes: [
        {
          ...baseFeatured[0],
          name: "Butter Chicken",
          tagline: "Chef's Signature",
          description: "Tender chicken in a luscious tomato and butter sauce, an Indian icon reimagined.",
          price: "€11.50",
        },
        {
          ...baseFeatured[1],
          name: "Mix Grill Sizzler",
          tagline: "Tandoori Special",
          description: "A sizzling platter of chicken tikka, seekh kebab and lamb tikka, theatre on a plate.",
          price: "€15.95",
        },
        {
          ...baseFeatured[2],
          name: "Rogan Josh",
          tagline: "Kashmiri Classic",
          description: "Slow-cooked lamb in an aromatic Kashmiri sauce with whole spices and dried chillies.",
          price: "from €10.95",
        },
      ],
    },
    menuPreview: {
      eyebrow: "Explore Our Menu",
      title: "A World of",
      accent: "Flavour",
      viewMenu: "View Menu",
      viewFull: "View Full Menu",
      categories: [
        { id: "starters", label: "Starters", tagline: "Light and vibrant", image: "/images/food/1.jpeg" },
        { id: "tandoori", label: "Tandoori", tagline: "From the clay oven", image: "/images/food/2.jpeg" },
        { id: "mains", label: "Main Courses", tagline: "Hearty and aromatic", image: "/images/food/8.jpg" },
        { id: "drinks", label: "Drinks", tagline: "Lassi to cocktails", image: "/images/food/6.jpg" },
      ],
    },
    gallery: { eyebrow: "Our World", title: "A Feast for", accent: "the Eyes" },
    values: {
      eyebrow: "Why Masala",
      title: "The Masala",
      accent: "Promise",
      items: [
        {
          title: "Authentic Recipes",
          text: "Every dish honours centuries of Indian culinary tradition, passed down through generations.",
        },
        {
          title: "Freshest Ingredients",
          text: "From local vegetables to hand-selected spices, freshness is our standard.",
        },
        {
          title: "Warm Hospitality",
          text: "Every guest is welcomed with warmth, care, and genuine joy.",
        },
      ],
    },
    cta: {
      eyebrow: "Reserve Your Table",
      title: "Ready to Experience",
      accent: "India Tonight?",
      body:
        "Gather your friends and family for an unforgettable evening of authentic flavours, warm hospitality, and the magic of India.",
      hours: "Mon - Sun · 12:00 - 23:00",
      addressLine: "Calle San Antonio Zen, 7 - Walk-ins welcome",
    },
    footer: {
      summary: "Authentic Indian cuisine crafted with love, tradition, and the finest ingredients.",
      navigation: "Navigation",
      menu: "Our Menu",
      visit: "Visit Us",
      address: "Address",
      phone: "Phone",
      hours: "Hours",
      rights: "All rights reserved.",
      crafted: "Crafted with love for Indian cuisine",
      links: {
        fullMenu: "Full Menu",
        starters: "Starters",
        tandoori: "Tandoori",
        mains: "Main Courses",
        chef: "Chef's Specials",
        drinks: "Drinks",
      },
    },
    menuPage: {
      eyebrow: "Masala Indian Restaurant",
      title: "Our",
      accent: "Menu",
      vegetarian: "Vegetarian",
      spiceIndicator: "Spice level indicator",
      priceNote: "All prices in euros · Subject to availability",
      chefSpecial: "Special",
      proteins: {
        chicken: "Chicken",
        lamb: "Lamb",
        beef: "Beef",
        prawn: "Prawn",
        fish: "Fish",
        vegetable: "Veg",
        special: "Special",
      },
      spice: { 0: "No spice", 1: "Mild", 2: "Medium", 3: "Hot", 4: "Extra Hot" },
    },
  },
  nl: {
    meta: {
      homeTitle: "Masala Indian Restaurant | Authentieke Indiase keuken",
      homeDescription:
        "Ervaar authentieke Indiase smaken bij Masala Indian Restaurant. Traditionele recepten, verse ingredienten en warme gastvrijheid.",
      menuTitle: "Menu | Masala Indian Restaurant",
      menuDescription: "Ontdek ons volledige menu met Indiase voorgerechten, tandoori, hoofdgerechten, biryani, desserts en drankjes.",
    },
    brand: { name: "Masala", descriptor: "Indian Restaurant" },
    nav: {
      home: "Home",
      menu: "Menu",
      about: "Over ons",
      contact: "Contact",
      reserve: "Reserveer een tafel",
      toggle: "Menu openen",
      language: "Taal wijzigen",
    },
    hero: {
      eyebrow: "Authentieke Indiase Keuken",
      titleTop: "Proef de",
      titleAccent: "Ziel van India",
      body: "Traditionele recepten, generaties lang doorgegeven, bereid met de verste ingredienten en geserveerd met warmte.",
      primary: "Bekijk Menu",
      secondary: "Reserveer een tafel",
      scroll: "Scroll",
    },
    story: {
      eyebrow: "Ons Verhaal",
      title: "Waar Erfgoed",
      accent: "Gastvrijheid Ontmoet",
      body1: "Masala is meer dan een restaurant. Het is een viering van Indiaas culinair erfgoed, tot leven gebracht met familierecepten.",
      body2: "Van onze rokerige kleioven tot geurige langzaam gegaarde curry's, elk bord draagt de ziel van India.",
      primary: "Boek een tafel",
      secondary: "Bekijk menu",
      stat: "Jaar smaak",
    },
    stats: [
      { value: 15, suffix: "+", label: "Jaar Smaak" },
      { value: 200, suffix: "+", label: "Gerechten op het Menu" },
      { value: 5, suffix: "★", label: "Sterrenbeoordelingen" },
      { value: 3, suffix: "", label: "Generaties Recepten" },
    ],
    featured: {
      eyebrow: "Signatuurgerechten",
      title: "Bereid met",
      accent: "Passie",
      dishes: [
        { ...baseFeatured[0], name: "Butter Chicken", tagline: "Signatuur van de Chef", description: "Malse kip in rijke tomaten-botersaus, een Indiaas icoon opnieuw verfijnd.", price: "€11.50" },
        { ...baseFeatured[1], name: "Mix Grill Sizzler", tagline: "Tandoori Special", description: "Een sissende schaal met chicken tikka, seekh kebab en lamb tikka.", price: "€15.95" },
        { ...baseFeatured[2], name: "Rogan Josh", tagline: "Kashmiri Klassieker", description: "Langzaam gegaard lamsvlees in aromatische Kashmiri saus met hele specerijen.", price: "vanaf €10.95" },
      ],
    },
    menuPreview: {
      eyebrow: "Ontdek Ons Menu",
      title: "Een Wereld van",
      accent: "Smaak",
      viewMenu: "Bekijk Menu",
      viewFull: "Bekijk Volledig Menu",
      categories: [
        { id: "starters", label: "Voorgerechten", tagline: "Licht en levendig", image: "/images/food/1.jpeg" },
        { id: "tandoori", label: "Tandoori", tagline: "Uit de kleioven", image: "/images/food/2.jpeg" },
        { id: "mains", label: "Hoofdgerechten", tagline: "Hartverwarmend en aromatisch", image: "/images/food/8.jpg" },
        { id: "drinks", label: "Drankjes", tagline: "Van lassi tot cocktails", image: "/images/food/6.jpg" },
      ],
    },
    gallery: { eyebrow: "Onze Wereld", title: "Een Feest voor", accent: "het Oog" },
    values: {
      eyebrow: "Waarom Masala",
      title: "De Masala",
      accent: "Belofte",
      items: [
        { title: "Authentieke Recepten", text: "Elk gerecht eert eeuwen Indiase culinaire traditie, doorgegeven door generaties." },
        { title: "Verse Ingredienten", text: "Van lokale groenten tot zorgvuldig gekozen specerijen, versheid is onze standaard." },
        { title: "Warme Gastvrijheid", text: "Elke gast wordt welkom geheten met warmte, zorg en oprechte vreugde." },
      ],
    },
    cta: {
      eyebrow: "Reserveer Je Tafel",
      title: "Klaar om vanavond",
      accent: "India te Ervaren?",
      body: "Verzamel vrienden en familie voor een onvergetelijke avond met authentieke smaken, warme gastvrijheid en de magie van India.",
      hours: "Ma - Zo · 12:00 - 23:00",
      addressLine: "Calle San Antonio Zen, 7 - Binnenlopen welkom",
    },
    footer: {
      summary: "Authentieke Indiase keuken met liefde, traditie en de beste ingredienten bereid.",
      navigation: "Navigatie",
      menu: "Ons Menu",
      visit: "Bezoek Ons",
      address: "Adres",
      phone: "Telefoon",
      hours: "Openingstijden",
      rights: "Alle rechten voorbehouden.",
      crafted: "Gemaakt met liefde voor de Indiase keuken",
      links: { fullMenu: "Volledig Menu", starters: "Voorgerechten", tandoori: "Tandoori", mains: "Hoofdgerechten", chef: "Chef Specials", drinks: "Drankjes" },
    },
    menuPage: {
      eyebrow: "Masala Indian Restaurant",
      title: "Ons",
      accent: "Menu",
      vegetarian: "Vegetarisch",
      spiceIndicator: "Pittigheidsniveau",
      priceNote: "Alle prijzen in euro · Afhankelijk van beschikbaarheid",
      chefSpecial: "Special",
      proteins: { chicken: "Kip", lamb: "Lam", beef: "Rund", prawn: "Garnaal", fish: "Vis", vegetable: "Veg", special: "Special" },
      spice: { 0: "Niet pittig", 1: "Mild", 2: "Medium", 3: "Pittig", 4: "Extra pittig" },
    },
  },
  es: {
    meta: {
      homeTitle: "Masala Indian Restaurant | Cocina india autentica",
      homeDescription: "Disfruta sabores indios autenticos en Masala Indian Restaurant con recetas tradicionales, ingredientes frescos y hospitalidad calida.",
      menuTitle: "Menu | Masala Indian Restaurant",
      menuDescription: "Explora nuestro menu completo de entrantes indios, tandoori, platos principales, biryanis, postres y bebidas.",
    },
    brand: { name: "Masala", descriptor: "Indian Restaurant" },
    nav: { home: "Inicio", menu: "Menu", about: "Nosotros", contact: "Contacto", reserve: "Reservar mesa", toggle: "Abrir menu", language: "Cambiar idioma" },
    hero: {
      eyebrow: "Cocina India Autentica",
      titleTop: "Prueba el",
      titleAccent: "Alma de India",
      body: "Recetas tradicionales transmitidas por generaciones, preparadas con los ingredientes mas frescos y servidas con calidez.",
      primary: "Ver Menu",
      secondary: "Reservar mesa",
      scroll: "Bajar",
    },
    story: {
      eyebrow: "Nuestra Historia",
      title: "Donde la Herencia",
      accent: "Encuentra Hospitalidad",
      body1: "Masala es mas que un restaurante. Es una celebracion del patrimonio culinario indio, vivo en recetas familiares.",
      body2: "Desde nuestro horno tandoor hasta los curries lentos y aromaticos, cada plato lleva el alma de India.",
      primary: "Reservar mesa",
      secondary: "Ver menu",
      stat: "Anos de sabor",
    },
    stats: [
      { value: 15, suffix: "+", label: "Anos de Sabor" },
      { value: 200, suffix: "+", label: "Platos en el Menu" },
      { value: 5, suffix: "★", label: "Resenas de Cinco Estrellas" },
      { value: 3, suffix: "", label: "Generaciones de Recetas" },
    ],
    featured: {
      eyebrow: "Platos de Autor",
      title: "Elaborado con",
      accent: "Pasion",
      dishes: [
        { ...baseFeatured[0], name: "Butter Chicken", tagline: "Firma del Chef", description: "Pollo tierno en salsa rica de tomate y mantequilla, un icono indio renovado.", price: "€11.50" },
        { ...baseFeatured[1], name: "Mix Grill Sizzler", tagline: "Especial Tandoori", description: "Bandeja chispeante de chicken tikka, seekh kebab y lamb tikka.", price: "€15.95" },
        { ...baseFeatured[2], name: "Rogan Josh", tagline: "Clasico de Cachemira", description: "Cordero cocinado lentamente en salsa aromatica de Cachemira con especias enteras.", price: "desde €10.95" },
      ],
    },
    menuPreview: {
      eyebrow: "Explora Nuestro Menu",
      title: "Un Mundo de",
      accent: "Sabor",
      viewMenu: "Ver Menu",
      viewFull: "Ver Menu Completo",
      categories: [
        { id: "starters", label: "Entrantes", tagline: "Ligeros y vivos", image: "/images/food/1.jpeg" },
        { id: "tandoori", label: "Tandoori", tagline: "Del horno de barro", image: "/images/food/2.jpeg" },
        { id: "mains", label: "Principales", tagline: "Intensos y aromaticos", image: "/images/food/8.jpg" },
        { id: "drinks", label: "Bebidas", tagline: "De lassi a cocteles", image: "/images/food/6.jpg" },
      ],
    },
    gallery: { eyebrow: "Nuestro Mundo", title: "Un Festin para", accent: "la Vista" },
    values: {
      eyebrow: "Por Que Masala",
      title: "La Promesa",
      accent: "Masala",
      items: [
        { title: "Recetas Autenticas", text: "Cada plato honra siglos de tradicion culinaria india transmitida por generaciones." },
        { title: "Ingredientes Frescos", text: "De verduras locales a especias seleccionadas, la frescura es nuestro estandar." },
        { title: "Hospitalidad Calida", text: "Cada invitado es recibido con calidez, cuidado y alegria genuina." },
      ],
    },
    cta: {
      eyebrow: "Reserva Tu Mesa",
      title: "Listo para vivir",
      accent: "India Esta Noche?",
      body: "Reune a tus amigos y familia para una noche inolvidable de sabores autenticos, hospitalidad calida y magia india.",
      hours: "Lun - Dom · 12:00 - 23:00",
      addressLine: "Calle San Antonio Zen, 7 - Sin reserva tambien bienvenidos",
    },
    footer: {
      summary: "Cocina india autentica preparada con amor, tradicion y los mejores ingredientes.",
      navigation: "Navegacion",
      menu: "Nuestro Menu",
      visit: "Visitanos",
      address: "Direccion",
      phone: "Telefono",
      hours: "Horario",
      rights: "Todos los derechos reservados.",
      crafted: "Hecho con amor por la cocina india",
      links: { fullMenu: "Menu Completo", starters: "Entrantes", tandoori: "Tandoori", mains: "Principales", chef: "Especiales del Chef", drinks: "Bebidas" },
    },
    menuPage: {
      eyebrow: "Masala Indian Restaurant",
      title: "Nuestro",
      accent: "Menu",
      vegetarian: "Vegetariano",
      spiceIndicator: "Indicador de picante",
      priceNote: "Todos los precios en euros · Sujeto a disponibilidad",
      chefSpecial: "Especial",
      proteins: { chicken: "Pollo", lamb: "Cordero", beef: "Ternera", prawn: "Gamba", fish: "Pescado", vegetable: "Veg", special: "Especial" },
      spice: { 0: "Sin picante", 1: "Suave", 2: "Medio", 3: "Picante", 4: "Extra picante" },
    },
  },
  fr: {
    meta: {
      homeTitle: "Masala Indian Restaurant | Cuisine indienne authentique",
      homeDescription: "Decouvrez les saveurs indiennes authentiques chez Masala Indian Restaurant avec des recettes traditionnelles et un accueil chaleureux.",
      menuTitle: "Menu | Masala Indian Restaurant",
      menuDescription: "Explorez notre menu complet: entrees indiennes, tandoori, plats, biryanis, desserts et boissons.",
    },
    brand: { name: "Masala", descriptor: "Indian Restaurant" },
    nav: { home: "Accueil", menu: "Menu", about: "A propos", contact: "Contact", reserve: "Reserver une table", toggle: "Ouvrir le menu", language: "Changer de langue" },
    hero: {
      eyebrow: "Cuisine Indienne Authentique",
      titleTop: "Goutez",
      titleAccent: "l'Ame de l'Inde",
      body: "Des recettes traditionnelles transmises de generation en generation, preparees avec les ingredients les plus frais et servies avec chaleur.",
      primary: "Voir le Menu",
      secondary: "Reserver une table",
      scroll: "Defiler",
    },
    story: {
      eyebrow: "Notre Histoire",
      title: "Quand l'Heritage",
      accent: "Rencontre l'Hospitalite",
      body1: "Masala est plus qu'un restaurant. C'est une celebration du patrimoine culinaire indien, portee par des recettes familiales.",
      body2: "Du tandoor fume aux currys mijotes, chaque assiette porte l'ame de l'Inde.",
      primary: "Reserver",
      secondary: "Voir le menu",
      stat: "Ans de saveur",
    },
    stats: [
      { value: 15, suffix: "+", label: "Ans de Saveur" },
      { value: 200, suffix: "+", label: "Plats au Menu" },
      { value: 5, suffix: "★", label: "Avis Cinq Etoiles" },
      { value: 3, suffix: "", label: "Generations de Recettes" },
    ],
    featured: {
      eyebrow: "Plats Signature",
      title: "Prepare avec",
      accent: "Passion",
      dishes: [
        { ...baseFeatured[0], name: "Butter Chicken", tagline: "Signature du Chef", description: "Poulet tendre dans une riche sauce tomate et beurre, une icone indienne revisitee.", price: "€11.50" },
        { ...baseFeatured[1], name: "Mix Grill Sizzler", tagline: "Special Tandoori", description: "Un plateau gril sizzling avec chicken tikka, seekh kebab et lamb tikka.", price: "€15.95" },
        { ...baseFeatured[2], name: "Rogan Josh", tagline: "Classique du Cachemire", description: "Agneau mijote dans une sauce cachemirie aromatique aux epices entieres.", price: "a partir de €10.95" },
      ],
    },
    menuPreview: {
      eyebrow: "Explorez Notre Menu",
      title: "Un Monde de",
      accent: "Saveurs",
      viewMenu: "Voir le Menu",
      viewFull: "Voir Tout le Menu",
      categories: [
        { id: "starters", label: "Entrees", tagline: "Legeres et vives", image: "/images/food/1.jpeg" },
        { id: "tandoori", label: "Tandoori", tagline: "Du four d'argile", image: "/images/food/2.jpeg" },
        { id: "mains", label: "Plats", tagline: "Genereux et aromatiques", image: "/images/food/8.jpg" },
        { id: "drinks", label: "Boissons", tagline: "Du lassi aux cocktails", image: "/images/food/6.jpg" },
      ],
    },
    gallery: { eyebrow: "Notre Monde", title: "Un Festin pour", accent: "les Yeux" },
    values: {
      eyebrow: "Pourquoi Masala",
      title: "La Promesse",
      accent: "Masala",
      items: [
        { title: "Recettes Authentiques", text: "Chaque plat honore des siecles de tradition culinaire indienne transmis par generations." },
        { title: "Ingredients Frais", text: "Des legumes locaux aux epices choisies avec soin, la fraicheur est notre norme." },
        { title: "Accueil Chaleureux", text: "Chaque invite est accueilli avec chaleur, attention et joie sincere." },
      ],
    },
    cta: {
      eyebrow: "Reservez Votre Table",
      title: "Pret a decouvrir",
      accent: "l'Inde ce soir?",
      body: "Reunissez vos proches pour une soiree inoubliable de saveurs authentiques, d'accueil chaleureux et de magie indienne.",
      hours: "Lun - Dim · 12:00 - 23:00",
      addressLine: "Calle San Antonio Zen, 7 - Sans reservation bienvenus",
    },
    footer: {
      summary: "Cuisine indienne authentique preparee avec amour, tradition et les meilleurs ingredients.",
      navigation: "Navigation",
      menu: "Notre Menu",
      visit: "Nous Trouver",
      address: "Adresse",
      phone: "Telephone",
      hours: "Horaires",
      rights: "Tous droits reserves.",
      crafted: "Prepare avec amour pour la cuisine indienne",
      links: { fullMenu: "Menu Complet", starters: "Entrees", tandoori: "Tandoori", mains: "Plats", chef: "Specialites du Chef", drinks: "Boissons" },
    },
    menuPage: {
      eyebrow: "Masala Indian Restaurant",
      title: "Notre",
      accent: "Menu",
      vegetarian: "Vegetarien",
      spiceIndicator: "Niveau d'epices",
      priceNote: "Tous les prix sont en euros · Selon disponibilite",
      chefSpecial: "Special",
      proteins: { chicken: "Poulet", lamb: "Agneau", beef: "Boeuf", prawn: "Crevette", fish: "Poisson", vegetable: "Veg", special: "Special" },
      spice: { 0: "Non epice", 1: "Doux", 2: "Moyen", 3: "Fort", 4: "Tres fort" },
    },
  },
};

const menuCategoryText: Record<Locale, Partial<Record<string, Pick<MenuCategory, "label" | "description">>>> = {
  en: {},
  nl: {
    starters: { label: "Voorgerechten", description: "Begin je reis met levendige hapjes" },
    tandoori: { label: "Tandoori", description: "Gemarineerd en bereid in onze authentieke kleioven" },
    "tandoori-mains": { label: "Tandoori hoofdgerechten", description: "Sissend op uien, geserveerd met currysaus" },
    mains: { label: "Hoofdgerechten", description: "Kies je saus en eiwit, van mild tot vurig" },
    "chef-specials": { label: "Chef Specials", description: "De meest geliefde creaties van onze chef" },
    biryani: { label: "Biryani", description: "Geurige basmatirijst langzaam gegaard met specerijen" },
    vegetarian: { label: "Vegetarisch", description: "Plantaardige gerechten vol smaak en traditie" },
    "breads-rice": { label: "Brood en rijst", description: "De perfecte begeleiding" },
    desserts: { label: "Desserts", description: "Een zoete afsluiter van je Indiase maaltijd" },
    drinks: { label: "Drankjes", description: "Van masala chai tot wijnen en cocktails" },
  },
  es: {
    starters: { label: "Entrantes", description: "Empieza tu viaje con aperitivos vivos" },
    tandoori: { label: "Tandoori", description: "Marinado y cocinado en nuestro horno de barro" },
    "tandoori-mains": { label: "Principales tandoori", description: "Servidos chispeantes sobre cebolla con salsa curry" },
    mains: { label: "Platos principales", description: "Elige salsa y proteina, de suave a ardiente" },
    "chef-specials": { label: "Especiales del chef", description: "Las creaciones mas celebradas del chef" },
    biryani: { label: "Biryani", description: "Arroz basmati aromatico cocinado lentamente con especias" },
    vegetarian: { label: "Vegetariano", description: "Platos vegetales ricos en sabor y tradicion" },
    "breads-rice": { label: "Panes y arroz", description: "El acompanamiento perfecto" },
    desserts: { label: "Postres", description: "Un final dulce para tu banquete indio" },
    drinks: { label: "Bebidas", description: "De masala chai a vinos y cocteles" },
  },
  fr: {
    starters: { label: "Entrees", description: "Commencez le voyage avec des bouchees vives" },
    tandoori: { label: "Tandoori", description: "Marine et cuit dans notre four d'argile authentique" },
    "tandoori-mains": { label: "Plats tandoori", description: "Servis grilles sur oignons avec sauce curry" },
    mains: { label: "Plats principaux", description: "Choisissez votre sauce et proteine, de doux a ardent" },
    "chef-specials": { label: "Specialites du chef", description: "Les creations les plus celebres du chef" },
    biryani: { label: "Biryani", description: "Riz basmati parfume mijote avec des epices" },
    vegetarian: { label: "Vegetarien", description: "Plats vegetaux riches en saveur et tradition" },
    "breads-rice": { label: "Pains et riz", description: "L'accompagnement parfait" },
    desserts: { label: "Desserts", description: "Une finale sucree pour votre repas indien" },
    drinks: { label: "Boissons", description: "Du masala chai aux vins et cocktails" },
  },
};

const noteText: Record<Locale, Record<string, string>> = {
  en: {},
  nl: { "2 pieces": "2 stuks", "Served with Pappadum": "Geserveerd met pappadum" },
  es: { "2 pieces": "2 piezas", "Served with Pappadum": "Servido con pappadum" },
  fr: { "2 pieces": "2 pieces", "Served with Pappadum": "Servi avec pappadum" },
};

function localizeItem(locale: Locale, item: MenuItem): MenuItem {
  if (locale === "en") return item;
  return {
    ...item,
    note: item.note ? noteText[locale][item.note] ?? item.note : undefined,
    description: item.description
      ? draftMenuDescription(locale, item.description)
      : undefined,
  };
}

function draftMenuDescription(locale: Locale, description: string) {
  const prefix: Record<Exclude<Locale, "en">, string> = {
    nl: "Huisgemaakte bereiding:",
    es: "Preparacion de la casa:",
    fr: "Preparation maison:",
  };
  if (locale === "en") return description;
  return `${prefix[locale]} ${description}`;
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getLocalizedMenuCategories(locale: Locale): MenuCategory[] {
  return menuCategories.map((category) => ({
    ...category,
    ...menuCategoryText[locale][category.id],
    items: category.items.map((item) => localizeItem(locale, item)),
  }));
}
