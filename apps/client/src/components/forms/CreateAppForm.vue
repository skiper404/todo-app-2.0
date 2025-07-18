<script setup>
import { useAppsStore, useModalStore } from "@/stores";
const appsStore = useAppsStore();
const modalStore = useModalStore();

const handleClick = () => {
  appsStore.createApp();
  modalStore.closeModal();
};
</script>

<template>
  <div class="h-1/2 border">
    <div class="text-center text-indigo-300">Create App form</div>
    <div class="m-4 flex flex-col gap-2">
      <input type="text" class="border" v-model="appsStore.newAppName" />
      <select v-model="appsStore.newAppType">
        <option value="desktop">Desktop</option>
        <option value="mobile">Mobile</option>
        <option value="web">Web</option>
      </select>
      <button class="border hover:text-green-500" @click="handleClick">
        Create
      </button>
    </div>
  </div>
</template>
;
