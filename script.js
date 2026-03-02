/* ============================================================
   BON MIEL — script.js
   Fullstack & Dynamique : panier, commandes, avis, recherche,
   filtres, wishlist, slider, animations, formulaires WhatsApp
   ============================================================ */

'use strict';

/* ═══════════════════════════════════════════════════════════
   0. DONNÉES — PRODUITS & AVIS INITIAUX
   ═══════════════════════════════════════════════════════════ */

const PRODUCTS = [
    {
        id: 1,
        name: 'Miel de Fleurs Sauvages',
        shortDesc: 'Doux et fruité, idéal au quotidien.',
        fullDesc: 'Récolté dans les prairies ivoiriennes, ce miel de fleurs sauvages offre une douceur florale avec des notes fruitées légères. Parfait pour le thé, les yaourts ou à la cuillère.',
        price: 7000,
        oldPrice: null,
        image: './image/p1.png',
        category: 'floral',
        badge: null,
        weight: '500g',
        origin: 'Abidjan, CI',
        harvest: '2024',
        stars: 5,
        reviews: 48,
        details: [
            { icon: 'bx-leaf',       text: '100% naturel, sans additifs' },
            { icon: 'bx-shield',     text: 'Certifié artisanal' },
            { icon: 'bx-droplet',    text: 'Viscosité : moyenne' },
            { icon: 'bxs-thermometer', text: 'Cristallisation lente' },
        ]
    },
    {
        id: 2,
        name: 'Miel de Forêt Noir',
        shortDesc: 'Intense et minéral, saveur boisée profonde.',
        fullDesc: 'Issu des zones forestières de Côte d\'Ivoire, ce miel sombre développe des arômes complexes et boisés. Idéal pour les vinaigrettes, fromages et desserts raffinés.',
        price: 9000,
        oldPrice: null,
        image: './image/p2.png',
        category: 'foret',
        badge: 'Nouveau',
        weight: '500g',
        origin: 'Région forestière, CI',
        harvest: '2024',
        stars: 5,
        reviews: 32,
        details: [
            { icon: 'bx-leaf',       text: 'Saveur boisée unique' },
            { icon: 'bx-shield',     text: 'Anti-oxydants élevés' },
            { icon: 'bx-droplet',    text: 'Viscosité : épaisse' },
            { icon: 'bxs-thermometer', text: 'Cristallisation lente' },
        ]
    },
    {
        id: 3,
        name: 'Miel d\'Acacia Bio',
        shortDesc: 'Léger et transparent, le plus doux de la gamme.',
        fullDesc: 'Ce miel d\'acacia certifié bio est le favori des enfants et des palais délicats. Sa texture liquide et sa couleur ambrée claire en font un incontournable.',
        price: 6000,
        oldPrice: 7500,
        image: './image/p3.png',
        category: 'bio',
        badge: 'Promo',
        weight: '350g',
        origin: 'Korhogo, CI',
        harvest: '2024',
        stars: 4,
        reviews: 61,
        details: [
            { icon: 'bx-leaf',       text: 'Certifié Bio' },
            { icon: 'bx-shield',     text: 'Hypoallergénique' },
            { icon: 'bx-droplet',    text: 'Viscosité : liquide' },
            { icon: 'bxs-thermometer', text: 'Cristallisation très lente' },
        ]
    },
    {
        id: 4,
        name: 'Miel Royal Premium',
        shortDesc: 'Notre cuvée d\'exception — arômes exquis.',
        fullDesc: 'La sélection suprême de notre gamme. Ce miel premium est récolté une seule fois par an, dans des ruches soigneusement entretenues par nos maîtres apiculteurs. Un trésor de saveurs.',
        price: 10000,
        oldPrice: null,
        image: './image/p4.png',
        category: 'premium',
        badge: 'Premium',
        weight: '500g',
        origin: 'Sélection nationale, CI',
        harvest: '2024',
        stars: 5,
        reviews: 24,
        details: [
            { icon: 'bx-star',       text: 'Cuvée limitée — 1 récolte/an' },
            { icon: 'bx-shield',     text: 'Contrôle qualité exigeant' },
            { icon: 'bx-droplet',    text: 'Viscosité : dense' },
            { icon: 'bxs-thermometer', text: 'Cristallisation modérée' },
        ]
    },
    {
        id: 5,
        name: 'Miel de Thym & Herbes',
        shortDesc: 'Aromatique et thérapeutique, vertus reconnues.',
        fullDesc: 'Ce miel aux herbes aromatiques est apprécié pour ses propriétés antiseptiques et ses arômes herbacés puissants. Idéal pour les remèdes naturels et les tisanes.',
        price: 8500,
        oldPrice: null,
        image: './image/p1.png',
        category: 'bio',
        badge: null,
        weight: '250g',
        origin: 'Bouaké, CI',
        harvest: '2024',
        stars: 5,
        reviews: 19,
        details: [
            { icon: 'bx-leaf',       text: 'Propriétés antiseptiques' },
            { icon: 'bx-shield',     text: 'Médecine naturelle' },
            { icon: 'bx-droplet',    text: 'Viscosité : semi-liquide' },
            { icon: 'bxs-thermometer', text: 'Cristallisation rapide' },
        ]
    },
    {
        id: 6,
        name: 'Miel de Manguier',
        shortDesc: 'Goût tropical exotique, douceur ivoirienne.',
        fullDesc: 'Récolté autour des manguiers en floraison, ce miel rare dégage des notes tropicales légèrement sucrées. Un produit exclusivement ivoirien qui fera voyager vos papilles.',
        price: 11500,
        oldPrice: null,
        image: './image/p2.png',
        category: 'floral',
        badge: 'Exclusif',
        weight: '500g',
        origin: 'Yamoussoukro, CI',
        harvest: '2024',
        stars: 5,
        reviews: 15,
        details: [
            { icon: 'bx-leaf',       text: 'Notes tropicales uniques' },
            { icon: 'bx-star',       text: 'Produit exclusif CI' },
            { icon: 'bx-droplet',    text: 'Viscosité : épaisse' },
            { icon: 'bxs-thermometer', text: 'Cristallisation lente' },
        ]
    }
];

