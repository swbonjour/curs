<script setup lang="ts">
import Logo from '../assets/Logo.vue';
</script>

<template>
    <header class="header">
        <div class="header-wrapper">
            <div class="header-logo">
                <Logo></Logo>
            </div>
            <nav class="header-nav">
                <ul>
                    <router-link to='/home'><li>Home</li></router-link>
                    <router-link to='/search'><li>Search</li></router-link>
                    <router-link to='/statistic'><li>Statistics</li></router-link>
                    <router-link to='/cart'><li><img src="../assets/Cart.png" alt="" class="shopping-cart"></li></router-link>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.header {
    background-color: white;
}

.header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem
}

.header-nav ul {
    display: flex;
    list-style-type: none;
    align-items: baseline;
    font-size: 21px;
    font-weight: 700;
}

.header-nav ul li {
    cursor: pointer;
    padding-right: 2rem;
}

.header-nav ul a {
    text-decoration: none;
    padding-right: 2rem;
    color: black
}

.header-nav ul li:last-child {
    padding-right: 0;
}
</style>