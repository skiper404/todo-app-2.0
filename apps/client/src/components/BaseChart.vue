<script setup>
import VChart from "vue-echarts";
import { use } from "echarts";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

const props = defineProps({
  options: { type: Object },
});
</script>

<template>
  <div class="h-60 overflow-hidden rounded-2xl">
    <v-chart :option="options" autoresize class="h-full w-full" />
  </div>
</template>
