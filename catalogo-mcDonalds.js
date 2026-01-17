const products = [
  // 🍔 HAMBURGUERS
  {
    id: 1,
    title: "Big Mac",
    price: "25,90",
    cat: "Hamburguer",
    imgs: [
      "imagens/bigMac1.webp",
      "imagens/bigMac2.webp",
      "imagens/comboteste1.webp",
      "imagens/comboteste2.avif",
      "imagens/comboteste3.avif",
      "imagens/comboteste2.avif",
    ],
    desc: "O clássico Big Mac com dois hambúrgueres, molho especial, alface, queijo, picles e cebola.",
    whatsappMsg: "Olá! Gostaria de pedir um Big Mac."
  },
  {
    id: 2,
    title: "Quarterão com Queijo",
    price: "27,90",
    cat: "Hamburguer",
    imgs: [
      "imagens/quarteirao1.jpg",
      "imagens/quarteirao2.jpg"
    ],
    desc: "Hambúrguer 100% bovino com queijo, cebola, picles, ketchup e mostarda.",
    whatsappMsg: "Olá! Gostaria de pedir um Quarterão com Queijo."
  },
  {
    id: 3,
    title: "Cheeseburger",
    price: "14,90",
    cat: "Hamburguer",
    imgs: [
      "imagens/cheese1.png",
      "imagens/cheese2.avif"
    ],
    desc: "Hambúrguer com queijo derretido, ketchup, mostarda e picles.",
    whatsappMsg: "Olá! Gostaria de pedir um Cheeseburger."
  },
  {
    id: 4,
    title: "McChicken",
    price: "23,90",
    cat: "Hamburguer",
    imgs: [
      "imagens/mcchicken1.png",
      "imagens/mcchicken2.jpg"
    ],
    desc: "Frango empanado crocante com alface e maionese.",
    whatsappMsg: "Olá! Gostaria de pedir um McChicken."
  },

  // 🍟 ACOMPANHAMENTOS
  {
    id: 5,
    title: "Batata Frita Média",
    price: "12,90",
    cat: "Acompanhamentos",
    imgs: [
      "imagens/batata1.png",
      "imagens/batata2.png"
    ],
    desc: "Batatas fritas crocantes e douradas.",
    whatsappMsg: "Olá! Gostaria de pedir uma Batata Frita Média."
  },
  {
    id: 6,
    title: "Chicken McNuggets 6un",
    price: "16,90",
    cat: "Acompanhamentos",
    imgs: [
      "imagens/nugget3.avif",
      "imagens/nugget.png",
      "imagens/nugget.avif"
    ],
    desc: "Deliciosos nuggets de frango empanados.",
    whatsappMsg: "Olá! Gostaria de pedir Chicken McNuggets."
  },
  {
    id: 7,
    title: "Molho Barbecue",
    price: "3,50",
    cat: "Acompanhamentos",
    imgs: [
      "imagens/barbecue2.jpg",
      "imagens/barbecue1.png",
    ],
    desc: "Molho barbecue para acompanhar.",
    whatsappMsg: "Olá! Gostaria de adicionar Molho Barbecue."
  },
  {
    id: 8,
    title: "Molho Cheddar",
    price: "4,00",
    cat: "Acompanhamentos",
    imgs: [
      "imagens/cheddar1.jpg",
      "imagens/chegar1.webp",
    ],
    desc: "Molho cheddar cremoso.",
    whatsappMsg: "Olá! Gostaria de adicionar Molho Cheddar."
  },

  // 🍦 SOBREMESAS
  {
    id: 9,
    title: "McFlurry Oreo",
    price: "15,90",
    cat: "Sobremesas",
    imgs: [
      "imagens/mcflurry1.png",
      "imagens/mcflurry2.png",
    ],
    desc: "Sorvete com pedaços de Oreo.",
    whatsappMsg: "Olá! Gostaria de pedir um McFlurry Oreo."
  },
  {
    id: 10,
    title: "Casquinha Baunilha",
    price: "5,90",
    cat: "Sobremesas",
    imgs: [
      "imagens/casquinha1.png",
      "imagens/casquinha2.jpg",
    ],
    desc: "Sorvete de baunilha na casquinha.",
    whatsappMsg: "Olá! Gostaria de pedir uma Casquinha."
  },
  {
    id: 11,
    title: "Sundae Chocolate",
    price: "9,90",
    cat: "Sobremesas",
    imgs: [
      "imagens/sundae1.png",
      "imagens/sundae2.jpg",
    ],
    desc: "Sorvete com cobertura de chocolate.",
    whatsappMsg: "Olá! Gostaria de pedir um Sundae de Chocolate."
  },
  {
    id: 12,
    title: "Torta de Maçã",
    price: "7,90",
    cat: "Sobremesas",
    imgs: [
      "imagens/torta1.png",
      "imagens/torta2.jpeg",
    ],
    desc: "Torta crocante recheada com maçã.",
    whatsappMsg: "Olá! Gostaria de pedir uma Torta de Maçã."
  },

  // 🥤 BEBIDAS
  {
    id: 13,
    title: "Coca-Cola Média",
    price: "8,90",
    cat: "Bebidas",
    imgs: [
      "imagens/coca1.webp",
      "imagens/coca2.png",
    ],
    desc: "Refrigerante Coca-Cola gelado.",
    whatsappMsg: "Olá! Gostaria de pedir uma Coca-Cola Média."
  },
  {
    id: 14,
    title: "Guaraná Antarctica",
    price: "8,90",
    cat: "Bebidas",
    imgs: [
      "imagens/guarana1.webp",
      "imagens/guarana2.jpeg",
    ],
    desc: "Guaraná Antarctica gelado.",
    whatsappMsg: "Olá! Gostaria de pedir um Guaraná."
  },
  {
    id: 15,
    title: "Suco de Laranja",
    price: "9,90",
    cat: "Bebidas",
    imgs: [
      "imagens/suco1.png",
      "imagens/suco2.png",
    ],
    desc: "Suco natural de laranja.",
    whatsappMsg: "Olá! Gostaria de pedir um Suco de Laranja."
  },
  {
    id: 16,
    title: "Milkshake Chocolate",
    price: "14,90",
    cat: "Bebidas",
    imgs: [
      "imagens/milk1.png",
      "imagens/milk2.jpg",
    ],
    desc: "Milkshake cremoso sabor chocolate.",
    whatsappMsg: "Olá! Gostaria de pedir um Milkshake de Chocolate."
  },

  // 🍔🍟 COMBOS
  {
    id: 17,
    title: "Combo Big Mac",
    price: "39,90",
    cat: "Combos",
    imgs: [
      "imagens/comboBigmac2.jpg",
      "imagens/comboBigmac1.jpeg"
    ],
    desc: "Big Mac + batata média + bebida.",
    whatsappMsg: "Olá! Gostaria de pedir o Combo Big Mac."
  },
  {
    id: 18,
    title: "Combo Quarterão",
    price: "42,90",
    cat: "Combos",
    imgs: [
      "imagens/comboQuarterao1.webp",
      "imagens/comboQuarterao2.jpeg"
    ],
    desc: "Quarterão com Queijo + batata + bebida.",
    whatsappMsg: "Olá! Gostaria de pedir o Combo Quarterão."
  },
  {
    id: 19,
    title: "Combo McChicken",
    price: "37,90",
    cat: "Combos",
    imgs: [
      "imagens/comboChicken1.avif",
      "imagens/comboChicken2.jpg"
    ],
    desc: "McChicken + batata + bebida.",
    whatsappMsg: "Olá! Gostaria de pedir o Combo McChicken."
  }
];


