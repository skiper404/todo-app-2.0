<script setup>
BaseInput;

import { useFilterStore } from "@/stores";
import BaseInput from "./BaseInput.vue";

const filterStore = useFilterStore();
</script>

<template>
  <BaseInput
    type="text"
    placeholder="Search..."
    classes="outline-0 rounded-full bg-gray-800 py-2 px-4 w-full text-gray-400"
    v-model="filterStore.searchQuery"
  />
</template>
