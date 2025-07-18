<script setup>
import { useAppsStore, useModalStore } from "@/stores";
const appsStore = useAppsStore();
const modalStore = useModalStore();

const handleClick = () => {
  appsStore.updateApp(modalStore.modalData);
  modalStore.closeModal();
};
</script>

<template>
  <div class="h-1/2 border">
    <pre>{{ modalStore.modalData }}</pre>
    <div class="text-center text-indigo-300">Edit App form</div>
    <div class="m-4 flex flex-col gap-2">
      <input
        type="text"
        class="border"
        v-model="modalStore.modalData.appName"
      />
      <select v-model="modalStore.modalData.appType">
        <option value="desktop">Desktop</option>
        <option value="mobile">Mobile</option>
        <option value="web">Web</option>
      </select>
      <button class="border hover:text-green-500" @click="handleClick">
        Edit
      </button>
    </div>
  </div>
</template>
;
