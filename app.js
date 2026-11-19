/* GERMANAUTO — Premium Ecosystem Interactive Engine (Vanilla JS, no build step) */

/* ==========================================================================
   1. PRODUCT DATA (expanded with compatibility + OEM↔analog links)
   ========================================================================== */
const PRODUCTS_DATA = [
    {
        id: "p1",
        art: "8E0 615 301 A",
        oemArt: "8E0 615 301 A",
        analogArt: "8E0615301A-B",
        title: "Тормозной диск вентилируемый передний High Carbon",
        brand: "VAG (Audi)",
        category: "brakes",
        type: "oem",
        price: 8450,
        stock: "in",
        stockText: "В наличии на складе (Москва)",
        delivery: "Сегодня",
        rating: 4.9,
        reviews: 42,
        makes: ["Audi", "Volkswagen"],
        compatibleCars: ["Audi A4 B8 (2007-2015)", "Audi A4 B9 (2015-2023)", "Audi A6 C7 (2011-2018)", "Audi A6 C8 (2018-2024)", "VW Golf 7 (2012-2020)", "VW Passat B8 (2014-2024)"],
        analogs: ["p7", "p13"]
    },
    {
        id: "p2",
        art: "0 986 479 042",
        oemArt: "0 986 479 042",
        analogArt: "BOSCH-479042",
        title: "Тормозной диск серии Premium Ceramic",
        brand: "Bosch",
        category: "brakes",
        type: "analog",
        price: 4890,
        stock: "in",
        stockText: "Под заказ (1 день)",
        delivery: "Завтра",
        rating: 4.7,
        reviews: 28,
        makes: ["Audi", "BMW", "Mercedes-Benz"],
        compatibleCars: ["Audi A4 B8", "Audi A6 C7", "BMW 3 Series E90", "BMW 5 Series F10", "Mercedes C-Class W204"],
        analogs: ["p1"]
    },
    {
        id: "p3",
        art: "12 12 0 037 582",
        oemArt: "12 12 0 037 582",
        analogArt: "BMW-12120037582",
        title: "Свеча зажигания High Power Platinum Quad-Ground",
        brand: "BMW Group",
        category: "engine",
        type: "oem",
        price: 1950,
        stock: "in",
        stockText: "В наличии (48 шт.)",
        delivery: "Сегодня",
        rating: 5.0,
        reviews: 64,
        makes: ["BMW"],
        compatibleCars: ["BMW 3 Series E90/E92", "BMW 3 Series F30", "BMW 5 Series E60", "BMW 5 Series F10", "BMW X5 E70"],
        analogs: ["p14", "p15"]
    },
    {
        id: "p4",
        art: "A 271 050 01 11",
        oemArt: "A 271 050 01 11",
        analogArt: "MB-2710500111",
        title: "Комплект цепи ГРМ с шестернями и натяжителем",
        brand: "Mercedes-Benz Genuine",
        category: "engine",
        type: "oem",
        price: 34200,
        stock: "in",
        stockText: "В наличии на складе",
        delivery: "Сегодня",
        rating: 4.8,
        reviews: 19,
        makes: ["Mercedes-Benz"],
        compatibleCars: ["Mercedes C-Class W204", "Mercedes E-Class W212", "Mercedes E-Class W213", "Mercedes S-Class W222"],
        analogs: ["p16"]
    },
    {
        id: "p5",
        art: "55573746-MANN",
        oemArt: "W 719/30",
        analogArt: "MANN-55573746",
        title: "Фильтр масляный картриджного типа синтетика",
        brand: "MANN-FILTER",
        category: "filters",
        type: "analog",
        price: 1280,
        stock: "in",
        stockText: "В наличии (Более 100 шт.)",
        delivery: "Сегодня",
        rating: 4.9,
        reviews: 112,
        makes: ["Audi", "BMW", "Mercedes-Benz", "Porsche", "Volkswagen"],
        compatibleCars: ["Audi A4 B8", "Audi A6 C7", "BMW 3 Series F30", "BMW 5 Series G30", "Mercedes C-Class W205", "Porsche 911 991", "VW Golf 7"],
        analogs: []
    },
    {
        id: "p6",
        art: "313 367 010",
        oemArt: "313 367 010",
        analogArt: "SACHS-313367010",
        title: "Амортизатор передний газомасляный M-Tech",
        brand: "Sachs Performance",
        category: "chassis",
        type: "analog",
        price: 11600,
        stock: "in",
        stockText: "В наличии на складе",
        delivery: "Сегодня",
        rating: 4.8,
        reviews: 35,
        makes: ["BMW"],
        compatibleCars: ["BMW 3 Series E90", "BMW 3 Series F30", "BMW 5 Series E60", "BMW 5 Series F10"],
        analogs: []
    },
    {
        id: "p7",
        art: "971 615 301 B",
        oemArt: "971 615 301 B",
        analogArt: "BREMBO-971615301B",
        title: "Комплект тормозных колодок Ceramic Performance",
        brand: "Brembo",
        category: "brakes",
        type: "analog",
        price: 14200,
        stock: "order",
        stockText: "Под заказ (2 дня)",
        delivery: "Послезавтра",
        rating: 4.9,
        reviews: 51,
        makes: ["Porsche", "Audi"],
        compatibleCars: ["Porsche 911 991", "Porsche 911 992", "Porsche Cayenne 92A", "Audi Q5 8R", "Audi Q7 4L"],
        analogs: ["p1"]
    },
    {
        id: "p8",
        art: "8K0 407 505 N",
        oemArt: "8K0 407 505 N",
        analogArt: "MEYLE-8K0407505N",
        title: "Рычаг передней подвески верхний левый HD",
        brand: "Meyle HD",
        category: "chassis",
        type: "analog",
        price: 5400,
        stock: "in",
        stockText: "В наличии",
        delivery: "Сегодня",
        rating: 4.6,
        reviews: 23,
        makes: ["Audi"],
        compatibleCars: ["Audi A4 B8", "Audi A4 B9", "Audi A6 C7", "Audi A6 C8"],
        analogs: []
    },
    {
        id: "p9",
        art: "A 000 989 92 02",
        oemArt: "A 000 989 92 02",
        analogArt: "MB-0009899202",
        title: "Масло трансмиссионное ATF MB 236.14 (5л)",
        brand: "Mercedes-Benz Genuine",
        category: "fluids",
        type: "oem",
        price: 9800,
        stock: "in",
        stockText: "В наличии",
        delivery: "Сегодня",
        rating: 5.0,
        reviews: 88,
        makes: ["Mercedes-Benz"],
        compatibleCars: ["Mercedes C-Class W204", "Mercedes E-Class W212", "Mercedes S-Class W222", "Mercedes GLE W166"],
        analogs: []
    },
    {
        id: "p10",
        art: "C30005-MANN",
        oemArt: "C 30 005",
        analogArt: "MANN-C30005",
        title: "Фильтр воздушный двигательного отсека High Flow",
        brand: "MANN-FILTER",
        category: "filters",
        type: "analog",
        price: 2150,
        stock: "in",
        stockText: "В наличии",
        delivery: "Сегодня",
        rating: 4.9,
        reviews: 77,
        makes: ["Audi", "Volkswagen"],
        compatibleCars: ["Audi A4 B8", "Audi A4 B9", "VW Golf 6", "VW Golf 7", "VW Passat B7"],
        analogs: []
    },
    {
        id: "p11",
        art: "63 11 7 419 630",
        oemArt: "63 11 7 419 630",
        analogArt: "BMW-63117419630",
        title: "Светодиодный модуль фара Adaptive LED Front Right",
        brand: "BMW Group",
        category: "optics",
        type: "oem",
        price: 78500,
        stock: "order",
        stockText: "Под заказ (1-2 дня)",
        delivery: "Завтра",
        rating: 5.0,
        reviews: 14,
        makes: ["BMW"],
        compatibleCars: ["BMW 3 Series F30", "BMW 3 Series G20", "BMW 5 Series G30", "BMW M5 F90"],
        analogs: []
    },
    {
        id: "p12",
        art: "1K0 959 263 A",
        oemArt: "1K0 959 263 A",
        analogArt: "VAG-1K0959263A",
        title: "Резистор вентилятора отопителя салона",
        brand: "VAG (Audi)",
        category: "electrical",
        type: "oem",
        price: 3600,
        stock: "in",
        stockText: "В наличии",
        delivery: "Сегодня",
        rating: 4.7,
        reviews: 16,
        makes: ["Audi", "Volkswagen"],
        compatibleCars: ["Audi A4 B8", "Audi A6 C7", "VW Golf 6", "VW Golf 7", "VW Passat B7"],
        analogs: []
    },
    {
        id: "p13",
        art: "8E0 615 301 A-B",
        oemArt: "8E0 615 301 A",
        analogArt: "BREMBO-8E0615301AB",
        title: "Тормозной диск вентилируемый передний (аналог Brembo)",
        brand: "Brembo",
        category: "brakes",
        type: "analog",
        price: 6200,
        stock: "in",
        stockText: "В наличии на складе",
        delivery: "Сегодня",
        rating: 4.8,
        reviews: 31,
        makes: ["Audi", "Volkswagen"],
        compatibleCars: ["Audi A4 B8 (2007-2015)", "Audi A4 B9 (2015-2023)", "VW Golf 7 (2012-2020)", "VW Passat B8 (2014-2024)"],
        analogs: ["p1"]
    },
    {
        id: "p14",
        art: "12 12 0 037 582-A",
        oemArt: "12 12 0 037 582",
        analogArt: "NGK-12120037582A",
        title: "Свеча зажигания платиновая (аналог NGK)",
        brand: "NGK",
        category: "engine",
        type: "analog",
        price: 1100,
        stock: "in",
        stockText: "В наличии (120 шт.)",
        delivery: "Сегодня",
        rating: 4.7,
        reviews: 89,
        makes: ["BMW"],
        compatibleCars: ["BMW 3 Series E90/E92", "BMW 3 Series F30", "BMW 5 Series E60", "BMW 5 Series F10"],
        analogs: ["p3"]
    },
    {
        id: "p15",
        art: "12 12 0 037 582-B",
        oemArt: "12 12 0 037 582",
        analogArt: "BOSCH-12120037582B",
        title: "Свеча зажигания иридиевая (аналог Bosch)",
        brand: "Bosch",
        category: "engine",
        type: "analog",
        price: 1450,
        stock: "in",
        stockText: "В наличии (60 шт.)",
        delivery: "Завтра",
        rating: 4.8,
        reviews: 53,
        makes: ["BMW"],
        compatibleCars: ["BMW 3 Series E90/E92", "BMW 3 Series F30", "BMW 5 Series E60"],
        analogs: ["p3"]
    },
    {
        id: "p16",
        art: "A 271 050 01 11-A",
        oemArt: "A 271 050 01 11",
        analogArt: "GATES-MB2710500111",
        title: "Комплект цепи ГРМ (аналог Gates)",
        brand: "Gates",
        category: "engine",
        type: "analog",
        price: 18900,
        stock: "in",
        stockText: "В наличии",
        delivery: "Сегодня",
        rating: 4.6,
        reviews: 27,
        makes: ["Mercedes-Benz"],
        compatibleCars: ["Mercedes C-Class W204", "Mercedes E-Class W212", "Mercedes E-Class W213"],
        analogs: ["p4"]
    },
    {
        id: "p17",
        art: "W 719/30",
        oemArt: "W 719/30",
        analogArt: "MANN-W71930",
        title: "Фильтр масляный MANN-FILTER W 719/30",
        brand: "MANN-FILTER",
        category: "filters",
        type: "oem",
        price: 1450,
        stock: "in",
        stockText: "В наличии (200 шт.)",
        delivery: "Сегодня",
        rating: 4.9,
        reviews: 156,
        makes: ["Audi", "BMW", "Mercedes-Benz", "Porsche", "Volkswagen"],
        compatibleCars: ["Audi A4 B8", "Audi A6 C7", "BMW 3 Series F30", "BMW 5 Series G30", "Mercedes C-Class W205", "Porsche 911 991", "VW Golf 7"],
        analogs: ["p5"]
    },
    {
        id: "p18",
        art: "A 000 989 92 02-A",
        oemArt: "A 000 989 92 02",
        analogArt: "FUCHS-MB0009899202",
        title: "Масло АТФ для коробки передач Mercedes (аналог Fuchs)",
        brand: "Fuchs",
        category: "fluids",
        type: "analog",
        price: 6400,
        stock: "in",
        stockText: "В наличии",
        delivery: "Сегодня",
        rating: 4.7,
        reviews: 44,
        makes: ["Mercedes-Benz"],
        compatibleCars: ["Mercedes C-Class W204", "Mercedes E-Class W212", "Mercedes S-Class W222"],
        analogs: ["p9"]
    },
    {
        id: "p19",
        art: "63 11 7 419 630-A",
        oemArt: "63 11 7 419 630",
        analogArt: "TYC-BMW63117419630",
        title: "Модуль фона Adaptive LED правый (аналог TYC)",
        brand: "TYC",
        category: "optics",
        type: "analog",
        price: 42500,
        stock: "order",
        stockText: "Под заказ (3 дня)",
        delivery: "Послезавтра",
        rating: 4.5,
        reviews: 18,
        makes: ["BMW"],
        compatibleCars: ["BMW 3 Series F30", "BMW 3 Series G20", "BMW 5 Series G30"],
        analogs: ["p11"]
    },
    {
        id: "p20",
        art: "1K0 959 263 A-A",
        oemArt: "1K0 959 263 A",
        analogArt: "HELLA-1K0959263AA",
        title: "Резистор вентилятора печки (аналог Hella)",
        brand: "Hella",
        category: "electrical",
        type: "analog",
        price: 2100,
        stock: "in",
        stockText: "В наличии",
        delivery: "Сегодня",
        rating: 4.6,
        reviews: 39,
        makes: ["Audi", "Volkswagen"],
        compatibleCars: ["Audi A4 B8", "Audi A6 C7", "VW Golf 6", "VW Golf 7"],
        analogs: ["p12"]
    },
    {
        id: "p21",
        art: "313 367 010-OEM",
        oemArt: "313 367 010",
        analogArt: "SACHS-OEM313367010",
        title: "Амортизатор передний газомасляный (OEM Sachs)",
        brand: "Sachs",
        category: "chassis",
        type: "oem",
        price: 13500,
        stock: "in",
        stockText: "В наличии",
        delivery: "Сегодня",
        rating: 4.9,
        reviews: 41,
        makes: ["BMW"],
        compatibleCars: ["BMW 3 Series E90", "BMW 3 Series F30", "BMW 5 Series E60", "BMW 5 Series F10"],
        analogs: ["p6"]
    },
    {
        id: "p22",
        art: "971 615 301 B-OEM",
        oemArt: "971 615 301 B",
        analogArt: "TEXTAR-971615301B",
        title: "Тормозные колодки керамические (аналог Textar)",
        brand: "Textar",
        category: "brakes",
        type: "analog",
        price: 9800,
        stock: "in",
        stockText: "В наличии",
        delivery: "Сегодня",
        rating: 4.7,
        reviews: 62,
        makes: ["Porsche", "Audi"],
        compatibleCars: ["Porsche 911 991", "Porsche Cayenne 92A", "Audi Q5 8R", "Audi Q7 4L"],
        analogs: ["p7"]
    },
    {
        id: "p23",
        art: "A 271 050 01 11-B",
        oemArt: "A 271 050 01 11",
        analogArt: "IKAYO-MB2710500111",
        title: "Цепь ГРМ с натяжителем (аналог Ikayo)",
        brand: "Ikayo",
        category: "engine",
        type: "analog",
        price: 12400,
        stock: "order",
        stockText: "Под заказ (2 дня)",
        delivery: "Завтра",
        rating: 4.4,
        reviews: 21,
        makes: ["Mercedes-Benz"],
        compatibleCars: ["Mercedes C-Class W204", "Mercedes E-Class W212"],
        analogs: ["p4"]
    },
    {
        id: "p24",
        art: "C30005-MANN-OEM",
        oemArt: "C 30 005",
        analogArt: "MANN-C30005-OEM",
        title: "Фильтр воздушный MANN-FILTER C 30 005 (OEM)",
        brand: "MANN-FILTER",
        category: "filters",
        type: "oem",
        price: 2600,
        stock: "in",
        stockText: "В наличии",
        delivery: "Сегодня",
        rating: 4.9,
        reviews: 103,
        makes: ["Audi", "Volkswagen"],
        compatibleCars: ["Audi A4 B8", "Audi A4 B9", "VW Golf 6", "VW Golf 7", "VW Passat B7"],
        analogs: ["p10"]
    }
];

