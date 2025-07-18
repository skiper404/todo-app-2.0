<script setup>
const props = defineProps({
  id: { type: String },
  label: { type: String, default: "label" },
  classes: { type: String },
});
</script>

<template>
  <label :for="id" :class="classes">{{ label }}</label>
</template>
