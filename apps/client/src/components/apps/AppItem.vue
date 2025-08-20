<script setup>
import AppName from "./AppName.vue";
import BaseIcon from "../BaseIcon.vue";
import ItemActions from "../ItemActions.vue";
import { onMounted } from "vue";

import {
  useModalStore,
  useAppsStore,
  useTasksStore,
  useMenuStore,
  useLoaderStore,
} from "@/stores";

const appsStore = useAppsStore();
const tasksStore = useTasksStore();
const modalStore = useModalStore();
const menuStore = useMenuStore();
const loaderStore = useLoaderStore();

const getAppClasses = (app) => [
  `
  dark:text-gray-100 flex items-center gap-2 rounded-3xl px-4 py-2 transition duration-300
  ${app._id === appsStore.activeApp?._id ? " dark:text-gray-100 dark:bg-gray-600 text-gray-100 bg-indigo-500" : "dark:bg-gray-800 text-gray-100 dark:text-gray-100 bg-indigo-300"}
  `,
];

const getIconClasses = (app) => [
  "size-6",
  {
    "text-orange-500": app.appType === "desktop",
    "text-teal-300": app.appType === "mobile",
    "text-yellow-400": app.appType === "web",
  },
];

const getEditClasses = (app) => [
  `size-6 hover:text-green-400 ${app._id === appsStore.activeApp?._id ? "dark:text-indigo-500" : "text-indigo-500"}`,
];

const getRemoveClasses = (app) => [
  `size-6 hover:text-red-400 ${app._id === appsStore.activeApp?._id ? "dark:text-indigo-500" : "text-indigo-500"}`,
];

const handleOnAppClick = async (app) => {
  loaderStore.setLoader();
  appsStore.setActiveApp(app);
  await tasksStore.getTasks(app._id);
  menuStore.closeMenu();
  loaderStore.removeLoader();
};

const handleEdit = (app) => {
  appsStore.setActiveApp(app);
  modalStore.openModal("editApp");
};

const handleRemove = (app) => {
  appsStore.setActiveApp(app);
  modalStore.openModal("removeApp");
};

onMounted(async () => {
  await appsStore.getApps();
});
</script>

<template>
  <li
    v-for="app in appsStore.apps"
    :class="getAppClasses(app)"
    @click.stop="handleOnAppClick(app)"
  >
    <BaseIcon :name="app.appType" :classes="getIconClasses(app)" />
    <AppName :name="app.appName" />
    <ItemActions
      :editClasses="getEditClasses(app)"
      :removeClasses="getRemoveClasses(app)"
      @onEdit="handleEdit(app)"
      @onRemove="handleRemove(app)"
    />
  </li>
</template>
