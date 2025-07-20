<script setup>
import TheAside from "./TheAside.vue";
import TheTasks from "./tasks/TheTasks.vue";
</script>

<template>
  <main class="pt-16">
    <TheAside class="top-16 bottom-10 hidden lg:block" />
    <div
      class="absolute left-90 hidden h-screen w-1 bg-gray-950 lg:block"
    ></div>
    <TheTasks />
  </main>
</template>
