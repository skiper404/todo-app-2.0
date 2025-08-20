<script setup>
import AppsList from "./apps/AppsList.vue";
import BaseButton from "./BaseButton.vue";
import { ref } from "vue";
import { useEventListener } from "@vueuse/core";
import { useAppsStore, useModalStore } from "@/stores";

const modalStore = useModalStore();
const appsStore = useAppsStore();

const props = defineProps({ classes: { type: String } });
const target = ref(null);

useEventListener(target, "click", () => {
  appsStore.activeApp = null;
});
</script>

<template>
  <div :class="classes" ref="target">
    <BaseButton
      i18nKey="app.new"
      classes="px-6 py-1 mx-auto my-4"
      @click="modalStore.openModal('createApp')"
    />
    <AppsList />
  </div>
</template>
