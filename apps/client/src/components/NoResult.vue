<script setup>
import BaseButton from "./BaseButton.vue";
import { useFilterStore } from "@/stores";

const filterStore = useFilterStore();
</script>

<template>
  <p class="text-center text-indigo-500">No results...</p>
  <BaseButton
    i18n-key="resetFilters"
    classes="mx-auto px-6 py-1 my-2"
    @click="filterStore.resetFilters"
  />
</template>
