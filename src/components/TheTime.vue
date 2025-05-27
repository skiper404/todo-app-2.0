<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const timer = ref(null);
const time = ref(formattedTime());

function format(value) {
  return value.toString().padStart(2, "0");
}

function formattedTime() {
  const now = new Date();
  return `${format(now.getHours())}:${format(now.getMinutes())}:${format(now.getSeconds())}`;
}

onMounted(() => {
  timer.value = setInterval(() => (time.value = formattedTime()), 1000);
});

onUnmounted(() => clearInterval(timer.value));
</script>

<template>
  <div
    class="flex w-20 items-center justify-center rounded-xl bg-[var(--color-primary-700)] px-2 py-1"
  >
    <div class="w-full">{{ time }}</div>
  </div>
</template>
