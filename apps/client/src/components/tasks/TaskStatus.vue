<script setup>
import BaseIndicator from "../BaseIndicator.vue";

const props = defineProps({ status: { type: String } });

const colors = { pending: "#fae5ff", inProgress: "#ffed7c", done: "#8ee012" };
</script>

<template>
  <div class="flex items-center gap-1 text-blue-500">
    <BaseIndicator :color="colors[status]" />
    <div>
      {{ status }}
    </div>
  </div>
</template>
