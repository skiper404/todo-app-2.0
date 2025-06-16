<script setup>
import { useMenuStore } from "@/stores/MenuStore";
import { ref } from "vue";
import TheTitle from "./TheTitle.vue";
import BaseButton from "./BaseButton.vue";
import TheSettings from "./TheSettings.vue";
import { onClickOutside } from "@vueuse/core";
import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore();
const menuStore = useMenuStore();
const showSettings = ref(false);
const settingsRef = ref(null);

const openSettings = () => {
  showSettings.value = true;
};

onClickOutside(settingsRef, () => {
  showSettings.value = false;
});
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-10 flex items-center justify-between bg-[#5184fd] p-4 md:px-10 lg:top-4 lg:right-4 lg:left-4 lg:rounded-3xl dark:bg-gray-800"
  >
    <TheTitle @click="mainStore.resetActiveAppId" />
    <div class="flex items-center gap-2">
      <TheSettings v-if="showSettings" ref="settingsRef" />
      <BaseButton
        name="settings"
        @click="openSettings"
        :class="{ 'pointer-events-none': showSettings }"
      />
      <BaseButton
        name="menu"
        class="rounded bg-gray-50 p-1 lg:hidden dark:bg-gray-700"
        @click="menuStore.openMenu"
      />
    </div>
  </header>
</template>
