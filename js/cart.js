let cartCount = 0;
let cartItems = {};

function saveCart() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("cartCount", cartCount);
}

function loadCart() {
  cartItems = JSON.parse(localStorage.getItem("cartItems")) || {};
  cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
}

export function addToCart(productId) {
  loadCart();
  cartCount++;
  cartItems[productId] = (cartItems[productId] || 0) + 1;
  saveCart();
  updateCartCountUI();
}

export function removeFromCart(productId) {
  loadCart();
  if (cartItems[productId] && cartItems[productId] > 0) {
    cartCount--;
    cartItems[productId]--;
    if (cartItems[productId] === 0) delete cartItems[productId];
    saveCart();
    updateCartCountUI();
  }
}

function updateCartCountUI() {
  const el = document.getElementById("cart-count");
  if (el) el.textContent = cartCount;
}

export function getCartItems() {
  loadCart();
  return Object.entries(cartItems)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => ({ id, qty }));
}

export function getCartCount() {
  loadCart();
  return cartCount;
}

export function getCartDetailed(productsList = []) {
  loadCart();
  const byId = new Map(productsList.map(p => [p.id, p]));
  return getCartItems().map(({ id, qty }) => {
    const p = byId.get(id);
    if (!p) return null;
    return {
      id: p.id,
      name: p.name,
      img: p.img,
      price: p.price,
      qty,
      lineTotal: p.price * qty,
      description: p.description
    };
  }).filter(Boolean);
}

export function getCartSummary(productsList = []) {
  const detailed = getCartDetailed(productsList);
  const subtotal = detailed.reduce((sum, item) => sum + item.lineTotal, 0);
  return { items: detailed, subtotal, total: subtotal };
}

export function clearCart() {
  cartCount = 0;
  cartItems = {};
  saveCart();
  updateCartCountUI();
}

/* ✅ NEW: Initialize cart count on page load and make cart icon clickable */
document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  updateCartCountUI();

  const cartIcon = document.getElementById("cart-icon");
  if (cartIcon) {
    cartIcon.style.cursor = "pointer";
    cartIcon.addEventListener("click", () => {
      window.location.href = "cart.html";
    });
  }
});