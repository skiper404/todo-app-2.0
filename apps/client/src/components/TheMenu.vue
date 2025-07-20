<script setup>
import BaseIcon from "./BaseIcon.vue";
import { useMenuStore } from "@/stores";
import TheAside from "./TheAside.vue";
const menuStore = useMenuStore();
</script>

<template>
  <div
    class="absolute inset-0 z-10 items-center justify-center backdrop-blur-2xl lg:flex"
  >
    <BaseIcon
      name="close"
      classes="size-8 z-10 text-gray-500 hover:text-red-400 absolute top-4 right-4"
      @click="menuStore.closeMenu"
    />
    <TheAside class="top-6 block w-full lg:hidden" />
  </div>
</template>
