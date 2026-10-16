/* GERMANAUTO — Premium Ecosystem Interactive Engine */

// Mock Database of Premium Auto Components
const PRODUCTS_DATA = [
    {
        id: "p1",
        art: "8E0 615 301 A",
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
        makes: ["Audi", "Volkswagen"]
    },
    {
        id: "p2",
        art: "0 986 479 042",
        title: "Тормозной диск серии Premium Ceramic",
        brand: "Bosch",
        category: "brakes",
        type: "analog",
        price: 4890,
        stock: "order",
        stockText: "Под заказ (1 день)",
        delivery: "Завтра",
        rating: 4.7,
        reviews: 28,
        icon: "💿",
        makes: ["Audi", "BMW", "Mercedes-Benz"]
    },
    {
        id: "p3",
        art: "12 12 0 037 582",
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
        makes: ["BMW"]
    },
    {
        id: "p4",
        art: "A 271 050 01 11",
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
        makes: ["Mercedes-Benz"]
    },
    {
        id: "p5",
        art: "55573746-MANN",
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
        makes: ["Audi", "BMW", "Mercedes-Benz", "Porsche", "Volkswagen"]
    },
    {
        id: "p6",
        art: "313 367 010",
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
        makes: ["BMW"]
    },
    {
        id: "p7",
        art: "971 615 301 B",
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
        makes: ["Porsche", "Audi"]
    },
    {
        id: "p8",
        art: "8K0 407 505 N",
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
        makes: ["Audi"]
    },
    {
        id: "p9",
        art: "A 000 989 92 02",
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
        makes: ["Mercedes-Benz"]
    },
    {
        id: "p10",
        art: "C30005-MANN",
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
        makes: ["Audi", "Volkswagen"]
    },
    {
        id: "p11",
        art: "63 11 7 419 630",
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
        makes: ["BMW"]
    },
    {
        id: "p12",
        art: "1K0 959 263 A",
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
        makes: ["Audi", "Volkswagen"]
    }
];

// Car Selector Options Data
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

/* --- Theme Management Engine --- */
function initTheme() {
    const savedTheme = localStorage.getItem('ga_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleIcons(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('ga_theme', currentTheme);
    updateThemeToggleIcons(currentTheme);
    showToast(`Переключено на ${currentTheme === 'dark' ? 'тёмную' : 'светлую'} тему`, '🌓');
}

function updateThemeToggleIcons(theme) {
    const btns = document.querySelectorAll('.theme-toggle-btn');
    btns.forEach(btn => {
        btn.innerHTML = theme === 'light' ? '🌙' : '☀️';
        btn.title = theme === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему';
    });
}

/* --- Cart State Engine --- */
function getCart() {
    try {
        const cart = JSON.parse(localStorage.getItem('ga_cart'));
        return Array.isArray(cart) ? cart : getDefaultCart();
    } catch (e) {
        return getDefaultCart();
    }
}

function getDefaultCart() {
    return [
        { id: "p1", qty: 1 },
        { id: "p3", qty: 2 }
    ];
}

function saveCart(cart) {
    localStorage.setItem('ga_cart', JSON.stringify(cart));
    updateCartBadges();
}

function addToCart(productId, qty = 1) {
    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].qty += qty;
    } else {
        cart.push({ id: productId, qty: qty });
    }

    saveCart(cart);
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    showToast(`Добавлено в корзину: ${prod ? prod.title : 'Деталь'}`, '🛒');
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    showToast('Товар удален из корзины', '🗑️');
    if (typeof renderCartPage === 'function') {
        renderCartPage();
    }
}

function updateCartQty(productId, newQty) {
    let cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.qty = Math.max(1, newQty);
        saveCart(cart);
        if (typeof renderCartPage === 'function') {
            renderCartPage();
        }
    }
}

function updateCartBadges() {
    const cart = getCart();
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const badgeEls = document.querySelectorAll('.cart-count, .cart-badge');
    badgeEls.forEach(el => {
        el.textContent = totalCount;
        el.style.display = totalCount > 0 ? 'inline-block' : 'none';
    });
}

