<script setup>
import TheSearch from "./TheSearch.vue";
import TheFilter from "./TheFilter.vue";
import TheSorting from "./TheSorting.vue";
import CreateTaskBlock from "./CreateTaskBlock.vue";
</script>

<template>
  <main class="mx-6 overflow-hidden pt-26 md:ml-94">
    <div
      class="relative max-h-[calc(100vh-200px)] min-h-[calc(100vh-200px)] overflow-y-auto rounded-3xl border-2 border-[var(--color-primary-600)] p-4"
    >
      <div
        class="flex items-center justify-between border-b-2 border-[var(--color-primary-600)] py-1"
      >
        <TheSorting />
        <TheSearch />
        <TheFilter />
      </div>

      <routerView></routerView>
    </div>
  </main>
</template>
