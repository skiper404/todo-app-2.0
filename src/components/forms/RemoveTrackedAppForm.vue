<script setup>
import { useModalStore } from "@/stores/ModalStore";
import { useMainStore } from "@/stores/MainStore";
import BaseButton from "../BaseButton.vue";

const mainStore = useMainStore();
const modalStore = useModalStore();
</script>

<template>
  <div class="relative flex flex-col rounded-xl bg-gray-900 text-gray-500">
    <div class="mt-10 flex flex-col gap-2 px-10">
      <div>
        Are you really want delete
        <span>{{ modalStore.modalData.appName }}</span
        >?
      </div>
      <div class="flex">
        <BaseButton
          name="cancel"
          @click="modalStore.closeModal"
          class="mx-auto my-4 rounded-xl bg-gray-600 p-2 text-red-400 transition duration-300 hover:bg-gray-700"
        >
          No</BaseButton
        >
        <BaseButton
          name="done"
          @click="mainStore.removeApp(modalStore.modalData.appId)"
          class="mx-auto my-4 rounded-xl bg-gray-600 p-2 text-green-400 transition duration-300 hover:bg-gray-700"
        >
          Yes</BaseButton
        >
      </div>
    </div>
  </div>
</template>
