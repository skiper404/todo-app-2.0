<script setup>
import { capitalize } from "vue";
import BaseIndicator from "../BaseIndicator.vue";

const props = defineProps({ priority: { type: String } });

const colors = { high: "#ea143a", medium: "#fdbf18", low: "#b2f14a" };
const wrapperClasses = "flex items-center gap-1 text-blue-500";
</script>

<template>
  <div :class="wrapperClasses">
    <BaseIndicator :color="colors[priority]" />
    <div>
      {{ capitalize($t(`priorities.${priority}`)) }}
    </div>
  </div>
</template>
