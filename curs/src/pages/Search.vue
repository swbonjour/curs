<script setup lang="ts">
import Filters from '../components/Filters.vue';
import ItemCard from '../components/ItemCard.vue';
import Header from '../components/Header.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const items = ref<{ id: string, name: string, price: string, img: string }[]>([]);

async function getItems() {
    await axios.get('http://localhost:3000/api/product').then((res) => {
        items.value = res.data;
    })
}

onMounted(() => {
    getItems();
})
</script>

<template>
    <div class="search-wrapper">
        <Header></Header>
        <Filters></Filters>
        <div class="card-wrapper">
            <div class="card-data" v-for="item in items">
                <ItemCard :name="item.name" :price="item.price" :img="item.img" :id="item.id"></ItemCard>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-wrapper {
    display: flex;
    margin-top: 2rem;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
}

.card-data {
    width: 20%;
}

.card-data a {
    width: 100%;
    text-decoration: none;
    color: black;
    display: block;
}
</style>