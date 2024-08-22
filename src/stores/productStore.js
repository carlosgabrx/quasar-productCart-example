import { defineStore } from 'pinia';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
  }),

  actions: {
    loadProducts() {
      this.products = [
        { id: 1, name: 'Produto A', price: 50, description: 'Descrição do Produto A' },
        { id: 2, name: 'Produto B', price: 30, description: 'Descrição do Produto B' },
        { id: 3, name: 'Produto C', price: 20, description: 'Descrição do Produto C' }
      ];
    }
  }
});