const INITIAL_REVIEWS = [
    {
        id: 1,
        name: 'Paul Dupains',
        job: 'Youtubeur',
        text: 'Un miel d\'une qualité exceptionnelle ! Je ne consomme plus que celui-là depuis des mois. La saveur est incomparable et on sent vraiment que c\'est du naturel.',
        stars: 5,
        avatar: './image/r1.jpg',
        date: '2024-11-15'
    },
    {
        id: 2,
        name: 'Sarah Dumatin',
        job: 'Créatrice de contenu',
        text: 'J\'adore le miel de forêt noir ! Je l\'utilise dans mes recettes de pâtisserie et ça change tout. Livraison rapide et emballage soigné. Je recommande vivement !',
        stars: 5,
        avatar: './image/r2.jpg',
        date: '2024-12-03'
    },
    {
        id: 3,
        name: 'Jean Dupond',
        job: 'Blogueur alimentaire',
        text: 'Enfin un vrai miel artisanal à Abidjan. Le Miel Royal Premium est une découverte. Le goût est profond, complexe, rien à voir avec ce qu\'on trouve en supermarché.',
        stars: 5,
        avatar: './image/r3.jpg',
        date: '2025-01-08'
    },
    {
        id: 4,
        name: 'Aïcha Konaté',
        job: 'Diététicienne',
        text: 'En tant que professionnelle de la nutrition, je conseille ce miel à tous mes clients. La transparence sur la provenance et la qualité bio sont des points très importants.',
        stars: 5,
        avatar: null,
        date: '2025-01-22'
    },
    {
        id: 5,
        name: 'Modeste Yao',
        job: 'Chef cuisinier',
        text: 'Le miel de manguier est une vraie trouvaille pour ma cuisine. Des notes tropicales incroyables qui subliment mes sauces et marinades. Bravo à toute l\'équipe !',
        stars: 5,
        avatar: null,
        date: '2025-02-10'
    }
];

/* ═══════════════════════════════════════════════════════════
   1. STATE — Données réactives (localStorage persisté)
   ═══════════════════════════════════════════════════════════ */

const STATE = {
    cart:     JSON.parse(localStorage.getItem('bm_cart')     || '[]'),
    wishlist: JSON.parse(localStorage.getItem('bm_wishlist') || '[]'),
    reviews:  JSON.parse(localStorage.getItem('bm_reviews')  || JSON.stringify(INITIAL_REVIEWS)),
    orders:   JSON.parse(localStorage.getItem('bm_orders')   || '[]'),
    filter:   'all',
    search:   '',
    sliderIdx: 0,
    modalQty:  1,
    modalProduct: null,
    selectedStars: 5,
};

