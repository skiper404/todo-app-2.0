<script setup>
import { useSettingStore } from "@/stores/SettingsStore";
import BaseIcon from "./BaseIcon.vue";
import TheSound from "./TheSound.vue";
import TheLocale from "./TheLocale.vue";
import TheTheme from "./TheTheme.vue";

const settingsStore = useSettingStore();
</script>

<template>
  <div
    class="absolute top-4 right-4 z-30 w-60 rounded-2xl backdrop-blur-2xl transition-opacity duration-300"
  >
    <BaseIcon
      name="close"
      classes="size-8 text-gray-500 hover:text-red-400 transition duration-300 absolute top-4 right-4"
      @click="settingsStore.closeSettings"
    />
    <div class="mt-12">
      <TheSound />
      <TheLocale />
      <TheTheme />
    </div>
  </div>
</template>
