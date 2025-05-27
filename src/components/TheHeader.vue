<script setup>
import TheLogo from "../components/TheLogo.vue";
import TheTitle from "./TheTitle.vue";
import TheTime from "./TheTime.vue";
</script>

<template>
  <header
    class="fixed top-6 right-6 left-6 flex items-center justify-between rounded-2xl border-2 border-[var(--color-primary-600)] bg-gradient-to-r from-[var(--color-primary-700)] to-[var(--color-primary-600)] px-10 py-2"
  >
    <a href="#" class="flex">
      <TheLogo />
      <TheTitle />
    </a>
    <TheTime />
  </header>
</template>
