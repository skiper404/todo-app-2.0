<script setup>
import { useMenuStore } from "@/stores/MenuStore";
import BaseButton from "./BaseButton.vue";
import AsideLists from "./aside/AsideApps.vue";
import BaseCreateBlock from "./BaseCreate.vue";
import TheSearch from "./TheSearch.vue";
import TheFilters from "./TheFilters.vue";

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
      class="no-reset-activeId bg-main-layout absolute top-0 left-0 z-10 h-screen w-full md:hidden"
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
      class="no-reset-activeId bg-primary-bg absolute top-0 right-0 left-0 z-10 pt-16 md:hidden"
      v-if="menuStore.showMenu"
    >
      <BaseCreateBlock
        label="buttons.createApp"
        formType="createTrackedApp"
        class="absolute top-1 left-1/2 w-1/2 -translate-x-1/2"
      />
      <div class="p-1 text-sm">
        <TheSearch />
        <TheFilters />
      </div>
      <AsideLists />
      <BaseButton
        name="close"
        class="text-secondary-text absolute top-4 right-4 rounded p-1"
        @click="menuStore.closeMenu"
      />
    </div>
  </transition>
</template>
