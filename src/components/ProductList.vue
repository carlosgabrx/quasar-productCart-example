<template>
    <div>
      <q-list>
        <q-item v-for="product in products" :key="product.id">
          <q-item-section>
            <q-item-label>{{ product.name }}</q-item-label>
            <q-item-label caption>{{ product.description }}</q-item-label>
            <q-item-label caption>R$ {{ product.price }}</q-item-label>
            <q-btn @click="addToCart(product)" label="Adicionar ao Carrinho" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </template>
  
  <script setup>
  import { useProductStore } from 'stores/productStore';
  
  const productStore = useProductStore();
  productStore.loadProducts();
  
  const products = productStore.products;
  const addToCart = (product) => {
    productStore.addProductToCart(product);
  };
  </script>  