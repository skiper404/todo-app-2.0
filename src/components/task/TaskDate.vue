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
  <div>{{ formatDate(taskDate) }}</div>
</template>
