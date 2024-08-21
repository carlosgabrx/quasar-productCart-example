<template>
    <div>
      <q-list>
        <q-item v-for="item in cart" :key="item.id">
          <q-item-section>
            <q-item-label>{{ item.name }} x {{ item.quantity }}</q-item-label>
            <q-item-label caption>R$ {{ item.price * item.quantity }}</q-item-label>
            <q-btn @click="removeFromCart(item.id)" label="Remover" />
          </q-item-section>
        </q-item>
      </q-list>
      <q-item>
        <q-item-section>
          <q-item-label><strong>Total:</strong> R$ {{ cartTotal }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </template>
  
  <script setup>
  import { useProductStore } from 'stores/productStore';
  
  const productStore = useProductStore();
  
  const cart = productStore.cart;
  const cartTotal = productStore.cartTotal;
  
  const removeFromCart = (id) => {
    productStore.removeProductFromCart(id);
  };
  </script>  