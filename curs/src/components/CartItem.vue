<script setup lang="ts">
const props = defineProps({
    name: String,
    description: String,
    price: String,
    img: String,
})

console.log(props);

function getImgUrl(img: string | undefined) {
    return new URL(`../assets/${img}.jpg`, import.meta.url)
}
</script>

<template>
    <div class="cart-item-wrapper">
        <div class="cart-item-img">
            <img :src="String(getImgUrl(img))" alt="">
        </div>
        <div class="cart-item-description">
            <p class="cart-item-name">{{ name }}</p>
            <p class="cart-item-description-text">{{ description }}</p>
            <p class="cart-item-price">{{ price }} $</p>
        </div>
    </div>
</template>

<style scoped>

.cart-item-wrapper {
    width: 80%;
    border: 1px solid rgb(215, 238, 236);
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding: 1rem;
}
.cart-item-img {
    width: 20%;
}

.cart-item-img img {
    width: 100%;
}

.cart-item-description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>