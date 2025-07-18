<script setup>
import { useModalStore } from "@/stores";
import BaseButton from "./BaseButton.vue";
import TheAppsList from "./apps/TheAppsList.vue";

const modalStore = useModalStore();
</script>

<template>
  <div
    class="fixed top-16 bottom-10 m-4 w-100 rounded-3xl border-2 border-indigo-800 bg-gray-900 px-4 py-2"
  >
    <BaseButton
      label="Create App"
      class="mx-auto my-8 h-10 w-full rounded-3xl bg-indigo-900 text-gray-100 transition duration-300 hover:bg-indigo-800"
      @click="modalStore.openModal('createApp')"
    />
    <TheAppsList />
  </div>
</template>