/* ==========================================================================
   2. CAR DATA (make -> model -> generations)
   ========================================================================== */
const CAR_DATA = {
    "Audi": {
        "A4": ["B8 (2007-2015)", "B9 (2015-2023)"],
        "A6": ["C7 (2011-2018)", "C8 (2018-2024)"],
        "Q5": ["8R (2008-2017)", "FY (2017-2024)"],
        "Q7": ["4L (2005-2015)", "4M (2015-2024)"]
    },
    "BMW": {
        "3 Series": ["E90/E92 (2005-2013)", "F30 (2011-2019)", "G20 (2018-2024)"],
        "5 Series": ["E60 (2003-2010)", "F10 (2010-2017)", "G30 (2017-2023)"],
        "X5": ["E70 (2006-2013)", "F15 (2013-2018)", "G05 (2018-2024)"],
        "M5": ["F10 M (2011-2016)", "F90 M (2017-2023)"]
    },
    "Mercedes-Benz": {
        "C-Class": ["W204 (2007-2014)", "W205 (2014-2021)", "W206 (2021-2024)"],
        "E-Class": ["W212 (2009-2016)", "W213 (2016-2023)"],
        "S-Class": ["W222 (2013-2020)", "W223 (2020-2024)"],
        "GLE": ["W166 (2015-2019)", "V167 (2019-2024)"]
    },
    "Porsche": {
        "911": ["991 (2011-2019)", "992 (2019-2024)"],
        "Cayenne": ["92A (2010-2017)", "9YA (2017-2024)"],
        "Panamera": ["970 (2009-2016)", "971 (2016-2024)"]
    },
    "Volkswagen": {
        "Golf": ["Golf 6 (2008-2013)", "Golf 7 (2012-2020)", "Golf 8 (2019-2024)"],
        "Passat": ["B7 (2010-2015)", "B8 (2014-2024)"],
        "Touareg": ["7P (2010-2018)", "CR (2018-2024)"]
    }
};

/* ==========================================================================
   3. STATE (persisted in localStorage)
   ========================================================================== */
const LS_THEME = 'ga_theme';
const LS_CART = 'ga_cart';
const LS_GARAGE = 'ga_garage';
const LS_PROMO = 'ga_promo';

const state = {
    theme: 'dark',
    cart: [],
    garage: null,          // { make, model, year, engine }
    searchQuery: '',
    searchType: '',        // 'vin' | 'oem' | 'name' | ''
    activeProductId: null,
    promoCode: null,
    promoDiscount: 0       // percent
};

function loadState() {
    try {
        const t = localStorage.getItem(LS_THEME);
        if (t) state.theme = t;
    } catch (e) {}
    try {
        const c = JSON.parse(localStorage.getItem(LS_CART));
        if (Array.isArray(c)) state.cart = c;
    } catch (e) {}
    try {
        const g = JSON.parse(localStorage.getItem(LS_GARAGE));
        if (g && g.make && g.model) state.garage = g;
    } catch (e) {}
    try {
        const p = JSON.parse(localStorage.getItem(LS_PROMO));
        if (p && p.code) { state.promoCode = p.code; state.promoDiscount = p.discount || 0; }
    } catch (e) {}
}
function saveState() {
    try { localStorage.setItem(LS_THEME, state.theme); } catch (e) {}
    try { localStorage.setItem(LS_CART, JSON.stringify(state.cart)); } catch (e) {}
    try { localStorage.setItem(LS_GARAGE, JSON.stringify(state.garage)); } catch (e) {}
    try { localStorage.setItem(LS_PROMO, JSON.stringify({ code: state.promoCode, discount: state.promoDiscount })); } catch (e) {}
}

/* ==========================================================================
   4. HELPERS
   ========================================================================== */
function getProduct(id) { return PRODUCTS_DATA.find(p => p.id === id); }
function getCart() { return state.cart; }
function saveCart() { saveState(); updateCartBadges(); }

function priceFmt(n) { return n.toLocaleString('ru-RU') + ' ₽'; }

/* ==========================================================================
   4.5. PART IMAGES (local SVG assets + automatic onError fallback)
   ========================================================================== */
const PART_IMAGES = {
    p1: 'images/parts/brake-rotor.svg',
    p2: 'images/parts/brake-rotor.svg',
    p3: 'images/parts/spark-plug.svg',
    p4: 'images/parts/timing-chain.svg',
    p5: 'images/parts/oil-filter.svg',
    p6: 'images/parts/shock-absorber.svg',
    p7: 'images/parts/brake-pad.svg',
    p8: 'images/parts/control-arm.svg',
    p9: 'images/parts/atf-fluid.svg',
    p10: 'images/parts/air-filter.svg',
    p11: 'images/parts/headlight.svg',
    p12: 'images/parts/resistor.svg',
    p13: 'images/parts/brake-rotor.svg',
    p14: 'images/parts/spark-plug.svg',
    p15: 'images/parts/spark-plug.svg',
    p16: 'images/parts/timing-chain.svg',
    p17: 'images/parts/oil-filter.svg',
    p18: 'images/parts/atf-fluid.svg',
    p19: 'images/parts/headlight.svg',
    p20: 'images/parts/resistor.svg',
    p21: 'images/parts/shock-absorber.svg',
    p22: 'images/parts/brake-pad.svg',
    p23: 'images/parts/timing-chain.svg',
    p24: 'images/parts/air-filter.svg'
};
const CATEGORY_IMAGES = {
    brakes: 'images/parts/brake-rotor.svg',
    engine: 'images/parts/timing-chain.svg',
    chassis: 'images/parts/coilover.svg',
    filters: 'images/parts/oil-filter.svg',
    fluids: 'images/parts/atf-fluid.svg',
    optics: 'images/parts/headlight.svg',
    electrical: 'images/parts/resistor.svg'
};
function getPartImage(id) { return PART_IMAGES[id] || 'images/parts/placeholder.svg'; }
function getCategoryImage(category) { return CATEGORY_IMAGES[category] || 'images/parts/placeholder.svg'; }
function imgFallback(img) {
    img.onerror = null;
    img.src = 'images/parts/placeholder.svg';
}

/* ==========================================================================
   4.6. VECTOR ICONS (inline SVG, lucide-style paths, monochrome)
   ========================================================================== */
