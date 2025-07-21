<script setup>
import BaseIcon from "./BaseIcon.vue";
import TheLogo from "./TheLogo.vue";
import Login from "./Login.vue";
import { useMenuStore, useAppsStore, useFilterStore } from "@/stores";

const menuStore = useMenuStore();
const appsStore = useAppsStore();
const filterStore = useFilterStore();
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 flex h-16 items-center justify-between bg-gray-950 px-4"
  >
    <TheLogo />
    <Login class="hidden lg:block" />
    <BaseIcon
      name="menu"
      classes="size-10 text-indigo-500 lg:hidden"
      @click="menuStore.openMenu"
    />
  </header>
</template>
