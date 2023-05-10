<script setup lang="ts">
import { ref } from 'vue';
const isOpenSize = ref(false);
const isOpenType = ref(false);
const isOpenPrice = ref(false);

const selectedSize = ref('');
const selectedTypePrice = ref('');
const selectedPrice = ref('');
const selectedType = ref('');

function selectSize(size: string) {
    selectedSize.value = size;
}

function selectTypePrice(type: string) {
    selectedTypePrice.value = type;
}

function selectType(type: string) {
    selectedType.value = type;
}
console.log(isOpenSize);
</script>

<template>
    <div class="search-wrapper">
        <div class="filter-wrapper">
            <div class="filter first" @click="() => isOpenType = !isOpenType" :class="isOpenType ? `filter-${isOpenType}` : ''">
                <div class="filter-item-wrapper">
                    <p>Type</p>
                    <p>{{ selectedType }}</p>
                </div>
                <div class="filter-item" v-show="isOpenType">
                    <p @click="selectType('Jacket')">Jacket</p>
                    <p @click="selectType('Jeans')">Jeans</p>
                    <p @click="selectType('Boots')">Boots</p>
                </div>
            </div>
            <div class="filter second" @click="() => isOpenSize = !isOpenSize" :class="isOpenSize ? `filter-${isOpenSize}` : ''">
                <div class="filter-item-wrapper">
                    <p>Size</p>
                    <p>{{ selectedSize }}</p>
                </div>
                <ul class="filter-item" v-show="isOpenSize">
                    <p @click="selectSize('S')">S</p>
                    <p @click="selectSize('M')">M</p>
                    <p @click="selectSize('XL')">XL</p>
                </ul>
            </div>
            <div class="filter third" @click="() => isOpenPrice = !isOpenPrice" :class="isOpenPrice ? `filter-${isOpenPrice}` : ''">
                <div class="filter-item-wrapper">
                    <p>Price</p>
                    <p>{{ selectedTypePrice }}</p>
                    <p>{{ selectedPrice ? `${selectedPrice}$` : '' }}</p>
                </div>
                <ul class="filter-item" v-show="isOpenPrice">
                    <p @click="selectTypePrice('More')">More</p>
                    <p @click="selectTypePrice('Less')">Less</p>
                    <input type="number" @click.stop="" v-model="selectedPrice">
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.search-wrapper {
    padding-top: 2rem;
}
.filter-wrapper {
    display: flex;
    justify-content: space-between;
}
.filter {
    width: 30%;
    height: 2rem;
    background-color: rgb(215, 238, 236);
    border-radius: 25px;
    font-size: 18px;
    text-align: left;
    vertical-align: center;
    padding-top: 0.2rem;
    cursor: pointer;
    color: rgb(97, 97, 97);
    z-index: 1;
}

.filter-true {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.filter p {
    padding-left: 2rem;
}

.filter-item {
    background-color: rgb(215, 238, 236);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}

.filter-item p:hover {
    background-color: rgb(188, 209, 207);
}

.filter-item input {
    margin-left: 2rem;
    margin-bottom: 1rem;
}

.filter-item-wrapper {
    display: flex;
    justify-content: space-between;
    width: 20%;
}
</style>