function save() {
    localStorage.setItem('bm_cart',     JSON.stringify(STATE.cart));
    localStorage.setItem('bm_wishlist', JSON.stringify(STATE.wishlist));
    localStorage.setItem('bm_reviews',  JSON.stringify(STATE.reviews));
    localStorage.setItem('bm_orders',   JSON.stringify(STATE.orders));
}

/* ═══════════════════════════════════════════════════════════
   2. HELPERS
   ═══════════════════════════════════════════════════════════ */

const fmt = n => n.toLocaleString('fr-FR') + ' FCFA';

function stars(n) {
    return Array.from({ length: 5 }, (_, i) =>
        `<i class='bx bxs-star' style="color:${i < n ? 'var(--honey)' : 'rgba(232,146,10,0.2)'}"></i>`
    ).join('');
}

function toast(msg, type = 'info', icon = 'bx-info-circle') {
    const c = document.getElementById('toastContainer');
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    const icons = { success: 'bx-check-circle', error: 'bx-error', info: 'bx-cart-add' };
    t.innerHTML = `<i class='bx ${icons[type] || icon}'></i><span>${msg}</span>`;
    c.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(50px)'; }, 3200);
    setTimeout(() => t.remove(), 3600);
}

function openModal(id)  { document.getElementById(id).classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('open'); document.body.style.overflow = ''; }

/* ═══════════════════════════════════════════════════════════
   3. CART — Panier
   ═══════════════════════════════════════════════════════════ */

function cartTotal() {
    return STATE.cart.reduce((s, i) => s + i.price * i.qty, 0);
}
function cartCount() {
    return STATE.cart.reduce((s, i) => s + i.qty, 0);
}

function addToCart(id, qty = 1) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const item = STATE.cart.find(x => x.id === id);
    if (item) { item.qty += qty; }
    else       { STATE.cart.push({ id: p.id, name: p.name, price: p.price, image: p.image, qty }); }
    save();
    renderCart();
    updateBadges();
    toast(`${p.name} ajouté au panier 🛒`, 'info');
}

function removeFromCart(id) {
    STATE.cart = STATE.cart.filter(x => x.id !== id);
    save();
    renderCart();
    updateBadges();
}

function updateQty(id, delta) {
    const item = STATE.cart.find(x => x.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty < 1) removeFromCart(id);
    else { save(); renderCart(); updateBadges(); }
}

function renderCart() {
    const el     = document.getElementById('cartItems');
    const empty  = document.getElementById('cartEmpty');
    const footer = document.getElementById('cartFooter');
    const badge  = document.getElementById('cartCountBadge');

    badge.textContent = cartCount();

    if (!STATE.cart.length) {
        empty.style.display = 'block';
        el.innerHTML = '';
        footer.style.display = 'none';
        return;
    }
    empty.style.display = 'none';
    footer.style.display = 'block';

    el.innerHTML = STATE.cart.map(item => `
        <li class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='./image/p1.png'">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${fmt(item.price * item.qty)}</p>
            </div>
            <div class="cart-item-controls">
                <div class="qty-btns">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, +1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class='bx bx-trash'></i></button>
            </div>
        </li>
    `).join('');

    document.getElementById('cartTotal').textContent = fmt(cartTotal());
}

/* ═══════════════════════════════════════════════════════════
   4. WISHLIST — Favoris
   ═══════════════════════════════════════════════════════════ */

function toggleWish(id) {
    const idx = STATE.wishlist.indexOf(id);
    if (idx > -1) { STATE.wishlist.splice(idx, 1); toast('Retiré des favoris', 'info'); }
    else           { STATE.wishlist.push(id);       toast('Ajouté aux favoris ❤️', 'success'); }
    save();
    updateBadges();
    renderShop();
    renderWishlist();
}

function renderWishlist() {
    const sec  = document.getElementById('wishlistSection');
    const grid = document.getElementById('wishlistGrid');
    if (!STATE.wishlist.length) { sec.style.display = 'none'; return; }
    sec.style.display = 'block';
    const favs = PRODUCTS.filter(p => STATE.wishlist.includes(p.id));
    grid.innerHTML = favs.map(p => productCard(p)).join('');
}

/* ═══════════════════════════════════════════════════════════
   5. BADGES header
   ═══════════════════════════════════════════════════════════ */

