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
  imageAttribution: string;
  colors: string;
  x: number;
  y: number;
  traditions: { title: string; text: string; image: string; attribution: string }[];
  dishes: { name: string; note: string; image: string; attribution: string }[];
  festivals: string[];
};

const img = (seed: string, w = 1200, h = 800) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

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
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Indian_folk_culture_204.jpg",
    imageAttribution: "Wikimedia Commons",
    colors: "from-saffron/70 to-jade/60",
    x: 68,
    y: 52,
    traditions: [
      {
        title: "Rangoli",
        text: "Doorstep floor art drawn in rice flour and petals to welcome guests and good fortune.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/86/A_Beautiful_Rangoli.jpg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Mehndi",
        text: "Henna patterns applied before weddings and festivals, each region with its own vocabulary of motifs.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Mehndi.jpg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Namaste",
        text: "Palms joined at the heart — a greeting that acknowledges the person, not the hand.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/09/Bride_offering_her_respects_to_God_through_a_traditional_gesture_known_as_Namaskaram_%2801%29-1.jpg",
        attribution: "Wikimedia Commons",
      },
    ],
    dishes: [
      {
        name: "Masala Dosa",
        note: "Fermented rice crepe, South Indian breakfast staple",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Masala_dosa_01.jpg",
        attribution: "CC BY-SA 3.0",
      },
      {
        name: "Rogan Josh",
        note: "Slow-braised Kashmiri lamb curry",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Rogan_Josh_Kashmiri.jpg",
        attribution: "CC BY-SA 3.0",
      },
      {
        name: "Gulab Jamun",
        note: "Milk dumplings soaked in rose syrup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/58/Two_Gulab_Jamun_in_a_plate_01.jpg",
        attribution: "CC BY-SA 3.0",
      },
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/79/Traditional_indigenous_clothing_of_Mexico.jpg",
    imageAttribution: "Wikimedia Commons",
    colors: "from-primary/70 to-saffron/60",
    x: 20,
    y: 47,
    traditions: [
      {
        title: "Ofrendas",
        text: "Home altars layered with marigolds, photographs and favourite foods of the departed.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/80/Ofrenda_D%C3%ADa_de_Muertos_2014.jpg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Backstrap weaving",
        text: "Oaxacan weavers work dyes from cochineal and indigo on looms tied to their bodies.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/fd/Woman_on_a_backstrap_loom_in_Oaxaca.jpg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Mariachi",
        text: "A string-and-brass ensemble whose songs narrate love, land and loss.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/eb/Wikipedia_10_Guadalajara_-_Mariachi.jpg",
        attribution: "Wikimedia Commons",
      },
    ],
    dishes: [
      {
        name: "Mole Negro",
        note: "Over 30 ingredients, hours of patience",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/59/Mole_negro_de_Oaxaca_con_arroz.jpg",
        attribution: "CC BY-SA 3.0",
      },
      {
        name: "Tlayudas",
        note: "Oaxacan griddled corn flatbread",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/82/TLAYUDA.jpg",
        attribution: "CC BY-SA 3.0",
      },
      {
        name: "Pan de Muerto",
        note: "Sweet bread baked for Day of the Dead",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Entrega_de_pan_de_muerto_2991_%2846061194481%29.jpg",
        attribution: "CC BY-SA 2.0",
      },
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wooden_footbridge_in_Shinjuku_Gyoen_National_Garden%2C_Tokyo%2C_Japan%2C_a_sunny_day_with_blue_sky.jpg",
    imageAttribution: "Wikimedia Commons",
    colors: "from-primary/60 to-indigoo/40",
    x: 82,
    y: 44,
    traditions: [
      {
        title: "Chadō",
        text: "The way of tea — a choreographed hour built on hospitality and restraint.",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Japan_tea_ceremony_1165.jpg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Hanami",
        text: "Picnicking under sakura, a national appointment with impermanence.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/1e/April_2009%2C_hanami_in_Ueno_Park_-91288.jpeg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Kintsugi",
        text: "Repairing broken ceramics with gold so the break becomes the history.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0e/Kintsugi_on_broken_Ky%C5%ABsu_lid-bottom_PNr%C2%B01259.jpg",
        attribution: "Wikimedia Commons",
      },
    ],
    dishes: [
      {
        name: "Kaiseki",
        note: "Seasonal multi-course meal",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Jisaku_Kaiseki_Ryori_01.jpg",
        attribution: "CC BY-SA 3.0",
      },
      {
        name: "Ramen",
        note: "Regional broths from tonkotsu to shio",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Ramen_4.jpg",
        attribution: "CC BY 2.5",
      },
      {
        name: "Wagashi",
        note: "Sweets shaped after the season",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/35/Wagashi_and_matcha_by_Noriko_Jazayeri_2025-05-18.jpg",
        attribution: "CC0",
      },
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
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Ghana_culture.jpg",
    imageAttribution: "Wikimedia Commons",
    colors: "from-saffron/70 to-primary/50",
    x: 45,
    y: 58,
    traditions: [
      {
        title: "Kente weaving",
        text: "Narrow strips woven on Ashanti looms, each pattern with a name and meaning.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Kente_weaving_06.jpg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Adinkra",
        text: "Stamped symbols encoding proverbs about wisdom, unity and endurance.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Gyaman_Adinkra_Symbols.jpg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Talking drums",
        text: "Pitch-bent drums that mimic the tones of spoken Twi.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/93/Talking_drum_%28tama%29player.jpg",
        attribution: "Wikimedia Commons",
      },
    ],
    dishes: [
      {
        name: "Jollof Rice",
        note: "Tomato-based one-pot, endlessly debated",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/fa/Ghana_Jollof_Rice_with_Chicken.jpg",
        attribution: "CC BY-SA 3.0",
      },
      {
        name: "Waakye",
        note: "Rice and beans cooked with sorghum leaves",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Waakye_in_Ghana.jpg",
        attribution: "CC BY-SA 4.0",
      },
      {
        name: "Kelewele",
        note: "Spiced fried plantain street snack",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Kelewele.jpg",
        attribution: "CC BY-SA 3.0",
      },
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Italian_Countryside_Between_Florence_and_Assisi_%2810582608963%29.jpg",
    imageAttribution: "Wikimedia Commons",
    colors: "from-jade/60 to-primary/50",
    x: 51,
    y: 40,
    traditions: [
      {
        title: "Pranzo della domenica",
        text: "The long Sunday lunch, four generations and no hurry.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/9e/Lunch_of_a_neapolitan_peasant_family_-_Celestin_Joseph_Blanc_%281818_%E2%80%93_1888%2C_French%29.jpg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Passeggiata",
        text: "The evening stroll — seeing and being seen in the piazza.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/63/Women_walking_across_the_Piazza_San_Babila%2C_Milan%2C_in_late_afternoon.jpg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Carnevale masks",
        text: "Venetian papier-mâché craft passed through workshop families.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Photo_of_a_venetian_mask_in_a_studio_photo_session.jpg",
        attribution: "Wikimedia Commons",
      },
    ],
    dishes: [
      {
        name: "Cacio e Pepe",
        note: "Three ingredients, zero forgiveness",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Cacio_e_pepe.jpg",
        attribution: "CC BY-SA 3.0",
      },
      {
        name: "Ragù alla Bolognese",
        note: "Simmered for an afternoon",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/ae/Spaghetti_Bolognese_-_Figaros%2C_Brighton_2023-10-06.jpg",
        attribution: "CC BY-SA 4.0",
      },
      {
        name: "Sfogliatella",
        note: "Neapolitan shell pastry",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Sfogliatella_Santarosa.jpg",
        attribution: "CC BY-SA 3.0",
      },
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Iranian_family%2Cgathered_together_wearing_traditional_clothes_-_Nishapur_-_Nowruz2014.JPG",
    imageAttribution: "Wikimedia Commons",
    colors: "from-indigoo/50 to-jade/50",
    x: 61,
    y: 45,
    traditions: [
      {
        title: "Haft-sin",
        text: "Seven symbolic items set on the Nowruz table for renewal and health.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Iranian_New_Year_Haft_Sin.jpg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Sofreh carpets",
        text: "Knotted rugs whose garden patterns imagine paradise indoors.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/3b/Detail%2C_Persian_Carpet_%284737195034%29.jpg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Shab-e Yalda",
        text: "The longest night spent reading Hafez with pomegranates and nuts.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Yalda_night_1396_or_2017.jpg",
        attribution: "Wikimedia Commons",
      },
    ],
    dishes: [
      {
        name: "Ghormeh Sabzi",
        note: "Herb and lamb stew with dried lime",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Ghormeh_Sabzi.JPG",
        attribution: "CC BY-SA 3.0",
      },
      {
        name: "Tahchin",
        note: "Saffron rice cake with a crisp crust",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Tahchin_Persian_Food.jpg",
        attribution: "CC BY-SA 3.0",
      },
      {
        name: "Faloodeh",
        note: "Rose and vermicelli iced dessert",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Faloodeh1.jpg",
        attribution: "CC BY-SA 3.0",
      },
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Landscape_Near_Brasilia%2C_Brazil_%2849658910198%29.png",
    imageAttribution: "Wikimedia Commons",
    colors: "from-jade/70 to-saffron/60",
    x: 30,
    y: 66,
    traditions: [
      {
        title: "Samba schools",
        text: "Neighbourhood collectives who spend a year building one parade.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0a/20230121_Festival_de_Samba_Enredo_e_Bateria_7.jpg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Capoeira",
        text: "A martial art disguised as dance, born of resistance.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/51/CapoeiraEarle_02.JPG",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Festa Junina",
        text: "Rural winter festivals with quadrilha dancing and corn everything.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/95/Festa_Junina_%289062891212%29.jpg",
        attribution: "Wikimedia Commons",
      },
    ],
    dishes: [
      {
        name: "Feijoada",
        note: "Black bean and pork stew, Saturday ritual",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Feijoada_01.jpg",
        attribution: "CC BY-SA 3.0",
      },
      {
        name: "Acarajé",
        note: "Bahian black-eyed pea fritters",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Acaraje-Baiana.jpg",
        attribution: "CC BY-SA 3.0",
      },
      {
        name: "Brigadeiro",
        note: "Chocolate fudge balls at every party",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Brigadeiro.jpg",
        attribution: "CC BY-SA 3.0",
      },
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Traditional_Fishing_Culture_-_Thailand.jpg",
    imageAttribution: "Wikimedia Commons",
    colors: "from-primary/60 to-saffron/60",
    x: 75,
    y: 57,
    traditions: [
      {
        title: "Wai",
        text: "A bow with joined palms, its height calibrated to respect.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c6/Portrait_photograph_at_bust_length_of_three_Lao_girls_joining_their_palms_for_the_Thai_greeting%2C_front_view%2C_in_Don_Khon%2C_Laos.jpg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Krathong floats",
        text: "Banana-leaf boats set adrift with candles to release the year's misfortune.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Loy_Krathong_2_2008_179.jpg",
        attribution: "Wikimedia Commons",
      },
      {
        title: "Fruit carving",
        text: "Royal-court craft turning melons into blossoms.",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Thai_fruit_carving.jpg",
        attribution: "Wikimedia Commons",
      },
    ],
    dishes: [
      {
        name: "Som Tam",
        note: "Green papaya salad pounded to order",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Lao_green_papaya_salad.jpg",
        attribution: "CC BY-SA 3.0",
      },
      {
        name: "Khao Soi",
        note: "Northern coconut curry noodles",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Khao_soi_Chiang_Mai.jpg",
        attribution: "CC BY 3.0",
      },
      {
        name: "Mango Sticky Rice",
        note: "Coconut rice with ripe mango",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/75/Mango_sticky_rice_served_in_Thailand.jpg",
        attribution: "CC BY-SA 4.0",
      },
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
  attribution: string;
};

export const festivals: Festival[] = [
  {
    slug: "nowruz",
    name: "Nowruz",
    country: "Iran & Central Asia",
    countrySlug: "iran",
    region: "Asia",
    month: "March",
    dates: "21 Mar",
    monthIndex: 2,
    type: "New Year",
    blurb: "The Persian new year, timed to the vernal equinox and celebrated across 12 countries.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Iranian_New_Year_Festival_%28Nowruz%29_Celebration_in_BSBI.jpg",
    attribution: "Wikimedia Commons",
  },
  {
    slug: "holi",
    name: "Holi Festival",
    country: "India",
    countrySlug: "india",
    region: "Asia",
    month: "March",
    dates: "03–14 Mar",
    monthIndex: 2,
    type: "Spring",
    blurb: "Colour thrown by the handful to mark the end of winter and the forgiving of grudges.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Festival_of_color-Holi_060315_MG_38510279.jpg",
    attribution: "Wikimedia Commons",
  },
  {
    slug: "songkran",
    name: "Songkran",
    country: "Thailand",
    countrySlug: "thailand",
    region: "Asia",
    month: "April",
    dates: "13–15 Apr",
    monthIndex: 3,
    type: "New Year",
    blurb: "Thai new year, washed in by the world's largest water fight.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Grand_songkran_%28Thai_New_Year_%29_Water_Festival.jpg",
    attribution: "Wikimedia Commons",
  },
  {
    slug: "hanami",
    name: "Hanami",
    country: "Japan",
    countrySlug: "japan",
    region: "Asia",
    month: "April",
    dates: "Late Mar–Apr",
    monthIndex: 3,
    type: "Seasonal",
    blurb: "Blossom-viewing picnics that follow the sakura front north across the islands.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/April_2009%2C_hanami_in_Ueno_Park_-91288.jpeg",
    attribution: "Wikimedia Commons",
  },
  {
    slug: "homowo",
    name: "Homowo",
    country: "Ghana",
    countrySlug: "ghana",
    region: "Africa",
    month: "August",
    dates: "Aug",
    monthIndex: 7,
    type: "Harvest",
    blurb: "The Ga harvest festival that 'hoots at hunger' with kpokpoi and drumming.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/Image_from_Homowo_Festival_in_Ghana.jpg",
    attribution: "Wikimedia Commons",
  },
  {
    slug: "dia-de-muertos",
    name: "Día de Muertos",
    country: "Mexico",
    countrySlug: "mexico",
    region: "Americas",
    month: "November",
    dates: "1–2 Nov",
    monthIndex: 10,
    type: "Remembrance",
    blurb: "Marigold paths and altars guiding ancestors home for one night of company.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Ofrenda_D%C3%ADa_de_Muertos_2014.jpg",
    attribution: "Wikimedia Commons",
  },
  {
    slug: "loy-krathong",
    name: "Loy Krathong",
    country: "Thailand",
    countrySlug: "thailand",
    region: "Asia",
    month: "November",
    dates: "Full moon, Nov",
    monthIndex: 10,
    type: "Light",
    blurb: "Thousands of candlelit floats released onto rivers at the November full moon.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Loy_Krathong_2008_DSC01084e.jpg",
    attribution: "Wikimedia Commons",
  },
  {
    slug: "diwali",
    name: "Diwali",
    country: "India",
    countrySlug: "india",
    region: "Asia",
    month: "October",
    dates: "Oct–Nov",
    monthIndex: 9,
    type: "Light",
    blurb: "Rows of oil lamps, sweets by the tray, and light chosen over dark.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Diwali%2C_the_festival_of_lights.jpg",
    attribution: "Wikimedia Commons",
  },
  {
    slug: "carnevale",
    name: "Carnevale di Venezia",
    country: "Italy",
    countrySlug: "italy",
    region: "Europe",
    month: "February",
    dates: "Feb",
    monthIndex: 1,
    type: "Carnival",
    blurb: "Masked promenades through a city built for disguise.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Venetian_Carnival_Mask_-_Maschera_di_Carnevale_-_Venice_Italy_-_Creative_Commons_by_gnuckx_%284821060456%29.jpg",
    attribution: "Wikimedia Commons",
  },
  {
    slug: "carnaval-rio",
    name: "Carnaval",
    country: "Brazil",
    countrySlug: "brazil",
    region: "Americas",
    month: "February",
    dates: "Feb–Mar",
    monthIndex: 1,
    type: "Carnival",
    blurb: "A year of samba-school work spent in one thunderous parade.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Porto_da_Pedra_-_Special_Samba_School_Parade_-_Rio_Carnaval_2012_37_%287024157947%29.jpg",
    attribution: "Wikimedia Commons",
  },
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
  attribution: string;
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
    excerpt:
      "Every kente strip carries a name, and every name carries an argument about how to live.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/A_woman_Weaving_the_Kente_cloth_in_Sirigu%28upper_east_of_Ghana%29.jpg",
    attribution: "Wikimedia Commons",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Chawan.jpg",
    attribution: "Wikimedia Commons",
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Woman_on_a_backstrap_loom_in_Oaxaca.jpg",
    attribution: "Wikimedia Commons",
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Lunch_of_a_neapolitan_peasant_family_-_Celestin_Joseph_Blanc_%281818_%E2%80%93_1888%2C_French%29.jpg",
    attribution: "Wikimedia Commons",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Haft-sin_table.jpg",
    attribution: "Wikimedia Commons",
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Chiang-Mai_Thailand_Songkran-Festival-2017-03.jpg",
    attribution: "Wikimedia Commons",
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
  })),
);

export const regions = ["Africa", "Americas", "Asia", "Europe"] as const;
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
