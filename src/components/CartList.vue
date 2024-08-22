<template>
  <div class="q-pa-md">
    <q-card flat bordered class="q-pa-md">
      <q-card-section>
        <div class="text-h6 q-mb-md">Meu Carrinho</div>
        <q-list v-if="cartItems.length > 0" bordered separator>
          <q-item v-for="item in cartItems" :key="item.id" class="q-pa-sm">
            <q-item-section avatar>
              <q-img :src="item.image" style="width: 60px; height: 60px;" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ item.name }}</q-item-label>
              <q-item-label caption>{{ formatCurrency(item.price) }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-input 
                v-model.number="item.quantity" 
                type="number" 
                min="1" 
                style="width: 60px;" 
                dense 
                @blur="updateCartItem(item.id, item.quantity)" 
              />
            </q-item-section>
            <q-item-section side>
              <q-btn icon="delete" flat color="negative" @click="removeCartItem(item.id)" />
            </q-item-section>
          </q-item>
        </q-list>
        <div v-else class="text-subtitle2">Seu carrinho está vazio</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Finalizar Compra" color="primary" :disable="cartItems.length === 0" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from 'stores/cartStore';

// Usando a store do carrinho
const cartStore = useCartStore();

// Computed para pegar os itens do carrinho diretamente da store
const cartItems = computed(() => cartStore.getCartItems);

// Função para atualizar a quantidade de itens no carrinho
const updateCartItem = (productId, quantity) => {
  cartStore.updateQuantity(productId, quantity);
};

// Função para remover um item do carrinho e atualizar a visualização
const removeCartItem = (productId) => {
  cartStore.removeFromCart(productId);
};

// Função para formatar o valor para moeda
const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
</script>

<style scoped>
.q-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>