const ICONS = {
    info: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
    home: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
    folder: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 2h10a2 2 0 0 1 2 2z',
    'shopping-cart': 'M3 3v2c0 1.1.89 2 1.99 2H19V5c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2z',
    search: 'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
    car: 'M5 21c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v14zM5 10h12v7H5zm10 10a2 2 0 0 1 2 2h1c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 2-.45 2-2z',
    cog: 'M21.23 8.23c-.25-.25-.59-.25-.84 0l-1.22 1.22c-.54-.54-1.28-.81-2.07-.81-.79 0-1.53.27-2.12.81l-1.22-1.22c-.25-.25-.59-.25-.84 0-.26.26-.26.61 0 .87l1.22 1.22c-.54.54-.81 1.28-.81 2.07 0 .79.27 1.53.81 2.12l-1.22 1.22c-.26.26-.26.61 0 .87.13.13.29.2.45.2s.32-.07.45-.2l1.22-1.22c.54.54 1.28.81 2.07.81.79 0 1.53-.27 2.12-.81l1.22 1.22c.26.26.61.26.87 0 .26-.26.26-.61 0-.87l-1.22-1.22c.54-.54.81-1.28.81-2.07 0-.79-.27-1.53-.81-2.12l1.22-1.22c.26-.26.26-.61 0-.87z',
    disc: 'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zM7.1 5.2c.2-.6.64-1.08 1.28-1.24.6-.15 1.23-.18 1.84-.15.55.02 1.06.18 1.51.52.4.31.74.74.98 1.21.45.91.63 1.94.44 3.04-.16.9-.84 1.67-1.69 1.85-1.15.24-2.32-.39-2.81-1.39-.36-.73-.28-1.58.17-2.25zM3.7 9.8c-.21-.7.09-1.43.6-1.93.48-.47 1.13-.69 1.8-.57l.03.01c.64.11 1.19.5 1.59 1.02.38.49.67 1.07.85 1.69.28.92.39 1.9.31 2.86-.08.95-.67 1.76-1.46 2.1-1.07.45-2.25-.3-2.69-1.3-.32-.7-.25-1.51.18-2.15zM21 12a9 9 0 0 1-3.17 6.32c-.21.22-.46.42-.74.6-.6.4-1.27.73-1.93.95-.76.25-1.54.39-2.3.39-.76 0-1.54-.14-2.3-.39-.66-.22-1.33-.55-1.93-.95-.28-.18-.53-.38-.74-.6A9 9 0 0 1 3 12c0-4.71 3.84-8.55 8-8.94.71-.08 1.44-.15 2.15-.18 1.02-.04 2.05.08 2.94.45.69.28 1.32.71 1.83 1.28.46.52.85 1.14 1.15 1.81.28.63.47 1.31.53 2.01.06.7-.03 1.42-.27 2.12zm-1.24 7.89c-.47-.58-1.05-1.04-1.68-1.38-.9-.49-1.9-.63-2.87-.39-.7.17-1.34.49-1.87.9-.48.37-.9.8-1.22 1.28-.29.43-.52.89-.69 1.38-.17.49-.29 1-.34 1.52-.04.4-.04.8-.02 1.2.02.4.08.79.19 1.16.1.34.25.65.43.93.23.38.51.71.83.96.37.28.77.48 1.18.61.36.12.73.2 1.1.23s.75.06 1.12.02c.66-.07 1.29-.31 1.84-.69.5-.34.94-.77 1.28-1.25s.57-1.05.67-1.63c.07-.43.1-.86.1-1.3 0-.28-.03-.55-.09-.82zM16.62 14.23c-.12-.4-.28-.78-.48-1.11-.28-.47-.64-.88-1.04-1.18-.35-.27-.73-.48-1.14-.61-.54-.18-1.1-.24-1.65-.17s-1.16.2-1.65.17c-.41.13-.79.34-1.14.61-.4.3-.76.71-1.04 1.18-.2.32-.36.7-.48 1.11-.12.41-.19.84-.19 1.28s.07.87.19 1.28c.12.41.28.79.48 1.11.28.47.64.89 1.04 1.19.35.27.73.48 1.14.61.55.18 1.11.24 1.65.17s1.16-.2 1.65-.17c.41-.13.79-.34 1.14-.61.4-.3.76-.71 1.04-1.19.2-.32.36-.7.48-1.11.12-.41.19-.87.19-1.28s-.06-.87-.18-1.28z',
    wheel: 'M2 12c0-1.1.9-2 2-2h4c.2 0 .4.1.6.2C8.4 10.7 9 11.5 9 12s-.6 1.3-1.4 1.8c-.2.1-.4.2-.6.2H4c-1.1 0-2-.9-2-2zm17 2c.2 0 .4.1.6.2C19.4 13.7 20 14.5 20 15s-.6 1.3-1.4 1.8c-.2.1-.4.2-.6.2h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2zm-11-5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM14 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
    'oil-filter': 'M70 70 Q 70 46 100 46 Q 130 46 130 70 L 130 150 Q 130 170 100 170 Q 70 170 70 150 Z',
    lamp: 'M21 12.79A9 9 0 0 1 11 21a7 7 0 0 1-.46-3.49L1.6 15.36a9 9 0 0 1 0-10.74l8.94-2.19a7 7 0 0 1 10.36 0l8.94 2.19a9 9 0 0 1 0 10.74l-8.94 2.19a7 7 0 0 1-.46 3.49z',
    plug: 'M5 3h14l2 6h6l-2 6-3-2-3 2-3-2-3 2-3-2-3 2-2-6zm7 15h-2l-1-7 1-7h2zm3-4h-2v-7h2z',
    'building-2': 'M3 8V3c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1zm13 10V9h-2v9zm-4 0V5h-2v14zm-4 0V9H7v14zM4 13h2V9H4zM4 17h2v-3H4z',
    sun: 'M12 3c6.07 0 11 4.93 11 11s-4.93 11-11 11-11-4.93-11-11 4.93-11 11-11zm0 2c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
    moon: 'M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9c0-.46 0-.68.01-1l2-.01c.04.71.09 1.41.09 2s-.05 1.29-.09 2l-2-.01c-.01-.32-.01-.54-.01-1 0-4.97 4.03-9 9-9z',
    'alert-triangle': 'M7.11 18.54l5.89-12.66a.5.5 0 0 1 .94 0l5.89 12.66a.5.5 0 0 1-.47.72H7.58a.5.5 0 0 1-.47-.72z',
    'check-circle': 'M22 11.08V12a10 10 0 1 1-5.93-9.14c0-.26-.02-.52-.07-.78a10 10 0 0 1 .15 1.52 2 2 0 0 1 .41 1.37 10 10 0 0 1-1.42 4.33 2 2 0 0 1-.18.4 10 10 0 0 1-.13.4 10 10 0 0 1-.11.38 2 2 0 0 1-.07.5 10 10 0 0 1-.07.36 10 10 0 0 1-.04.32 2 2 0 0 1-.02.42 10 10 0 0 1 0 .26 2 2 0 0 1-.15 1.28c-.16.36-.38.7-.6 1.02-.19.25-.42.47-.68.65a10 10 0 0 1-.34.25-.2.1-.4.2-.59.11a10 10 0 0 1-.24 1.41c-.03.2-.07.4-.11.59a2 2 0 0 1-.25.84c-.11.25-.25.48-.39.7a2 2 0 0 1-.29.49c-.1.17-.2.35-.29.53a10 10 0 0 1-.32.47-.2.26-.39.53-.56.79-.14.23-.29.45-.41.67a2 2 0 0 1-.25.32c-.11.13-.21.27-.33.39a10 10 0 0 1-.42.44c-.12.1-.25.19-.38.27a2 2 0 0 1-.55.4c-.17.1-.34.19-.52.26a10 10 0 0 1-.52.25c-.2.08-.41.14-.61.2-.17.06-.33.13-.49.17-.13.04-.26.07-.38.1-.36.1-.71.19-1.06.25-.13.02-.27.05-.4.07-.18.03-.36.05-.54.08-.15.03-.29.06-.44.07-.21.01-.43.02-.64.02-.19 0-.39-.01-.57-.02-.18-.02-.36-.04-.54-.07-.14-.02-.27-.05-.41-.08-.17-.03-.34-.06-.5-.1-.09-.02-.19-.04-.28-.06-.16-.04-.33-.07-.48-.12-.08-.03-.15-.07-.22-.1-.14-.07-.27-.14-.4-.22-.06-.04-.12-.08-.18-.12-.13-.09-.25-.18-.37-.28a2 2 0 0 1-.44-.5 10 10 0 0 1-.32-.48c-.08-.13-.15-.27-.22-.4-.09-.18-.17-.36-.24-.55-.04-.11-.07-.22-.1-.34a2 2 0 0 1-.11-.47c-.02-.18-.05-.35-.05-.54s.01-.36.03-.54c0-.03.01-.05.01-.08.02-.42.05-.84.05-1.27 0-1.1-.2-2.19-.56-3.19a10 10 0 0 1 .15-1.52 2 2 0 0 1 .41-1.37 10 10 0 0 1 1.42-4.33 2 2 0 0 1 .18-.4 10 10 0 0 1 .13-.4 10 10 0 0 1 .11-.38 2 2 0 0 1 .07-.5 10 10 0 0 1 .07-.36 10 10 0 0 1 .04-.32 2 2 0 0 1 .02-.42 10 10 0 0 1 0-.26 2 2 0 0 1 .15-1.28c.16-.36.38-.7.6-1.02.19-.25.42-.47.68-.65q.18-.12.34-.25.15-.07.3-.13.17-.08.34-.16c.1-.05.2-.09.3-.13.12-.05.23-.11.34-.16.11-.06.23-.11.34-.17.12-.06.23-.12.35-.17.1-.05.2-.09.31-.13.11-.05.22-.1.33-.15.11-.05.22-.09.33-.14.1-.05.2-.09.3-.14.1-.04.19-.08.29-.11.1-.03.21-.06.31-.09.09-.03.18-.06.27-.08.1-.03.2-.05.3-.08.1-.03.19-.06.29-.08.1-.03.21-.05.31-.08.1-.03.19-.06.29-.09.1-.03.21-.06.31-.09.1-.03.19-.05.29-.08l.02-.01c.12-.04.23-.08.35-.11.12-.04.24-.07.36-.11l.03-.01c.11-.04.23-.07.34-.11.1-.03.21-.05.31-.07.11-.02.22-.05.33-.07.11-.02.21-.05.32-.07.1-.02.21-.04.31-.06l.03-.01c.1-.02.19-.05.29-.06.11-.02.21-.04.32-.06l.04-.01c.1-.02.19-.05.29-.06 0-.01.01-.01.01-.02.11-.01.22-.03.33-.03.11 0 .21-.01.32-.01.11 0 .22-.01.33-.01.1 0 .2-.01.3-.01s.2-.01.3-.01c.11 0 .22-.01.33-.01.1 0 .2-.01.3-.01s.19-.01.29-.01c.1 0 .19 0 .29-.01l.03 0c.1 0 .19-.01.29-.01.1 0 .2-.01.3-.01.11 0 .22 0 .33.01.1 0 .21 0 .31.01.11 0 .22.01 .33.01l.04.01c.1 0 .2.01 .3.01 .1 0 .2 0 .3.01 .11 0 .22 0 .33.01 .11 0 .22.01 .33.01l.02.01c.11 0 .22.01 .33.01s.22.01 .33.01c.11 0 .22 0 .33.01l.04.01c.1 0 .2.01 .3.01 .1 0 .2 0 .3.01 .11 0 .22 0 .33.01l.02.01c.1 0 .2 0 .3.01s.2 0 .3 0 .1 0 .2 0 .3.01l.02.01c.11 0 .21 0 .32.01l.02.01c.1 0 .2.01 .3.01s.2 0 .3 0 .1 0 .2 0 .3.01l.02.01c.11 0 .22 0 .33.01l.02.01c.11 0 .22 0 .33.01l.03.01c.11 0 .22.01 .33.01.1 0 .2 0 .3.01l.02.01c.11 0 .21 0 .32.01l.02.01c.11 0 .22 0 .33.01l.02.01c.11 0 .22 0 .33.01l.03.01c.11 0 .22 0 .33.01 .11 0 .21 0 .32.01 .11 0 .22 0 .33.01',
    'trash-2': 'M3 6h18M3 6v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6M10 11V6l4-4m0 0l4 4m-4-4v10',
    phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
    mail: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 0L8 10l-4 4zm0 0 4 4 4-4-4-4zm0 4L8 14l-4-4zm0 0 4-4 4 4-4 4zm8-8v6l6-4zm-4 4 4 4V8z',
    'map-pin': 'M19 21c-1.11 0-1.79-.68-2.05-1.42-.27-.76-.26-1.44-.02-2.12l1.68-4.88c.2-.58.34-1.22.34-1.88 0-2.11-1.69-3.81-3.81-3.81-2.11 0-3.81 1.7-3.81 3.81 0 .66.14 1.3.34 1.88l1.68 4.88c.24.68.26 1.36-.02 2.12-.26.74-.94 1.42-2.05 1.42-2.11 0-3.42-1.72-3.42-3.83 0-2.11 1.72-3.83 3.83-3.83 1.17 0 2.13.52 2.78 1.34.4-.52.93-.85 1.54-.85.61 0 1.14.33 1.54.85.65-.82 1.61-1.34 2.78-1.34 2.11 0 3.83 1.72 3.83 3.83 0 2.11-1.31 3.83-3.42 3.83z',
    'chevron-right': 'M9 18l6-6-6-6',
    plus: 'M12 5v14M5 12h14',
    minus: 'M5 12h14',
    star: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
};
function renderIcon(name, size = 20) {
    const d = ICONS[name];
    if (!d) return '';
    return `<svg class="icon icon--${name}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${d}"/></svg>`;
}
function initIcons() {
    document.querySelectorAll('[data-icon]').forEach(el => {
        const name = el.getAttribute('data-icon');
        const html = renderIcon(name, el.dataset.size || 20);
        if (html) el.innerHTML = html;
    });
}

