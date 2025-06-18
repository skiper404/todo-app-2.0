<script setup>
import { useMenuStore } from "@/stores/MenuStore";
import BaseButton from "./BaseButton.vue";
import AsideLists from "./aside/AsideApps.vue";
import BaseCreateBlock from "./BaseCreateBlock.vue";
import TheSearch from "./TheSearch.vue";
import TheFilter from "./TheFilter.vue";

const menuStore = useMenuStore();
</script>

<template>
  <transition
    enter-active-class="transition duration-500"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      class="no-reset-activeId absolute top-0 left-0 z-10 h-screen w-full bg-black/70 md:hidden"
      @click.self="menuStore.closeMenu"
      v-if="menuStore.showMenu"
    ></div>
  </transition>
  <transition
    enter-active-class="transition duration-300"
    enter-from-class="opacity-0 -translate-y-full"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-500"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-full"
  >
    <div
      class="no-reset-activeId absolute top-0 right-0 left-0 z-10 bg-gray-100 pt-16 md:hidden dark:bg-gray-950"
      v-if="menuStore.showMenu"
    >
      <BaseCreateBlock
        label="buttons.createApp"
        formType="createTrackedApp"
        class="absolute top-1 left-1/2 w-1/2 -translate-x-1/2"
      />
      <div class="border-[var(--color-primary-600)] p-1 text-sm">
        <TheSearch />
        <TheFilter />
      </div>
      <AsideLists />
      <BaseButton
        name="close"
        class="absolute top-4 right-4 rounded bg-gray-300 p-1 text-gray-950 dark:bg-gray-800"
        @click="menuStore.closeMenu"
      />
    </div>
  </transition>
</template>
