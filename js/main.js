/* Renders the site from js/products.js — you shouldn't need to edit this. */

// ---- Site text ----
document.getElementById("announcement").textContent = SITE.announcement;
document.getElementById("brand").innerHTML =
  SITE.brandName.replace(/\s(\S+)$/, " <span>$1</span>");
document.getElementById("hero-headline").innerHTML =
  SITE.heroHeadline.replace(/\.([^.]*\.)$/, ". <em>$1</em>");
document.getElementById("hero-sub").textContent = SITE.heroSub;
document.getElementById("hero-cta").textContent = SITE.heroCta;
document.getElementById("footer-brand").textContent =
  "© " + new Date().getFullYear() + " " + SITE.brandName + ". All rights reserved.";
document.getElementById("link-instagram").href = SITE.instagram;
document.getElementById("link-vinted").href = SITE.vintedProfile;
document.getElementById("link-email").href = "mailto:" + SITE.email;

// ---- Products ----
const grid = document.getElementById("product-grid");

const PLACEHOLDER_ICONS = ["👕", "👟", "🧥", "👜", "🧢", "⌚"];

function formatPrice(n) {
  return CURRENCY + n.toFixed(2).replace(/\.00$/, "");
}

PRODUCTS.forEach((p, i) => {
  const discount =
    p.oldPrice && p.oldPrice > p.price
      ? Math.round((1 - p.price / p.oldPrice) * 100)
      : null;

  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="card-media">
      ${
        p.image
          ? `<img src="${p.image}" alt="${p.name}" loading="lazy" />`
          : `<div class="placeholder">${PLACEHOLDER_ICONS[i % PLACEHOLDER_ICONS.length]}</div>`
      }
      ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
      ${discount ? `<span class="discount-tag">-${discount}%</span>` : ""}
    </div>
    <div class="card-body">
      <div class="card-meta">${p.condition} · Size ${p.size}</div>
      <h3 class="card-title">${p.name}</h3>
      <div class="card-price">
        <span class="price-now">${formatPrice(p.price)}</span>
        ${p.oldPrice ? `<span class="price-was">${formatPrice(p.oldPrice)}</span>` : ""}
      </div>
      <a class="btn" href="${p.link}" ${p.link !== "#" ? 'target="_blank" rel="noopener"' : ""}>Buy Now</a>
    </div>
  `;
  grid.appendChild(card);
});

// ---- Email capture (front-end only; connect to Mailchimp etc. later) ----
document.getElementById("capture-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  form.innerHTML =
    '<p style="font-weight:700;color:var(--accent);margin:0;">✅ You\'re on the list — watch your inbox for the next drop!</p>';
});
