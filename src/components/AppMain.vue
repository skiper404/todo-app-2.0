<script setup>
import BaseButton from "./BaseButton.vue";
import BaseCreateBlock from "./BaseCreateBlock.vue";
import MainHeader from "./MainHeader.vue";
import { useTaskStore } from "@/stores/TaskStore";

const taskStore = useTaskStore();
</script>

<template>
  <main class="overflow-hidden pt-16 lg:mx-4 lg:ml-88 lg:pt-24">
    <div
      class="relative max-h-[calc(100vh-220px)] min-h-[calc(100vh-120px)] overflow-y-auto lg:max-h-[calc(100vh-180px)] lg:min-h-[calc(100vh-180px)] lg:rounded-3xl lg:p-4 lg:px-4"
    >
      <MainHeader />
      <BaseCreateBlock label="buttons.createTask" formType="createTask" />
      <BaseButton
        v-if="
          taskStore.finalTasks.length === 0 &&
          taskStore.tasksInActiveApp.length !== 0
        "
        class="mx-auto h-10 rounded-xl bg-green-500 px-2 text-gray-50 transition duration-300 hover:bg-gray-800 lg:mx-0 dark:bg-green-700"
        @click="taskStore.resetAllFilters"
        >ResetFilters</BaseButton
      >
      <routerView></routerView>
    </div>
  </main>
</template>
