<script setup>
const props = defineProps({ taskName: String });
</script>

<template>
  <div class="trancate text-lg text-gray-300">
    {{ taskName }}
  </div>
</template>
