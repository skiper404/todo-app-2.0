<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheMain from "@/components/TheMain.vue";
import TheFooter from "@/components/TheFooter.vue";
console.log(Date.now());
</script>

<template>
  <main class="bg-indigo-100 dark:bg-gray-900">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </main>
</template>