function updateBadges() {
    const cc = cartCount();
    const wc = STATE.wishlist.length;

    const cb = document.getElementById('cartBadge');
    const wb = document.getElementById('wishBadge');

    cb.textContent = cc;
    cb.style.display = cc ? 'flex' : 'none';
    wb.textContent = wc;
    wb.style.display = wc ? 'flex' : 'none';
}

/* ═══════════════════════════════════════════════════════════
   6. SHOP — Grille produits
   ═══════════════════════════════════════════════════════════ */

function productCard(p) {
    const wished = STATE.wishlist.includes(p.id);
    const starsHTML = Array.from({ length: 5 }, (_, i) =>
        `<i class='bx bxs-star' style="color:${i < p.stars ? 'var(--honey)' : 'rgba(232,146,10,0.2)'}"></i>`
    ).join('');

    return `
    <div class="product-card sa up" data-cat="${p.category}" data-id="${p.id}">
        <div class="product-img-wrap">
            <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='./image/p1.png'">
            <span class="product-cat-badge">${p.category}</span>
            ${p.badge ? `<span class="product-new-badge">${p.badge}</span>` : ''}
            <button class="product-wish-btn ${wished ? 'active' : ''}"
                    onclick="event.stopPropagation();toggleWish(${p.id})"
                    title="${wished ? 'Retirer des favoris' : 'Ajouter aux favoris'}">
                <i class='bx ${wished ? 'bxs-heart' : 'bx-heart'}'></i>
            </button>
        </div>
        <div class="product-body" onclick="openProductModal(${p.id})">
            <div class="product-stars">${starsHTML}</div>
            <h3 class="product-name">${p.name}</h3>
            <p class="product-desc">${p.shortDesc}</p>
            <div class="product-footer">
                <div class="product-price">
                    ${p.oldPrice ? `<span class="old-price">${fmt(p.oldPrice)}</span>` : ''}
                    ${fmt(p.price)}
                </div>
                <div class="product-actions">
                    <button class="btn-detail" onclick="event.stopPropagation();openProductModal(${p.id})">
                        <i class='bx bx-expand-alt'></i>
                    </button>
                    <button class="btn-add-cart" onclick="event.stopPropagation();addToCart(${p.id})">
                        <i class='bx bx-cart-add'></i> Ajouter
                    </button>
                </div>
            </div>
        </div>
    </div>`;
}

function filteredProducts() {
    return PRODUCTS.filter(p => {
        const matchCat    = STATE.filter === 'all' || p.category === STATE.filter;
        const matchSearch = !STATE.search ||
            p.name.toLowerCase().includes(STATE.search.toLowerCase()) ||
            p.shortDesc.toLowerCase().includes(STATE.search.toLowerCase()) ||
            p.category.toLowerCase().includes(STATE.search.toLowerCase());
        return matchCat && matchSearch;
    });
}

function renderShop() {
    const grid  = document.getElementById('shopGrid');
    const empty = document.getElementById('shopEmpty');
    const info  = document.getElementById('searchInfo');
    const list  = filteredProducts();

    if (STATE.search) {
        info.style.display = 'flex';
        document.getElementById('searchInfoText').textContent =
            `${list.length} résultat${list.length !== 1 ? 's' : ''} pour "${STATE.search}"`;
    } else {
        info.style.display = 'none';
    }

    if (!list.length) {
        grid.innerHTML = '';
        empty.style.display = 'block';
        return;
    }
    empty.style.display = 'none';
    grid.innerHTML = list.map(p => productCard(p)).join('');
    observeScrollEls();
}

/* ═══════════════════════════════════════════════════════════
   7. PRODUCT DETAIL MODAL
   ═══════════════════════════════════════════════════════════ */

