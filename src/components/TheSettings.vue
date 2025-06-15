<script setup>
import SoundControl from "./SoundControl.vue";
import ThemeControl from "./ThemeControl.vue";
import LocaleControl from "./LocaleControl.vue";
</script>

<template>
  <div
    class="absolute top-18 right-2 flex h-30 w-30 flex-col items-center justify-center gap-4 rounded-2xl bg-gray-300 dark:bg-gray-700"
  >
    <SoundControl />
    <ThemeControl />
    <LocaleControl />
  </div>
</template>
