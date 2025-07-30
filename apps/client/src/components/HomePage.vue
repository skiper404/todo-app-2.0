<script setup>
import BaseLoader from "./BaseLoader.vue";
import TheTasks from "./tasks/TheTasks.vue";
import TheCharts from "./TheCharts.vue";

import { useAppsStore, useLoaderStore, useChartStore } from "@/stores";

const appsStore = useAppsStore();
const loaderStore = useLoaderStore();
const chartStore = useChartStore();
</script>

<template>
  <div class="relative">
    <BaseLoader v-show="loaderStore.isLoading" />
    <TheTasks v-if="appsStore.activeApp" />
    <TheCharts v-else />
  </div>
</template>
