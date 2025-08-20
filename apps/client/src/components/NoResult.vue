<script setup>
import BaseButton from "./BaseButton.vue";
import { useFilterStore } from "@/stores";

const filterStore = useFilterStore();

const labelClasses = "text-center text-indigo-500";
const buttonClasses = "mx-auto px-6 py-1 my-2";
</script>

<template>
  <p :class="labelClasses">No results...</p>
  <BaseButton
    i18n-key="resetFilters"
    :classes="buttonClasses"
    @click="filterStore.resetFilters"
  />
</template>
