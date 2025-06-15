<script setup>
import AsideApps from "./AsideApps.vue";
import BaseCreateBlock from "../BaseCreateBlock.vue";
</script>

<template>
  <aside
    class="fixed top-20 left-0 m-4 hidden h-[calc(100vh-180px)] w-80 flex-col overflow-auto rounded-3xl bg-[#d1f0ff] p-4 lg:flex dark:bg-gray-900"
  >
    <BaseCreateBlock label="buttons.createApp" formType="createTrackedApp" />
    <AsideApps />
  </aside>
</template>
