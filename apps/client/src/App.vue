<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import TheMenu from "./components/TheMenu.vue";
import BaseModal from "./components/BaseModal.vue";
import BaseTransitionWrapper from "./components/BaseTransitionWrapper.vue";
import BaseTransitionMenuWrapper from "./components/BaseTransitionMenuWrapper.vue";

import { useMenuStore } from "./stores";
import { useModalStore } from "./stores";

const menuStore = useMenuStore();
const modalStore = useModalStore();
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-gray-900 text-white">
    <BaseTransitionMenuWrapper>
      <TheMenu v-if="menuStore.isShowMenu" />
    </BaseTransitionMenuWrapper>
    <BaseTransitionWrapper>
      <BaseModal v-if="modalStore.isShowModal" />
    </BaseTransitionWrapper>

    <Header />
    <Main />
    <Footer />
  </div>
</template>

<style></style>
