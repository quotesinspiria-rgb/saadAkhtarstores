const grid = document.getElementById("productGrid");
const cardTemplate = document.getElementById("cardTemplate");
const cartCountEl = document.getElementById("cartCount");
const cartItemsEl = document.getElementById("cartItems");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutError = document.getElementById("checkoutError");

let activeFilter = "all";

function money(cents) {
  return `Rs ${Math.round(cents / 100).toLocaleString("en-PK")}`;
}

function renderGrid() {
  grid.innerHTML = "";
  const items = PRODUCTS.filter(p => activeFilter === "all" || p.category === activeFilter);

  items.forEach(product => {
    const node = cardTemplate.content.cloneNode(true);
    node.querySelector(".stamp-price").textContent = product.priceDisplay;
    node.querySelector(".card-eyebrow").textContent = product.category;
    node.querySelector(".card-title").textContent = product.title;
    node.querySelector(".card-desc").textContent = product.description || "";

    const swatch = node.querySelector(".card-swatch");
    const images = product.images && product.images.length ? product.images : (product.image ? [product.image] : []);

    function setMainImage(src) {
      swatch.style.backgroundImage = `url("${src}")`;
      swatch.style.backgroundSize = "cover";
      swatch.style.backgroundPosition = "center";
    }

    if (images.length) setMainImage(images[0]);

    const thumbRow = node.querySelector(".thumb-row");
    if (images.length > 1) {
      images.forEach((src, i) => {
        const thumb = document.createElement("div");
        thumb.className = "thumb" + (i === 0 ? " active" : "");
        thumb.style.backgroundImage = `url("${src}")`;
        thumb.addEventListener("click", () => {
          setMainImage(src);
          thumbRow.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
          thumb.classList.add("active");
        });
        thumbRow.appendChild(thumb);
      });
    }

    const soldOut = product.stock <= 0;
    node.querySelector(".sold-flag").hidden = !soldOut;
    node.querySelector(".card-stock").textContent = soldOut
      ? "Out of stock"
      : `${product.stock} in stock`;

    const addBtn = node.querySelector(".add-btn");
    if (soldOut) {
      addBtn.disabled = true;
      addBtn.textContent = "Sold out";
    } else {
      addBtn.addEventListener("click", () => {
        Cart.add(product.id);
        renderCart();
        openCart();
      });
    }
node.querySelector(".card").addEventListener("click", (e)=>{

  if(e.target.classList.contains("add-btn")){
    return;
  }

  window.location.href = "product.html?id=" + product.id;

});


grid.appendChild(node);
    grid.appendChild(node);
  });
}

function renderCart() {
  const lineItems = Cart.lineItems();
  cartCountEl.textContent = Cart.totalCount();
  cartSubtotalEl.textContent = money(Cart.subtotalCents());
  checkoutBtn.disabled = lineItems.length === 0;

  if (lineItems.length === 0) {
    cartItemsEl.innerHTML = `<p class="cart-empty">Your order is empty.<br>Add something from the catalog.</p>`;
    return;
  }

  cartItemsEl.innerHTML = "";
  lineItems.forEach(({ product, qty }) => {
    const line = document.createElement("div");
    line.className = "cart-line";
    line.innerHTML = `
      <div class="cart-line-swatch" style="${(product.images && product.images[0]) ? `background-image:url('${product.images[0]}');background-size:cover;background-position:center;` : ""}"></div>
      <div class="cart-line-info">
        <span class="cart-line-title">${product.title}</span>
        <span class="cart-line-price">${money(product.priceCents)} each</span>
        <div class="qty-row">
          <button class="qty-btn" data-action="dec">&minus;</button>
          <span class="qty-val">${qty}</span>
          <button class="qty-btn" data-action="inc">+</button>
          <button class="remove-btn">Remove</button>
        </div>
      </div>
    `;

    line.querySelector('[data-action="inc"]').addEventListener("click", () => {
      Cart.setQty(product.id, qty + 1);
      renderCart();
    });
    line.querySelector('[data-action="dec"]').addEventListener("click", () => {
      Cart.setQty(product.id, qty - 1);
      renderCart();
    });
    line.querySelector(".remove-btn").addEventListener("click", () => {
      Cart.remove(product.id);
      renderCart();
    });

    cartItemsEl.appendChild(line);
  });
}

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderGrid();
  });
});

// Store's WhatsApp number (with country code, no spaces or +). Orders land here.
const STORE_WHATSAPP_NUMBER = "923064322613";

checkoutBtn.addEventListener("click", () => {
  checkoutError.hidden = true;

  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();

  if (!name || !phone || !address) {
    checkoutError.textContent = "Please fill in your name, phone, and address.";
    checkoutError.hidden = false;
    return;
  }

  const lineItems = Cart.lineItems();
  if (lineItems.length === 0) return;

  let message = "New Order (Cash on Delivery)\n\n";
  lineItems.forEach(({ product, qty }) => {
    message += `${product.title} x${qty} — ${money(product.priceCents * qty)}\n`;
  });
  message += `\nSubtotal: ${money(Cart.subtotalCents())}\n\n`;
  message += `Name: ${name}\n`;
  message += `Phone: ${phone}\n`;
  message += `Address: ${address}\n`;

  const url = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

  // Clear the cart and form now that the order has been sent.
  localStorage.removeItem(Cart.KEY);
  document.getElementById("custName").value = "";
  document.getElementById("custPhone").value = "";
  document.getElementById("custAddress").value = "";
  renderCart();
  closeCart();
});

renderGrid();
renderCart();
