<script setup>
import CategoryFilter from "./CategoryFilter.vue";
import PriorityFilter from "./PriorityFilter.vue";
import StatusFilter from "./StatusFilter.vue";
</script>

<template>
  <div
    class="text-secondary-text mt-2 flex w-full flex-col items-center justify-between gap-2 text-lg xl:flex-row"
  >
    <CategoryFilter />
    <PriorityFilter />
    <StatusFilter />
  </div>
</template>
