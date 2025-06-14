<script setup>
const props = defineProps({ taskCategory: String });
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <span
    :class="{
      'text-pink-600 dark:text-pink-400': taskCategory === 'database',
      'text-indigo-600 dark:text-indigo-400': taskCategory === 'backend',
      'text-emerald-600 dark:text-emerald-400': taskCategory === 'frontend',
      'text-blue-600 dark:text-blue-400': taskCategory === 'devops',
      'text-rose-600 dark:text-rose-400': taskCategory === 'testing',
      'text-red-600 dark:text-red-400': taskCategory === 'security',
      'text-yellow-600 dark:text-yellow-400': taskCategory === 'ux',
      'text-teal-600 dark:text-teal-400': taskCategory === 'integration',
      'text-cyan-600 dark:text-cyan-400': taskCategory === 'product',
      'text-violet-600 dark:text-violet-400': taskCategory === 'analytics',
      'text-amber-600 dark:text-amber-400': taskCategory === 'marketing',
    }"
  >
    {{ t(`category.${taskCategory}`) }}
  </span>
</template>
