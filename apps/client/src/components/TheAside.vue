<script setup>
import { useAppsStore, useModalStore } from "@/stores";
import BaseButton from "./BaseButton.vue";
import TheAppsList from "./apps/TheAppsList.vue";
import { useEventListener } from "@vueuse/core";
import { ref } from "vue";
import { capitalizer } from "@/shared/utils/capitalizer";

const modalStore = useModalStore();
const appsStore = useAppsStore();

const props = defineProps({ classes: { type: String } });
const target = ref(null);

useEventListener(target, "click", () => {
  appsStore.activeAppId = null;
});
</script>

<template>
  <div :class="classes" ref="target">
    <BaseButton
      :label="capitalizer($t('app.new'))"
      class="bg-btn-primary hover:bg-btn-primary/70 mt-2 mb-4 h-10 w-full rounded-3xl text-gray-100 transition duration-300"
      @click="modalStore.openModal('createApp')"
    />
    <TheAppsList />
  </div>
</template>