const whatsappPhone = "5524992928873";
const brandName = "Deise Matelassê";

const grid = document.getElementById('grid');
const filtersEl = document.getElementById('filters');
const searchInput = document.getElementById('searchInput');
const qrBtn = document.getElementById('qrBtn');
const qrModal = document.getElementById('qrModal');
const qrcodeEl = document.getElementById('qrcode');
const catalogLink = document.getElementById('catalogLink');
const qrClose = document.getElementById('qrClose');
const copyBtn = document.getElementById('copyBtn');

const detailsModal = document.getElementById('detailsModal');
const carouselImg = document.getElementById('carouselImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbsContainer = document.getElementById('thumbsContainer');
const detailTitle = document.getElementById('detailTitle');
const detailDesc = document.getElementById('detailDesc');
const detailPrice = document.getElementById('detailPrice');
const detailCat = document.getElementById('detailCat');
const detailWhats = document.getElementById('detailWhats');
const detailClose = document.getElementById('detailClose');
const closeDetailsBtn = document.getElementById('closeDetailsBtn');

const categories = ["Todos", ...Array.from(new Set(products.map(p => p.cat)))];
let activeCat = "Todos";
categories.forEach(cat => {
  const btn = document.createElement('button');
  btn.className = 'filter-btn ' + (cat === "Todos" ? "active" : "");
  btn.innerText = cat;
  btn.onclick = () => { document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); activeCat = cat; render(); }
  filtersEl.appendChild(btn);
});

