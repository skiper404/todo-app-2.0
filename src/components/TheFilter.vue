<script setup>
import BaseFilter from "./BaseFilter.vue";
import { useFilterStore } from "@/stores/filter";
const filterStore = useFilterStore();
</script>

<template>
  <div class="flex w-60 flex-col items-center text-sm">
    <BaseFilter category="status" :options="filterStore.statusOptions" />
    <BaseFilter category="priority" :options="filterStore.priorityOptions" />
    <BaseFilter category="category" :options="filterStore.categoryOptions" />
  </div>
</template>
