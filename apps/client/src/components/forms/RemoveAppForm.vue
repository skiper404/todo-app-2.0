<script setup>
import BaseButton from "../BaseButton.vue";

import { useAppsStore, useModalStore } from "@/stores";
import BaseIcon from "../BaseIcon.vue";
const appsStore = useAppsStore();
const modalStore = useModalStore();

const handleSubmit = async () => {
  await appsStore.removeApp(modalStore.modalData);
  modalStore.closeModal();
};
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="relative z-20 flex h-1/6 w-100 flex-col rounded-3xl bg-gray-800 p-4"
  >
    <BaseIcon
      name="close"
      classes="size-8 text-red-500 hover:text-red-400 absolute top-4 right-4"
      @click="modalStore.closeModal"
    />
    <div class="text-indigo-30 mt-2 text-center text-xl text-indigo-500">
      Remove app
    </div>
    <div class="mt-2 text-center text-sm text-gray-400">
      Are you really want remove
      <span class="text-indigo-400">
        {{ modalStore.modalData.appName }}
      </span>
      ?
    </div>
    <div class="mt-auto flex items-center justify-center gap-6">
      <BaseButton
        type="submit"
        label="No"
        classes="rounded-full text-gray-400 bg-gray-900 px-6 py-1 mt-auto hover:bg-red-400 transition duration-300 hover:text-gray-100"
        @click="modalStore.closeModal"
      />
      <BaseButton
        type="submit"
        label="Yes"
        classes="rounded-full text-gray-400 bg-gray-900 px-6 py-1 mt-auto hover:bg-green-600 transition duration-300 hover:text-gray-100"
      />
    </div>
  </form>
</template>
