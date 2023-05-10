<script setup lang="ts">
const props = defineProps({
    name: String,
    price: String,
    img: String,
    id: String,
})

function getImgUrl() {
    return new URL(`../assets/${props.img}.jpg`, import.meta.url)
}

function getCardId(id?: string) {
    console.log(id);
    return `item/${id}`;
}
</script>

<template>
    <router-link :to="getCardId(id)">
    <div class="item-wrapper">
        <div class="item-img">
            <img :src="String(getImgUrl())" alt="">
        </div>
        <div class="item-description">
            <p class="item-name">{{ name }}</p>
            <p class="item-price">{{ price }}$</p>
        </div>
    </div>
    </router-link>
</template>

<style scoped>
.item-wrapper {
    width: 80%;
    border: 1px solid rgb(215, 238, 236);
    border-radius: 5px;
    cursor: pointer;
}
.item-img {
    width: 100%;
}

.item-img img {
    width: 100%;
}

.item-description {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
}

.item-price {
    font-weight: 700;
}
</style>