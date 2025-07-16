<script setup>
import { useI18n } from "vue-i18n";
import { useTaskStore } from "@/stores/TaskStore";
import { categoryOptions } from "@/constants";
import BaseButton from "./BaseButton.vue";
import BaseSelect from "./BaseSelect.vue";
import BaseIcon from "./BaseIcon.vue";

const taskStore = useTaskStore();
const { t } = useI18n();
</script>

<template>
  <div
    :class="[
      'flex w-full flex-1 items-center justify-between rounded-2xl px-2 py-1 transition duration-300',
      taskStore.category ? 'bg-accent-bg' : 'bg-secondary-bg',
    ]"
  >
    <BaseIcon
      name="category"
      :class="{
        'text-frontend-icon': taskStore.category === 'frontend',
        'text-backend-icon': taskStore.category === 'backend',
        'text-database-icon': taskStore.category === 'database',
        'text-devops-icon': taskStore.category === 'devops',
        'text-testing-icon': taskStore.category === 'testing',
        'text-security-icon': taskStore.category === 'security',
        'text-ux-icon': taskStore.category === 'ux',
        'text-integration-icon': taskStore.category === 'integration',
        'text-product-icon': taskStore.category === 'product',
        'text-analytics-icon': taskStore.category === 'analytics',
        'text-marketing-icon': taskStore.category === 'marketing',
      }"
    />
    <BaseSelect
      id="categoryId"
      :label="t('labels.category')"
      i18nPath="category"
      :options="categoryOptions"
      v-model="taskStore.category"
    />
    <BaseButton
      name="clear"
      @click="taskStore.resetFilter('category')"
      :class="
        taskStore.category ? 'text-clear-icon' : 'text-clear-default-icon'
      "
    />
  </div>
</template>
