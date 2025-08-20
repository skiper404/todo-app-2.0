import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";

const routes = [
  { path: "/", component: MainPage, name: "MainPage" },
  {
    path: "/home",
    component: () => import("./pages/HomePage.vue"),
    name: "HomePage",
  },
  {
    path: "/login",
    component: () => import("./pages/LoginPage.vue"),
    name: "LoginPage",
  },
  {
    path: "/signup",
    component: () => import("./pages/SignupPage.vue"),
    name: "SignupPage",
  },
  {
    path: "/forgot-password",
    component: () => import("./pages/ForgotPasswordPage.vue"),
    name: "ForgotPasswordPage",
  },
  {
    path: "/reset-password",
    component: () => import("./pages/ResetPasswordPage.vue"),
    name: "ResetPasswordPage",
  },
  {
    path: "/succes-reset",
    component: () => import("./pages/SuccessResetPage.vue"),
    name: "SuccessResetPage",
  },
];

const router = createRouter({ routes, history: createWebHistory() });

export { router };
