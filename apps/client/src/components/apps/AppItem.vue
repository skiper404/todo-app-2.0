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
  `dark:text-primary-text flex items-center gap-2 rounded-3xl px-4 py-2 text-gray-500 transition duration-300 ${app._id === appsStore.activeApp?._id ? "bg-item-active text-gray-100" : "bg-item-bg hover:bg-item-hover"}`,
];

const getIconClasses = (app) => [
  "size-6",
  {
    "text-orange-500": app.appType === "desktop",
    "text-teal-300": app.appType === "mobile",
    "text-yellow-400": app.appType === "web",
  },
];

const editClasses = "size-6 hover:text-green-300 text-green-400";

const getRemoveClasses = (app) => [
  `size-6 hover:text-indigo-400 ${app._id === appsStore.activeApp?._id ? "text-indigo-200" : "text-indigo-500"}`,
];

const handleOnAppClick = async (app) => {
  loaderStore.setLoader();
  appsStore.setActiveApp(app);
  await tasksStore.getTasks(app);
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
    <BaseIcon name="drag" :classes="`size-6 drag`" />
    <BaseIcon :name="app.appType" :classes="getIconClasses(app)" />
    <AppName :name="app.appName" />
    <ItemActions
      :editClasses="editClasses"
      :removeClasses="getRemoveClasses(app)"
      :onEdit="() => handleEdit(app)"
      :onRemove="() => handleRemove(app)"
    />
  </li>
</template>
