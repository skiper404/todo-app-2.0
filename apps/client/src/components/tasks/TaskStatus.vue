<script setup>
import BaseIndicator from "../BaseIndicator.vue";

const props = defineProps({ status: { type: String } });

const colors = { pending: "#ff0000", inProgress: "#00ff00", done: "#0000ff" };
</script>

<template>
  <div class="flex items-center gap-1 text-blue-500">
    <BaseIndicator :color="colors[status]" />
    <div>
      {{ status }}
    </div>
  </div>
</template>
