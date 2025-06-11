<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { categoryOptions, priorityOptions, statusOptions } from "@/constants";

import BaseButton from "./BaseButton.vue";
import BaseSelect from "./BaseSelect.vue";

const taskStore = useTaskStore();
</script>

<template>
  <div
    class="mt-2 flex w-full flex-col items-center justify-between gap-2 lg:flex-row"
  >
    <div
      :class="`flex w-full flex-1 items-center justify-between rounded-2xl p-1 transition duration-300 ${taskStore.category ? 'bg-gray-600' : 'bg-gray-800'}`"
    >
      <BaseSelect
        id="categoryId"
        label="category"
        icon="category"
        :options="categoryOptions"
        v-model="taskStore.category"
      />
      <BaseButton
        name="cancel"
        @click="taskStore.resetFilter('category')"
        class="hover:text-red-400"
      />
    </div>
    <div
      :class="`flex w-full flex-1 justify-between rounded-2xl p-1 transition duration-300 ${taskStore.priority ? 'bg-gray-600' : 'bg-gray-800'}`"
    >
      <BaseSelect
        id="priorityId"
        label="priority"
        icon="priority"
        :options="priorityOptions"
        v-model="taskStore.priority"
      />
      <BaseButton
        name="cancel"
        @click="taskStore.resetFilter('priority')"
        class="hover:text-red-400"
      />
    </div>
    <div
      :class="`flex w-full flex-1 justify-between rounded-2xl p-1 transition duration-300 ${taskStore.status ? 'bg-gray-600' : 'bg-gray-800'}`"
    >
      <BaseSelect
        id="statusId"
        label="status"
        icon="status"
        :options="statusOptions"
        v-model="taskStore.status"
      />
      <BaseButton
        name="cancel"
        @click="taskStore.resetFilter('status')"
        class="hover:text-red-400"
      />
    </div>
  </div>
</template>
