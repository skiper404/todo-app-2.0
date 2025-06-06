<script setup>
import { useMenuStore } from "@/stores/MenuStore";
import BaseButton from "./BaseButton.vue";
import AsideLists from "./aside/AsideLists.vue";
import BaseCreateBlock from "./BaseCreateBlock.vue";

const menuStore = useMenuStore();
</script>

<template>
  <div
    class="absolute top-0 left-0 z-10 h-screen w-full bg-black/50 md:hidden"
    @click.self="menuStore.closeMenu"
  >
    <div class="relative border-b bg-gray-950 pt-20">
      <BaseCreateBlock
        label="Create list"
        formType="createList"
        class="absolute top-4 left-1/2 w-1/2 -translate-x-1/2"
      />
      <div class="mx-10">
        <AsideLists />
      </div>
      <BaseButton
        name="xmark"
        class="absolute top-9 right-9 rounded bg-gray-900 p-1"
        @click="menuStore.closeMenu"
      />
    </div>
  </div>
</template>
