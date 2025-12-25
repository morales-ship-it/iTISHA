import { shops, products } from "./data.js";
import { addToCart, removeFromCart, getCartItems } from "./cart.js";

/* =========================
   UTILS
========================= */
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

/* =========================
   VERIFIED SHOPS (GRID)
   - 8 max (4 x 2)
   - Randomized
   - Clickable → shop.html
========================= */
function renderShops() {
  const grid = document.getElementById("shop-grid");
  if (!grid) return;

  grid.innerHTML = "";

  shuffle(shops)
    .slice(0, 8)
    .forEach(shop => {
      grid.innerHTML += `
        <a href="shop.html?shop=${shop.id}" class="shop-card">
          <img src="${shop.img}" alt="${shop.name}">
          <p>${shop.name}</p>
        </a>
      `;
    });
}

/* =========================
   CATEGORIES (FILTER ROW)
   - Derived from product categories
   - Clickable chips
========================= */
function renderCategories() {
  const wrap = document.getElementById("category-row");
  if (!wrap) return;

  const cats = Array.from(new Set(products.map(p => p.category))).slice(0, 8);

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

    renderProducts(selected); // pass filter
  });
}

/* =========================
   POPULAR PRODUCTS
   - Uses product IDs
   - Cart logic intact
   - Accepts category filter
========================= */
function renderProducts(filter = "All") {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.innerHTML = "";

  let view = products.slice(0, 20);
  if (filter !== "All") {
    view = view.filter(p => p.category === filter);
  }

  view.forEach(product => {
    grid.innerHTML += `
      <div class="product" data-id="${product.id}">
        <img src="${product.img}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p class="desc">${product.description}</p>
        <p>Ksh ${product.price}</p>

        <div class="controls">
          <button class="btn-minus" aria-label="Remove from cart">−</button>
          <span class="item-count" data-id="${product.id}">0</span>
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
  renderShops();
  renderCategories();
  renderProducts();
});