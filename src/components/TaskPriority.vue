<script setup>
import { useTaskProcessing } from "@/composables/useTaskProcessing";

const props = defineProps({ taskPriority: String });
const { getPriorityOption } = useTaskProcessing();
</script>

<template>
  <div class="flex items-center">
    <div
      :class="[
        'h-2 w-2 rounded-full',
        {
          'bg-red-500': taskPriority === 'critical',
          'bg-orange-500': taskPriority === 'high',
          'bg-yellow-500': taskPriority === 'medium',
          'bg-lime-500': taskPriority === 'low',
          'bg-white': taskPriority === 'optional',
        },
      ]"
    ></div>
    <div>{{ getPriorityOption(taskPriority).label }}</div>
  </div>
</template>
