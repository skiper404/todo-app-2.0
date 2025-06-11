<script setup>
import TheTitle from "./TheTitle.vue";
import TheDate from "./TheDate.vue";
import BaseButton from "./BaseButton.vue";
import { useMenuStore } from "@/stores/MenuStore";
const menuStore = useMenuStore();
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-10 flex items-center justify-between border-[var(--color-primary-600)] bg-gradient-to-r from-[var(--color-primary-700)] to-[var(--color-primary-600)] p-4 md:px-10 lg:top-4 lg:right-4 lg:left-4 lg:rounded-3xl lg:border-2"
  >
    <TheTitle />
    <div class="flex gap-2">
      <TheDate />
      <BaseButton
        name="menu"
        class="rounded bg-gray-900 p-1 lg:hidden"
        @click="menuStore.openMenu"
      />
    </div>
  </header>
</template>
