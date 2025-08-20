<script setup>
import BaseChart from "./BaseChart.vue";
import { useAppsStore, useChartStore } from "@/stores";

const appsStore = useAppsStore();
const chartStore = useChartStore();

const wrapperClasses = "m-2 mb-12 grid h-full grid-cols-1 gap-2 lg:grid-cols-2";
</script>

<template>
  <section :class="wrapperClasses" v-if="!appsStore.activeApp">
    <BaseChart :options="chartStore.appsOptions" />
    <BaseChart :options="chartStore.categoryOptions" />
    <BaseChart :options="chartStore.priorityOptions" />
    <BaseChart :options="chartStore.statusOptions" />
  </section>
</template>
