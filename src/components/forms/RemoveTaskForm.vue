<script setup>
import { useModalStore } from "@/stores/ModalStore";
import { useTaskStore } from "@/stores/TaskStore";

import BaseButton from "../BaseButton.vue";

const taskStore = useTaskStore();
const modalStore = useModalStore();
</script>

<template>
  <div
    class="relative flex flex-col rounded-xl bg-gray-200 dark:bg-gray-900 dark:text-gray-400"
  >
    <div class="mt-10 flex flex-col gap-2 px-10">
      <div>
        Are you really want remove
        <span class="font-bold dark:text-gray-400">{{
          modalStore.modalData.taskName
        }}</span>
        ?
      </div>
      <div class="flex">
        <BaseButton
          name="cancel"
          @click="modalStore.closeModal"
          class="mx-auto my-4 rounded-xl bg-gray-300 p-2 text-red-400 transition duration-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700"
        >
          No</BaseButton
        >
        <BaseButton
          name="done"
          @click="taskStore.removeTask(modalStore.modalData.taskId)"
          class="mx-auto my-4 rounded-xl bg-gray-300 p-2 text-green-400 transition duration-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700"
        >
          Yes</BaseButton
        >
      </div>
    </div>
  </div>
</template>
