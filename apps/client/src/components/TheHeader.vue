<script setup>
import BaseIcon from "./BaseIcon.vue";
import TheLogo from "./TheLogo.vue";
import { useMenuStore, useAppsStore, useSettingStore } from "@/stores";

const menuStore = useMenuStore();
const appsStore = useAppsStore();
const settingsStore = useSettingStore();

const headerClasses =
  "dark:bg-gray-800 bg-indigo-500 fixed top-0 right-0 left-0 flex h-16 items-center justify-between px-4";
const iconClasses =
  "dark:text-indigo-500 size-6 dark:hover:text-indigo-300 text-gray-100 hover:text-indigo-300";
</script>

<template>
  <header :class="headerClasses">
    <TheLogo @click="appsStore.activeApp = null" />
    <section class="flex">
      <BaseIcon
        name="cog"
        :classes="iconClasses"
        @click="settingsStore.openSettings"
      />
      <BaseIcon
        name="menu"
        :classes="['sm:hidden', iconClasses]"
        @click="menuStore.openMenu"
      />
    </section>
  </header>
</template>
