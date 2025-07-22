<script setup>
import BaseIcon from "../BaseIcon.vue";
import AppName from "./AppName.vue";
import {
  useModalStore,
  useAppsStore,
  useTasksStore,
  useMenuStore,
  useDragStore,
} from "@/stores";
import { onMounted } from "vue";
import draggable from "vuedraggable";

const appsStore = useAppsStore();
const tasksStore = useTasksStore();
const modalStore = useModalStore();
const menuStore = useMenuStore();
const dragStore = useDragStore();

const handleAppSelect = async (appId) => {
  await tasksStore.getTasks(appId);
  appsStore.setActiveAppId(appId);
  menuStore.closeMenu();
};

onMounted(async () => {
  await appsStore.getApps();
});
</script>

<template>
  <draggable
    v-model="appsStore.apps"
    item-key="_id"
    handle=".drag"
    @start="dragStore.onDragStart('app')"
    @end="dragStore.onDragEnd('app')"
    :class="[
      `cursor-resize space-y-2 rounded-3xl p-1 transition duration-300`,
      { 'bg-indigo-300/30': dragStore.isDraggingApp },
    ]"
  >
    <template #item="{ element: app }">
      <li
        :key="app._id"
        :class="[
          `flex items-center gap-2 rounded-3xl px-4 py-2 transition duration-300 ${app._id === appsStore.activeAppId ? 'bg-blue-900' : 'bg-gray-800 hover:bg-gray-700'}`,
        ]"
        @click="handleAppSelect(app._id)"
      >
        <BaseIcon
          name="drag"
          :classes="[
            `size-6 text-gray-400 drag ${dragStore.isDraggingApp ? 'hover:cursor-grabbing' : 'hover:cursor-grab'}`,
          ]"
        />
        <BaseIcon
          :name="app.appType"
          :classes="[
            'size-6',
            {
              'text-orange-500': app.appType === 'desktop',
              'text-teal-300': app.appType === 'mobile',
              'text-yellow-400': app.appType === 'web',
            },
          ]"
        />
        <AppName :name="app.appName" />
        <div class="ml-auto flex gap-2">
          <BaseIcon
            name="edit"
            classes="size-6 hover:text-green-400 text-green-500"
            @click.stop="modalStore.openModal('editApp', app)"
          />
          <BaseIcon
            name="remove"
            classes="text-indigo-500 size-6 hover:text-indigo-400"
            @click.stop="modalStore.openModal('removeApp', app)"
          />
        </div>
      </li>
    </template>
  </draggable>
</template>
