<script setup>
const props = defineProps({ name: { type: String } });
</script>

<template>
  <div class="ml-4 truncate text-xl capitalize">
    {{ name }}
  </div>
</template>
