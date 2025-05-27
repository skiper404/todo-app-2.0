import TestList from "@/components/TaskList.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{ path: "/:listId", name: "List", component: TestList }];

export const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
});
