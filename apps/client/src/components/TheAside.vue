<script setup>
import { useModalStore } from "@/stores";
import BaseButton from "./BaseButton.vue";
import TheAppsList from "./apps/TheAppsList.vue";

const modalStore = useModalStore();
</script>

<template>
  <div class="fixed w-90 rounded-3xl px-4">
    <BaseButton
      label="Create App"
      class="mx-auto my-8 h-10 w-full rounded-3xl bg-indigo-900 text-gray-100 transition duration-300 hover:bg-indigo-800"
      @click="modalStore.openModal('createApp')"
    />
    <TheAppsList />
  </div>
</template>
