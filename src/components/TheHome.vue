<script setup>
import BaseChart from "./BaseChart.vue";
import { useAppsOptions } from "@/composables/useAppsChart";
import { useTasksPriority } from "@/composables/usePriorityChart";
import { useTasksStatus } from "@/composables/useStatusChart";

const { totalAppsType } = useAppsOptions();
const { totalTasksPriority } = useTasksPriority();
const { totalTasksStatus } = useTasksStatus();
</script>

<template>
  <div class="grid grid-cols-1 gap-2 py-2 lg:grid-cols-3">
    <BaseChart :options="totalAppsType" />
    <BaseChart :options="totalTasksPriority" />
    <BaseChart :options="totalTasksStatus" />
  </div>
</template>
