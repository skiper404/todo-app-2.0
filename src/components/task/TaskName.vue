<script setup>
const props = defineProps({ taskName: String });
</script>

<template>
  <div class="line-clamp-1 py-1 text-lg dark:text-gray-300">
    {{ taskName }}
  </div>
</template>
