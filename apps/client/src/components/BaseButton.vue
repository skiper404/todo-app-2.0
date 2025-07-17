<script setup>
const { label, classes } = defineProps({
  label: { type: String, default: "button" },
  classes: { type: String },
});
</script>

<template>
  <button :class="classes" class="flex items-center justify-center capitalize">
    {{ label }}
  </button>
</template>
