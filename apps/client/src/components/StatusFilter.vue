<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { statusOptions } from "@/constants";
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
      taskStore.status ? 'bg-accent-bg' : 'bg-secondary-bg',
    ]"
  >
    <BaseIcon
      name="status"
      :class="{
        'text-pending-icon': taskStore.status === 'pending',
        'text-inProgress-icon': taskStore.status === 'inProgress',
        'text-done-icon': taskStore.status === 'done',
      }"
    />
    <BaseSelect
      id="statusId"
      :label="t('labels.status')"
      i18nPath="status"
      :options="statusOptions"
      v-model="taskStore.status"
    />
    <BaseButton
      name="clear"
      @click="taskStore.resetFilter('status')"
      :class="taskStore.status ? 'text-clear-icon' : 'text-clear-default-icon'"
    />
  </div>
</template>
