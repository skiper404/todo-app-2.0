<script setup>
import { useAppsStore, useChartStore, useLoaderStore } from "@/stores";
import BaseChart from "./BaseChart.vue";

const appsStore = useAppsStore();
const chartStore = useChartStore();
const loaderStore = useLoaderStore();

const wrapperClasses = "m-2 mb-12 grid h-full grid-cols-1 gap-2 lg:grid-cols-2";
</script>

<template>
  <div
    v-if="!appsStore.activeAppId && !loaderStore.isLoading"
    :class="wrapperClasses"
  >
    <BaseChart :options="chartStore.appsOptions" />
    <BaseChart :options="chartStore.categoryOptions" />
    <BaseChart :options="chartStore.priorityOptions" />
    <BaseChart :options="chartStore.statusOptions" />
  </div>
</template>
