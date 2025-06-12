<script setup>
import TheSearch from "./TheSearch.vue";
import TheFilter from "./TheFilter.vue";
</script>

<template>
  <div
    class="hidden flex-col items-center justify-evenly border-[var(--color-primary-600)] p-1 text-sm lg:flex"
  >
    <TheSearch />
    <TheFilter />
  </div>
</template>
