<script setup>
import BaseIndicator from "../BaseIndicator.vue";

const props = defineProps({ category: { type: String } });

const colors = { frontend: "#ff0000", backend: "#00ff00", testing: "#0000ff" };
</script>

<template>
  <div class="flex items-center gap-1 text-blue-500">
    <BaseIndicator :color="colors[category]" />
    <div>
      {{ category }}
    </div>
  </div>
</template>
