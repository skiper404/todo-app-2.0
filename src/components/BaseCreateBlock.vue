<script setup>
import { useModalStore } from "@/stores/ModalStore";
import BaseButton from "./BaseButton.vue";
import { useI18n } from "vue-i18n";
const props = defineProps({
  label: { type: String, default: "" },
  formType: String,
});

const modalStore = useModalStore();
const { t } = useI18n();
</script>
<template>
  <div
    class="mx-2 my-2 flex justify-center hover:text-green-700 lg:mx-0 dark:text-gray-300"
  >
    <BaseButton
      class="flex h-10 w-full items-center justify-center rounded-xl bg-green-500 p-2 text-gray-50 transition duration-300 hover:bg-green-400 lg:mx-0 dark:bg-green-700 dark:hover:bg-green-600"
      @click="modalStore.openModal(formType)"
    >
      <span>{{ t(label) }}</span>
    </BaseButton>
  </div>
</template>
