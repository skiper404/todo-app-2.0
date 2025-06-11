<script setup>
import { useTaskProcessing } from "@/composables/useTaskProcessing";
import BaseIcon from "../BaseIcon.vue";

const props = defineProps({ taskPriority: String });
const { getPriorityOption } = useTaskProcessing();
</script>

<template>
  <div class="flex items-center gap-1">
    <BaseIcon
      name="priority"
      :class="{
        'text-red-500': taskPriority === 'critical',
        'text-orange-500': taskPriority === 'high',
        'text-yellow-500': taskPriority === 'medium',
        'text-lime-500': taskPriority === 'low',
        'text-white': taskPriority === 'optional',
      }"
    />

    <div>
      {{ getPriorityOption(taskPriority).label }}
    </div>
  </div>
</template>
