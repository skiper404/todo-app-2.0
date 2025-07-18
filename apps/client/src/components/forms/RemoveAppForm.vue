<script setup>
import { useAppsStore, useModalStore } from "@/stores";
import BaseButton from "../BaseButton.vue";

const appsStore = useAppsStore();
const modalStore = useModalStore();

const handlerClick = () => {
  appsStore.removeApp(modalStore.modalData);
  modalStore.closeModal();
};
</script>

<template>
  <div class="border">
    <div>Remove App form</div>
    <div class="flex gap-10">
      <BaseButton label="cancel" />
      <BaseButton label="confirm" @click="handlerClick" />
    </div>
  </div>
</template>
