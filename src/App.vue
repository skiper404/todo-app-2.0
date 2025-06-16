<script setup>
import { useModalStore } from "./stores/ModalStore";
import AppHeader from "@/components/AppHeader.vue";
import TheAside from "./components/aside/TheAside.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import BaseModal from "./components/BaseModal.vue";
import BaseMenu from "./components/BaseMenu.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useMainStore } from "./stores/MainStore";

const modalStore = useModalStore();
const mainStore = useMainStore();
const router = useRouter();

const handleGlobalClick = (event) => {
  const path = event.composedPath?.() || [];
  const shouldIgnore = path.some((el) => {
    return el.classList?.contains("no-reset-activeId");
  });

  if (!shouldIgnore) {
    router.push({ name: "Home" });
    mainStore.resetActiveAppId();
  }
};

onMounted(() =>
  document.addEventListener("click", (event) => handleGlobalClick(event)),
);
</script>

<template>
  <div class="min-h-screen bg-[#fafafa] dark:bg-gray-950">
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
