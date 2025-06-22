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
        'text-[var(--color-critical-icon)]': taskPriority === 'critical',
        'text-[var(--color-high-icon)]': taskPriority === 'high',
        'text-[var(--color-medium-icon)]': taskPriority === 'medium',
        'text-[var(--color-low-icon)]': taskPriority === 'low',
        'text-[var(--color-optional-icon)]': taskPriority === 'optional',
      }"
    />
    <span class="">
      {{ t(`priority.${getPriorityOption(taskPriority).label}`) }}
    </span>
  </div>
</template>
