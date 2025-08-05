<script setup>
import { useSettingStore } from "@/stores/SettingsStore";
import BaseIcon from "./BaseIcon.vue";
import TheSound from "./TheSound.vue";
import TheLocale from "./TheLocale.vue";
import TheTheme from "./TheTheme.vue";

const settingsStore = useSettingStore();

const wrapperClasses =
  "absolute top-4 p-4 flex flex-col gap-4 right-4 z-30 w-60 rounded-2xl backdrop-blur-2xl transition-opacity duration-300";

const iconClasses =
  "size-8 text-gray-500 hover:text-red-400 transition duration-300 absolute top-4 right-4";
</script>

<template>
  <div :class="wrapperClasses">
    <BaseIcon
      name="close"
      :classes="iconClasses"
      @click="settingsStore.closeSettings"
    />

    <TheSound />
    <TheLocale />
    <TheTheme />
  </div>
</template>
