<script setup>
const props = defineProps({ color: { type: String } });

const classes = "size-4 rounded-full";
</script>

<template>
  <div :class="classes" :style="{ backgroundColor: color }"></div>
</template>
