<script setup lang="ts">
import CartItem from './CartItem.vue';
import { store } from '../main';
import axios from 'axios';
let items = store.state.products
const ids = items.map((item: any) => item.id);

async function buyProducts() {
    await axios.post('http://localhost:3000/api/product', {
        id: ids
    })

    store.state.products = []
    items = [];
}
</script>

<template>
    <div class="cart-items-wrapper">
        <div class="cart-items" v-for="item in items">
            <CartItem :name="item.name" :description="item.description" :price="item.price" :img="item.img"></CartItem>
        </div>
        <div class="cart-buy">
            <button @click="buyProducts()">Buy</button>
        </div>
    </div>
</template>

<style scoped>
.cart-items-wrapper {
    display: flex;
    padding-top: 2rem;
}

.cart-items {
    display: flex;
    gap: 2rem;
    flex-direction: column;
}

.cart-buy button {
    width: 10rem;
    background-color: rgb(52, 228, 46);
    border: none;
    border-radius: 5px;
    padding: 1rem;
    font-size: 21px;
    font-weight: 700;
    color: white;
    cursor: pointer;
}

.cart-buy button:hover {
    background-color: rgb(42, 189, 37);
}
</style>