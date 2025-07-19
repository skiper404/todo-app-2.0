<script setup>
const props = defineProps({ name: { type: String } });
</script>

<template>
  <div class="text-blue-500">{{ name }}</div>
</template>
