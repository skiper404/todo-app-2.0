<script setup>
const props = defineProps({ message: String });
</script>

<template>
  <div class="py-1 text-center text-red-400">
    {{ message }}
  </div>
</template>