function showToast(message, iconName = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `${renderIcon(iconName, 16)} <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* ==========================================================================
   5. THEME
   ========================================================================== */
function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeToggleIcons(state.theme);
}
function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    saveState();
    initTheme();
    showToast(`Переключено на ${state.theme === 'dark' ? 'тёмную' : 'светлую'} тему`, state.theme === 'dark' ? 'moon' : 'sun');
}
function updateThemeToggleIcons(theme) {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.innerHTML = renderIcon(theme === 'light' ? 'sun' : 'moon', 18);
        btn.title = theme === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему';
    });
}

/* ==========================================================================
   6. CART
   ========================================================================== */
function addToCart(productId, qty = 1) {
    const prod = getProduct(productId);
    if (!prod) return;
    const existing = state.cart.find(i => i.id === productId);
    if (existing) existing.qty += qty;
    else state.cart.push({ id: productId, qty });
    saveCart();
    showToast(`Добавлено в корзину: ${prod.title}`, 'shopping-cart');
}
function removeFromCart(productId) {
    state.cart = state.cart.filter(i => i.id !== productId);
    saveCart();
    showToast('Товар удален из корзины', 'trash-2');
    if (typeof renderCartPage === 'function') renderCartPage();
    if (typeof renderCartSlideout === 'function') renderCartSlideout();
    if (typeof renderMiniCart === 'function') renderMiniCart();
}
function updateCartQty(productId, newQty) {
    newQty = Math.max(1, newQty);
    const item = state.cart.find(i => i.id === productId);
    if (item) {
        if (newQty <= 0) { removeFromCart(productId); return; }
        item.qty = newQty;
        saveCart();
        if (typeof renderCartPage === 'function') renderCartPage();
        if (typeof renderCartSlideout === 'function') renderCartSlideout();
        if (typeof renderMiniCart === 'function') renderMiniCart();
    }
}
function updateCartBadges() {
    const total = state.cart.reduce((s, i) => s + i.qty, 0);
    document.querySelectorAll('.cart-count, .cart-badge').forEach(el => {
        el.textContent = total;
        el.style.display = total > 0 ? 'inline-block' : 'none';
    });
}

/* ==========================================================================
   6.5. HERO CAR SELECTOR (home page quick make -> model -> gen)
   ========================================================================== */
function initCarSelector() {
    const makeSelect = document.getElementById('makeSelect');
    const modelSelect = document.getElementById('modelSelect');
    const genSelect = document.getElementById('genSelect');
    const searchBtn = document.getElementById('searchBtn');
    if (!makeSelect || !modelSelect || !genSelect) return;

    Object.keys(CAR_DATA).forEach(make => {
        const o = document.createElement('option');
        o.value = make; o.textContent = make;
        makeSelect.appendChild(o);
    });

    makeSelect.addEventListener('change', () => {
        const selectedMake = makeSelect.value;
        modelSelect.innerHTML = '<option value="">Выбрать Модель</option>';
        genSelect.innerHTML = '<option value="">Год / Кузов</option>';
        genSelect.disabled = true;
        if (selectedMake && CAR_DATA[selectedMake]) {
            modelSelect.disabled = false;
            Object.keys(CAR_DATA[selectedMake]).forEach(model => {
                const o = document.createElement('option');
                o.value = model; o.textContent = model;
                modelSelect.appendChild(o);
            });
        } else {
            modelSelect.disabled = true;
        }
    });

    modelSelect.addEventListener('change', () => {
        const selectedMake = makeSelect.value;
        const selectedModel = modelSelect.value;
        genSelect.innerHTML = '<option value="">Год / Кузов</option>';
        if (selectedMake && selectedModel && CAR_DATA[selectedMake][selectedModel]) {
            genSelect.disabled = false;
            CAR_DATA[selectedMake][selectedModel].forEach(gen => {
                const o = document.createElement('option');
                o.value = gen; o.textContent = gen;
                genSelect.appendChild(o);
            });
        } else {
            genSelect.disabled = true;
        }
    });

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const make = makeSelect.value;
            const model = modelSelect.value;
            if (!make) { showToast('Пожалуйста, выберите марку авто', 'alert-triangle'); return; }
            window.location.href = `catalog.html?make=${encodeURIComponent(make)}${model ? '&model=' + encodeURIComponent(model) : ''}`;
        });
    }
}

/* ==========================================================================
   7. MY GARAGE (vehicle selector persisted in localStorage)
   ========================================================================== */
function initGarageSelector() {
    const makeSel = document.getElementById('garageMake');
    const modelSel = document.getElementById('garageModel');
    const yearSel = document.getElementById('garageYear');
    const engineSel = document.getElementById('garageEngine');
    const saveBtn = document.getElementById('garageSave');
    const clearBtn = document.getElementById('garageClear');
    const summary = document.getElementById('garageSummary');

    if (!makeSel || !modelSel) return;

    // populate makes
    Object.keys(CAR_DATA).forEach(make => {
        const o = document.createElement('option');
        o.value = make; o.textContent = make;
        makeSel.appendChild(o);
    });

    // restore saved garage
    if (state.garage) {
        makeSel.value = state.garage.make;
        makeSel.dispatchEvent(new Event('change'));
        if (state.garage.model) { modelSel.value = state.garage.model; modelSel.dispatchEvent(new Event('change')); }
        if (state.garage.year) { yearSel.value = state.garage.year; yearSel.dispatchEvent(new Event('change')); }
        if (state.garage.engine) { engineSel.value = state.garage.engine; }
        renderGarageSummary();
        showGarageBanner();
    }

    // badge click toggles dropdown
    if (makeSel.parentElement && document.getElementById('garageBadge')) {
        document.getElementById('garageBadge').addEventListener('click', () => {
            const dd = document.getElementById('garageDropdown');
            dd.style.display = (dd.style.display === 'block') ? 'none' : 'block';
        });
    }

    makeSel.addEventListener('change', () => {
        const make = makeSel.value;
        modelSel.innerHTML = '<option value="">Выбрать модель</option>';
        yearSel.innerHTML = '<option value="">Год / Поколение</option>';
        engineSel.innerHTML = '<option value="">Двигатель / Модификация</option>';
        modelSel.disabled = true; yearSel.disabled = true; engineSel.disabled = true;
        state.garage = { make };
        if (CAR_DATA[make]) {
            modelSel.disabled = false;
            Object.keys(CAR_DATA[make]).forEach(model => {
                const o = document.createElement('option');
                o.value = model; o.textContent = model;
                modelSel.appendChild(o);
            });
        }
        renderGarageSummary();
    });

    modelSel.addEventListener('change', () => {
        const make = makeSel.value; const model = modelSel.value;
        yearSel.innerHTML = '<option value="">Год / Поколение</option>';
        engineSel.innerHTML = '<option value="">Двигатель / Модификация</option>';
        yearSel.disabled = true; engineSel.disabled = true;
        state.garage = { ...state.garage, model };
        if (make && model && CAR_DATA[make][model]) {
            yearSel.disabled = false;
            CAR_DATA[make][model].forEach(gen => {
                const o = document.createElement('option');
                o.value = gen; o.textContent = gen;
                yearSel.appendChild(o);
            });
        }
        renderGarageSummary();
    });

    yearSel.addEventListener('change', () => {
        engineSel.innerHTML = '<option value="">Двигатель / Модификация</option>';
        engineSel.disabled = true;
        state.garage = { ...state.garage, year: yearSel.value };
        // build engine options from compatibleCars
        const engines = new Set();
        PRODUCTS_DATA.forEach(p => {
            p.compatibleCars.forEach(c => {
                if (c.includes(makeSel.value) && c.includes(modelSel.value) && c.includes(yearSel.value)) {
                    engines.add(c);
                }
            });
        });
        if (engines.size) {
            engineSel.disabled = false;
            engines.forEach(e => {
                const o = document.createElement('option');
                o.value = e; o.textContent = e;
                engineSel.appendChild(o);
            });
        }
        renderGarageSummary();
    });

    engineSel.addEventListener('change', () => {
        state.garage = { ...state.garage, engine: engineSel.value };
        renderGarageSummary();
    });

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            if (!state.garage.make || !state.garage.model) {
                showToast('Выберите марку и модель автомобиля', 'alert-triangle');
                return;
            }
            saveState();
            renderGarageSummary();
            showToast('Автомобиль сохранён в «Моём гараже»', 'check-circle');
            // refilter catalog if on catalog page
            if (typeof renderCatalogGrid === 'function') renderCatalogGrid(getFilteredProducts());
        });
    }
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            state.garage = null;
            saveState();
            makeSel.value = ''; modelSel.innerHTML = '<option value="">Выбрать модель</option>';
            yearSel.innerHTML = '<option value="">Год / Поколение</option>';
            engineSel.innerHTML = '<option value="">Двигатель / Модификация</option>';
            modelSel.disabled = true; yearSel.disabled = true; engineSel.disabled = true;
            renderGarageSummary();
            showToast('Гараж очищен', 'trash-2');
            if (typeof renderCatalogGrid === 'function') renderCatalogGrid(getFilteredProducts());
        });
    }
}

function renderGarageSummary() {
    const summary = document.getElementById('garageSummary');
    if (!summary) return;
    if (!state.garage || !state.garage.make) {
        summary.innerHTML = '';
        summary.style.display = 'none';
        updateGarageBadge();
        return;
    }
    const parts = [state.garage.make, state.garage.model, state.garage.year, state.garage.engine].filter(Boolean);
    summary.textContent = 'Авто: ' + parts.join(' · ');
    summary.style.display = 'block';
    updateGarageBadge();
}
function renderGarageBanner() {
    const banner = document.getElementById('garageBanner');
    if (!banner) return;
    if (!state.garage || !state.garage.make) {
        banner.style.display = 'none';
        return;
    }
    banner.style.display = 'flex';
    document.getElementById('garageBannerText').textContent =
        'Подбор по авто: ' + [state.garage.make, state.garage.model, state.garage.year].filter(Boolean).join(' · ');
    // hide selector dropdown when banner is shown
    const dd = document.getElementById('garageDropdown');
    if (dd) dd.style.display = 'none';
    updateGarageBadge();
}
function showGarageBanner() {
    renderGarageBanner();
}
function updateGarageBadge() {
    const badge = document.getElementById('garageBadge');
    if (!badge) return;
    if (!state.garage || !state.garage.make) {
        badge.innerHTML = renderIcon('car', 14) + '<span>Нет авто</span>';
        badge.title = 'Выберите автомобиль';
    } else {
        badge.innerHTML = renderIcon('car', 14) + '<span>' + [state.garage.make, state.garage.model, state.garage.year].filter(Boolean).join(' · ') + '</span>';
        badge.title = 'Сменить автомобиль';
    }
}
function isCompatible(product, garage) {
    if (!garage || !garage.make) return true;
    const label = `${garage.make} ${garage.model} ${garage.year || ''} ${garage.engine || ''}`.trim();
    // product compatibleCars strings contain make/model/year; check substring match
    return product.compatibleCars.some(c => {
        const cLower = c.toLowerCase();
        return cLower.includes(garage.make.toLowerCase()) &&
               cLower.includes(garage.model.toLowerCase());
    });
}
function fitmentBadge(product, garage) {
    if (!garage || !garage.make) return null;
    const fits = isCompatible(product, garage);
    return { fits, label: fits ? 'Подходит для вашего авто' : 'Проверьте совместимость' };
}

/* ==========================================================================
   8. SEARCH (multi: VIN / OEM / analog / name)
   ========================================================================== */
function detectSearchType(q) {
    const s = q.trim();
    if (/^[A-HJ-NPR-Z0-9]{17}$/.test(s)) return 'vin';
    if (/\d/.test(s) && /[A-ZА-Я]/.test(s) && s.length >= 6 && s.indexOf(' ') === -1) return 'oem';
    return 'name';
}
function decodeVIN(vin) {
    // Mock WMI -> brand mapping (real VIN decoding needs an API)
    const wmi = vin.slice(0, 3).toUpperCase();
    const map = {
        'WAU': 'Audi', 'WBA': 'BMW', 'WDB': 'Mercedes-Benz', 'WME': 'Mercedes-Benz',
        'WP0': 'Porsche', 'WVW': 'Volkswagen', '1G': 'Chevrolet', 'JT': 'Toyota'
    };
    return map[wmi] || null;
}
function searchProducts(query) {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS_DATA;
    const type = detectSearchType(q);
    state.searchType = type;
    state.searchQuery = q;
    saveState();

    if (type === 'vin') {
        const brand = decodeVIN(q);
        if (brand) {
            showToast(`По VIN определена марка: ${brand}`, 'search');
            return PRODUCTS_DATA.filter(p => p.makes.includes(brand));
        }
        showToast('Марка по VIN не определена — показан полный каталог', 'alert-triangle');
        return PRODUCTS_DATA;
    }
    if (type === 'oem') {
        return PRODUCTS_DATA.filter(p =>
            p.art.toLowerCase().includes(q) ||
            p.oemArt.toLowerCase().includes(q) ||
            p.analogArt.toLowerCase().includes(q)
        );
    }
    // name
    return PRODUCTS_DATA.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.art.toLowerCase().includes(q)
    );
}
function getFilteredProducts() {
    let list = PRODUCTS_DATA;
    // search
    if (state.searchQuery) {
        list = searchProducts(state.searchQuery);
    }
    // garage fitment filter
    if (state.garage && state.garage.make) {
        list = list.filter(p => isCompatible(p, state.garage));
    }
    return list;
}

/* ==========================================================================
   9. HEADER SEARCH + autocomplete dropdown
   ========================================================================== */
function initHeaderSearch() {
    const inputs = document.querySelectorAll('.header-search-input');
    inputs.forEach(input => {
        let dropdown = null;
        input.addEventListener('input', (e) => {
            const q = e.target.value.trim();
            if (!q) { if (dropdown) dropdown.remove(); dropdown = null; return; }
            const results = searchProducts(q).slice(0, 6);
            if (dropdown) dropdown.remove();
            dropdown = document.createElement('div');
            dropdown.className = 'search-dropdown';
            results.forEach(p => {
                const item = document.createElement('div');
                item.className = 'search-dropdown-item';
                item.innerHTML = `<img src="${getPartImage(p.id)}" alt="${p.title}" class="sdi-img" onerror="imgFallback(this)"><strong>${p.title}</strong> <span class="sdi-art">${p.art}</span>`;
                item.addEventListener('click', () => {
                    input.value = '';
                    if (dropdown) dropdown.remove();
                    openProduct(p.id);
                });
                dropdown.appendChild(item);
            });
            input.parentElement.appendChild(dropdown);
        });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                const q = input.value.trim();
                input.value = '';
                if (dropdown) dropdown.remove();
                // route to catalog with search
                const url = new URL(window.location.origin + '/catalog.html');
                url.searchParams.set('q', q);
                window.location.href = url.toString();
            }
        });
        // close dropdown on outside click
        document.addEventListener('click', (e) => {
            if (dropdown && !input.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.remove(); dropdown = null;
            }
        });
    });
}

/* ==========================================================================
   10. PRODUCT CARD HTML
   ========================================================================== */
function createProductCardHTML(product) {
    const priceFormatted = priceFmt(product.price);
    const isOem = product.type === 'oem';
    const badgeClass = isOem ? 'badge-oem' : 'badge-analog';
    const badgeLabel = isOem ? 'Оригинал (OEM)' : 'Аналог Premium';
    const stockClass = product.stock === 'in' ? 'stock-in' : 'stock-order';
    const fit = fitmentBadge(product, state.garage);
    let fitHtml = '';
    if (fit && state.garage) {
        fitHtml = `<div class="fitment-badge ${fit.fits ? 'fit-yes' : 'fit-no'}" title="${fit.label}">${fit.fits ? 'Подходит' : 'Проверка совместимости'}</div>`;
    }
    const partImg = getPartImage(product.id);
    return `
        <div class="product-card" data-id="${product.id}">
            ${fitHtml}
            <div class="card-top">
                <div class="img-box">
                    <img src="${partImg}" alt="${product.title}" class="part-img" onerror="imgFallback(this)" loading="lazy">
                    <span class="badge-tag ${badgeClass}">${badgeLabel}</span>
                </div>
                <div class="product-art">Арт: ${product.art}</div>
                <h4 class="product-title">${product.title}</h4>
                <div class="product-brand">${renderIcon('building-2', 14)} <span>${product.brand}</span></div>
                <div class="rating-stars">
                    <span>★ ${product.rating.toFixed(1)}</span>
                    <span class="rating-count">(${product.reviews} отзывов)</span>
                </div>
                <div class="stock-badge ${stockClass}">
                    <span>${product.stock === 'in' ? '●' : '◐'}</span>
                    <span>${product.stockText}</span>
                </div>
            </div>
            <div class="card-bottom">
                <div class="price-box">
                    <span class="price-current">${priceFormatted}</span>
                    <span class="price-delivery">Доставка: ${product.delivery}</span>
                </div>
                <button class="buy-btn-icon" onclick="addToCart('${product.id}')" title="Добавить в корзину">${renderIcon('shopping-cart', 16)}</button>
            </div>
        </div>
    `;
}

/* ==========================================================================
   11. CATALOG PAGE
   ========================================================================== */
function initCatalogPage() {
    const catalogGrid = document.getElementById('catalog-products-grid');
    if (!catalogGrid) return;

    const urlParams = new URLSearchParams(window.location.search);
    const filterMake = urlParams.get('make');
    const filterQuery = urlParams.get('q');
    if (filterQuery) {
        const searchInput = document.getElementById('catalogSearchInput');
        if (searchInput) searchInput.value = filterQuery;
        state.searchQuery = filterQuery;
        state.searchType = detectSearchType(filterQuery);
    }
    if (filterMake) {
        // set garage make if garage selector exists on page
        const gMake = document.getElementById('catalogGarageMake');
        if (gMake) gMake.value = filterMake;
    }
    const filterCat = urlParams.get('category');
    if (filterCat) {
        const cb = document.querySelector(`.filter-category-cb[value="${filterCat}"]`);
        if (cb) cb.checked = true;
    }

    renderCatalogGrid(getFilteredProducts());
    initFilterListeners(getFilteredProducts());
    renderGarageBanner();
}

function renderCatalogGrid(products) {
    const catalogGrid = document.getElementById('catalog-products-grid');
    const resultsCountEl = document.getElementById('results-count');
    if (!catalogGrid) return;
    if (resultsCountEl) resultsCountEl.textContent = `Найдено позиций: ${products.length}`;
    if (products.length === 0) {
        catalogGrid.innerHTML = `
            <div class="empty-state span-full" style="grid-column: 1 / -1;">
                <div class="empty-icon">${renderIcon('search', 40)}</div>
                <div class="empty-title">Запчасти не найдены</div>
                <div class="empty-desc">Попробуйте изменить параметры фильтра или сбросить критерии поиска.</div>
                <button class="btn-secondary" style="margin-top:12px;" onclick="window.location.href='catalog.html'">Сбросить все фильтры</button>
            </div>`;
        return;
    }
    catalogGrid.innerHTML = products.map(p => createProductCardHTML(p)).join('');
}

function initFilterListeners(allProducts) {
    const searchInput = document.getElementById('catalogSearchInput');
    const sortSelect = document.getElementById('sortSelect');
    const categoryCheckboxes = document.querySelectorAll('.filter-category-cb');
    const typeCheckboxes = document.querySelectorAll('.filter-type-cb');
    const minPriceInput = document.getElementById('minPriceInput');
    const maxPriceInput = document.getElementById('maxPriceInput');

    function filterAndRender() {
        let filtered = searchProducts(state.searchQuery || '');

        // category
        const selectedCats = Array.from(categoryCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
        if (selectedCats.length) filtered = filtered.filter(p => selectedCats.includes(p.category));
        // type
        const selectedTypes = Array.from(typeCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
        if (selectedTypes.length) filtered = filtered.filter(p => selectedTypes.includes(p.type));
        // price
        if (minPriceInput && minPriceInput.value) {
            const minP = parseFloat(minPriceInput.value);
            if (!isNaN(minP)) filtered = filtered.filter(p => p.price >= minP);
        }
        if (maxPriceInput && maxPriceInput.value) {
            const maxP = parseFloat(maxPriceInput.value);
            if (!isNaN(maxP)) filtered = filtered.filter(p => p.price <= maxP);
        }
        // garage
        if (state.garage && state.garage.make) filtered = filtered.filter(p => isCompatible(p, state.garage));
        // sort
        if (sortSelect) {
            const sv = sortSelect.value;
            if (sv === 'price-asc') filtered.sort((a,b) => a.price - b.price);
            else if (sv === 'price-desc') filtered.sort((a,b) => b.price - a.price);
            else if (sv === 'rating') filtered.sort((a,b) => b.rating - a.rating);
        }
        renderCatalogGrid(filtered);
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value.trim();
            state.searchType = detectSearchType(state.searchQuery);
            filterAndRender();
        });
    }
    if (sortSelect) sortSelect.addEventListener('change', filterAndRender);
    if (minPriceInput) minPriceInput.addEventListener('input', filterAndRender);
    if (maxPriceInput) maxPriceInput.addEventListener('input', filterAndRender);
    categoryCheckboxes.forEach(cb => cb.addEventListener('change', filterAndRender));
    typeCheckboxes.forEach(cb => cb.addEventListener('change', filterAndRender));
    // apply any pre-set filters (e.g. category from 3D explorer click)
    filterAndRender();
}

/* ==========================================================================
   12. PRODUCT DETAIL PAGE (OEM vs Analogs comparison)
   ========================================================================== */
function initProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (!id) {
        document.getElementById('product-detail-container').innerHTML = '<div class="empty-state"><div class="empty-title">Товар не найден</div></div>';
        return;
    }
    const product = getProduct(id);
    if (!product) {
        document.getElementById('product-detail-container').innerHTML = '<div class="empty-state"><div class="empty-title">Товар не найден</div></div>';
        return;
    }
    state.activeProductId = id;
    renderProductDetail(product);
}
function renderProductDetail(product) {
    const container = document.getElementById('product-detail-container');
    if (!container) return;
    const isOem = product.type === 'oem';
    const analogs = (product.analogs || []).map(id => getProduct(id)).filter(Boolean);
    const fit = fitmentBadge(product, state.garage);

    let analogsHtml = '';
    if (analogs.length) {
        analogsHtml = `
            <h3 class="box-title">Аналоги и альтернативы</h3>
            <div class="comparison-table-wrapper" style="--analog-cols:${analogs.length};">
                <div class="comparison-table">
                <div class="comp-row comp-header">
                    <div class="comp-cell">Параметр</div>
                    <div class="comp-cell comp-main">Оригинал (${product.brand})</div>
                    ${analogs.map(a => `<div class="comp-cell">Аналог (${a.brand})</div>`).join('')}
                </div>
                <div class="comp-row">
                    <div class="comp-cell">Артикул OEM</div>
                    <div class="comp-cell comp-main">${product.oemArt || product.art}</div>
                    ${analogs.map(a => `<div class="comp-cell">${a.oemArt || a.art}</div>`).join('')}
                </div>
                <div class="comp-row">
                    <div class="comp-cell">Артикул аналога</div>
                    <div class="comp-cell comp-main">${product.analogArt || '—'}</div>
                    ${analogs.map(a => `<div class="comp-cell">${a.analogArt || '—'}</div>`).join('')}
                </div>
                <div class="comp-row">
                    <div class="comp-cell">Цена</div>
                    <div class="comp-cell comp-main">${priceFmt(product.price)}</div>
                    ${analogs.map(a => `<div class="comp-cell">${priceFmt(a.price)}</div>`).join('')}
                </div>
                <div class="comp-row">
                    <div class="comp-cell">Доставка</div>
                    <div class="comp-cell comp-main">${product.delivery}</div>
                    ${analogs.map(a => `<div class="comp-cell">${a.delivery}</div>`).join('')}
                </div>
                <div class="comp-row">
                    <div class="comp-cell">Наличие</div>
                    <div class="comp-cell comp-main"><span class="stock-${product.stock}">${product.stock === 'in' ? '● В наличии' : '◐ Под заказ'}</span></div>
                    ${analogs.map(a => `<div class="comp-cell"><span class="stock-${a.stock}">${a.stock === 'in' ? '● В наличии' : '◐ Под заказ'}</span></div>`).join('')}
                </div>
                <div class="comp-row comp-actions">
                    <div class="comp-cell"></div>
                    <div class="comp-cell comp-main"><button class="btn-primary" onclick="addToCart('${product.id}')">В корзину</button></div>
                    ${analogs.map(a => `<div class="comp-cell"><button class="btn-primary" onclick="addToCart('${a.id}')">В корзину</button></div>`).join('')}
                </div>
            </div>
        </div>`;
    }

    const fitHtml = fit ? `<div class="detail-fitment ${fit.fits ? 'fit-yes' : 'fit-no'}">
        ${fit.label} — ${[state.garage.make, state.garage.model, state.garage.year].filter(Boolean).join(' ')}
    </div>` : '';

    container.innerHTML = `
        <button class="btn-secondary" onclick="window.location.href='catalog.html'" style="margin-bottom:16px;">← К каталогу</button>
        <div class="product-detail">
            <div class="product-detail-gallery">
                <img src="${getPartImage(product.id)}" alt="${product.title}" class="part-img detail-img" onerror="imgFallback(this)">
            </div>
            <div class="product-detail-info">
                ${fitHtml}
                <div class="product-detail-badges">
                    <span class="badge-tag ${isOem ? 'badge-oem' : 'badge-analog'}">${isOem ? 'Оригинал (OEM)' : 'Аналог Premium'}</span>
                    <span class="stock-${product.stock}">${product.stock === 'in' ? 'В наличии' : 'Под заказ'}</span>
                </div>
                <div class="product-art">Арт: ${product.art}</div>
                <h1 class="product-detail-title">${product.title}</h1>
                <div class="product-detail-brand">Бренд: ${product.brand}</div>
                <div class="product-detail-price">
                    <span class="price-current">${priceFmt(product.price)}</span>
                    <span class="price-delivery">Доставка: ${product.delivery}</span>
                </div>
                <div class="product-detail-compat">
                    <strong>Подходит для:</strong><br>
                    ${product.compatibleCars.map(c => `<span class="compat-chip">${c}</span>`).join('')}
                </div>
                <div class="product-detail-rating">
                    <span>★ ${product.rating.toFixed(1)}</span>
                    <span class="rating-count">(${product.reviews} отзывов)</span>
                </div>
                <button class="btn-primary" style="width:auto; padding:14px 28px; margin-top:12px;" onclick="addToCart('${product.id}')">Добавить в корзину ${renderIcon('shopping-cart', 16)}</button>
            </div>
        </div>
        ${analogsHtml}
    `;
}

/* ==========================================================================
   13. CART PAGE + SLIDE-OUT CART
   ========================================================================== */
function renderCartPage() {
    const container = document.getElementById('cart-items-container');
    const partsCostEl = document.getElementById('parts-cost');
    const promoInput = document.getElementById('promoInput');
    const applyPromoBtn = document.getElementById('applyPromo');
    const totalCostEl = document.getElementById('totalCostText');
    const delCostEl = document.getElementById('delCostText');
    if (!container) return;

    const cart = state.cart;
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">${renderIcon('shopping-cart', 40)}</div>
                <div class="empty-title">Ваша корзина пуста</div>
                <div class="empty-desc">Выберите качественные запчасти для вашего автомобиля в нашем каталоге</div>
                <a href="catalog.html" class="btn-primary" style="margin-top:16px; width:auto; padding:12px 28px;">Перейти в каталог</a>
            </div>`;
        [partsCostEl, totalCostEl, delCostEl].forEach(el => { if (el) el.textContent = '0 ₽'; });
        updatePromoDisplay();
        return;
    }

    let totalPartsPrice = 0;
    const itemsHTML = cart.map(item => {
        const product = getProduct(item.id);
        if (!product) return '';
        const itemTotal = product.price * item.qty;
        totalPartsPrice += itemTotal;
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-icon"><img src="${getPartImage(product.id)}" alt="${product.title}" class="cart-img" onerror="imgFallback(this)"></div>
                    <div class="cart-item-details">
                        <h4>${product.title}</h4>
                        <p>Арт: ${product.art} • ${product.brand}</p>
                    </div>
                </div>
                <div class="cart-item-controls">
                    <div class="qty-picker">
                        <button class="qty-btn" onclick="updateCartQty('${product.id}', ${item.qty - 1})">−</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-btn" onclick="updateCartQty('${product.id}', ${item.qty + 1})">+</button>
                    </div>
                    <div class="item-price">${itemTotal.toLocaleString('ru-RU')} ₽</div>
                    <button class="btn-delete" onclick="removeFromCart('${product.id}')" title="Удалить товар">${renderIcon('trash-2', 16)}</button>
                </div>
            </div>`;
    }).join('');
    container.innerHTML = itemsHTML;

    // delivery
    let deliveryCost = 0;
    const selectedDel = document.querySelector('input[name="delType"]:checked');
    if (selectedDel) {
        if (selectedDel.value === 'cdek') deliveryCost = 450;
        if (selectedDel.value === 'courier') deliveryCost = 600;
    }

    // promo
    let discountAmount = 0;
    if (state.promoCode && state.promoDiscount) {
        discountAmount = Math.round(totalPartsPrice * state.promoDiscount / 100);
    }

    const subtotal = totalPartsPrice - discountAmount;
    const total = subtotal + deliveryCost;

    if (partsCostEl) partsCostEl.textContent = priceFmt(subtotal);
    if (delCostEl) delCostEl.textContent = priceFmt(deliveryCost);
    if (totalCostEl) totalCostEl.textContent = priceFmt(total);

    updatePromoDisplay();

    if (promoInput) promoInput.value = state.promoCode || '';
    if (applyPromoBtn) {
        applyPromoBtn.onclick = () => {
            const code = promoInput.value.trim().toUpperCase();
            applyPromo(code);
        };
    }
}

function applyPromo(code) {
    const promos = {
        'SAVE10': 10,
        'AVTO20': 20,
        'WELCOME': 5
    };
    if (!code) { state.promoCode = null; state.promoDiscount = 0; saveState(); renderCartPage(); showToast('Промокод удалён', 'info'); return; }
    if (promos[code] !== undefined) {
        state.promoCode = code;
        state.promoDiscount = promos[code];
        saveState();
        renderCartPage();
        showToast(`Промокод ${code}: скидка ${promos[code]}%`, 'check-circle');
    } else {
        showToast('Неверный промокод. Попробуйте: SAVE10, AVTO20, WELCOME', 'alert-triangle');
    }
}
function updatePromoDisplay() {
    const el = document.getElementById('promoDiscount');
    if (!el) return;
    if (state.promoCode && state.promoDiscount) {
        el.textContent = `-${state.promoDiscount}% (${state.promoCode})`;
        el.style.color = 'var(--success)';
    } else {
        el.textContent = '';
    }
}

function initCheckoutDeliveryLogic() {
    const deliveryCards = document.querySelectorAll('.delivery-card');
    const addressInput = document.getElementById('addressInput');
    deliveryCards.forEach(card => {
        card.addEventListener('click', () => {
            deliveryCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            const radio = card.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
                if (addressInput) {
                    if (radio.value === 'pickup') {
                        addressInput.disabled = true; addressInput.style.opacity = '0.4';
                        addressInput.required = false; addressInput.placeholder = 'Адрес не требуется для самовывоза';
                    } else {
                        addressInput.disabled = false; addressInput.style.opacity = '1';
                        addressInput.required = true; addressInput.placeholder = 'Адрес доставки (Улица, дом, квартира/офис) *';
                    }
                }
            }
            renderCartPage();
        });
    });
}

function completeCheckoutOrder() {
    const cart = state.cart;
    if (cart.length === 0) { showToast('Ваша корзина пуста!', 'alert-triangle'); return; }

    const nameInput = document.getElementById('checkoutName');
    const phoneInput = document.getElementById('checkoutPhone');
    const addressInput = document.getElementById('addressInput');
    const selectedDel = document.querySelector('input[name="delType"]:checked');

    if (nameInput && !nameInput.value.trim()) { showToast('Пожалуйста, укажите имя и фамилию', 'alert-triangle'); nameInput.focus(); return; }
    if (phoneInput && !phoneInput.value.trim()) { showToast('Пожалуйста, укажите контактный телефон', 'alert-triangle'); phoneInput.focus(); return; }
    if (addressInput && !addressInput.disabled && !addressInput.value.trim()) {
        showToast('Пожалуйста, укажите адрес доставки', 'alert-triangle'); addressInput.focus(); return;
    }

    const orderNumber = 'GA-' + Math.floor(100000 + Math.random() * 900000);
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
        <div class="modal-card">
            <div class="modal-icon">${renderIcon('check-circle', 40)}</div>
            <h2>Заказ успешно оформлен!</h2>
            <p>Номер вашего заказа: <strong style="color:var(--primary);">#${orderNumber}</strong></p>
            <p>Менеджер свяжется с вами по номеру ${phoneInput ? phoneInput.value : ''} в течение 10 минут.</p>
            <button class="btn-primary" onclick="this.closest('.modal-overlay').remove(); localStorage.removeItem('ga_cart'); state.cart=[]; updateCartBadges(); window.location.href='index.html';">
                Вернуться на главную
            </button>
        </div>`;
    document.body.appendChild(modal);
}

/* ==========================================================================
   14. TABS + global init
   ========================================================================== */
function initTabs() {
    const tabAuto = document.getElementById('tabAutoBtn');
    const tabVin = document.getElementById('tabVinBtn');
    const panelAuto = document.getElementById('panelAuto');
    const panelVin = document.getElementById('panelVin');
    if (!tabAuto || !tabVin || !panelAuto || !panelVin) return;
    tabAuto.addEventListener('click', () => {
        tabAuto.classList.add('active'); tabVin.classList.remove('active');
        panelAuto.style.display = 'grid'; panelVin.style.display = 'none';
    });
    tabVin.addEventListener('click', () => {
        tabVin.classList.add('active'); tabAuto.classList.remove('active');
        panelVin.style.display = 'grid'; panelAuto.style.display = 'none';
    });
}

/* ==========================================================================
   15. VIN LOOKUP MODAL
   ========================================================================== */
function openVINModal() {
    let modal = document.getElementById('vinModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.id = 'vinModal';
        modal.innerHTML = `
            <div class="modal-card" style="max-width:420px;">
                <div class="modal-icon">${renderIcon('search', 40)}</div>
                <h2>Подбор по VIN-коду</h2>
                <p style="font-size:14px; color:var(--text-muted);">Введите 17-значный VIN-код кузова</p>
                <div class="control-group" style="margin-bottom:16px;">
                    <input type="text" id="vinInput" placeholder="Например: WBA3A510X0L123456" class="input-custom" maxlength="17">
                </div>
                <div id="vinResult" style="margin-bottom:16px; font-size:14px; min-height:40px;"></div>
                <div class="modal-actions" style="display:flex; gap:10px;">
                    <button class="btn-secondary" onclick="closeVINModal()">Отмена</button>
                    <button class="btn-primary" onclick="submitVIN()">Найти запчасти</button>
                </div>
            </div>`;
        document.body.appendChild(modal);
    }
    document.getElementById('vinInput').value = '';
    document.getElementById('vinResult').innerHTML = '';
    modal.classList.add('active');
}
function closeVINModal() {
    const modal = document.getElementById('vinModal');
    if (modal) modal.classList.remove('active');
}
function submitVIN() {
    const input = document.getElementById('vinInput');
    const result = document.getElementById('vinResult');
    const vin = input.value.trim();
    if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(vin)) {
        result.innerHTML = '<span style="color:#ef4444;">Некорректный VIN-код (должно быть 17 символов)</span>';
        return;
    }
    const brand = decodeVIN(vin);
    if (!brand) {
        result.innerHTML = '<span style="color:#f59e0b;">Марка не определена по VIN. Показан полный каталог.</span>';
        state.searchQuery = '';
        state.searchType = '';
        saveState();
        closeVINModal();
        window.location.href = 'catalog.html';
        return;
    }
    result.innerHTML = `<span style="color:var(--success);">Марка определена: ${brand}</span>`;
    state.searchQuery = '';
    state.searchType = '';
    state.garage = { ...state.garage, make: brand };
    saveState();
    closeVINModal();
    window.location.href = `catalog.html?make=${encodeURIComponent(brand)}`;
}

