<script setup>
import TheAside from "./TheAside.vue";
import HomePage from "./HomePage.vue";
import { Splitter, SplitterPanel } from "primevue";
</script>

<template>
  <main class="h-screen overflow-hidden pt-16">
    <Splitter class="flex h-full">
      <SplitterPanel
        class="hidden min-w-58 border-r-2 border-gray-300 sm:block dark:border-gray-800"
      >
        <TheAside class="h-full overflow-auto px-4" />
      </SplitterPanel>

      <SplitterPanel class="flex h-full flex-col">
        <div class="overflow-auto">
          <HomePage />
        </div>
      </SplitterPanel>
    </Splitter>
  </main>
</template>
