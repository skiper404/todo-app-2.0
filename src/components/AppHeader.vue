<script setup>
import TheTitle from "./TheTitle.vue";
import TheDate from "./TheDate.vue";
import BaseButton from "./BaseButton.vue";
import { useMenuStore } from "@/stores/MenuStore";
const menuStore = useMenuStore();
</script>

<template>
  <header
    class="fixed top-6 right-6 left-6 flex items-center justify-between rounded-2xl border-2 border-[var(--color-primary-600)] bg-gradient-to-r from-[var(--color-primary-700)] to-[var(--color-primary-600)] px-2 py-2 md:px-10"
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
