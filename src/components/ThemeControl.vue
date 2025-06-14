<script setup>
import { useDark, useToggle, useColorMode } from "@vueuse/core";
import BaseIcon from "./BaseIcon.vue";
import { SwitchRoot, SwitchThumb } from "radix-vue";

const isDark = useDark();
const colorMode = useColorMode();
</script>

<template>
  <SwitchRoot
    id="theme"
    v-model:checked="isDark"
    class="relative flex h-6 w-10 cursor-default items-center rounded-full bg-black/50 shadow-xl focus-within:outline focus-within:outline-none data-[state=checked]:bg-black"
  >
    <SwitchThumb
      :class="[
        'h-5 w-5 transform rounded-full shadow-sm transition duration-300',
        isDark ? 'translate-x-4.5 bg-gray-700' : 'translate-x-0.5 bg-gray-300',
      ]"
    >
      <BaseIcon :name="colorMode" class="" />
    </SwitchThumb>
  </SwitchRoot>
</template>
