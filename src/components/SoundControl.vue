<script setup>
import { useSettingsStore } from "@/stores/SettingsStore";
import BaseButton from "./BaseButton.vue";

const settingsStore = useSettingsStore();
</script>

<template>
  <div class="flex">
    <BaseButton
      :name="settingsStore.isSoundOn ? 'soundOn' : 'soundOff'"
      @click="settingsStore.toggleSound"
      :class="[
        settingsStore.isSoundOn ? 'text-active-sound' : 'text-default-sound',
      ]"
    />
  </div>
</template>
