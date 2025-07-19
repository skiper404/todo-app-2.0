<script setup>
import TaskItem from "./TaskItem.vue";
import BaseButton from "../BaseButton.vue";
import { useAppsStore, useModalStore, useTasksStore } from "@/stores";

const appsStore = useAppsStore();
const modalStore = useModalStore();
</script>

<template>
  <div class="pl-110">
    <BaseButton
      v-if="appsStore.activeAppId"
      label="Create Task"
      classes="mx-auto my-8 h-10 w-full rounded-3xl bg-indigo-900 text-gray-100 transition duration-300 hover:bg-indigo-800"
      @click="modalStore.openModal('createTask')"
    />
    <div class="text-center" v-if="!appsStore.activeAppId">Select App</div>
    <ul class="flex flex-col gap-2">
      <TaskItem />
    </ul>
  </div>
</template>