function render() {
  const q = (searchInput.value || "").toLowerCase().trim();
  grid.innerHTML = "";
  const filtered = products.filter(p => {
    const inCat = activeCat === "Todos" ? true : p.cat === activeCat;
    const matches = [p.title, p.desc, p.price, p.cat].join(" ").toLowerCase().includes(q);
    return inCat && matches;
  });
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;padding:22px;border-radius:10px;background:#fff;text-align:center;color:${getComputedStyle(document.documentElement).getPropertyValue('--muted')};">Nenhum produto encontrado.</div>`;
    return;
  }
  filtered.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    const thumbSrc = (p.imgs && p.imgs.length) ? p.imgs[0] : '';
    card.innerHTML = `
      <img class="thumb" src="${thumbSrc}" alt="${escapeHtml(p.title)}"onclick="showDetails(${p.id})" style="cursor:pointer;" />
      <div class="meta">
        <div>
          <div class="title">${escapeHtml(p.title)}</div>
          <div class="desc">${escapeHtml(p.desc)}</div>
        </div>
        <div style="text-align:right">
          <div class="price"><span class="currency">R$</span> ${escapeHtml(p.price)}</div>
          <div style="font-size:12px;color:var(--muted);margin-top:6px">${escapeHtml(p.cat)}</div>
        </div>
      </div>
      <div class="actions">
        
<button class="btn whatsapp-btn" onclick='openWhatsApp(${p.id})'>

  <img src="imagens/whatsapp.png" alt="WhatsApp">

  <span>WhatsApp</span>

</button>
        <button class="btn details" onclick='showDetails(${p.id})'>🔍 Detalhes</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function escapeHtml(str) { return (str || "").replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'); }

function openWhatsApp(productId) {
  const p = products.find(x => x.id === productId);
  const msg = encodeURIComponent(`${p.whatsappMsg} (${brandName} / catálogo)`);
  const link = `https://wa.me/${whatsappPhone}?text=${msg}`;
  window.open(link, '_blank');
}

let currentImages = [];
let currentIndex = 0;
let currentProductId = null;

function showDetails(productId) {
  const p = products.find(x => x.id === productId);
  currentImages = (p.imgs && p.imgs.length) ? p.imgs.slice() : [''];
  currentIndex = 0;
  currentProductId = productId;

  carouselImg.src = currentImages[currentIndex] || '';
  detailTitle.innerText = p.title;
  detailDesc.innerText = p.desc;
  detailPrice.innerHTML = `<span class="currency">R$</span> ${escapeHtml(p.price)}`;
  detailCat.innerText = p.cat;

  thumbsContainer.innerHTML = '';
  currentImages.forEach((src, idx) => {
    const t = document.createElement('img');
    t.src = src;
    t.alt = p.title + ' - ' + (idx + 1);
    t.className = idx === 0 ? 'active' : '';
    t.onclick = () => { currentIndex = idx; updateCarousel(); }
    thumbsContainer.appendChild(t);
  });

  detailsModal.style.display = "flex";

  detailWhats.onclick = () => openWhatsApp(productId);
  detailClose.onclick = closeDetails;
  closeDetailsBtn.onclick = closeDetails;
}

function closeDetails() {
  detailsModal.style.display = "none";
}

function updateCarousel() {
  carouselImg.src = currentImages[currentIndex] || '';
  Array.from(thumbsContainer.children).forEach((el, idx) => {
    if (idx === currentIndex) el.classList.add('active'); else el.classList.remove('active');
  });
}

function nextImg() {
  if (!currentImages.length) return;
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateCarousel();
}

function prevImg() {
  if (!currentImages.length) return;
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateCarousel();
}

prevBtn.addEventListener('click', prevImg);
nextBtn.addEventListener('click', nextImg);

detailsModal.addEventListener('click', (e) => {
  if (e.target === detailsModal) closeDetails();
});

searchInput.addEventListener('input', () => render());

qrBtn.addEventListener('click', () => {
  const url = location.href;
  catalogLink.value = url;
  qrcodeEl.innerHTML = "";
  new QRCode(qrcodeEl, { text: url, width: 180, height: 180 });
  qrModal.style.display = 'flex';
});
qrClose.addEventListener('click', () => qrModal.style.display = 'none');
copyBtn.addEventListener('click', () => {
  catalogLink.select(); catalogLink.setSelectionRange(0, 99999);
  document.execCommand('copy');
  copyBtn.innerText = "Copiado ✓";
  setTimeout(() => copyBtn.innerText = "Copiar link", 1500);
});
qrModal.addEventListener('click', (e) => { if (e.target === qrModal) qrModal.style.display = 'none'; });

render();
