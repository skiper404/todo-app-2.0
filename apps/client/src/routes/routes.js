import TaskList from "@/components/task/TaskList.vue";
import TheHome from "@/components/TheHome.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: TheHome },
  { path: "/:appId", name: "App", component: TaskList },
];

export const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
});
