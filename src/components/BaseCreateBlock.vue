<script setup>
import { useModalStore } from "@/stores/ModalStore";
import BaseButton from "./BaseButton.vue";
const props = defineProps({
  label: { type: String, default: "" },
  formType: String,
});

const modalStore = useModalStore();
</script>

<template>
  <div class="my-4 flex justify-center">
    <BaseButton
      class="flex h-10 w-full items-center justify-center rounded-xl bg-gray-900 transition duration-500 hover:bg-gray-800 hover:text-green-400"
      name="plus"
      @click="modalStore.openModal(formType)"
    >
      <span>{{ label }}</span>
    </BaseButton>
  </div>
</template>
