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
  <div class="bg-secondary-bg my-2 flex flex-col gap-2 rounded-2xl p-2">
    <BaseInput
      id="search"
      type="text"
      i18nKey="search"
      classes=""
      v-model="filterStore.searchQuery"
    />
    <BaseSelect :options="categoryOptions" v-model="filterStore.category" />
    <BaseSelect :options="priorityOptions" v-model="filterStore.priority" />
    <BaseSelect :options="statusOptions" v-model="filterStore.status" />
  </div>
</template>
