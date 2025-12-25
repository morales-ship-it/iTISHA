import { products } from "./data.js";
import { getCartSummary /*, clearCart*/ } from "./cart.js";

function renderSummary() {
  const container = document.getElementById("order-summary");
  if (!container) return;

  // Helper: format numbers with commas
  const fmt = (n) => Number(n).toLocaleString("en-KE");

  const { items, subtotal, deliveryFee, taxes, total } = getCartSummary(products);

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-summary">
        <p>Your cart is empty.</p>
        <a href="index.html" class="btn-secondary">Browse products</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="summary-list">
      ${items.map(i => `
        <div class="summary-item">
          <img src="${i.img}" alt="${i.name}" />
          <div class="text">
            <strong>${i.name}</strong>
            <span>Qty: ${i.qty} • Ksh ${fmt(i.price)} each</span>
          </div>
          <div class="amount">Ksh ${fmt(i.lineTotal)}</div>
        </div>
      `).join("")}
    </div>

    <div class="totals">
      <div><span>Subtotal</span><strong>Ksh ${fmt(subtotal)}</strong></div>
      <div><span>Delivery</span><strong>Ksh ${fmt(deliveryFee)}</strong></div>
      <div><span>Taxes</span><strong>Ksh ${fmt(taxes)}</strong></div>
      <div class="grand"><span>Total</span><strong>Ksh ${fmt(total)}</strong></div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderSummary();

  const payBtn = document.getElementById("pay-btn");
  payBtn.addEventListener("click", async () => {
    // Placeholder: integrate Flutterwave modal/redirect here
    // Example sketch:
    // const response = await createFlutterwavePayment({ amount: total, ... });
    // window.location.href = response.payment_url;

    alert("Payment integration coming soon).");
    // On successful payment: clearCart(); window.location.href = "index.html";
  });
});