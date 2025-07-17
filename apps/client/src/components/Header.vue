<script setup>
import BaseIcon from "./BaseIcon.vue";
import TheLogo from "./TheLogo.vue";
import { useMainStore } from "@/stores";

const mainStore = useMainStore();
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 flex h-16 items-center justify-between bg-gray-900 px-4"
  >
    <TheLogo />
    <BaseIcon
      name="menu"
      classes="size-10 text-indigo-500"
      @click="mainStore.openMenu"
    />
  </header>
</template>
