<script setup>
import TheAside from "./TheAside.vue";
import HomePage from "./HomePage.vue";
import { Splitter, SplitterPanel } from "primevue";

const mainClasses = "h-screen overflow-hidden pt-16";
const splitterWrapperClasses = "flex h-full";
const splitterClasses =
  "hidden min-w-58 border-r-2 border-gray-300 sm:block dark:border-gray-800";
const asideClasses = "h-full overflow-auto px-4";
</script>

<template>
  <main :class="mainClasses">
    <Splitter :class="splitterWrapperClasses">
      <SplitterPanel :class="splitterClasses">
        <TheAside :class="asideClasses" />
      </SplitterPanel>
      <SplitterPanel>
        <div class="overflow-auto">
          <HomePage />
        </div>
      </SplitterPanel>
    </Splitter>
  </main>
</template>
