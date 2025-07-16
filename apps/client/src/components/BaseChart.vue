<script setup>
import { useChartOptions } from "@/composables/useChartOptions";
import { provide } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(THEME_KEY, "dark");

const props = defineProps({ type: String });

const { option } = useChartOptions(props.type);
</script>

<template>
  <div class="h-50">
    <v-chart
      class="chart overflow-hidden rounded-3xl"
      :option="option"
      autoresize
    />
  </div>
</template>
