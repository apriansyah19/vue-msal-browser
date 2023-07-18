/* eslint-disable no-debugger */
import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/view/MyDashboard.vue";
import LoginPage from "@/view/LoginPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/sign-in",
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/sign-in",
    name: "signIn",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
