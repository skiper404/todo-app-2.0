<script setup>
import BaseIcon from "./BaseIcon.vue";
import { useMenuStore } from "@/stores";
import TheAside from "./TheAside.vue";
const menuStore = useMenuStore();
</script>

<template>
  <div
    class="absolute inset-0 z-20 items-center justify-center backdrop-blur-2xl lg:flex"
  >
    <BaseIcon
      name="close"
      classes="size-8 z-10 text-gray-500 hover:text-red-400 absolute top-4 right-4"
      @click="menuStore.closeMenu"
    />

    <TheAside classes="block w-full lg:hidden px-2 mt-14" />
  </div>
</template>
