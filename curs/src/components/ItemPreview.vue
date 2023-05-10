<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { store } from '../main';

const route = useRoute();

const id = route.params.id;
const item = ref<{ name: string, description: string, price: string, img: string }>({});

function getImgUrl(img: string) {
    return new URL(`../assets/${img}.jpg`, import.meta.url)
}

async function getItem() {
    console.log(id, "THIS IS ID")
    await axios.get(`http://localhost:3000/api/product/${id}`).then((res) => {
        item.value = res.data;
        console.log(item.value);
    }) 
}

function addToCard() {
    store.commit('addProduct', item);
}

onMounted(() => {
    getItem();
})
</script>

<template>
    <div class="item-wrapper">
        <div class="item-img">
            <img :src="String(getImgUrl(item.img))" alt="">
        </div>
        <div class="item-description">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-description-text">{{ item.description }}</div>
            <div class="item-description-bottom">
                <div class="item-price">Price: &nbsp;&nbsp;{{ item.price }}$</div>
                <div class="item-size">Size: &nbsp;&nbsp;M</div>
            </div>
            <div class="item-buy" @click="addToCard()">Add to cart</div>
        </div>
    </div>
</template>

<style scoped>
.item-wrapper {
    display: flex;
    padding-top: 2rem;
    gap: 2rem;
}

.item-img {
    width: 50%;
}

.item-img img {
    width: 100%;
}

.item-description {
    width: 50%;
    position: relative;
}

.item-name {
    font-size: 21px;
    font-weight: 700;
}

.item-description-text {
    padding-top: 8rem;
    font-size: 18px;
    text-align: justify;
}

.item-description-bottom {
    display: flex;
    gap: 2rem;
    font-size: 32px;
    position: absolute;
    bottom: 6rem;
}

.item-buy {
    position: absolute;
    bottom: 0rem;
    font-size: 21px;
    font-weight: 700;
    background-color: rgb(52, 228, 46);
    color: white;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
}

.item-buy:hover {
    background-color: rgb(42, 189, 37);
}
</style>