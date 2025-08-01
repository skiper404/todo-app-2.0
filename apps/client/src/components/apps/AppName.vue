<script setup>
const props = defineProps({ name: { type: String } });

const classes = "ml-4 truncate capitalize";
</script>

<template>
  <div :class="classes">
    {{ name }}
  </div>
</template>
