<script setup lang="ts"></script>

<template>
    <div class="add-wrapper">
        <div class="add-biggest">
            <img src="../assets/AddBiggest.png" alt="">
        </div>
        <div class="add-small">
            <div class="add-small-first">
                <img src="../assets/AddSmallFirst.png" alt="">
            </div>
            <div class="add-small-second">
                <img src="../assets/AddSmallSecond.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.add-wrapper {
    margin-top: 5%;
    display: flex;
    gap: 2rem;
}

.add-biggest {
    width: 50%;
}

.add-biggest img {
    width: 100%;
    height: auto;
}

.add-small {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.add-small-first {
    width: 100%;
}

.add-small-first img {
    width: 100%;
}

img {
    cursor: pointer;
}

.add-small-second {
    width: 100%;
}

.add-small-second img {
    width: 100%;
}
</style>