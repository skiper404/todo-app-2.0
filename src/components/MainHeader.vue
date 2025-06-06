<script setup>
import TheSearch from "./TheSearch.vue";
import TheFilter from "./TheFilter.vue";
import TheSorting from "./TheSorting.vue";
</script>

<template>
  <div
    class="flex items-center justify-evenly rounded-xl border border-[var(--color-primary-600)] p-1 text-sm"
  >
    <TheSorting />
    <TheSearch />
    <TheFilter />
  </div>
</template>
