<script setup>
import { capitalize } from "vue";
import BaseIndicator from "../BaseIndicator.vue";
import { categoriesColors } from "@/shared/constants/constants";

const props = defineProps({ category: { type: String } });

const wrapperClasses = "flex items-center gap-1 text-blue-500";
</script>

<template>
  <div :class="wrapperClasses">
    <BaseIndicator :color="categoriesColors[category]" />
    <div>
      {{ capitalize($t(`categories.${category}`)) }}
    </div>
  </div>
</template>
