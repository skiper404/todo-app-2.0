<script setup>
import { capitalize } from "vue";
import BaseIndicator from "../BaseIndicator.vue";
import { prioritiesColors } from "@/shared/constants/constants";

const props = defineProps({ priority: { type: String } });

const wrapperClasses = "flex items-center gap-1 text-blue-500";
</script>

<template>
  <div :class="wrapperClasses">
    <BaseIndicator :color="prioritiesColors[priority]" />
    <div>
      {{ capitalize($t(`priorities.${priority}`)) }}
    </div>
  </div>
</template>
