<script setup>
import { useModalStore } from "./stores/ModalStore";
import { useMenuStore } from "./stores/MenuStore";
import AppHeader from "@/components/AppHeader.vue";
import TheAside from "./components/aside/TheAside.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import BaseModal from "./components/BaseModal.vue";
import BaseMenu from "./components/BaseMenu.vue";

const menuStore = useMenuStore();
const modalStore = useModalStore();
</script>

<template>
  <div class="min-h-screen bg-black text-[var(--color-primary-500)]">
    <AppHeader />
    <BaseMenu />
    <TheAside />
    <AppMain />
    <AppFooter />
    <teleport to="body">
      <BaseModal v-show="modalStore.showModal" />
    </teleport>
  </div>
</template>
