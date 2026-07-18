/* ==========================================================================
   PRODUCT SETTINGS — EDIT THIS ONE OBJECT WITH YOUR REAL PRODUCT INFO.
   The name and price shown on the page, in the cart drawer, and on the
   checkout summary all come from here.
   ========================================================================== */
const PRODUCT = {
  id: "my-product",
  name: "PRODUCT NAME HERE",
  price: 0.0, // e.g. 29.99
};

const CART_STORAGE_KEY = "cart";

/* ==========================================================================
   CART STORAGE (localStorage — persists across pages and reloads)
   ========================================================================== */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  renderCart();
}

function addToCart(productId, qty) {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);
  if (item) {
    item.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart(cart);
}

function changeQty(productId, delta) {
  let cart = getCart();
  const item = cart.find((i) => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((i) => i.id !== productId);
  saveCart(cart);
}

function removeFromCart(productId) {
  saveCart(getCart().filter((i) => i.id !== productId));
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function cartTotal() {
  return getCart().reduce((sum, i) => sum + i.qty * PRODUCT.price, 0);
}

function formatPrice(amount) {
  return "$" + amount.toFixed(2);
}

/* ==========================================================================
   CART RENDERING (navbar counter + slide-out drawer)
   ========================================================================== */
function renderCart() {
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = cartCount();

  const itemsEl = document.getElementById("cart-items");
  if (itemsEl) {
    const cart = getCart();
    if (cart.length === 0) {
      itemsEl.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    } else {
      itemsEl.innerHTML = cart
        .map(
          (item) => `
        <div class="cart-item">
          <div class="cart-item-thumb placeholder-box"><span>IMG</span></div>
          <div class="cart-item-info">
            <p class="cart-item-name">${PRODUCT.name}</p>
            <p class="cart-item-price">${formatPrice(PRODUCT.price)} each</p>
            <div class="cart-item-qty">
              <button class="cart-qty-btn" data-action="minus" data-id="${item.id}" aria-label="Decrease quantity">−</button>
              <span class="cart-qty-value">${item.qty}</span>
              <button class="cart-qty-btn" data-action="plus" data-id="${item.id}" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-item-remove" data-action="remove" data-id="${item.id}">Remove</button>
          </div>
          <span class="cart-item-line-total">${formatPrice(item.qty * PRODUCT.price)}</span>
        </div>`
        )
        .join("");
    }
  }

  const totalEl = document.getElementById("cart-total");
  if (totalEl) totalEl.textContent = formatPrice(cartTotal());

  renderCheckoutSummary();
}

/* Buttons inside the drawer are re-rendered on every change, so listen on
   the container instead of individual buttons. */
function setupCartItemButtons() {
  const itemsEl = document.getElementById("cart-items");
  if (!itemsEl) return;
  itemsEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const id = btn.dataset.id;
    if (btn.dataset.action === "plus") changeQty(id, 1);
    if (btn.dataset.action === "minus") changeQty(id, -1);
    if (btn.dataset.action === "remove") removeFromCart(id);
  });
}

/* ==========================================================================
   CART DRAWER OPEN / CLOSE
   ========================================================================== */
function setupCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("drawer-overlay");
  const openBtn = document.getElementById("cart-button");
  const closeBtn = document.getElementById("drawer-close");
  if (!drawer || !openBtn) return;

  const open = () => {
    drawer.classList.add("open");
    overlay.classList.add("open");
  };
  const close = () => {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
  };

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* ==========================================================================
   PRODUCT SECTION (quantity selector + add to cart) — index page only
   ========================================================================== */
function setupProductSection() {
  const addBtn = document.getElementById("add-to-cart");
  if (!addBtn) return;

  const qtyValue = document.getElementById("qty-value");
  let qty = 1;

  document.getElementById("qty-minus").addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    qtyValue.textContent = qty;
  });

  document.getElementById("qty-plus").addEventListener("click", () => {
    qty += 1;
    qtyValue.textContent = qty;
  });

  addBtn.addEventListener("click", () => {
    addToCart(PRODUCT.id, qty);
    qty = 1;
    qtyValue.textContent = qty;
    // Open the drawer so the shopper sees the item was added
    document.getElementById("cart-drawer").classList.add("open");
    document.getElementById("drawer-overlay").classList.add("open");
  });

  // Keep the on-page name/price in sync with the PRODUCT settings above
  const nameEl = document.getElementById("product-name");
  const priceEl = document.getElementById("product-price");
  if (nameEl) nameEl.textContent = PRODUCT.name;
  if (priceEl) priceEl.textContent = formatPrice(PRODUCT.price);
}

/* ==========================================================================
   FAQ ACCORDION — index page only
   ========================================================================== */
function setupFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // Close any other open item
      document.querySelectorAll(".faq-item.open").forEach((other) => {
        other.classList.remove("open");
        other.querySelector(".faq-answer").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

/* ==========================================================================
   MOBILE MENU
   ========================================================================== */
function setupMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.addEventListener("click", () => navLinks.classList.remove("open"));
}

/* ==========================================================================
   POLICY MODAL (footer links: Shipping / Returns / Privacy / Terms)
   ========================================================================== */
function setupPolicyModal() {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay) return;

  const title = document.getElementById("modal-title");
  const body = document.getElementById("modal-body");
  const closeBtn = document.getElementById("modal-close");

  document.querySelectorAll(".policy-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const policy = link.dataset.policy;
      title.textContent = policy;
      body.textContent = policy.toUpperCase() + " POLICY PLACEHOLDER TEXT HERE — replace with your real " + policy.toLowerCase() + " policy.";
      overlay.classList.add("open");
    });
  });

  const close = () => overlay.classList.remove("open");
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
}

/* ==========================================================================
   CHECKOUT PAGE (order summary + form) — checkout page only
   ========================================================================== */
function renderCheckoutSummary() {
  const summaryEl = document.getElementById("summary-items");
  if (!summaryEl) return;

  const cart = getCart();
  if (cart.length === 0) {
    summaryEl.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
  } else {
    summaryEl.innerHTML = cart
      .map(
        (item) => `
      <div class="summary-row">
        <span>${PRODUCT.name} × ${item.qty}</span>
        <span>${formatPrice(item.qty * PRODUCT.price)}</span>
      </div>`
      )
      .join("");
  }

  const subtotalEl = document.getElementById("summary-subtotal");
  const totalEl = document.getElementById("summary-total");
  if (subtotalEl) subtotalEl.textContent = formatPrice(cartTotal());
  if (totalEl) totalEl.textContent = formatPrice(cartTotal());
}

function setupCheckoutForm() {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = document.getElementById("form-message");

    if (!form.checkValidity()) {
      message.textContent = "Please fill in all fields before placing your order.";
      message.style.color = "#b3261e";
      form.reportValidity();
      return;
    }

    if (getCart().length === 0) {
      message.textContent = "Your cart is empty — add the product first!";
      message.style.color = "#b3261e";
      return;
    }

    // Placeholder "order placed" behaviour — connect a real payment
    // provider here later.
    saveCart([]);
    form.reset();
    message.style.color = "";
    message.textContent = "✓ Order placed! (Placeholder — no payment was processed.)";
  });
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  setupCartDrawer();
  setupCartItemButtons();
  setupProductSection();
  setupFaq();
  setupMobileMenu();
  setupPolicyModal();
  setupCheckoutForm();
  renderCart();
});
