import { products } from "./data.js";
import { addToCart, removeFromCart, getCartSummary } from "./cart.js";

function renderCart() {
  const list = document.getElementById("cart-list");
  const subtotalEl = document.getElementById("subtotal");
  if (!list || !subtotalEl) return;

  const { items, subtotal } = getCartSummary(products);

  if (items.length === 0) {
    list.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty.</p>
        <a href="index.html" class="btn-secondary">Browse products</a>
      </div>
    `;
    subtotalEl.textContent = "0";
    return;
  }

  list.innerHTML = items.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.img}" alt="${item.name}" class="cart-item-img" />

      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p class="desc">${item.description || ""}</p>
        <p class="price">Ksh ${item.price}</p>
        <button class="remove-btn" data-id="${item.id}">Remove</button>
      </div>

      <div class="cart-item-controls">
        <!-- ✅ unified button classes -->
        <button class="btn-minus" data-id="${item.id}">−</button>
        <span class="item-count">${item.qty}</span>
        <button class="btn-plus" data-id="${item.id}">+</button>
      </div>

      <div class="line-total">Ksh ${item.lineTotal}</div>
    </div>
  `).join("");

  subtotalEl.textContent = subtotal.toLocaleString();;
}

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("cart-list");

  list.addEventListener("click", (e) => {
    const minus = e.target.closest(".btn-minus");
    const plus = e.target.closest(".btn-plus");
    const remove = e.target.closest(".remove-btn");
    if (!minus && !plus && !remove) return;

    const row = e.target.closest(".cart-item");
    if (!row) return;
    const productId = row.getAttribute("data-id");

    if (plus) addToCart(productId);
    if (minus) removeFromCart(productId);
    if (remove) {
      while (getCartSummary(products).items.find(i => i.id == productId)) {
        removeFromCart(productId);
      }
    }

    renderCart();
  });

  const checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  renderCart();
});