function openProductModal(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    STATE.modalProduct = p;
    STATE.modalQty = 1;
    const wished = STATE.wishlist.includes(p.id);

    document.getElementById('productModalContent').innerHTML = `
        <div class="pm-img">
            <img src="${p.image}" alt="${p.name}" onerror="this.src='./image/p1.png'">
        </div>
        <div class="pm-info">
            <span class="pm-badge">${p.category} · ${p.weight} · ${p.origin}</span>
            <h3>${p.name}</h3>
            <div class="product-stars" style="margin-bottom:1rem">${stars(p.stars)}</div>
            <div class="pm-price">
                ${p.oldPrice ? `<span style="font-size:1.8rem;text-decoration:line-through;color:var(--text-muted);margin-right:1rem">${fmt(p.oldPrice)}</span>` : ''}
                ${fmt(p.price)}
            </div>
            <p class="pm-desc">${p.fullDesc}</p>
            <div class="pm-details">
                ${p.details.map(d => `
                    <div class="pm-detail-item">
                        <i class='bx ${d.icon}'></i>
                        <span>${d.text}</span>
                    </div>`).join('')}
            </div>
            <div class="pm-actions">
                <div class="pm-qty-control">
                    <button class="qty-btn" id="pmQtyMinus">−</button>
                    <span class="qty-value" id="pmQtyVal">1</span>
                    <button class="qty-btn" id="pmQtyPlus">+</button>
                </div>
                <button class="btn-primary" id="pmAddCart">
                    <i class='bx bx-cart-add'></i> Ajouter
                </button>
                <button class="btn-ghost" id="pmWish" style="padding:1.3rem">
                    <i class='bx ${wished ? 'bxs-heart' : 'bx-heart'}' style="color:${wished ? '#ef4444' : ''}"></i>
                </button>
            </div>
        </div>`;

    document.getElementById('pmQtyMinus').onclick = () => {
        if (STATE.modalQty > 1) { STATE.modalQty--; document.getElementById('pmQtyVal').textContent = STATE.modalQty; }
    };
    document.getElementById('pmQtyPlus').onclick = () => {
        STATE.modalQty++;
        document.getElementById('pmQtyVal').textContent = STATE.modalQty;
    };
    document.getElementById('pmAddCart').onclick = () => {
        addToCart(p.id, STATE.modalQty);
        closeModal('productOverlay');
    };
    document.getElementById('pmWish').onclick = () => {
        toggleWish(p.id);
        closeModal('productOverlay');
    };

    openModal('productOverlay');
}

/* ═══════════════════════════════════════════════════════════
   8. CHECKOUT — Commande
   ═══════════════════════════════════════════════════════════ */

