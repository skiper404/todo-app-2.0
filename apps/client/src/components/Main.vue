<script setup>
import TheAside from "./TheAside.vue";
import TheTasks from "./tasks/TheTasks.vue";
import { Splitter, SplitterPanel } from "primevue";
</script>

<template>
  <main class="h-screen overflow-hidden pt-16">
    <Splitter class="flex h-full">
      <SplitterPanel
        class="hidden min-w-50 border-r-4 border-gray-800 sm:block"
      >
        <TheAside class="h-full overflow-auto px-4" />
      </SplitterPanel>

      <SplitterPanel class="flex h-full flex-col">
        <div class="overflow-auto">
          <TheTasks />
        </div>
      </SplitterPanel>
    </Splitter>
  </main>
</template>
