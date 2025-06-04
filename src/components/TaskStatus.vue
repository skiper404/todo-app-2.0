<script setup>
const props = defineProps({ taskStatus: String });
</script>

<template>
  <div class="flex items-center">
    <div
      :class="[
        'h-2 w-2 rounded-full',
        {
          'bg-green-300': taskStatus === 'pending',
          'bg-teal-500': taskStatus === 'inProgress',
          'bg-orange-500': taskStatus === 'done',
        },
      ]"
    ></div>
    <div>{{ taskStatus }}</div>
  </div>
</template>
