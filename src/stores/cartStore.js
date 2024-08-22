import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: []
  }),
  getters: {
    // Retorna todos os itens do carrinho
    getCartItems: (state) => state.cart,
    
    // Calcula o total do carrinho somando o preço de cada item multiplicado pela quantidade
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    },

    // Calcula a quantidade total de itens no carrinho
    cartItemCount: (state) => {
      return state.cart.reduce((count, item) => {
        return count + item.quantity;
      }, 0);
    }
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