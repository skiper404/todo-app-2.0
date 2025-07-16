<script setup>
import SoundControl from "./SoundControl.vue";
import ThemeControl from "./ThemeControl.vue";
import LocaleControl from "./LocaleControl.vue";
</script>

<template>
  <div
    class="bg-primary-bg absolute top-18 right-2 flex h-30 w-30 flex-col items-center justify-center gap-2 rounded-2xl"
  >
    <SoundControl />
    <ThemeControl />
    <LocaleControl />
  </div>
</template>
