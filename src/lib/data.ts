export type Country = {
  slug: string;
  name: string;
  region: string;
  flag: string;
  capital: string;
  language: string;
  population: string;
  tagline: string;
  intro: string;
  image: string;
  colors: string;
  x: number;
  y: number;
  traditions: { title: string; text: string }[];
  dishes: { name: string; note: string; image: string }[];
  festivals: string[];
};

const img = (seed: string, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const countries: Country[] = [
  {
    slug: "india",
    name: "India",
    region: "Asia",
    flag: "🇮🇳",
    capital: "New Delhi",
    language: "Hindi, English +22",
    population: "1.43B",
    tagline: "A festival for every season, a flavour for every street",
    intro:
      "From the powder-bright chaos of Holi to the oil lamps of Diwali, India layers thousands of local traditions over a shared love of colour, food and ceremony.",
    image: img("india-culture"),
    colors: "from-saffron/70 to-jade/60",
    x: 68,
    y: 52,
    traditions: [
      { title: "Rangoli", text: "Doorstep floor art drawn in rice flour and petals to welcome guests and good fortune." },
      { title: "Mehndi", text: "Henna patterns applied before weddings and festivals, each region with its own vocabulary of motifs." },
      { title: "Namaste", text: "Palms joined at the heart — a greeting that acknowledges the person, not the hand." },
    ],
    dishes: [
      { name: "Masala Dosa", note: "Fermented rice crepe, South Indian breakfast staple", image: img("dosa", 800, 600) },
      { name: "Rogan Josh", note: "Slow-braised Kashmiri lamb curry", image: img("roganjosh", 800, 600) },
      { name: "Gulab Jamun", note: "Milk dumplings soaked in rose syrup", image: img("gulabjamun", 800, 600) },
    ],
    festivals: ["holi", "diwali"],
  },
  {
    slug: "mexico",
    name: "Mexico",
    region: "Americas",
    flag: "🇲🇽",
    capital: "Mexico City",
    language: "Spanish +68 native",
    population: "128M",
    tagline: "Where remembering the dead is the loudest celebration of life",
    intro:
      "Mexican culture weaves Indigenous cosmology with Spanish inheritance — in weaving looms, mole recipes counted in ingredients, and altars built for returning ancestors.",
    image: img("mexico-culture"),
    colors: "from-primary/70 to-saffron/60",
    x: 20,
    y: 47,
    traditions: [
      { title: "Ofrendas", text: "Home altars layered with marigolds, photographs and favourite foods of the departed." },
      { title: "Backstrap weaving", text: "Oaxacan weavers work dyes from cochineal and indigo on looms tied to their bodies." },
      { title: "Mariachi", text: "A string-and-brass ensemble whose songs narrate love, land and loss." },
    ],
    dishes: [
      { name: "Mole Negro", note: "Over 30 ingredients, hours of patience", image: img("mole", 800, 600) },
      { name: "Tlayudas", note: "Oaxacan griddled corn flatbread", image: img("tlayuda", 800, 600) },
      { name: "Pan de Muerto", note: "Sweet bread baked for Day of the Dead", image: img("pandemuerto", 800, 600) },
    ],
    festivals: ["dia-de-muertos"],
  },
  {
    slug: "japan",
    name: "Japan",
    region: "Asia",
    flag: "🇯🇵",
    capital: "Tokyo",
    language: "Japanese",
    population: "124M",
    tagline: "Ritual as a way of paying attention",
    intro:
      "Japanese tradition finds ceremony in the ordinary: a bowl of tea, a swept garden, the exact moment cherry blossom peaks and everyone stops to look.",
    image: img("japan-culture"),
    colors: "from-primary/60 to-indigoo/40",
    x: 82,
    y: 44,
    traditions: [
      { title: "Chadō", text: "The way of tea — a choreographed hour built on hospitality and restraint." },
      { title: "Hanami", text: "Picnicking under sakura, a national appointment with impermanence." },
      { title: "Kintsugi", text: "Repairing broken ceramics with gold so the break becomes the history." },
    ],
    dishes: [
      { name: "Kaiseki", note: "Seasonal multi-course meal", image: img("kaiseki", 800, 600) },
      { name: "Ramen", note: "Regional broths from tonkotsu to shio", image: img("ramen", 800, 600) },
      { name: "Wagashi", note: "Sweets shaped after the season", image: img("wagashi", 800, 600) },
    ],
    festivals: ["hanami"],
  },
  {
    slug: "ghana",
    name: "Ghana",
    region: "Africa",
    flag: "🇬🇭",
    capital: "Accra",
    language: "English, Twi, Ewe",
    population: "34M",
    tagline: "Cloth that speaks in proverbs",
    intro:
      "In Ghana, textile is language. Kente strips are named, adinkra symbols carry proverbs, and drums announce arrivals before anyone speaks.",
    image: img("ghana-culture"),
    colors: "from-saffron/70 to-primary/50",
    x: 45,
    y: 58,
    traditions: [
      { title: "Kente weaving", text: "Narrow strips woven on Ashanti looms, each pattern with a name and meaning." },
      { title: "Adinkra", text: "Stamped symbols encoding proverbs about wisdom, unity and endurance." },
      { title: "Talking drums", text: "Pitch-bent drums that mimic the tones of spoken Twi." },
    ],
    dishes: [
      { name: "Jollof Rice", note: "Tomato-based one-pot, endlessly debated", image: img("jollof", 800, 600) },
      { name: "Waakye", note: "Rice and beans cooked with sorghum leaves", image: img("waakye", 800, 600) },
      { name: "Kelewele", note: "Spiced fried plantain street snack", image: img("kelewele", 800, 600) },
    ],
    festivals: ["homowo"],
  },
  {
    slug: "italy",
    name: "Italy",
    region: "Europe",
    flag: "🇮🇹",
    capital: "Rome",
    language: "Italian",
    population: "59M",
    tagline: "The table as the centre of the week",
    intro:
      "Italian culture is fiercely local: the pasta shape, the dialect, the patron saint's day all change within a valley's distance.",
    image: img("italy-culture"),
    colors: "from-jade/60 to-primary/50",
    x: 51,
    y: 40,
    traditions: [
      { title: "Pranzo della domenica", text: "The long Sunday lunch, four generations and no hurry." },
      { title: "Passeggiata", text: "The evening stroll — seeing and being seen in the piazza." },
      { title: "Carnevale masks", text: "Venetian papier-mâché craft passed through workshop families." },
    ],
    dishes: [
      { name: "Cacio e Pepe", note: "Three ingredients, zero forgiveness", image: img("caciopepe", 800, 600) },
      { name: "Ragù alla Bolognese", note: "Simmered for an afternoon", image: img("ragu", 800, 600) },
      { name: "Sfogliatella", note: "Neapolitan shell pastry", image: img("sfogliatella", 800, 600) },
    ],
    festivals: ["carnevale"],
  },
  {
    slug: "iran",
    name: "Iran",
    region: "Asia",
    flag: "🇮🇷",
    capital: "Tehran",
    language: "Persian",
    population: "89M",
    tagline: "A new year that begins with spring",
    intro:
      "Persian tradition keeps time with the equinox, poetry recitals and a spread of seven symbolic items renewed every Nowruz.",
    image: img("iran-culture"),
    colors: "from-indigoo/50 to-jade/50",
    x: 61,
    y: 45,
    traditions: [
      { title: "Haft-sin", text: "Seven symbolic items set on the Nowruz table for renewal and health." },
      { title: "Sofreh carpets", text: "Knotted rugs whose garden patterns imagine paradise indoors." },
      { title: "Shab-e Yalda", text: "The longest night spent reading Hafez with pomegranates and nuts." },
    ],
    dishes: [
      { name: "Ghormeh Sabzi", note: "Herb and lamb stew with dried lime", image: img("ghormeh", 800, 600) },
      { name: "Tahchin", note: "Saffron rice cake with a crisp crust", image: img("tahchin", 800, 600) },
      { name: "Faloodeh", note: "Rose and vermicelli iced dessert", image: img("faloodeh", 800, 600) },
    ],
    festivals: ["nowruz"],
  },
  {
    slug: "brazil",
    name: "Brazil",
    region: "Americas",
    flag: "🇧🇷",
    capital: "Brasília",
    language: "Portuguese",
    population: "216M",
    tagline: "Rhythm as a civic institution",
    intro:
      "Samba schools, capoeira rodas and Afro-Brazilian religious traditions make rhythm a form of memory and neighbourhood identity.",
    image: img("brazil-culture"),
    colors: "from-jade/70 to-saffron/60",
    x: 30,
    y: 66,
    traditions: [
      { title: "Samba schools", text: "Neighbourhood collectives who spend a year building one parade." },
      { title: "Capoeira", text: "A martial art disguised as dance, born of resistance." },
      { title: "Festa Junina", text: "Rural winter festivals with quadrilha dancing and corn everything." },
    ],
    dishes: [
      { name: "Feijoada", note: "Black bean and pork stew, Saturday ritual", image: img("feijoada", 800, 600) },
      { name: "Acarajé", note: "Bahian black-eyed pea fritters", image: img("acaraje", 800, 600) },
      { name: "Brigadeiro", note: "Chocolate fudge balls at every party", image: img("brigadeiro", 800, 600) },
    ],
    festivals: ["carnaval-rio"],
  },
  {
    slug: "thailand",
    name: "Thailand",
    region: "Asia",
    flag: "🇹🇭",
    capital: "Bangkok",
    language: "Thai",
    population: "72M",
    tagline: "Water, light and the art of merit",
    intro:
      "Thai culture balances Buddhist merit-making with joyous public festivals — the water fights of Songkran, the floating lanterns of Loy Krathong.",
    image: img("thailand-culture"),
    colors: "from-primary/60 to-saffron/60",
    x: 75,
    y: 57,
    traditions: [
      { title: "Wai", text: "A bow with joined palms, its height calibrated to respect." },
      { title: "Krathong floats", text: "Banana-leaf boats set adrift with candles to release the year's misfortune." },
      { title: "Fruit carving", text: "Royal-court craft turning melons into blossoms." },
    ],
    dishes: [
      { name: "Som Tam", note: "Green papaya salad pounded to order", image: img("somtam", 800, 600) },
      { name: "Khao Soi", note: "Northern coconut curry noodles", image: img("khaosoi", 800, 600) },
      { name: "Mango Sticky Rice", note: "Coconut rice with ripe mango", image: img("mangorice", 800, 600) },
    ],
    festivals: ["songkran", "loy-krathong"],
  },
];

export type Festival = {
  slug: string;
  name: string;
  country: string;
  countrySlug: string;
  region: string;
  month: string;
  dates: string;
  monthIndex: number;
  type: string;
  blurb: string;
  image: string;
};

export const festivals: Festival[] = [
  { slug: "nowruz", name: "Nowruz", country: "Iran & Central Asia", countrySlug: "iran", region: "Asia", month: "March", dates: "21 Mar", monthIndex: 2, type: "New Year", blurb: "The Persian new year, timed to the vernal equinox and celebrated across 12 countries.", image: img("nowruz", 900, 700) },
  { slug: "holi", name: "Holi Festival", country: "India", countrySlug: "india", region: "Asia", month: "March", dates: "03–14 Mar", monthIndex: 2, type: "Spring", blurb: "Colour thrown by the handful to mark the end of winter and the forgiving of grudges.", image: img("holi", 900, 700) },
  { slug: "songkran", name: "Songkran", country: "Thailand", countrySlug: "thailand", region: "Asia", month: "April", dates: "13–15 Apr", monthIndex: 3, type: "New Year", blurb: "Thai new year, washed in by the world's largest water fight.", image: img("songkran", 900, 700) },
  { slug: "hanami", name: "Hanami", country: "Japan", countrySlug: "japan", region: "Asia", month: "April", dates: "Late Mar–Apr", monthIndex: 3, type: "Seasonal", blurb: "Blossom-viewing picnics that follow the sakura front north across the islands.", image: img("hanami", 900, 700) },
  { slug: "homowo", name: "Homowo", country: "Ghana", countrySlug: "ghana", region: "Africa", month: "August", dates: "Aug", monthIndex: 7, type: "Harvest", blurb: "The Ga harvest festival that 'hoots at hunger' with kpokpoi and drumming.", image: img("homowo", 900, 700) },
  { slug: "dia-de-muertos", name: "Día de Muertos", country: "Mexico", countrySlug: "mexico", region: "Americas", month: "November", dates: "1–2 Nov", monthIndex: 10, type: "Remembrance", blurb: "Marigold paths and altars guiding ancestors home for one night of company.", image: img("muertos", 900, 700) },
  { slug: "loy-krathong", name: "Loy Krathong", country: "Thailand", countrySlug: "thailand", region: "Asia", month: "November", dates: "Full moon, Nov", monthIndex: 10, type: "Light", blurb: "Thousands of candlelit floats released onto rivers at the November full moon.", image: img("krathong", 900, 700) },
  { slug: "diwali", name: "Diwali", country: "India", countrySlug: "india", region: "Asia", month: "October", dates: "Oct–Nov", monthIndex: 9, type: "Light", blurb: "Rows of oil lamps, sweets by the tray, and light chosen over dark.", image: img("diwali", 900, 700) },
  { slug: "carnevale", name: "Carnevale di Venezia", country: "Italy", countrySlug: "italy", region: "Europe", month: "February", dates: "Feb", monthIndex: 1, type: "Carnival", blurb: "Masked promenades through a city built for disguise.", image: img("carnevale", 900, 700) },
  { slug: "carnaval-rio", name: "Carnaval", country: "Brazil", countrySlug: "brazil", region: "Americas", month: "February", dates: "Feb–Mar", monthIndex: 1, type: "Carnival", blurb: "A year of samba-school work spent in one thunderous parade.", image: img("carnaval", 900, 700) },
];

export type Story = {
  slug: string;
  title: string;
  kicker: string;
  region: string;
  country: string;
  read: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const stories: Story[] = [
  {
    slug: "west-african-textiles",
    title: "The language of pattern: stories woven into West African textiles",
    kicker: "Culture of the day",
    region: "Africa",
    country: "Ghana",
    read: "6 min read",
    excerpt: "Every kente strip carries a name, and every name carries an argument about how to live.",
    image: img("kente", 1400, 900),
    body: [
      "In Bonwire, the loom is narrow — barely a hand's width — and the cloth grows one strip at a time. Weavers give each pattern a name before they give it to a buyer.",
      "Adinkra symbols do similar work on stamped cloth: a ram's horns for humility in strength, a ladder for the shared inevitability of death.",
      "Read together, textile becomes a public archive: proverbs you can wear, arguments you can drape over a shoulder.",
    ],
  },
  {
    slug: "japanese-tea",
    title: "The art of Japanese tea",
    kicker: "Rituals",
    region: "Asia",
    country: "Japan",
    read: "5 min read",
    excerpt: "A closer look at the everyday moments that carry a culture forward.",
    image: img("tea-ceremony", 1400, 900),
    body: [
      "Chadō is often described as a tea ceremony, but practitioners call it a way — a discipline of preparation, hospitality and attention.",
      "The host sweeps a path, chooses a scroll for the season, and heats water in a kettle chosen for the sound it makes.",
      "Nothing in the room is accidental, and that is precisely the lesson.",
    ],
  },
  {
    slug: "weaving-oaxaca",
    title: "Weaving stories in Oaxaca",
    kicker: "Craft",
    region: "Americas",
    country: "Mexico",
    read: "7 min read",
    excerpt: "Cochineal red, indigo blue, and the families who still grind their own dye.",
    image: img("oaxaca", 1400, 900),
    body: [
      "In Teotitlán del Valle, wool is washed in the river, spun by hand and dyed with insects and plants gathered nearby.",
      "Patterns borrow from Zapotec temple carvings a few kilometres away, making the rug a portable ruin.",
      "Younger weavers now sell directly online, keeping the margin — and the story — at home.",
    ],
  },
  {
    slug: "sunday-lunch-italy",
    title: "Sunday lunch in Italy",
    kicker: "Gatherings",
    region: "Europe",
    country: "Italy",
    read: "4 min read",
    excerpt: "Four generations, five courses, and no reason to leave the table.",
    image: img("italian-lunch", 1400, 900),
    body: [
      "Pranzo della domenica begins late and ends later. The menu is fixed by family precedent rather than fashion.",
      "Children learn the order of courses before they learn to read a menu.",
      "The ritual survives because it is not really about the food.",
    ],
  },
  {
    slug: "nowruz-table",
    title: "Seven things on a Nowruz table",
    kicker: "Traditions",
    region: "Asia",
    country: "Iran",
    read: "5 min read",
    excerpt: "Sprouted wheat, vinegar, garlic — a grammar of renewal set out every spring.",
    image: img("haftsin", 1400, 900),
    body: [
      "The haft-sin spread gathers seven items beginning with the Persian letter sin, each standing for a wish.",
      "Sabzeh, sprouted greens grown at home in the weeks before, is the one everyone remembers.",
      "Thirteen days later the greens are released into running water, carrying the year's bad luck away.",
    ],
  },
  {
    slug: "songkran-water",
    title: "Why Songkran begins with a bowl of water",
    kicker: "Festivals",
    region: "Asia",
    country: "Thailand",
    read: "6 min read",
    excerpt: "Before the water fights, there is a quiet gesture of respect toward elders.",
    image: img("songkran-water", 1400, 900),
    body: [
      "Rot nam dam hua: scented water poured gently over the palms of grandparents, asking their blessing.",
      "Only afterwards do the streets fill with buckets, hoses and pickup trucks full of ice water.",
      "The reverence and the riot are the same festival.",
    ],
  },
];

export const traditionCards = countries.flatMap((c) =>
  c.traditions.map((t) => ({
    ...t,
    country: c.name,
    countrySlug: c.slug,
    region: c.region,
    image: img(`${c.slug}-${t.title.replace(/\s+/g, "")}`, 800, 600),
  })),
);

export const regions = ["Africa", "Americas", "Asia", "Europe"] as const;
export const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
