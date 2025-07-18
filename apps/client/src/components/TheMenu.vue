<script setup>
import BaseIcon from "./BaseIcon.vue";
import { useMenuStore } from "@/stores";

const menuStore = useMenuStore();
</script>

<template>
  <div
    class="absolute inset-0 z-10 flex items-center justify-center bg-gray-900"
  >
    <BaseIcon
      name="close"
      classes="size-8 text-red-500 hover:text-red-400 absolute top-4 right-4"
      @click="menuStore.closeMenu"
    />
    <div>Menu</div>
  </div>
</template>
