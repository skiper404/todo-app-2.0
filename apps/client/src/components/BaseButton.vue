<script setup>
const { label, classes } = defineProps({
  label: { type: String, default: "button" },
  type: { type: String, default: "button" },
  classes: {
    type: String,
    default: "flex items-center justify-center capitalize",
  },
});
</script>

<template>
  <button :class="classes" :type="type">
    {{ label }}
  </button>
</template>
