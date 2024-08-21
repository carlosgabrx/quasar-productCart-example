import { defineStore } from 'pinia';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    cart: [],
  }),

  actions: {
    addProductToCart(product) {
      const itemInCart = this.cart.find(item => item.id === product.id);

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },

    removeProductFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
    },

    loadProducts() {
      this.products = [
        { id: 1, name: 'Produto A', price: 50, description: 'Descrição do Produto A' },
        { id: 2, name: 'Produto B', price: 30, description: 'Descrição do Produto B' },
        { id: 3, name: 'Produto C', price: 20, description: 'Descrição do Produto C' }
      ];
    }
  },

  getters: {
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    cartItemCount: (state) => {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    }
  }
});