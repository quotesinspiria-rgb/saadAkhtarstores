/**
 * CART
 * Stores { productId: quantity } in localStorage so the cart survives a refresh.
 * This runs in the visitor's own browser (this is a real deployed site, not an
 * in-chat preview), so localStorage is the right tool here.
 */

const Cart = {
  KEY: "tgc_cart_v1",

  read() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {};
    } catch {
      return {};
    }
  },

  write(state) {
    localStorage.setItem(this.KEY, JSON.stringify(state));
  },

  add(productId) {
    const state = this.read();
    state[productId] = (state[productId] || 0) + 1;
    this.write(state);
  },

  setQty(productId, qty) {
    const state = this.read();
    if (qty <= 0) {
      delete state[productId];
    } else {
      state[productId] = qty;
    }
    this.write(state);
  },

  remove(productId) {
    const state = this.read();
    delete state[productId];
    this.write(state);
  },

  totalCount() {
    const state = this.read();
    return Object.values(state).reduce((sum, qty) => sum + qty, 0);
  },

  lineItems() {
    const state = this.read();
    return Object.entries(state)
      .map(([id, qty]) => {
        const product = PRODUCTS.find(p => p.id === id);
        if (!product) return null;
        return { product, qty };
      })
      .filter(Boolean);
  },

  subtotalCents() {
    return this.lineItems().reduce((sum, item) => sum + item.product.priceCents * item.qty, 0);
  }
};