/* --- Toast Notification Engine --- */
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

/* --- Car Selector Dropdown Handler --- */
function initCarSelector() {
    const makeSelect = document.getElementById('makeSelect');
    const modelSelect = document.getElementById('modelSelect');
    const genSelect = document.getElementById('genSelect');
    const searchBtn = document.getElementById('searchBtn');

    if (!makeSelect || !modelSelect || !genSelect) return;

    makeSelect.addEventListener('change', () => {
        const selectedMake = makeSelect.value;
        modelSelect.innerHTML = '<option value="">Выбрать Модель</option>';
        genSelect.innerHTML = '<option value="">Год / Кузов</option>';
        genSelect.disabled = true;

        if (selectedMake && CAR_DATA[selectedMake]) {
            modelSelect.disabled = false;
            Object.keys(CAR_DATA[selectedMake]).forEach(model => {
                const opt = document.createElement('option');
                opt.value = model;
                opt.textContent = model;
                modelSelect.appendChild(opt);
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
                const opt = document.createElement('option');
                opt.value = gen;
                opt.textContent = gen;
                genSelect.appendChild(opt);
            });
        } else {
            genSelect.disabled = true;
        }
    });

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const make = makeSelect.value;
            const model = modelSelect.value;
            if (!make) {
                showToast('Пожалуйста, выберите марку авто', '⚠️');
                return;
            }
            window.location.href = `catalog.html?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`;
        });
    }
}

