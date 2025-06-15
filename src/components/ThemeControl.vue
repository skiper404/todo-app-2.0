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
    class="relative flex h-6 w-10 cursor-default items-center rounded-full bg-black/50 shadow-xl focus-within:outline focus-within:outline-none data-[state=checked]:bg-black"
  >
    <SwitchThumb
      :class="[
        'h-5 w-5 transform rounded-full shadow-sm transition duration-300',
        settingsStore.isDark
          ? 'translate-x-4.5 bg-gray-700'
          : 'translate-x-0.5 bg-gray-300',
      ]"
    >
      <BaseIcon :name="settingsStore.isDark ? 'dark' : 'light'" />
    </SwitchThumb>
  </SwitchRoot>
</template>
