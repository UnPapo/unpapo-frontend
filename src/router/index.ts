import {createRouter, createWebHistory} from "@ionic/vue-router";
import {RouteRecordRaw} from "vue-router";
import store from "../store.js";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "auth",
    component: () => import("@/views/Auth/AuthPage.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Auth/RegisterPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Auth/LoginPage.vue"),
  },
  {
    path: "/",
    component: () => import("@/App.vue"),
    meta: {requiresAuth: true},
    children: [
      {
        path: "home",
        component: () => import("@/views/HomePage.vue"),
        name: "home",
      },
      // Adicione mais rotas protegidas aqui
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {

  const isAuthenticated = store.getters.isAuthenticated;

  if (isAuthenticated && (to.name === 'login' || to.name === 'register' || to.name === 'auth')) {
    next({name: 'home'});
  } else if (!isAuthenticated && (to.name !== 'login' && to.name !== 'register' && to.name !== 'auth')) {
    next({name: 'login'}); // Redireciona para a página de login
  } else {
    next(); // Permite o acesso à página
  }
});

export default router;
