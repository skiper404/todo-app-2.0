<script setup>
import BaseIcon from "./BaseIcon.vue";
import TheLogo from "./TheLogo.vue";
import { useMenuStore, useTasksStore, useAppsStore } from "@/stores";

const menuStore = useMenuStore();
const tasksStore = useTasksStore();
const appsStore = useAppsStore();
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 flex h-16 items-center justify-between bg-gray-950 px-4"
  >
    <TheLogo />
    <pre>{{ appsStore.activeAppId }}</pre>
    <pre>{{ tasksStore.message }}</pre>
    <BaseIcon
      name="menu"
      classes="size-10 text-indigo-500"
      @click="menuStore.openMenu"
    />
  </header>
</template>