function openCheckout() {
    if (!STATE.cart.length) return;
    // Remplir le récapitulatif
    document.getElementById('checkoutSummary').innerHTML = `
        ${STATE.cart.map(i => `
            <div class="co-sum-item">
                <span>${i.name} × ${i.qty}</span>
                <span>${fmt(i.price * i.qty)}</span>
            </div>`).join('')}
        <div class="co-sum-total">
            <span>Total à payer</span>
            <strong>${fmt(cartTotal())}</strong>
        </div>`;
    closeCart();
    openModal('checkoutOverlay');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function submitOrder(e) {
    e.preventDefault();
    const name    = document.getElementById('co-name').value.trim();
    const phone   = document.getElementById('co-phone').value.trim();
    const address = document.getElementById('co-address').value.trim();
    const commune = document.getElementById('co-commune').value;
    const pay     = document.querySelector('input[name="pay"]:checked').value;

    let hasError = false;
    [['co-name', name], ['co-phone', phone], ['co-address', address], ['co-commune', commune]]
        .forEach(([id, val]) => {
            const el = document.getElementById(id);
            if (!val) { el.style.borderColor = '#ef4444'; hasError = true; }
            else       { el.style.borderColor = ''; }
        });
    if (hasError) { toast('Veuillez remplir tous les champs obligatoires', 'error'); return; }

    // Construire le message WhatsApp
    const itemsText = STATE.cart
        .map(i => `• ${i.name} × ${i.qty} = ${fmt(i.price * i.qty)}`)
        .join('\n');
    const payLabel = pay === 'wave' ? 'Wave/Orange Money' : 'Paiement à la livraison';
    const waveNum  = pay === 'wave' ? `\n📱 Numéro Wave/OM : ${document.getElementById('co-wave').value}` : '';
    const msg = `🛒 *NOUVELLE COMMANDE - BON MIEL*\n\n` +
        `👤 *Client :* ${name}\n📞 *Tél :* ${phone}\n` +
        `📍 *Adresse :* ${address}, ${commune}\n` +
        `💳 *Paiement :* ${payLabel}${waveNum}\n\n` +
        `*Produits commandés :*\n${itemsText}\n\n` +
        `💰 *TOTAL : ${fmt(cartTotal())}*\n\n` +
        `✅ Commande confirmée via bonmiel.ci`;

    // Enregistrer la commande
    const order = {
        id: Date.now(),
        client: name,
        phone,
        address: `${address}, ${commune}`,
        items: [...STATE.cart],
        total: cartTotal(),
        payment: payLabel,
        date: new Date().toLocaleDateString('fr-FR'),
        status: 'En attente'
    };
    STATE.orders.push(order);

    // Vider le panier
    STATE.cart = [];
    save();
    renderCart();
    updateBadges();

    // Ouvrir WhatsApp
    window.open(`https://wa.me/2250713188565?text=${encodeURIComponent(msg)}`, '_blank');

    // Afficher la confirmation
    closeModal('checkoutOverlay');
    document.getElementById('successMsg').textContent =
        `Merci ${name} ! Votre commande a été transmise via WhatsApp.`;
    openModal('successOverlay');

    // Reset form
    document.getElementById('checkoutForm').reset();
}

/* ═══════════════════════════════════════════════════════════
   9. REVIEWS — Avis clients
   ═══════════════════════════════════════════════════════════ */

function renderReviews() {
    const track = document.getElementById('reviewsSlider');
    const dots  = document.getElementById('sliderDots');
    const revs  = [...STATE.reviews].reverse(); // plus récents en premier

    track.innerHTML = `<div class="reviews-track">` +
        revs.map(r => {
            const avatarHTML = r.avatar
                ? `<img src="${r.avatar}" alt="${r.name}" class="review-avatar" onerror="this.outerHTML='<div class=review-avatar-placeholder>${r.name[0]}</div>'">`
                : `<div class="review-avatar-placeholder">${r.name[0]}</div>`;
            return `
            <div class="review-card">
                <div class="review-stars">${stars(r.stars)}</div>
                <p class="review-text">"${r.text}"</p>
                <div class="review-author">
                    ${avatarHTML}
                    <div class="review-meta">
                        <h4>${r.name}</h4>
                        <p>${r.job || 'Client vérifié'} · ${r.date || ''}</p>
                    </div>
                </div>
            </div>`;
        }).join('') + `</div>`;

    dots.innerHTML = revs.map((_, i) =>
        `<div class="slider-dot ${i === STATE.sliderIdx ? 'active' : ''}" onclick="goToSlide(${i})"></div>`
    ).join('');

    goToSlide(STATE.sliderIdx);
}

function goToSlide(idx) {
    const revs  = STATE.reviews;
    const total = revs.length;
    STATE.sliderIdx = (idx + total) % total;
    const track = document.querySelector('.reviews-track');
    if (track) track.style.transform = `translateX(-${STATE.sliderIdx * 100}%)`;
    document.querySelectorAll('.slider-dot').forEach((d, i) =>
        d.classList.toggle('active', i === STATE.sliderIdx));
}

function addReview(e) {
    e.preventDefault();
    const name = document.getElementById('rv-name').value.trim();
    const job  = document.getElementById('rv-job').value.trim();
    const text = document.getElementById('rv-text').value.trim();

    if (!name || !text) { toast('Nom et avis sont obligatoires', 'error'); return; }

    const review = {
        id:    Date.now(),
        name,
        job:   job || 'Client vérifié',
        text,
        stars: STATE.selectedStars,
        avatar: null,
        date:  new Date().toLocaleDateString('fr-FR')
    };
    STATE.reviews.push(review);
    save();
    STATE.sliderIdx = 0;
    renderReviews();
    document.getElementById('reviewForm').reset();
    resetStarInput();
    toast('Votre avis a été publié ! Merci 🙏', 'success');
}

/* ── Star input ── */
function initStarInput() {
    STATE.selectedStars = 5;
    const stars = document.querySelectorAll('#starInput i');
    stars.forEach(s => {
        s.addEventListener('mouseover', function () {
            const n = +this.dataset.star;
            stars.forEach((x, i) => x.classList.toggle('lit', i < n));
        });
        s.addEventListener('mouseout', () => {
            stars.forEach((x, i) => x.classList.toggle('lit', i < STATE.selectedStars));
        });
        s.addEventListener('click', function () {
            STATE.selectedStars = +this.dataset.star;
            stars.forEach((x, i) => x.classList.toggle('lit', i < STATE.selectedStars));
        });
    });
    resetStarInput();
}
function resetStarInput() {
    STATE.selectedStars = 5;
    document.querySelectorAll('#starInput i').forEach((x, i) =>
        x.classList.toggle('lit', i < 5));
}

/* ═══════════════════════════════════════════════════════════
   10. CONTACT FORM — WhatsApp
   ═══════════════════════════════════════════════════════════ */

function submitContact(e) {
    e.preventDefault();
    const fields = ['cf-name', 'cf-email', 'cf-subject', 'cf-message'];
    let ok = true;
    fields.forEach(id => {
        const val = document.getElementById(id).value.trim();
        const err = document.getElementById(id + '-err');
        if (!val) {
            err.textContent = 'Ce champ est requis';
            err.style.display = 'block';
            document.getElementById(id).style.borderColor = '#ef4444';
            ok = false;
        } else {
            err.style.display = 'none';
            document.getElementById(id).style.borderColor = '';
        }
    });
    if (!ok) return;

    const name    = document.getElementById('cf-name').value.trim();
    const email   = document.getElementById('cf-email').value.trim();
    const subject = document.getElementById('cf-subject').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    const msg = `📩 *Message via BonMiel.ci*\n\n` +
        `👤 *Nom :* ${name}\n📧 *Email :* ${email}\n` +
        `📌 *Sujet :* ${subject}\n\n📝 *Message :*\n${message}`;

    window.open(`https://wa.me/2250713188565?text=${encodeURIComponent(msg)}`, '_blank');
    document.getElementById('contactForm').reset();
    toast('Message envoyé via WhatsApp ✅', 'success');
}

/* ═══════════════════════════════════════════════════════════
   11. HEADER — sticky + nav active + mobile menu
   ═══════════════════════════════════════════════════════════ */

function initHeader() {
    const header  = document.getElementById('header');
    const menuBtn = document.getElementById('menuIcon');
    const navlist = document.getElementById('navlist');
    const links   = document.querySelectorAll('.nav-link');

    // Sticky
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 60);
    });

    // Mobile menu
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navlist.classList.toggle('open');
        menuBtn.innerHTML = navlist.classList.contains('open')
            ? `<i class='bx bx-x'></i>`
            : `<i class='bx bx-menu'></i>`;
    });

    document.addEventListener('click', (e) => {
        if (!navlist.contains(e.target) && !menuBtn.contains(e.target)) {
            navlist.classList.remove('open');
            menuBtn.innerHTML = `<i class='bx bx-menu'></i>`;
        }
    });

    // Fermer menu sur clic lien
    links.forEach(l => l.addEventListener('click', () => {
        navlist.classList.remove('open');
        menuBtn.innerHTML = `<i class='bx bx-menu'></i>`;
    }));

    // Active nav on scroll
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(l => l.classList.remove('active'));
                const a = document.querySelector(`.nav-link[data-nav="${entry.target.id}"]`);
                if (a) a.classList.add('active');
            }
        });
    }, { threshold: 0.4 });
    sections.forEach(s => observer.observe(s));
}

