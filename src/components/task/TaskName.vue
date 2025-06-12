<script setup>
const props = defineProps({ taskName: String });
</script>

<template>
  <div class="line-clamp-2 py-1 text-lg text-gray-300">
    {{ taskName }}
  </div>
</template>
