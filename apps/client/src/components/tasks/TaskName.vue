<script setup>
const props = defineProps({ name: { type: String } });
</script>

<template>
  <div class="text-primary-text text-xl">{{ name }}</div>
</template>