/* ═══════════════════════════════════════════════════════════
   12. SEARCH
   ═══════════════════════════════════════════════════════════ */

function initSearch() {
    const bar       = document.getElementById('searchBar');
    const input     = document.getElementById('searchInput');
    const toggleBtn = document.getElementById('searchToggle');
    const closeBtn  = document.getElementById('searchClose');

    toggleBtn.addEventListener('click', () => {
        bar.classList.add('open');
        input.focus();
    });
    closeBtn.addEventListener('click', () => {
        bar.classList.remove('open');
        STATE.search = '';
        input.value = '';
        renderShop();
    });
    document.getElementById('clearSearch').addEventListener('click', () => {
        STATE.search = '';
        input.value = '';
        renderShop();
        bar.classList.remove('open');
    });

    let debounce;
    input.addEventListener('input', () => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
            STATE.search = input.value.trim();
            if (STATE.search) {
                document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
            }
            renderShop();
        }, 350);
    });

    document.getElementById('resetFilters').addEventListener('click', () => {
        STATE.filter = 'all';
        STATE.search = '';
        input.value = '';
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.filter-btn[data-cat="all"]').classList.add('active');
        renderShop();
    });
}

/* ═══════════════════════════════════════════════════════════
   13. FILTERS
   ═══════════════════════════════════════════════════════════ */

