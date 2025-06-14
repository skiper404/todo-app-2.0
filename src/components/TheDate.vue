<script setup>
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { onMounted, onUnmounted, ref } from "vue";
import BaseIcon from "./BaseIcon.vue";

const formattedDate = () => {
  const date = new Date();
  return format(date, "E, d MMMM HH:mm:ss", { locale: enUS });
};

const timer = ref(null);
const time = ref(formattedDate());

onMounted(() => {
  timer.value = setInterval(() => (time.value = formattedDate()), 1000);
});

onUnmounted(() => clearInterval(timer.value));
</script>

<template>
  <div
    class="hidden w-50 items-center justify-center gap-1 rounded-xl bg-gray-100 px-2 py-1 whitespace-nowrap md:flex dark:bg-gray-900 dark:text-gray-200"
  >
    <div>
      <BaseIcon name="clock" />
    </div>
    <div>
      {{ time }}
    </div>
  </div>
</template>
