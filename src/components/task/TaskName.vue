<script setup>
const props = defineProps({ taskName: String });
</script>

<template>
  <div class="line-clamp-2 py-1 text-lg overflow-ellipsis dark:text-gray-300">
    <div>
      {{ taskName }}
    </div>
  </div>
</template>
