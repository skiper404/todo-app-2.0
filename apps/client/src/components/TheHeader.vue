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

const headerClasses =
  "bg-secondary-bg fixed top-0 right-0 left-0 flex h-16 items-center justify-between px-4";

const iconClasses =
  "text-secondary-text size-8 hidden sm:block hover:text-secondary-text/50";

const menuClasses = "size-8 text-secondary-text sm:hidden";
</script>

<template>
  <header :class="headerClasses">
    <TheLogo @click="appsStore.activeApp = null" />
    <div>
      <BaseIcon
        name="cog"
        :classes="iconClasses"
        @click="settingsStore.openSettings"
      />
      <BaseIcon
        name="menu"
        :classes="menuClasses"
        @click="menuStore.openMenu"
      />
    </div>
  </header>
</template>
