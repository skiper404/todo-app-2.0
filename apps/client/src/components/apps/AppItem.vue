<script setup>
import BaseIcon from "../BaseIcon.vue";
import AppName from "./AppName.vue";
import {
  useModalStore,
  useAppsStore,
  useTasksStore,
  useMenuStore,
} from "@/stores";
import { onMounted } from "vue";

const appsStore = useAppsStore();
const tasksStore = useTasksStore();
const modalStore = useModalStore();
const menuStore = useMenuStore();

const handleClick = async (id) => {
  await tasksStore.getTasks(id);
  appsStore.setActiveAppId(id);
  menuStore.closeMenu();
};

onMounted(() => {
  appsStore.getApps();
});
</script>

<template>
  <li
    v-for="{ _id, appName, appType } in appsStore.apps"
    :key="_id"
    :class="[
      `flex items-center gap-2 rounded-3xl px-4 py-2 transition duration-300 ${_id === appsStore.activeAppId ? 'bg-blue-900' : 'bg-gray-800 hover:bg-gray-700'}`,
    ]"
    @click="handleClick(_id)"
  >
    <BaseIcon
      :name="appType"
      :classes="[
        'size-6',
        {
          'text-orange-500': appType === 'desktop',
          'text-teal-300': appType === 'mobile',
          'text-yellow-400': appType === 'web',
        },
      ]"
    />
    <AppName :name="appName" />
    <div class="ml-auto flex gap-2">
      <BaseIcon
        name="edit"
        classes="size-6 hover:text-green-400 text-green-500"
        @click="modalStore.openModal('editApp', { _id, appName, appType })"
      />
      <BaseIcon
        name="remove"
        classes="text-indigo-500 size-6 hover:text-indigo-400"
        @click="modalStore.openModal('removeApp', { _id, appName })"
      />
    </div>
  </li>
</template>
