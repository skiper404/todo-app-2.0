<script setup>
import BaseIcon from "./BaseIcon.vue";
import TheLogo from "./TheLogo.vue";
import {
  useMenuStore,
  useAppsStore,
  useSettingStore,
  useFilterStore,
  useTasksStore,
} from "@/stores";

const menuStore = useMenuStore();
const appsStore = useAppsStore();
const settingsStore = useSettingStore();
const filterStore = useFilterStore();
const tasksStore = useTasksStore();
</script>

<template>
  <header
    class="bg-secondary-bg fixed top-0 right-0 left-0 flex h-16 items-center justify-between px-4"
  >
    <TheLogo @click="appsStore.activeApp = null" />
    <div>
      <BaseIcon
        name="cog"
        classes="text-secondary-text size-8 hidden sm:block hover:text-secondary-text/50"
        @click="settingsStore.openSettings"
      />
      <BaseIcon
        name="menu"
        classes="size-8 text-secondary-text sm:hidden"
        @click="menuStore.openMenu"
      />
    </div>
  </header>
</template>
