<script setup>
const props = defineProps({ name: { type: String } });
</script>

<template>
  <div class="text-xl text-gray-400 capitalize">
    {{ name }}
  </div>
</template>
