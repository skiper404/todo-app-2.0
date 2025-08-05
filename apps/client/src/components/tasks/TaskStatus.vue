<script setup>
import { capitalize } from "vue";
import BaseIndicator from "../BaseIndicator.vue";

const props = defineProps({ status: { type: String } });

const colors = { pending: "#fae5ff", inProgress: "#ffed7c", done: "#8ee012" };
const wrapperClasses = "flex items-center gap-1 text-blue-500";
</script>

<template>
  <div :class="wrapperClasses">
    <BaseIndicator :color="colors[status]" />
    <div>
      {{ capitalize($t(`statuses.${status}`)) }}
    </div>
  </div>
</template>