/* ==========================================================================
   16. FEATURED (index page)
   ========================================================================== */
function renderFeatured() {
    const featuredGrid = document.getElementById('featured-products-grid');
    if (!featuredGrid) return;
    const featured = PRODUCTS_DATA.slice(0, 6);
    featuredGrid.innerHTML = featured.map(p => createProductCardHTML(p)).join('');
}

/* ==========================================================================
   18. INTERACTIVE 3D CAR EXPLORER (Three.js, static side-profile model)
   ========================================================================== */
/* Builds a detailed stylized 3D side-profile car from Three.js geometry,
   proportioned to the reference blueprint. The car is strictly static
   (no rotation / auto-spin); the camera is fixed so every part stays
   predictable and easy to inspect. Dimension lines from the blueprint are
   NOT reproduced anywhere in the 3D scene. */

const CAR_PARTS = [];

function hasWebGL() {
    try {
        const c = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (e) { return false; }
}

function mat(color, opts = {}) {
    return new THREE.MeshStandardMaterial({
        color,
        roughness: opts.roughness !== undefined ? opts.roughness : 0.45,
        metalness: opts.metalness !== undefined ? opts.metalness : 0.5,
        emissive: opts.emissive || 0x000000,
        emissiveIntensity: opts.emissiveIntensity || 0,
        transparent: !!opts.transparent,
        opacity: opts.opacity !== undefined ? opts.opacity : 1,
        side: THREE.DoubleSide
    });
}

// Distinct, high-visibility part colors
const C = {
    body: 0xc62828,           // deep red metallic body
    bodyDark: 0xad1414,
    window: 0x0d47a1,         // tinted glass
    frontBumper: 0xd32f2f,
    headlight: 0xffeb3b,      // amber
    grille: 0x37474f,
    glass: 0x22d3ee,
    seat: 0x4caf50,           // green
    steering: 0xff9800,       // orange
    dash: 0x455a64,
    engine: 0x9c27b0,         // purple
    intake: 0xe040fb,         // magenta
    radiator: 0x00bcd4,       // cyan
    airFilter: 0xce93d8,
    suspension: 0x00c853,
    brakeRotor: 0xff5722,     // orange-red
    brakeCaliper: 0xf50057,   // pink
    rim: 0x2979ff,            // blue
    tire: 0x1a1a1a,
    exhaust: 0x616161,
    muffler: 0x78909c,
    rearBumper: 0xd32f2f,
    taillight: 0xffd600,      // yellow
    underbody: 0x37474f
};

function escHtml(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

/* ---------- geometry helpers ---------- */
function sideProfileShape() {
    const s = new THREE.Shape();
    // Car facing LEFT. X = length, Y = height. Front nose at x≈-2.9, rear at x≈+2.9.
    s.moveTo(-2.9, -0.62);   // front bumper bottom
    s.lineTo(-2.9, 0.28);    // front bumper top
    s.lineTo(-2.55, 0.42);   // grille top
    s.lineTo(-2.25, 0.86);   // hood start
    s.lineTo(-1.30, 1.06);   // hood top / cowl
    s.lineTo(-0.85, 1.72);   // windshield base
    s.lineTo(-0.30, 2.05);   // roof front
    s.lineTo(0.35, 2.18);    // roof top
    s.lineTo(1.05, 2.18);    // roof mid
    s.lineTo(1.60, 2.08);    // roof rear
    s.lineTo(2.15, 1.62);    // rear window top
    s.lineTo(2.45, 1.08);    // trunk lid top
    s.lineTo(2.85, 0.42);    // rear bumper top
    s.lineTo(2.85, -0.62);   // rear bumper bottom
    s.lineTo(-2.9, -0.62);   // underbody back to front
    return s;
}

/* ---------- part builder ---------- */
/* Adds a mesh (or group child) as an interactive part. */
function addPart(mesh, id, name, category, color, opts = {}) {
    mesh.userData = { partId: id, partName: name, category, partColor: color, labelOffset: opts.labelOffset || new THREE.Vector3(0, 0.55, 0) };
    mesh.name = id;
    CAR_PARTS.push(mesh);
    return mesh;
}

function buildBody() {
    const shape = sideProfileShape();
    const extrudeSettings = { depth: 1.35, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.03, bevelSegments: 3 };
    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    // Center the extruded geometry on Z=0 (front/back faces at ±depth/2)
    geo.translate(0, 0, -0.675);
    const mesh = new THREE.Mesh(geo, mat(C.body, { roughness: 0.35, metalness: 0.7 }));
    addPart(mesh, 'body', 'Кузов автомобиля', 'chassis', C.body);
    return mesh;
}

function makeWindow(shapeFn, x, y, z, color, rotY = 0) {
    // Generic window: thin extruded shape placed at given spot
    const sh = new THREE.Shape();
    sh.moveTo(-0.32, -0.30); sh.lineTo(0.32, -0.30); sh.lineTo(0.22, 0.30); sh.lineTo(-0.22, 0.30); sh.closePath();
    const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.06, bevelEnabled: false });
    geo.translate(0, 0, -0.03);
    const m = new THREE.Mesh(geo, mat(color, { transparent: true, opacity: 0.85 }));
    m.position.set(x, y, z + 0.675); // sit on front face
    if (rotY) m.rotation.y = rotY;
    return m;
}

