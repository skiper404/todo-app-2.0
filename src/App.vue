<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheAside from "./components/aside/TheAside.vue";
import TheMain from "./components/TheMain.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="min-h-screen bg-black text-[var(--color-primary-500)]">
    <TheHeader />
    <TheAside />
    <TheMain />
    <TheFooter />
  </div>
</template>
