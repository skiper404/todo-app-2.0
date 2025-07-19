<script setup>
import BaseIndicator from "../BaseIndicator.vue";

const props = defineProps({ priority: { type: String } });

const colors = { high: "#ff0000", medium: "#00ff00", low: "#0000ff" };
</script>

<template>
  <div class="flex items-center gap-1 text-blue-500">
    <BaseIndicator :color="colors[priority]" />
    <div>
      {{ priority }}
    </div>
  </div>
</template>