function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            STATE.filter = this.dataset.cat;
            renderShop();
        });
    });

    // Footer filter links
    document.querySelectorAll('[data-filter-link]').forEach(l => {
        l.addEventListener('click', e => {
            e.preventDefault();
            STATE.filter = l.dataset.filterLink;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            const target = document.querySelector(`.filter-btn[data-cat="${STATE.filter}"]`);
            if (target) target.classList.add('active');
            renderShop();
            document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

/* ═══════════════════════════════════════════════════════════
   14. PAYMENT METHOD — toggle Wave field
   ═══════════════════════════════════════════════════════════ */

function initPaymentToggle() {
    document.querySelectorAll('input[name="pay"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.querySelectorAll('.pay-opt').forEach(o => o.classList.remove('active'));
            this.closest('.pay-opt').classList.add('active');
            document.getElementById('waveField').style.display =
                this.value === 'wave' ? 'block' : 'none';
        });
    });
}

/* ═══════════════════════════════════════════════════════════
   15. NEWSLETTER
   ═══════════════════════════════════════════════════════════ */

function initNewsletter() {
    document.getElementById('nlForm').addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('nl-email').value.trim();
        if (!email || !email.includes('@')) {
            toast('Veuillez entrer un email valide', 'error');
            return;
        }
        toast('Merci ! Vous êtes inscrit à la newsletter 🎉', 'success');
        document.getElementById('nl-email').value = '';
    });
}

/* ═══════════════════════════════════════════════════════════
   16. SCROLL ANIMATIONS — bidirectionnel
   ═══════════════════════════════════════════════════════════ */

function observeScrollEls() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.sa').forEach(el => {
        el.classList.remove('visible');
        observer.observe(el);
    });
}

/* ═══════════════════════════════════════════════════════════
   17. AUTO-SLIDER (auto-play reviews)
   ═══════════════════════════════════════════════════════════ */

function initAutoSlider() {
    let interval = setInterval(() => {
        goToSlide(STATE.sliderIdx + 1);
    }, 5500);

    document.getElementById('prevReview').addEventListener('click', () => {
        clearInterval(interval);
        goToSlide(STATE.sliderIdx - 1);
        interval = setInterval(() => goToSlide(STATE.sliderIdx + 1), 5500);
    });
    document.getElementById('nextReview').addEventListener('click', () => {
        clearInterval(interval);
        goToSlide(STATE.sliderIdx + 1);
        interval = setInterval(() => goToSlide(STATE.sliderIdx + 1), 5500);
    });

    // Pause on hover
    const wrapper = document.querySelector('.reviews-slider-wrapper');
    wrapper.addEventListener('mouseenter', () => clearInterval(interval));
    wrapper.addEventListener('mouseleave', () => {
        interval = setInterval(() => goToSlide(STATE.sliderIdx + 1), 5500);
    });
}

/* ═══════════════════════════════════════════════════════════
   18. INIT — point d'entrée
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ── Rendre la boutique ── */
    renderShop();
    renderWishlist();
    renderCart();
    updateBadges();

    /* ── Avis ── */
    renderReviews();
    initStarInput();
    initAutoSlider();
    document.getElementById('reviewForm').addEventListener('submit', addReview);

    /* ── Header ── */
    initHeader();
    initSearch();
    initFilters();

    /* ── Cart sidebar ── */
    document.getElementById('cartToggle').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.add('open');
        document.getElementById('cartOverlay').classList.add('open');
        document.body.style.overflow = 'hidden';
    });
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    document.getElementById('btnCheckout').addEventListener('click', openCheckout);

    /* ── Wishlist toggle ── */
    document.getElementById('wishlistToggle').addEventListener('click', () => {
        renderWishlist();
        document.getElementById('wishlistSection').scrollIntoView({ behavior: 'smooth' });
    });

    /* ── Checkout ── */
    document.getElementById('checkoutForm').addEventListener('submit', submitOrder);
    document.getElementById('checkoutClose').addEventListener('click', () => closeModal('checkoutOverlay'));
    document.getElementById('checkoutOverlay').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeModal('checkoutOverlay');
    });

    /* ── Success modal ── */
    document.getElementById('closeSuccess').addEventListener('click', () => closeModal('successOverlay'));

    /* ── Product modal ── */
    document.getElementById('productClose').addEventListener('click', () => closeModal('productOverlay'));
    document.getElementById('productOverlay').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeModal('productOverlay');
    });

    /* ── Contact ── */
    document.getElementById('contactForm').addEventListener('submit', submitContact);

    /* ── Payment ── */
    initPaymentToggle();

    /* ── Newsletter ── */
    initNewsletter();

    /* ── Scroll animations initiales ── */
    observeScrollEls();

    /* ── Keyboard ESC pour fermer modals ── */
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeModal('checkoutOverlay');
            closeModal('successOverlay');
            closeModal('productOverlay');
            closeCart();
            document.getElementById('searchBar').classList.remove('close');
        }
    });

    console.log('%c🍯 BON MIEL — Site chargé avec succès !', 'color:#e8920a;font-size:1.2em;font-weight:bold;');
});