function buildCar() {
    const group = new THREE.Group();

    // ---------- Body ----------
    const body = buildBody();
    group.add(body);

    // ---------- Windows (cabin) ----------
    const winMats = mat(C.window, { transparent: true, opacity: 0.8 });
    // windshield + side windows as a set of tinted panes
    const windshield = new THREE.Mesh(new THREE.ExtrudeGeometry(
        (() => { const s = new THREE.Shape(); s.moveTo(-0.85,1.72); s.lineTo(-0.30,2.05); s.lineTo(0.05,2.12); s.lineTo(0.10,1.30); s.lineTo(-0.55,1.22); s.closePath(); })(), { depth: 0.05 }),
        winMats);
    windshield.position.set(-0.45, 1.65, 0.675);
    addPart(windshield, 'windshield', 'Лобовое стекло', 'chassis', C.window);
    group.add(windshield);

    const sideWindow = new THREE.Mesh(new THREE.ExtrudeGeometry(
        (() => { const s = new THREE.Shape(); s.moveTo(0.10,1.30); s.lineTo(0.10,1.92); s.lineTo(0.85,1.92); s.lineTo(0.85,1.30); s.closePath(); })(), { depth: 0.05 }),
        winMats);
    sideWindow.position.set(0.45, 1.6, 0.675);
    addPart(sideWindow, 'sideWindow', 'Боковое стекло', 'chassis', C.window);
    group.add(sideWindow);

    const rearWindow = new THREE.Mesh(new THREE.ExtrudeGeometry(
        (() => { const s = new THREE.Shape(); s.moveTo(0.85,1.30); s.lineTo(0.85,1.92); s.lineTo(2.15,1.62); s.lineTo(2.15,1.30); s.closePath(); })(), { depth: 0.05 }),
        winMats);
    rearWindow.position.set(1.5, 1.6, 0.675);
    addPart(rearWindow, 'rearWindow', 'Заднее стекло', 'chassis', C.window);
    group.add(rearWindow);

    // ---------- Lights ----------
    const headlight = new THREE.Mesh(new THREE.ExtrudeGeometry(
        (() => { const s = new THREE.Shape(); s.moveTo(-2.55,0.42); s.lineTo(-2.25,0.42); s.lineTo(-2.25,0.10); s.lineTo(-2.55,0.10); s.closePath(); })(), { depth: 0.25 }),
        mat(C.headlight));
    headlight.position.set(-2.4, 0.28, 0.695);
    addPart(headlight, 'headlight', 'Фара', 'optics', C.headlight);
    group.add(headlight);

    const taillight = new THREE.Mesh(new THREE.ExtrudeGeometry(
        (() => { const s = new THREE.Shape(); s.moveTo(2.85,0.42); s.lineTo(2.55,0.42); s.lineTo(2.55,0.10); s.lineTo(2.85,0.10); s.closePath(); })(), { depth: 0.25 }),
        mat(C.taillight));
    taillight.position.set(2.7, 0.28, 0.695);
    addPart(taillight, 'taillight', 'Задний фонарь', 'optics', C.taillight);
    group.add(taillight);

    // ---------- Grille ----------
    const grille = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.30, 0.30), mat(C.grille));
    grille.position.set(-2.42, 0.30, 0.72);
    addPart(grille, 'grille', 'Решётка радиатора', 'chassis', C.grille);
    group.add(grille);

    // ---------- Bumpers ----------
    const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.55, 1.30), mat(C.frontBumper));
    frontBumper.position.set(-2.95, -0.30, 0);
    addPart(frontBumper, 'frontBumper', 'Передний бампер', 'chassis', C.frontBumper);
    group.add(frontBumper);

    const rearBumper = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.55, 1.30), mat(C.rearBumper));
    rearBumper.position.set(2.95, -0.30, 0);
    addPart(rearBumper, 'rearBumper', 'Задний бампер', 'chassis', C.rearBumper);
    group.add(rearBumper);

    // ---------- Engine bay (front left) ----------
    const engineBlock = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.62, 0.95), mat(C.engine));
    engineBlock.position.set(-1.95, -0.10, 0.30);
    addPart(engineBlock, 'engineBlock', 'Двигатель (блок)', 'engine', C.engine);
    group.add(engineBlock);

    const intake = new THREE.Mesh(new THREE.ExtrudeGeometry(
        (() => { const s = new THREE.Shape(); s.moveTo(0,0); s.lineTo(0.45,0); s.lineTo(0.30,0.55); s.lineTo(0,0.55); s.closePath(); })(), { depth: 0.28 }),
        mat(C.intake));
    intake.position.set(-1.70, 0.55, 0.15); intake.rotation.z = Math.PI/4;
    addPart(intake, 'intake', 'Впускной коллектор', 'engine', C.intake);
    group.add(intake);

    const radiator = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.50, 0.70), mat(C.radiator));
    radiator.position.set(-2.28, 0.05, 0.20);
    addPart(radiator, 'radiator', 'Радиатор / интеркулер', 'engine', C.radiator);
    group.add(radiator);

    const airFilter = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.30, 16), mat(C.airFilter));
    airFilter.position.set(-1.60, 0.85, 0.25);
    addPart(airFilter, 'airFilter', 'Воздушный фильтр', 'engine', C.airFilter);
    group.add(airFilter);

    // ---------- Suspension & brakes (front wheel area) ----------
    // Coilover strut
    const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.70, 16), mat(C.suspension));
    strut.position.set(-1.05, -0.05, 0.35);
    addPart(strut, 'suspension', 'Стойка подвески (коиловер)', 'chassis', C.suspension);
    group.add(strut);

    const spring = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.025, 12, 32), mat(C.suspension));
    spring.rotation.x = Math.PI/2;
    spring.position.set(-1.05, -0.25, 0.35);
    addPart(spring, 'spring', 'Пружина подвески', 'chassis', C.suspension);
    group.add(spring);

    // Brake rotor + caliper
    const rotor = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.06, 32), mat(C.brakeRotor));
    rotor.rotation.z = Math.PI/2;
    rotor.position.set(-1.10, -0.42, 0.72);
    addPart(rotor, 'brakeRotor', 'Тормозной диск', 'brakes', C.brakeRotor);
    group.add(rotor);

    const caliper = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.16, 0.10), mat(C.brakeCaliper));
    caliper.position.set(-1.22, -0.42, 0.70);
    addPart(caliper, 'brakeCaliper', 'Тормозной суппорт', 'brakes', C.brakeCaliper);
    group.add(caliper);

    // ---------- Wheels ----------
    function makeWheel(x) {
        const g = new THREE.Group();
        const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.34, 40), mat(C.tire));
        tire.rotation.z = Math.PI/2;
        const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.41, 0.41, 0.30, 40), mat(C.rim));
        rim.rotation.z = Math.PI/2;
        const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.10, 0.34, 16), mat(C.dash));
        hub.rotation.z = Math.PI/2;
        g.add(tire); g.add(rim); g.add(hub);
        // 5 spokes
        for (let i = 0; i < 5; i++) {
            const a = (i / 5) * Math.PI * 2;
            const sp = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.30, 0.06), mat(C.rim));
            sp.position.set(Math.cos(a) * 0.18, Math.sin(a) * 0.18, 0);
            sp.rotation.z = a;
            g.add(sp);
        }
        g.position.set(x, -0.55, 0.72);
        // register tire & rim as interactive parts that scale the whole group
        const register = (m) => {
            m.userData = { partId: `wheel-${x<0?'front':'rear'}`, partName: x<0?'Передние колёса':'Задние колёса', category: 'chassis', partColor: C.rim, targetGroup: g, labelOffset: new THREE.Vector3(0, -0.75, 0) };
            m.name = m.userData.partId;
            CAR_PARTS.push(m);
        };
        register(tire); register(rim);
        group.add(g);
        return g;
    }
    makeWheel(-1.05);
    makeWheel(1.35);

    // ---------- Exhaust (rear, underbody) ----------
    const exhaustPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.95, 16), mat(C.exhaust));
    exhaustPipe.rotation.z = Math.PI/2;
    exhaustPipe.position.set(1.05, -0.50, 0.10);
    addPart(exhaustPipe, 'exhaust', 'Выпускная труба', 'engine', C.exhaust);
    group.add(exhaustPipe);

    const muffler = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.18, 0.24), mat(C.muffler));
    muffler.position.set(1.95, -0.50, 0);
    addPart(muffler, 'muffler', 'Глушитель', 'engine', C.muffler);
    group.add(muffler);

    // ---------- Interior ----------
    const seatF = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.22, 0.55), mat(C.seat));
    seatF.position.set(-0.10, -0.30, 0.30);
    addPart(seatF, 'seat', 'Сиденье водителя', 'chassis', C.seat);
    group.add(seatF);

    const steering = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.025, 12, 32), mat(C.steering));
    steering.rotation.x = Math.PI/2; steering.rotation.z = 0.35;
    steering.position.set(-0.75, 0.62, 0.62);
    addPart(steering, 'steering', 'Руль', 'chassis', C.steering);
    group.add(steering);

    const dash = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.18, 0.22), mat(C.dash));
    dash.position.set(-1.05, 0.48, 0.62);
    addPart(dash, 'dash', 'Панель приборов', 'chassis', C.dash);
    group.add(dash);

    // ---------- Spoiler ----------
    const spoiler = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.10, 0.25), mat(C.bodyDark));
    spoiler.position.set(2.30, 2.20, 0);
    addPart(spoiler, 'spoiler', 'Спойлер', 'chassis', C.bodyDark);
    group.add(spoiler);

    return group;
}

