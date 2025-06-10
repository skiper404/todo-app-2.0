<script setup>
const props = defineProps({ taskCategory: Object });
</script>

<template>
  <div :class="`${taskCategory.color}`">{{ taskCategory.label }}</div>
</template>
