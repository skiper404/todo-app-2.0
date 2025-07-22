<script setup>
import { useModalStore } from "@/stores";
import BaseButton from "./BaseButton.vue";
import TheAppsList from "./apps/TheAppsList.vue";

const modalStore = useModalStore();

const props = defineProps({ classes: { type: String } });
</script>

<template>
  <div :class="classes">
    <BaseButton
      label="Create App"
      class="mt-2 mb-4 h-10 w-full rounded-3xl bg-indigo-900 text-gray-100 transition duration-300 hover:bg-indigo-800"
      @click="modalStore.openModal('createApp')"
    />
    <TheAppsList />
  </div>
</template>
