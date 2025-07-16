<script setup>
import BaseIcon from "./BaseIcon.vue";
import { SwitchRoot, SwitchThumb } from "radix-vue";
import { useSettingsStore } from "@/stores/SettingsStore";

const settingsStore = useSettingsStore();
</script>

<template>
  <SwitchRoot
    id="theme"
    v-model:checked="settingsStore.isDark"
    class="relative flex h-6 w-10 cursor-default items-center rounded-full bg-gray-300 shadow-xl focus-within:outline focus-within:outline-none"
  >
    <SwitchThumb
      :class="[
        'flex h-5 w-5 transform items-center justify-center rounded-full shadow-sm transition duration-300',
        settingsStore.isDark ? 'translate-x-4.5' : 'translate-x-0.5',
      ]"
    >
      <BaseIcon
        :name="settingsStore.isDark ? 'dark' : 'light'"
        size="4"
        :class="[settingsStore.isDark ? 'text-theme-icon' : 'text-theme-icon']"
      />
    </SwitchThumb>
  </SwitchRoot>
</template>
