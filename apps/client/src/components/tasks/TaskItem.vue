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
      taskCreatedAt,
    } in tasksStore.tasks"
    class="flex gap-2 border p-2"
  >
    <div class="text-blue-500">{{ taskName }}</div>
    <div class="text-indigo-300">{{ taskCategory }}</div>
    <div class="text-indigo-300">{{ taskPriority }}</div>
    <div class="text-indigo-300">{{ taskStatus }}</div>
    <div class="text-indigo-300">{{ taskCreatedAt }}</div>
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
        @click="modalStore.openModal('removeTask', { _id, taskName })"
      />
    </div>
  </li>
</template>
