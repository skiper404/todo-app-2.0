<script setup>
import BaseIcon from "./BaseIcon.vue";
import TheLogo from "./TheLogo.vue";
import { useMenuStore } from "@/stores";

const menuStore = useMenuStore();
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 flex h-16 items-center justify-between px-4"
  >
    <TheLogo />
    <BaseIcon
      name="menu"
      classes="size-8 text-indigo-500 sm:hidden"
      @click="menuStore.openMenu"
    />
  </header>
</template>
