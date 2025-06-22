<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { priorityOptions } from "@/constants";
import { useI18n } from "vue-i18n";
import BaseButton from "./BaseButton.vue";
import BaseSelect from "./BaseSelect.vue";
import BaseIcon from "./BaseIcon.vue";

const taskStore = useTaskStore();
const { t } = useI18n();
</script>

<template>
  <div
    :class="[
      'flex w-full flex-1 items-center justify-between rounded-2xl bg-[var(--color-filter-bg)] px-2 py-1 transition duration-300',
      taskStore.priority ? 'bg-accent-bg' : 'bg-secondary-bg',
    ]"
  >
    <BaseIcon
      name="priority"
      :class="{
        'text-critical-icon': taskStore.priority === 'critical',
        'text-high-icon': taskStore.priority === 'high',
        'text-medium-icon': taskStore.priority === 'medium',
        'text-low-icon': taskStore.priority === 'low',
        'text-optional-icon': taskStore.priority === 'optional',
      }"
    />
    <BaseSelect
      id="priorityId"
      :label="t('labels.priority')"
      i18nPath="priority"
      :options="priorityOptions"
      v-model="taskStore.priority"
    />
    <BaseButton
      name="clear"
      :class="
        taskStore.priority ? 'text-clear-icon' : 'text-clear-default-icon'
      "
      @click="taskStore.resetFilter('priority')"
    />
  </div>
</template>
