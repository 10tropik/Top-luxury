// Remplace par tes infos Supabase
const SUPABASE_URL = 'https://TONPROJET.supabase.co';
const SUPABASE_KEY = 'CLEF_PUBLIQUE';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const saveBtn = document.getElementById('save-product');
let currentCategory = '';

document.querySelectorAll('.add-product-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentCategory = btn.dataset.category;
    modal.style.display = 'flex';
  });
});

closeModal.onclick = () => modal.style.display = 'none';

// Ajouter un produit
saveBtn.onclick = async () => {
  const name = document.getElementById('product-name').value;
  const desc = document.getElementById('product-desc').value;
  const img = document.getElementById('product-img').value;

  await supabase.from('products').insert([
    { name, description: desc, image: img, category: currentCategory }
  ]);

  modal.style.display = 'none';
  loadProducts(); // Recharger les produits
}

// Charger les produits depuis Supabase
async function loadProducts() {
  const { data: products } = await supabase.from('products').select('*');
  const categories = ['sacs-de-luxe','vetements-de-luxe','chaussures-de-luxe','talons-de-luxe','montres-de-luxe','accessoires-de-luxe'];

  categories.forEach(cat => {
    const container = document.getElementById(cat);
    container.innerHTML = '';
    products.filter(p => p.category === cat).forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>${p.description}</p>
        <a href="https://wa.me/TONNUMERO" target="_blank">WhatsApp</a>
      `;
      container.appendChild(card);
    });
  });
}

loadProducts();
