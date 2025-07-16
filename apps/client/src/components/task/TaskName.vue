<script setup>
const props = defineProps({ taskName: String });
</script>

<template>
  <div class="text-secondary-text line-clamp-2 py-1 text-lg overflow-ellipsis">
    {{ taskName }}
  </div>
</template>
