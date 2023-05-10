<script setup lang="ts">
import Logo from '../assets/Logo.vue';
import { ref } from 'vue'
import axios from 'axios';
import { router } from '../main';
import { store } from '../main';

const registerPage = ref(false);
const username = ref('');
const password = ref('');
const error = ref('');

function changePage() {
    registerPage.value = !registerPage.value
}

async function register() {
    await axios.post('http://localhost:3000/api/user', {
        username: username.value,
        password: password.value,
    }).then(() => {
        router.push({ path: 'home' })
        store.commit('setUser', username.value);
    }).catch(() => {
        error.value = 'The user is already exists';
    })
}

async function login() {
    await axios.get(`http://localhost:3000/api/user?username=${username.value}&password=${password.value}`).then(() => {
        router.push({ path: 'home' })
        store.commit('setUser', username.value);
    }).catch(() => {
        error.value = 'The data is incorrect';
    })
}
</script>

<template>
    <div class="auth-login-page" v-if="!registerPage">
        <div class="auth-wrapper">
            <div class="auth-logo-wrapper">
                <Logo></Logo>
            </div>
            <input type="text" class="auth-username" placeholder="login" v-model="username">
            <input type="text" class="auth-password" placeholder="password" v-model="password">
            <p>{{ error }}</p>
            <div class="auth-button-wrapper">
                <button class="auth-login" @click="login"><p>Login</p></button>
                <button class="auth-register" @click="changePage"><p>Register</p></button>
            </div>
        </div>
    </div>
    <div class="auth-login-page" v-if="registerPage">
        <div class="auth-wrapper">
            <div class="auth-logo-wrapper">
                <Logo></Logo>
            </div>
            <input type="text" class="auth-username" placeholder="login" v-model="username">
            <input type="text" class="auth-password" placeholder="password" v-model="password">
            <p>{{ error }}</p>
            <div class="auth-button-wrapper-register">
                <button class="auth-register" @click="register"><p>Register</p></button>
            </div>
        </div>
    </div>
</template>

<style>
.auth-wrapper {
    width: 50%;
    border: 1px solid rgb(221, 221, 221);
    padding: 10rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    border-radius: 5px;
    box-shadow: 0px 5px 5px rgb(194, 194, 194);
}

.auth-logo-wrapper {
    display: flex;
    justify-content: center;
}

.auth-wrapper input {
    padding: 1rem;
    border-radius: 5px;
}

.auth-login {
    width: 50%;
    height: 2rem;
    background-color: rgb(52, 228, 46);
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 21px;
    font-weight: 700;
}

.auth-login:hover {
    background-color: rgb(42, 189, 37);
}

.auth-register {
    width: 50%;
    height: 2rem;
    background-color: rgb(46, 186, 228);
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 21px;
    font-weight: 700;
}

.auth-register:hover {
    background-color: rgb(37, 159, 189);    
}

.auth-button-wrapper {
    display: flex;
    gap: 2rem;
}

.auth-button-wrapper-register {
    display: flex;
    justify-content: center;
}
</style>