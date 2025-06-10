<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { categoryOptions, priorityOptions, statusOptions } from "@/constants";

import BaseButton from "./BaseButton.vue";
import BaseSelect from "./BaseSelect.vue";

const taskStore = useTaskStore();
</script>

<template>
  <div
    class="mt-4 flex w-full cursor-ns-resize items-center justify-between gap-2"
  >
    <div
      :class="`flex rounded-2xl p-1 transition duration-300 ${taskStore.category ? 'bg-gray-600' : 'bg-gray-800'}`"
    >
      <BaseSelect
        id="categoryId"
        label="Category"
        :options="categoryOptions"
        v-model="taskStore.category"
      />
      <BaseButton name="xmark" @click="taskStore.resetFilter('category')" />
    </div>
    <div
      :class="`flex rounded-2xl p-1 transition duration-300 ${taskStore.priority ? 'bg-gray-600' : 'bg-gray-800'}`"
    >
      <BaseSelect
        id="priorityId"
        label="Priority"
        :options="priorityOptions"
        v-model="taskStore.priority"
      />
      <BaseButton name="xmark" @click="taskStore.resetFilter('priority')" />
    </div>
    <div
      :class="`flex rounded-2xl p-1 transition duration-300 ${taskStore.status ? 'bg-gray-600' : 'bg-gray-800'}`"
    >
      <BaseSelect
        id="statusId"
        label="Status"
        :options="statusOptions"
        v-model="taskStore.status"
      />
      <BaseButton name="xmark" @click="taskStore.resetFilter('status')" />
    </div>
  </div>
</template>
