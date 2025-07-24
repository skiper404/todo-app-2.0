<script setup>
import BaseButton from "./BaseButton.vue";
import { useFilterStore } from "@/stores";

const filterStore = useFilterStore();
</script>

<template>
  <p class="text-center text-indigo-500">No results...</p>
  <BaseButton
    label="Reset Filters"
    class="mx-auto mt-2 rounded-2xl bg-indigo-800 px-4 py-2 text-xs transition duration-300 hover:bg-indigo-600"
    @click="filterStore.resetFilters"
  />
</template>
