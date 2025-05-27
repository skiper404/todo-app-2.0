<script setup>
import AsideLists from "./AsideLists.vue";
import CreateBlock from "./CreateBlock.vue";
</script>

<template>
  <aside
    class="fixed top-20 left-0 m-6 hidden h-[calc(100vh-200px)] w-80 flex-col gap-6 overflow-auto rounded-3xl border-2 border-[var(--color-primary-600)] bg-[var(--color-primary-900)] p-8 md:flex"
  >
    <CreateBlock />
    <AsideLists />
  </aside>
</template>
