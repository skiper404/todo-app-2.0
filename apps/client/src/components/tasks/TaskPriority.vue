<script setup>
import { capitalizer } from "@/shared/utils/capitalizer";
import BaseIndicator from "../BaseIndicator.vue";

const props = defineProps({ priority: { type: String } });

const colors = { high: "#ea143a", medium: "#fdbf18", low: "#b2f14a" };
</script>

<template>
  <div class="flex items-center gap-1 text-blue-500">
    <BaseIndicator :color="colors[priority]" />
    <div>
      {{ capitalizer($t(`priorities.${priority}`)) }}
    </div>
  </div>
</template>
