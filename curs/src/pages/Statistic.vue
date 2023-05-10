<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import Header from '../components/Header.vue';

const sum = ref('');

async function getSum() {
    await axios.get('http://localhost:3000/api/product/sum/amount').then((data) => {
        sum.value = data.data;
    });
}

onMounted(() => {
    getSum()
})
</script>

<template>
    <Header></Header>
    <div class="statistic-wrapper">
        <p>Sum of sells: {{ sum }}$</p>
    </div>
</template>

<style scoped>
.statistic-wrapper {
    margin-top: 2rem;
    font-weight: 700;
    font-size: 21px;
}
</style>