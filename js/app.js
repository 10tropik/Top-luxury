// Listes de produits initiales
const products = {
    sacs: ["Louis Vuitton", "Hermès", "Miu Miu", "Balenciaga", "Dior", "Gucci", "Celine", "Yves Saint Laurent", "Chanel"],
    vetements: ["T-shirt", "Veste en jean", "Sweatshirt à capuche", "Maillot de baseball", "Col", "Short", "Chemise", "Pantalon", "Jeans", "Moncler", "The North Face", "Canada Goose", "Veste interchangé"],
    chaussures: ["Louis Vuitton", "Gucci", "Balenciaga", "Givenchy", "Amiri", "Mc Queen", "Wu Jianhao", "Hermes", "Burberry", "Dior", "High luxury", "Fendi", "UGG Snow"],
    talons: ["LV high heels", "Gucci high heels", "Dior high heels", "YSL high heels", "Valentino high heels", "Celine high heels", "Chanel high heels", "Jimmy Zhou's high heels", "BV high heels", "Prada high heels", "Hermes high heels", "Miu Miu high heels", "Versace high heels", "Alexander King High Heels", "Ferragamo high heels"],
    montres: ["Cartier", "Vacheron Constantin", "Rolex", "Longines", "Richard M", "Omega", "Panerai", "Audemars Piguet", "Baobo", "Patek Philippe", "Bai Lai Shi", "Glashütte Original", "Jaeger-LeCoultre", "Chopin"],
    accessoires: ["Collier", "Bague", "Bracelet", "Lunettes", "Ceinture", "Casquette", "Écharpe", "Chaussettes"]
};

// Fonction pour afficher les produits dans chaque catégorie
function renderProducts() {
    for (const category in products) {
        const container = document.getElementById(category);
        container.innerHTML = '';
        products[category].forEach(name => {
            const div = document.createElement('div');
            div.className = 'case';
            div.innerHTML = `<span>${name}</span>`;
            container.appendChild(div);

            div.addEventListener('click', () => {
                div.style.boxShadow = '0 0 30px #ffcc00, 0 0 60px #ffcc00';
                setTimeout(() => { div.style.boxShadow = ''; }, 300);
            });
        });
    }
}

// Ajouter produit depuis le formulaire
document.getElementById('addProductBtn').addEventListener('click', () => {
    const name = document.getElementById('productName').value;
    const desc = document.getElementById('productDesc').value;
    const image = document.getElementById('productImage').files[0];

    if(!name) return alert('Nom du produit requis');

    // Pour l'instant, on ajoute seulement le nom dans "sacs" par défaut
    products.sacs.push(name);
    renderProducts();

    // Réinitialiser le formulaire
    document.getElementById('productName').value = '';
    document.getElementById('productDesc').value = '';
    document.getElementById('productImage').value = '';
});

// Initialiser l’affichage
renderProducts();