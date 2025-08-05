<script setup>
const props = defineProps({ name: { type: String } });
const nameClasses = "text-primary-text text-xl";
</script>

<template>
  <div :class="nameClasses">{{ name }}</div>
</template>
