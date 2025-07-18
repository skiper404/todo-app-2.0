<script setup>
import BaseIcon from "../BaseIcon.vue";
import { useModalStore, useAppsStore, useTasksStore } from "@/stores";

import { onMounted } from "vue";

const appsStore = useAppsStore();
const tasksStore = useTasksStore();
const modalStore = useModalStore();

onMounted(() => {
  appsStore.getApps();
  tasksStore.getTasks();
});
</script>

<template>
  <li
    v-for="{ _id, appName, appType } in appsStore.apps"
    :key="_id"
    :class="[
      `flex items-center gap-2 rounded-3xl px-4 py-2 transition duration-150 ${_id === appsStore.activeApp ? 'bg-blue-900' : 'bg-gray-800 hover:bg-gray-700'}`,
    ]"
    @click="appsStore.setActiveApp(_id)"
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
    <div
      :class="[
        `text-lg font-bold transition duration-150 ${_id === appsStore.activeApp ? 'text-white' : 'text-gray-400'}`,
      ]"
    >
      {{ appName }}
    </div>

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
