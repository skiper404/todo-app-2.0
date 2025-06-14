<script setup>
import { useI18n } from "vue-i18n";
const props = defineProps({ taskStatus: String });

const { t } = useI18n();
</script>

<template>
  <div class="flex items-center gap-1">
    <div
      :class="[
        'h-3 w-3 rounded-full',
        {
          'bg-amber-400': taskStatus === 'pending',
          'bg-blue-400': taskStatus === 'inProgress',
          'bg-green-400': taskStatus === 'done',
        },
      ]"
    ></div>
    <span class="text-gray-500">
      {{ t(`status.${taskStatus}`) }}
    </span>
  </div>
</template>
