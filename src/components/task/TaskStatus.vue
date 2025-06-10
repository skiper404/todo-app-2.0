<script setup>
import BaseIcon from "../BaseIcon.vue";

const props = defineProps({ taskStatus: String });
</script>

<template>
  <div class="flex items-center gap-1">
    <BaseIcon
      :name="taskStatus"
      :class="[
        {
          'text-gray-300': taskStatus === 'pending',
          'text-yellow-500': taskStatus === 'inProgress',
          'text-green-500': taskStatus === 'done',
        },
      ]"
    />
    <div>{{ taskStatus }}</div>
  </div>
</template>
