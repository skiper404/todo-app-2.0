<script setup>
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

const props = defineProps({ taskDate: Number });

const formatDate = (taskDate) => {
  const date = new Date(taskDate);
  return format(date, "E, d MMMM HH:mm:ss", { locale: enUS });
};
</script>

<template>
  <div class="text-xs text-gray-500">{{ formatDate(taskDate) }}</div>
</template>
