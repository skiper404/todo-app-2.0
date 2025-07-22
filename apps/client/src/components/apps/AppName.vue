<script setup>
const props = defineProps({ name: { type: String } });
</script>

<template>
  <div class="truncate text-xl text-gray-400 capitalize">
    {{ name }}
  </div>
</template>
