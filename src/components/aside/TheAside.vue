<script setup>
import AsideApps from "./AsideApps.vue";
import BaseCreateBlock from "../BaseCreateBlock.vue";
</script>

<template>
  <aside
    class="fixed top-20 left-0 m-4 hidden h-[calc(100vh-180px)] w-80 flex-col overflow-auto rounded-3xl border-2 border-[var(--color-primary-600)] bg-[var(--color-primary-900)] p-4 lg:flex"
  >
    <BaseCreateBlock label="Create Tracked App" formType="createTrackedApp" />
    <AsideApps />
  </aside>
</template>
