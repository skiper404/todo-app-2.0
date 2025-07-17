<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import TheMenu from "./components/TheMenu.vue";
import { useMenuStore } from "./stores";

const menuStore = useMenuStore();
</script>

<template>
  <div class="relative min-h-screen bg-gray-800 text-white">
    <TheMenu v-if="menuStore.isShowMenu" />
    <Header />
    <Main />
    <Footer />
  </div>
</template>
