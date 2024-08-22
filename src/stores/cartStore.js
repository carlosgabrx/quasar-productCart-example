import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: []
  }),
  getters: {
    getCartItems: (state) => state.cart
  },
  actions: {
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    updateQuantity(productId, quantity) {
      const item = this.cart.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    }
  }
});