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
    class="no-reset-activeId bg-primary-bg fixed top-0 right-0 left-0 z-10 flex items-center justify-between p-4 md:top-4 md:right-4 md:left-4 md:rounded-3xl md:px-10"
  >
    <TheTitle @click="mainStore.resetActiveAppId" />
    <div class="flex items-center gap-2">
      <TheSettings v-if="showSettings" ref="settingsRef" />
      <BaseButton
        name="settings"
        @click="openSettings"
        :class="[
          'text-secondary-text',
          { 'pointer-events-none': showSettings },
        ]"
      />
      <BaseButton
        name="menu"
        class="text-secondary-text rounded p-1 md:hidden"
        @click="menuStore.openMenu"
      />
    </div>
  </header>
</template>
