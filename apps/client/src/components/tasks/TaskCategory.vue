<script setup>
import { capitalize } from "vue";
import BaseIndicator from "../BaseIndicator.vue";

const props = defineProps({ category: { type: String } });

const colors = { frontend: "#bb72fe", backend: "#ff9017", testing: "#5658fe" };
const wrapperClasses = "flex items-center gap-1 text-blue-500";
</script>

<template>
  <div :class="wrapperClasses">
    <BaseIndicator :color="colors[category]" />
    <div>
      {{ capitalize($t(`categories.${category}`)) }}
    </div>
  </div>
</template>
