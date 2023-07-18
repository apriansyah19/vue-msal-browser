/* eslint-disable no-debugger */
import { createRouter, createWebHashHistory } from "vue-router";
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
  history: createWebHashHistory(),
  routes,
});

export default {
  install(app) {
    router.install(app);
    router.beforeEach((to, _from, next) => {
      if (localStorage.getItem("msal.account.keys") === null) {
        if (to.name === "signIn") {
          next();
        } else {
          next("/sign-in");
        }
      } else if (to.name === "signIn") {
        next("/dashboard");
      }
      if (localStorage.getItem("msal.account.keys") === '[]') {
        localStorage.clear()
      }

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
      next();
    });
  },
}
