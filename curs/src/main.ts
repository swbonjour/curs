import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Search from "./pages/Search.vue";
import Item from "./pages/Item.vue";
import Cart from "./pages/Cart.vue";
import AuthorizationComponent from "./components/Authorization.component.vue";
import { createStore } from "vuex";
import Statistic from "./pages/Statistic.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
    },
    {
      path: "/item/:id",
      name: "Item",
      component: Item,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/auth",
      name: "Auth",
      component: AuthorizationComponent,
    },
    {
      path: "/statistic",
      name: "Statistic",
      component: Statistic,
    }
  ],
});

export const store = createStore({
    state() {
        return {
            user: {
                username: '',
            },
            products: []
        }
    },
    mutations: {
        setUser (state, action) {
            state.user.username = action;
        },
        addProduct(state, action) {
          state.products.push(action.value);
        }
    }
})

router.beforeEach(async (to) => {
    if(!store.state.user.username && to.fullPath != '/auth') {
        return '/auth';
    }
})

const app = createApp(App);
app.use(router);
app.mount("#app");
