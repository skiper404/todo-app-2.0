<script setup>
import BaseInput from "./BaseInput.vue";
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
  { label: "InProgress", value: "inProgress" },
  { label: "Done", value: "done" },
];
</script>

<template>
  <div class="my-2 flex flex-col gap-2">
    <BaseInput
      type="text"
      placeholder="Search..."
      classes="outline-0 rounded-full bg-gray-800 py-2 px-4 w-full text-gray-400"
      v-model="filterStore.searchQuery"
    />
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
