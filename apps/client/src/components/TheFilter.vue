<script setup>
import BaseSelect from "./BaseSelect.vue";

import { useFilterStore } from "@/stores";

const filterStore = useFilterStore();

const categoryOptions = [
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Testing", value: "testing" },
];

const priorityOptions = [
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
];

const statusOptions = [
  { label: "Pending", value: "pending" },
  { label: "In Progress", value: "inProgress" },
  { label: "Done", value: "done" },
];
</script>

<template>
  <div class="flex flex-col gap-2">
    <BaseSelect
      :options="categoryOptions"
      v-model="filterStore.category"
      classes="relative flex rounded-full bg-gray-800 px-4 py-2 text-gray-400"
      @reset="filterStore.resetCategory"
    />
    <BaseSelect
      :options="priorityOptions"
      v-model="filterStore.priority"
      classes="relative flex rounded-full bg-gray-800 px-4 py-2 text-gray-400"
      @reset="filterStore.resetPriority"
    />
    <BaseSelect
      :options="statusOptions"
      v-model="filterStore.status"
      classes="relative flex rounded-full bg-gray-800 px-4 py-2 text-gray-400"
      @reset="filterStore.resetStatus"
    />
  </div>
</template>