/* --- Product Card HTML Generator --- */
function createProductCardHTML(product) {
    const priceFormatted = product.price.toLocaleString('ru-RU') + ' ₽';
    const isOem = product.type === 'oem';
    const badgeClass = isOem ? 'badge-oem' : 'badge-analog';
    const badgeLabel = isOem ? 'OEM Оригинал' : 'Аналог Premium';
    const stockClass = product.stock === 'in' ? 'stock-in' : 'stock-order';

    return `
        <div class="product-card" data-id="${product.id}">
            <div class="card-top">
                <div class="img-box">
                    ${product.icon}
                    <span class="badge-tag ${badgeClass}">${badgeLabel}</span>
                </div>
                <div class="product-art">Арт: ${product.art}</div>
                <h4 class="product-title">${product.title}</h4>
                <div class="product-brand">
                    <span>🏢 ${product.brand}</span>
                </div>
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

/* --- Catalog Logic Engine --- */
function initCatalogPage() {
    const catalogGrid = document.getElementById('catalog-products-grid');
    if (!catalogGrid) return;

    const urlParams = new URLSearchParams(window.location.search);
    const filterMake = urlParams.get('make');
    const filterQuery = urlParams.get('q');

    let currentProducts = [...PRODUCTS_DATA];

    if (filterMake) {
        currentProducts = currentProducts.filter(p => p.makes.includes(filterMake));
    }
    if (filterQuery) {
        const q = filterQuery.toLowerCase();
        currentProducts = currentProducts.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.art.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q)
        );
    }

    renderCatalogGrid(currentProducts);
    initFilterListeners(currentProducts);
}

function renderCatalogGrid(products) {
    const catalogGrid = document.getElementById('catalog-products-grid');
    const resultsCountEl = document.getElementById('results-count');

    if (!catalogGrid) return;

    if (resultsCountEl) {
        resultsCountEl.textContent = `Найдено позиций: ${products.length}`;
    }

    if (products.length === 0) {
        catalogGrid.innerHTML = `
            <div class="empty-state span-full" style="grid-column: 1 / -1;">
                <div class="empty-icon">🔍</div>
                <div class="empty-title">Запчасти не найдены</div>
                <div class="empty-desc">Попробуйте изменить параметры фильтра или сбросить критерии поиска.</div>
                <button class="btn-secondary" style="margin-top:12px;" onclick="window.location.href='catalog.html'">Сбросить все фильтры</button>
            </div>
        `;
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
        let filtered = [...allProducts];

        // Search Filter
        if (searchInput && searchInput.value.trim() !== '') {
            const query = searchInput.value.trim().toLowerCase();
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(query) ||
                p.art.toLowerCase().includes(query) ||
                p.brand.toLowerCase().includes(query)
            );
        }

        // Category Filter
        const selectedCats = Array.from(categoryCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        if (selectedCats.length > 0) {
            filtered = filtered.filter(p => selectedCats.includes(p.category));
        }

        // Type Filter (OEM vs Analog)
        const selectedTypes = Array.from(typeCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        if (selectedTypes.length > 0) {
            filtered = filtered.filter(p => selectedTypes.includes(p.type));
        }

        // Price Filter
        if (minPriceInput && minPriceInput.value) {
            const minP = parseFloat(minPriceInput.value);
            if (!isNaN(minP)) filtered = filtered.filter(p => p.price >= minP);
        }
        if (maxPriceInput && maxPriceInput.value) {
            const maxP = parseFloat(maxPriceInput.value);
            if (!isNaN(maxP)) filtered = filtered.filter(p => p.price <= maxP);
        }

        // Sorting
        if (sortSelect) {
            const sortVal = sortSelect.value;
            if (sortVal === 'price-asc') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sortVal === 'price-desc') {
                filtered.sort((a, b) => b.price - a.price);
            } else if (sortVal === 'rating') {
                filtered.sort((a, b) => b.rating - a.rating);
            }
        }

        renderCatalogGrid(filtered);
    }

    if (searchInput) searchInput.addEventListener('input', filterAndRender);
    if (sortSelect) sortSelect.addEventListener('change', filterAndRender);
    if (minPriceInput) minPriceInput.addEventListener('input', filterAndRender);
    if (maxPriceInput) maxPriceInput.addEventListener('input', filterAndRender);
    categoryCheckboxes.forEach(cb => cb.addEventListener('change', filterAndRender));
    typeCheckboxes.forEach(cb => cb.addEventListener('change', filterAndRender));
}

/* --- Cart & Checkout Page Logic --- */
function renderCartPage() {
    const container = document.getElementById('cart-items-container');
    const partsCostEl = document.getElementById('parts-cost');
    const totalCostEl = document.getElementById('totalCostText');
    const delCostEl = document.getElementById('delCostText');

    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🛒</div>
                <div class="empty-title">Ваша корзина пуста</div>
                <div class="empty-desc">Выберите качественные запчасти для вашего автомобиля в нашем каталоге</div>
                <a href="catalog.html" class="btn-primary" style="margin-top:16px; width:auto; padding:12px 28px;">Перейти в каталог</a>
            </div>
        `;
        if (partsCostEl) partsCostEl.textContent = '0 ₽';
        if (totalCostEl) totalCostEl.textContent = '0 ₽';
        return;
    }

    let totalPartsPrice = 0;

    const itemsHTML = cart.map(item => {
        const product = PRODUCTS_DATA.find(p => p.id === item.id);
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
                        <button class="qty-btn" onclick="updateCartQty('${product.id}', ${item.qty - 1})">-</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-btn" onclick="updateCartQty('${product.id}', ${item.qty + 1})">+</button>
                    </div>
                    <div class="item-price">${itemTotal.toLocaleString('ru-RU')} ₽</div>
                    <button class="btn-delete" onclick="removeFromCart('${product.id}')" title="Удалить товар">🗑️</button>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = itemsHTML;

    // Delivery cost calculation
    let deliveryCost = 0;
    const selectedDel = document.querySelector('input[name="delType"]:checked');
    if (selectedDel) {
        if (selectedDel.value === 'cdek') deliveryCost = 450;
        if (selectedDel.value === 'courier') deliveryCost = 600;
    }

    if (partsCostEl) partsCostEl.textContent = totalPartsPrice.toLocaleString('ru-RU') + ' ₽';
    if (delCostEl) delCostEl.textContent = deliveryCost.toLocaleString('ru-RU') + ' ₽';
    if (totalCostEl) totalCostEl.textContent = (totalPartsPrice + deliveryCost).toLocaleString('ru-RU') + ' ₽';
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
                        addressInput.disabled = true;
                        addressInput.style.opacity = '0.4';
                        addressInput.required = false;
                        addressInput.placeholder = 'Адрес не требуется для самовывоза';
                    } else {
                        addressInput.disabled = false;
                        addressInput.style.opacity = '1';
                        addressInput.required = true;
                        addressInput.placeholder = 'Адрес доставки (Улица, дом, квартира/офис) *';
                    }
                }
                renderCartPage();
            }
        });
    });
}

