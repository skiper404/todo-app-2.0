<script setup>
const props = defineProps({ color: { type: String } });
</script>

<template>
  <div :class="`size-4 rounded-full`" :style="{ backgroundColor: color }"></div>
</template>
