<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";
import TheFooter from "./components/TheFooter.vue";
import TheMenu from "./components/TheMenu.vue";
import BaseModal from "./components/BaseModal.vue";
import TheSettings from "./components/TheSettings.vue";

import {
  useMenuStore,
  useModalStore,
  useTasksStore,
  useSettingStore,
} from "./stores";

import { onMounted } from "vue";

const menuStore = useMenuStore();
const modalStore = useModalStore();
const tasksStore = useTasksStore();
const settingsStore = useSettingStore();

onMounted(() => tasksStore.getAllTasks());
</script>

<template>
  <div class="bg-primary-bg relative min-h-screen overflow-hidden text-white">
    <transition name="fade">
      <TheMenu v-if="menuStore.isShowMenu" />
    </transition>
    <transition name="settings">
      <TheSettings
        v-if="settingsStore.showSettings"
        :key="menuStore.isShowMenu"
      />
    </transition>
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
  <teleport to="body">
    <transition name="fade">
      <BaseModal v-if="modalStore.isShowModal" />
    </transition>
  </teleport>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.settings-enter-active,
.settings-leave-active {
  transition:
    opacity 300ms ease,
    transform 300ms ease;
}

.settings-enter-from,
.settings-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
