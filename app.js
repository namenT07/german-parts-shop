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
        icon: "💿",
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
        icon: "💿",
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
        icon: "⚡",
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
        icon: "⚙️",
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
        icon: "🛢️",
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
        icon: "🛞",
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
        icon: "⏹️",
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
        icon: "🔧",
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
        icon: "🛢️",
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
        icon: "💨",
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
        icon: "💡",
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
        icon: "🔌",
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
        icon: "💿",
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
        icon: "⚡",
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
        icon: "⚡",
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
        icon: "⚙️",
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
        icon: "🛢️",
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
        icon: "🛢️",
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
        icon: "💡",
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
        icon: "🔌",
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
        icon: "🛞",
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
        icon: "⏹️",
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
        icon: "⚙️",
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
        icon: "💨",
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

function showToast(message, icon = 'ℹ️') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
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
    showToast(`Переключено на ${state.theme === 'dark' ? 'тёмную' : 'светлую'} тему`, '🌓');
}
function updateThemeToggleIcons(theme) {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.innerHTML = theme === 'light' ? '🌙' : '☀️';
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
    showToast(`Добавлено в корзину: ${prod.title}`, '🛒');
}
function removeFromCart(productId) {
    state.cart = state.cart.filter(i => i.id !== productId);
    saveCart();
    showToast('Товар удален из корзины', '🗑️');
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
            if (!make) { showToast('Пожалуйста, выберите марку авто', '⚠️'); return; }
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
                showToast('Выберите марку и модель автомобиля', '⚠️');
                return;
            }
            saveState();
            renderGarageSummary();
            showToast('Автомобиль сохранён в «Моём гараже»', '✅');
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
            showToast('Гараж очищен', '🗑️');
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
        badge.textContent = '🚗 Нет авто';
        badge.title = 'Выберите автомобиль';
    } else {
        badge.textContent = '🚗 ' + [state.garage.make, state.garage.model, state.garage.year].filter(Boolean).join(' · ');
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
            showToast(`По VIN определена марка: ${brand}`, '🔍');
            return PRODUCTS_DATA.filter(p => p.makes.includes(brand));
        }
        showToast('Марка по VIN не определена — показан полный каталог', '⚠️');
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
                item.innerHTML = `<span>${p.icon}</span> <strong>${p.title}</strong> <span class="sdi-art">${p.art}</span>`;
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
        fitHtml = `<div class="fitment-badge ${fit.fits ? 'fit-yes' : 'fit-no'}" title="${fit.label}">${fit.fits ? '✅ Подходит' : '⚠️ Проверка'}</div>`;
    }
    return `
        <div class="product-card" data-id="${product.id}">
            ${fitHtml}
            <div class="card-top">
                <div class="img-box">
                    ${product.icon}
                    <span class="badge-tag ${badgeClass}">${badgeLabel}</span>
                </div>
                <div class="product-art">Арт: ${product.art}</div>
                <h4 class="product-title">${product.title}</h4>
                <div class="product-brand"><span>🏢 ${product.brand}</span></div>
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
                <button class="buy-btn-icon" onclick="addToCart('${product.id}')" title="Добавить в корзину">🛒</button>
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
                <div class="empty-icon">🔍</div>
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
        ${fit.fits ? '✅' : '⚠️'} ${fit.label} — ${[state.garage.make, state.garage.model, state.garage.year].filter(Boolean).join(' ')}
    </div>` : '';

    container.innerHTML = `
        <button class="btn-secondary" onclick="window.location.href='catalog.html'" style="margin-bottom:16px;">← К каталогу</button>
        <div class="product-detail">
            <div class="product-detail-gallery">
                <div class="product-detail-icon">${product.icon}</div>
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
                <button class="btn-primary" style="width:auto; padding:14px 28px; margin-top:12px;" onclick="addToCart('${product.id}')">Добавить в корзину 🛒</button>
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
                <div class="empty-icon">🛒</div>
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
                    <div class="cart-item-icon">${product.icon}</div>
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
                    <button class="btn-delete" onclick="removeFromCart('${product.id}')" title="Удалить товар">🗑️</button>
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
    if (!code) { state.promoCode = null; state.promoDiscount = 0; saveState(); renderCartPage(); showToast('Промокод удалён', 'ℹ️'); return; }
    if (promos[code] !== undefined) {
        state.promoCode = code;
        state.promoDiscount = promos[code];
        saveState();
        renderCartPage();
        showToast(`Промокод ${code}: скидка ${promos[code]}%`, '✅');
    } else {
        showToast('Неверный промокод. Попробуйте: SAVE10, AVTO20, WELCOME', '⚠️');
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
    if (cart.length === 0) { showToast('Ваша корзина пуста!', '⚠️'); return; }

    const nameInput = document.getElementById('checkoutName');
    const phoneInput = document.getElementById('checkoutPhone');
    const addressInput = document.getElementById('addressInput');
    const selectedDel = document.querySelector('input[name="delType"]:checked');

    if (nameInput && !nameInput.value.trim()) { showToast('Пожалуйста, укажите имя и фамилию', '⚠️'); nameInput.focus(); return; }
    if (phoneInput && !phoneInput.value.trim()) { showToast('Пожалуйста, укажите контактный телефон', '⚠️'); phoneInput.focus(); return; }
    if (addressInput && !addressInput.disabled && !addressInput.value.trim()) {
        showToast('Пожалуйста, укажите адрес доставки', '⚠️'); addressInput.focus(); return;
    }

    const orderNumber = 'GA-' + Math.floor(100000 + Math.random() * 900000);
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
        <div class="modal-card">
            <div class="modal-icon">✅</div>
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
                <div class="modal-icon">🔍</div>
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
   17. GLOBAL INIT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initTheme();
    updateCartBadges();
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
