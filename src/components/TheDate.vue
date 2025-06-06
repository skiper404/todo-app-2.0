<script setup>
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { onMounted, onUnmounted, ref } from "vue";

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
    class="hidden w-50 items-center justify-center rounded-xl bg-gray-900 px-2 py-1 md:flex"
  >
    {{ time }}
  </div>
</template>
