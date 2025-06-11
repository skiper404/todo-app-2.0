<script setup>
import BaseIcon from "../BaseIcon.vue";

const props = defineProps({ taskStatus: String });
</script>

<template>
  <div class="flex items-center gap-1">
    <BaseIcon :name="taskStatus" />
    <div>{{ taskStatus }}</div>
  </div>
</template>
