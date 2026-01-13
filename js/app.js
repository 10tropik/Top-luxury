const productsData = {
    // Sacs de luxe
    lv: Array.from({length:20}, (_, i) => ({name:`Louis Vuitton ${i+1}`, desc:`Description LV ${i+1}`, img:'images/placeholder.png'})),
    hermes: Array.from({length:20}, (_, i) => ({name:`Hermès ${i+1}`, desc:`Description Hermès ${i+1}`, img:'images/placeholder.png'})),
    miumiu: Array.from({length:20}, (_, i) => ({name:`Miu Miu ${i+1}`, desc:`Description Miu Miu ${i+1}`, img:'images/placeholder.png'})),
    balenciaga: Array.from({length:20}, (_, i) => ({name:`Balenciaga ${i+1}`, desc:`Description Balenciaga ${i+1}`, img:'images/placeholder.png'})),
    dior: Array.from({length:20}, (_, i) => ({name:`Dior ${i+1}`, desc:`Description Dior ${i+1}`, img:'images/placeholder.png'})),
    gucci: Array.from({length:20}, (_, i) => ({name:`Gucci ${i+1}`, desc:`Description Gucci ${i+1}`, img:'images/placeholder.png'})),
    celine: Array.from({length:20}, (_, i) => ({name:`Celine ${i+1}`, desc:`Description Celine ${i+1}`, img:'images/placeholder.png'})),
    ysl: Array.from({length:20}, (_, i) => ({name:`YSL ${i+1}`, desc:`Description YSL ${i+1}`, img:'images/placeholder.png'})),
    chanel: Array.from({length:20}, (_, i) => ({name:`Chanel ${i+1}`, desc:`Description Chanel ${i+1}`, img:'images/placeholder.png'})),

    // Vêtements de luxe
    tshirt: Array.from({length:20}, (_, i) => ({name:`T-shirt ${i+1}`, desc:`Description T-shirt ${i+1}`, img:'images/placeholder.png'})),
    veste: Array.from({length:20}, (_, i) => ({name:`Veste ${i+1}`, desc:`Description Veste ${i+1}`, img:'images/placeholder.png'})),
    sweatshirt: Array.from({length:20}, (_, i) => ({name:`Sweatshirt ${i+1}`, desc:`Description Sweatshirt ${i+1}`, img:'images/placeholder.png'})),
    maillot: Array.from({length:20}, (_, i) => ({name:`Maillot ${i+1}`, desc:`Description Maillot ${i+1}`, img:'images/placeholder.png'})),
    chemise: Array.from({length:20}, (_, i) => ({name:`Chemise ${i+1}`, desc:`Description Chemise ${i+1}`, img:'images/placeholder.png'})),
    short: Array.from({length:20}, (_, i) => ({name:`Short ${i+1}`, desc:`Description Short ${i+1}`, img:'images/placeholder.png'})),
    pantalon: Array.from({length:20}, (_, i) => ({name:`Pantalon ${i+1}`, desc:`Description Pantalon ${i+1}`, img:'images/placeholder.png'})),
    jeans: Array.from({length:20}, (_, i) => ({name:`Jeans ${i+1}`, desc:`Description Jeans ${i+1}`, img:'images/placeholder.png'})),
    moncler: Array.from({length:20}, (_, i) => ({name:`Moncler ${i+1}`, desc:`Description Moncler ${i+1}`, img:'images/placeholder.png'})),

    // Chaussures de luxe
    lv_shoes: Array.from({length:20}, (_, i) => ({name:`LV Chaussure ${i+1}`, desc:`Description LV Chaussure ${i+1}`, img:'images/placeholder.png'})),
    gucci_shoes: Array.from({length:20}, (_, i) => ({name:`Gucci Chaussure ${i+1}`, desc:`Description Gucci Chaussure ${i+1}`, img:'images/placeholder.png'})),
    balenciaga_shoes: Array.from({length:20}, (_, i) => ({name:`Balenciaga Chaussure ${i+1}`, desc:`Description Balenciaga Chaussure ${i+1}`, img:'images/placeholder.png'})),

    // Talons de luxe
    lv_heels: Array.from({length:20}, (_, i) => ({name:`LV Talon ${i+1}`, desc:`Description LV Talon ${i+1}`, img:'images/placeholder.png'})),

    // Montres de luxe
    cartier: Array.from({length:20}, (_, i) => ({name:`Cartier ${i+1}`, desc:`Description Cartier ${i+1}`, img:'images/placeholder.png'})),

    // Accessoires
    collier: Array.from({length:20}, (_, i) => ({name:`Collier ${i+1}`, desc:`Description Collier ${i+1}`, img:'images/placeholder.png'})),
    bague: Array.from({length:20}, (_, i) => ({name:`Bague ${i+1}`, desc:`Description Bague ${i+1}`, img:'images/placeholder.png'}))
};

const cases = document.querySelectorAll('.case');
const productsContainer = document.getElementById('products-container');

cases.forEach(c => {
    c.addEventListener('click', () => {
        const category = c.dataset.category;
        const products = productsData[category] || [];
        productsContainer.innerHTML = '';
        products.forEach(p => {
            const div = document.createElement('div');
            div.className = 'product';
            div.innerHTML = `<img src="${p.img}" alt="${p.name}"><h3>${p.name}</h3><p>${p.desc}</p>`;
            productsContainer.appendChild(div);
        });
        window.scrollTo({ top: productsContainer.offsetTop, behavior: 'smooth' });
    });
});