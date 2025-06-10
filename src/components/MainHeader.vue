<script setup>
import TheSearch from "./TheSearch.vue";
import TheFilter from "./TheFilter.vue";
</script>

<template>
  <div
    class="flex flex-col items-center justify-evenly border-[var(--color-primary-600)] p-1 text-sm"
  >
    <TheSearch />
    <TheFilter />
  </div>
</template>
