<script setup>
import { useMenuStore } from "@/stores/MenuStore";

import TheTitle from "./TheTitle.vue";
import BaseButton from "./BaseButton.vue";
import SoundControl from "./SoundControl.vue";
import ThemeControl from "./ThemeControl.vue";
import LangComp from "./LangComp.vue";

const menuStore = useMenuStore();
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-10 flex items-center justify-between bg-[#5184fd] p-4 md:px-10 lg:top-4 lg:right-4 lg:left-4 lg:rounded-3xl dark:bg-gray-800"
  >
    <TheTitle />
    <div class="flex items-center gap-2">
      <!-- <TheDate /> -->
      <LangComp />
      <ThemeControl />
      <SoundControl />
      <BaseButton
        name="menu"
        class="rounded bg-gray-50 p-1 lg:hidden dark:bg-gray-800"
        @click="menuStore.openMenu"
      />
    </div>
  </header>
</template>