/* ---------- init ---------- */
function initCar3D() {
    const container = document.getElementById('car3d');
    if (!container) return;
    if (!hasWebGL()) {
        container.innerHTML = `
            <div class="webgl3d-fallback" style="height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:24px;color:var(--text-secondary);text-align:center;">
                ${renderIcon('car', 48)}
                <div style="font-size:14px;font-weight:700;color:var(--text-primary);">WebGL не поддерживается в этом браузере</div>
                <div style="font-size:12px;max-width:260px;opacity:0.8;">Трёхмерный осмотр узлов автомобиля недоступен</div>
            </div>`;
        return;
    }
    container.style.position = 'relative';
    container.style.overflow = 'hidden';

    const scene = new THREE.Scene();
    const W = container.clientWidth || 560, H = container.clientHeight || 340;
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 60);
    // Static side-three-quarter view of the car — no rotation / auto-spin
    camera.position.set(0, 1.6, 6.6);
    camera.lookAt(0, 0.15, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0'; renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%'; renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambient);
    const key = new THREE.DirectionalLight(0xffffff, 0.95);
    key.position.set(5, 9, 6);
    scene.add(key);
    const fill = new THREE.PointLight(0x2979ff, 0.5);
    fill.position.set(-5, 1, 4);
    scene.add(fill);
    const rimLight = new THREE.PointLight(0xffeb3b, 0.4);
    rimLight.position.set(5, 2, -4);
    scene.add(rimLight);

    const car = buildCar();
    scene.add(car);

    // Subtle ambient occlusion feel via a floor plane (very dark, transparent)
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.18 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.15;
    scene.add(floor);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const label = document.getElementById('car3d-label');
    if (!label) {
        const d = document.createElement('div');
        d.id = 'car3d-label';
        d.style.position = 'absolute';
        d.style.pointerEvents = 'none';
        d.style.zIndex = '20';
        d.style.display = 'none';
        d.style.padding = '8px 12px';
        d.style.borderRadius = '10px';
        d.style.background = 'rgba(6, 8, 12, 0.92)';
        d.style.border = '1px solid var(--border-color)';
        d.style.borderLeft = '4px solid var(--primary)';
        d.style.color = '#fff';
        d.style.fontSize = '13px';
        d.style.fontWeight = '800';
        d.style.whiteSpace = 'nowrap';
        d.style.maxWidth = '210px';
        d.style.textAlign = 'center';
        d.style.boxShadow = 'var(--shadow-lg)';
        d.style.transform = 'translate(-50%, -120%)';
        container.appendChild(d);
        label = d;
    }

    let hoverMesh = null;
    let hoverTarget = null; // mesh to scale
    let activeScale = 1;

    function positionLabel(worldPos) {
        const vec = worldPos.clone().project(camera);
        const rect = container.getBoundingClientRect();
        const cx = (vec.x * 0.5 + 0.5) * rect.width + rect.left;
        const cy = (1 - (vec.y * 0.5 + 0.5)) * rect.height + rect.top;
        const pad = 10;
        let left = cx;
        let top = cy - 8;
        const r = label.getBoundingClientRect();
        if (left + r.width > rect.right - pad) left = rect.right - r.width - pad;
        if (left < rect.left + pad) left = rect.left + pad;
        if (top + r.height > rect.bottom - pad) top = rect.bottom - r.height - pad;
        if (top < rect.top + pad) top = rect.top + pad;
        label.style.left = left + 'px';
        label.style.top = top + 'px';
    }

    function showLabel(id, name, category, worldPos) {
        label.textContent = escHtml(name);
        const link = document.createElement('a');
        link.href = category ? `catalog.html?category=${encodeURIComponent(category)}` : 'catalog.html';
        link.textContent = 'Подобрать детали →';
        link.style.display = 'block';
        link.style.marginTop = '6px';
        link.style.fontSize = '11px';
        link.style.color = 'var(--primary)';
        link.style.textDecoration = 'underline';
        link.style.fontWeight = '700';
        label.innerHTML = '';
        label.appendChild(document.createTextNode(escHtml(name)));
        const br = document.createElement('div'); br.style.height='4px'; label.appendChild(br);
        label.appendChild(link);
        label.style.display = 'block';
        positionLabel(worldPos);
    }

    function hideLabel() { label.style.display = 'none'; }

    container.addEventListener('pointermove', (e) => {
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(CAR_PARTS, false);
        if (hits.length) {
            const hit = hits[0].object;
            const partId = hit.userData && hit.userData.partId;
            const target = hit.userData && hit.userData.targetGroup ? hit.userData.targetGroup : hit;
            if (hoverMesh !== hit) {
                hoverMesh = hit;
                hoverTarget = target;
            }
            const wp = new THREE.Vector3();
            hit.getWorldPosition(wp);
            // apply part color tint to label
            showLabel(hit.userData.partId, hit.userData.partName, hit.userData.category, wp);
        } else {
            if (hoverMesh) { hoverMesh = null; hoverTarget = null; }
            hideLabel();
        }
    });
    container.addEventListener('pointerleave', () => { hoverMesh = null; hoverTarget = null; hideLabel(); });
    container.addEventListener('click', () => {
        if (hoverMesh && hoverMesh.userData) {
            const cat = hoverMesh.userData.category;
            window.location.href = cat ? `catalog.html?category=${encodeURIComponent(cat)}` : 'catalog.html';
        }
    });

    // Smooth scale animation for the hovered part (no camera rotation)
    let raf;
    function animate() {
        raf = requestAnimationFrame(animate);
        const targetScale = (hoverTarget && hoverMesh) ? 1.14 : 1;
        // lerp all hovered target; only one target at a time
        if (hoverTarget) {
            const s = hoverTarget.scale;
            const step = 0.14;
            s.x += (targetScale - s.x) * step;
            s.y += (targetScale - s.y) * step;
            s.z += (targetScale - s.z) * step;
        }
        renderer.render(scene, camera);
    }
    animate();

    const onResize = () => {
        const w = container.clientWidth || 560, h = container.clientHeight || 340;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        hideLabel();
    };
    window.addEventListener('resize', onResize);

    return {
        dispose: () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', onResize);
            renderer.dispose();
            scene.traverse((o) => {
                if (o.geometry) o.geometry.dispose();
                if (o.material) o.material.dispose();
            });
        }
    };
}

/* ==========================================================================
   17. GLOBAL INIT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initTheme();
    updateCartBadges();
    initIcons();
    if (document.getElementById('car3d')) initCar3D();
    initCarSelector();
    initGarageSelector();
    initHeaderSearch();
    initTabs();
    renderGarageBanner();
    renderFeatured();

    if (document.getElementById('catalog-products-grid')) initCatalogPage();
    if (document.getElementById('cart-items-container')) {
        renderCartPage();
        initCheckoutDeliveryLogic();
    }
    if (document.getElementById('product-detail-container')) initProductPage();

    const featuredGrid = document.getElementById('featured-products-grid');
    if (featuredGrid) {
        const featured = PRODUCTS_DATA.slice(0, 6);
        featuredGrid.innerHTML = featured.map(p => createProductCardHTML(p)).join('');
    }
});

/* expose for inline onclick in HTML */
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQty = updateCartQty;
window.openProduct = (id) => { window.location.href = `product.html?id=${id}`; };
window.openVINModal = openVINModal;
window.closeVINModal = closeVINModal;
window.submitVIN = submitVIN;
window.applyPromo = applyPromo;
window.completeCheckoutOrder = completeCheckoutOrder;
window.toggleTheme = toggleTheme;
window.__state = state;
