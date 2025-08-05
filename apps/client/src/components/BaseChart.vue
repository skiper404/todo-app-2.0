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

const wrapperClasses = "h-60 overflow-hidden rounded-2xl";
</script>

<template>
  <div :class="wrapperClasses">
    <v-chart :option="options" autoresize />
  </div>
</template>
