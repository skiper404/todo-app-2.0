<script setup>
const props = defineProps({ taskDate: String });
</script>

<template>
  <div class="truncate overflow-ellipsis">
    {{ taskDate }}
  </div>
</template>
