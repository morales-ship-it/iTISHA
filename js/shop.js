import { shops, products } from "./data.js";
import { addToCart, removeFromCart, getCartItems } from "./cart.js";

/* =========================
   GET SHOP ID
========================= */
const params = new URLSearchParams(window.location.search);
const shopId = params.get("shop");

/* =========================
   FIND SHOP
========================= */
const shop = shops.find(s => s.id === shopId);

/* =========================
   RENDER SHOP HEADER
========================= */
if (shop) {
  document.getElementById("shop-name").textContent = shop.name;
  document.getElementById("shop-image").src = shop.img;

  const desc = document.getElementById("shop-desc");
  if (desc && shop.description) {
    desc.textContent = shop.description;
  }
}

/* =========================
   FILTER PRODUCTS BY SHOP
========================= */
const shopProducts = products.filter(p => p.shopId === shopId);

/* =========================
   RENDER CATEGORIES (10 max)
========================= */
function renderCategories() {
  const wrap = document.getElementById("category-row") || document.querySelector(".categories");
  if (!wrap) return;

  const cats = Array.from(new Set(shopProducts.map(p => p.category))).slice(0, 10);

  wrap.innerHTML = `
    <button class="chip active" data-cat="All">All</button>
    ${cats.map(c => `<button class="chip" data-cat="${c}">${c}</button>`).join("")}
  `;

  wrap.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    const selected = chip.getAttribute("data-cat");

    wrap.querySelectorAll(".chip").forEach(b => b.classList.remove("active"));
    chip.classList.add("active");

    renderProducts(selected);
  });
}

/* =========================
   RENDER PRODUCTS (20 max)
========================= */
function renderProducts(filter = "All") {
  const grid = document.getElementById("shop-products");
  if (!grid) return;

  grid.innerHTML = "";

  let view = shopProducts.slice(0, 20);
  if (filter !== "All") {
    view = shopProducts.filter(p => p.category === filter).slice(0, 20);
  }

  view.forEach(p => {
    grid.innerHTML += `
      <div class="product" data-id="${p.id}">
        <img src="${p.img}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p class="desc">${p.description}</p>
        <p>Ksh ${p.price}</p>
        <div class="controls">
          <button class="btn-minus" aria-label="Remove from cart">−</button>
          <span class="item-count" data-id="${p.id}">0</span>
          <button class="btn-plus" aria-label="Add to cart">+</button>
        </div>
      </div>
    `;
  });

  // ✅ Event delegation for cart buttons
  grid.addEventListener("click", (e) => {
    const minus = e.target.closest(".btn-minus");
    const plus = e.target.closest(".btn-plus");
    if (!minus && !plus) return;

    const card = e.target.closest(".product");
    if (!card) return;
    const productId = card.getAttribute("data-id");

    if (plus) {
      e.preventDefault();
      addToCart(productId);
      updateItemCount(productId);
    }
    if (minus) {
      e.preventDefault();
      removeFromCart(productId);
      updateItemCount(productId);
    }
  });

  // ✅ Sync counts on initial render
  syncAllItemCounts();
}

/* =========================
   ITEM COUNT SYNC
========================= */
function updateItemCount(productId) {
  const items = getCartItems();
  const found = items.find(i => i.id === productId);
  const el = document.querySelector(`.item-count[data-id="${productId}"]`);
  if (el) el.textContent = found ? found.qty : 0;
}

function syncAllItemCounts() {
  const items = getCartItems();
  document.querySelectorAll(".item-count").forEach(el => {
    const productId = el.getAttribute("data-id");
    const found = items.find(i => i.id === productId);
    el.textContent = found ? found.qty : 0;
  });
}

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderProducts();
});