function completeCheckoutOrder() {
    const cart = getCart();
    if (cart.length === 0) {
        showToast('Ваша корзина пуста!', '⚠️');
        return;
    }

    const nameInput = document.getElementById('checkoutName');
    const phoneInput = document.getElementById('checkoutPhone');

    if (nameInput && !nameInput.value.trim()) {
        showToast('Пожалуйста, укажите имя и фамилию', '⚠️');
        nameInput.focus();
        return;
    }

    if (phoneInput && !phoneInput.value.trim()) {
        showToast('Пожалуйста, укажите ваш контактный телефон', '⚠️');
        phoneInput.focus();
        return;
    }

    // Modal Confirmation Popup
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
        <div class="modal-card">
            <div class="modal-icon">✅</div>
            <h2 style="font-size:22px; font-weight:900;">Заказ успешно оформлен!</h2>
            <p style="font-size:14px; color:var(--text-secondary); line-height:1.5;">
                Номер вашего заказа: <strong style="color:var(--primary);">#GA-${Math.floor(100000 + Math.random() * 900000)}</strong><br>
                Менеджер свяжется с вами по номеру <strong>${phoneInput ? phoneInput.value : ''}</strong> в течение 10 минут.
            </p>
            <button class="btn-primary" onclick="this.closest('.modal-overlay').remove(); localStorage.removeItem('ga_cart'); window.location.href='index.html';">
                Вернуться на главную
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

/* --- Global Header Search Init --- */
function initHeaderSearch() {
    const searchInputs = document.querySelectorAll('.header-search-input');
    searchInputs.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                window.location.href = `catalog.html?q=${encodeURIComponent(input.value.trim())}`;
            }
        });
    });
}

/* --- Global Tab Toggle (Auto vs VIN) --- */
function initTabs() {
    const tabAuto = document.getElementById('tabAutoBtn');
    const tabVin = document.getElementById('tabVinBtn');
    const panelAuto = document.getElementById('panelAuto');
    const panelVin = document.getElementById('panelVin');

    if (tabAuto && tabVin && panelAuto && panelVin) {
        tabAuto.addEventListener('click', () => {
            tabAuto.classList.add('active');
            tabVin.classList.remove('active');
            panelAuto.style.display = 'grid';
            panelVin.style.display = 'none';
        });

        tabVin.addEventListener('click', () => {
            tabVin.classList.add('active');
            tabAuto.classList.remove('active');
            panelVin.style.display = 'grid';
            panelAuto.style.display = 'none';
        });
    }
}

/* --- Global App Initialization --- */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateCartBadges();
    initCarSelector();
    initHeaderSearch();
    initTabs();

    // Check page context
    if (document.getElementById('catalog-products-grid')) {
        initCatalogPage();
    }

    if (document.getElementById('cart-items-container')) {
        renderCartPage();
        initCheckoutDeliveryLogic();
    }

    // Populate Featured Grid on Index Page
    const featuredGrid = document.getElementById('featured-products-grid');
    if (featuredGrid) {
        const featured = PRODUCTS_DATA.slice(0, 6);
        featuredGrid.innerHTML = featured.map(p => createProductCardHTML(p)).join('');
    }
});
