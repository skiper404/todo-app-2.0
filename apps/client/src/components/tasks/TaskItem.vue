<script setup>
import { useAppsStore, useModalStore, useTasksStore } from "@/stores";
import { onMounted } from "vue";
import BaseIcon from "../BaseIcon.vue";

const modalStore = useModalStore();
const appsStore = useAppsStore();
const tasksStore = useTasksStore();

onMounted(() => {
  tasksStore.getTasks();
});
</script>

<template>
  <li
    v-for="{
      _id,
      taskName,
      taskCategory,
      taskPriority,
      taskStatus,
    } in tasksStore.tasks"
    :key="_id"
    :class="[
      `flex items-center gap-2 rounded-3xl px-4 py-2 transition duration-150 ${_id === appsStore.activeApp ? 'bg-blue-900' : 'bg-gray-800 hover:bg-gray-700'}`,
    ]"
  >
    <div>
      {{ taskName }}
    </div>
    <div>
      {{ taskCategory }}
    </div>
    <div>
      {{ taskPriority }}
    </div>
    <div>
      {{ taskStatus }}
    </div>

    <div class="ml-auto flex gap-2">
      <BaseIcon
        name="edit"
        classes="size-6 hover:text-green-400 text-green-500"
        @click="
          modalStore.openModal('editTask', {
            _id,
            taskName,
            taskCategory,
            taskPriority,
            taskStatus,
          })
        "
      />
      <BaseIcon
        name="remove"
        classes="text-indigo-500 size-6 hover:text-indigo-400"
        @click="
          modalStore.openModal('removeTask', {
            _id,
            taskName,
          })
        "
      />
    </div>
  </li>
</template>
