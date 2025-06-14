<script setup>
import { useTaskProcessing } from "@/composables/useTaskProcessing";
import BaseIcon from "../BaseIcon.vue";
import { useI18n } from "vue-i18n";

const props = defineProps({ taskPriority: String });
const { getPriorityOption } = useTaskProcessing();

const { t } = useI18n();
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
        'text-gray-400': taskPriority === 'optional',
      }"
    />

    <span class="text-gray-500">
      {{ t(`priority.${getPriorityOption(taskPriority).label}`) }}
    </span>
  </div>
</template>
