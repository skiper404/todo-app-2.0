<script setup>
import AsideApps from "./AsideApps.vue";
import BaseCreate from "../BaseCreate.vue";
</script>

<template>
  <aside
    class="bg-secondary-bg fixed top-20 left-0 m-4 hidden h-[calc(100vh-160px)] w-80 flex-col overflow-auto rounded-3xl p-4 md:flex"
  >
    <BaseCreate label="buttons.createApp" formType="createTrackedApp" />
    <AsideApps />
  </aside>
</template>
