<script setup>
import AsideApps from "./AsideApps.vue";
import BaseCreateBlock from "../BaseCreateBlock.vue";
import { useChartsStore } from "@/stores/ChartsStore";

const chartStore = useChartsStore();
</script>

<template>
  <aside
    class="fixed top-20 left-0 m-4 hidden h-[calc(100vh-160px)] w-80 flex-col overflow-auto rounded-3xl bg-[#d1f0ff] p-4 md:flex dark:bg-[#111724]"
  >
    <BaseCreateBlock label="buttons.createApp" formType="createTrackedApp" />
    <AsideApps />
    <button
      class="text-red-500"
      @click="chartStore.showLegend = !chartStore.showLegend"
    >
      ToggleLegent
    </button>
  </aside>
</template>
