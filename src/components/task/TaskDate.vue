<script setup>
const props = defineProps({ taskDate: String });
</script>

<template>
  <div class="truncate overflow-ellipsis text-gray-500">
    {{ taskDate }}
  </div>
</template>
