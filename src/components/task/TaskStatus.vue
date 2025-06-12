<script setup>
import BaseIcon from "../BaseIcon.vue";

const props = defineProps({ taskStatus: String });
</script>

<template>
  <div class="flex items-center gap-1">
    <div
      :class="[
        'h-3 w-3 rounded-full',
        {
          'bg-amber-400': taskStatus === 'pending',
          'bg-blue-400': taskStatus === 'inProgress',
          'bg-green-400': taskStatus === 'done',
        },
      ]"
    ></div>
    <div>{{ taskStatus }}</div>
  </div>
</template>
