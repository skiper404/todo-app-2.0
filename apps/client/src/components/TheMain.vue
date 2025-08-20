<script setup>
import TheAside from "../components/TheAside.vue";
import Charts from "./Charts.vue";
import BaseLoader from "../components/BaseLoader.vue";
import BaseModal from "./BaseModal.vue";
import TheWorkspace from "./TheWorkspace.vue";
import TheSettings from "./TheSettings.vue";
import TheMenu from "./TheMenu.vue";
import { Splitter, SplitterPanel } from "primevue";
import { useModalStore } from "@/stores";

const modalStore = useModalStore();

const mainClasses = "h-screen overflow-hidden pt-16";
const splitterClasses = "h-full flex";
const splitterPanelClasses = "sm:block border-gray-300 dark:border-gray-800";
const asideClasses = "h-full overflow-auto px-4";
</script>

<template>
  <main :class="mainClasses">
    <Splitter :class="splitterClasses">
      <SplitterPanel
        :class="['hidden min-w-54 border-r-2', splitterPanelClasses]"
        size="20"
      >
        <TheAside :class="asideClasses" />
      </SplitterPanel>
      <SplitterPanel
        :class="['min-w-100 border-l-2', splitterPanelClasses]"
        size="80"
      >
        <TheWorkspace />
        <BaseLoader />
        <Charts />
        <TheSettings />
        <TheMenu />
      </SplitterPanel>
    </Splitter>
    <teleport to="body">
      <BaseModal v-if="modalStore.isShowModal" />
    </teleport>
  </main>
</template>
