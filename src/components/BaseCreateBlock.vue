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
  <div class="my-4 flex justify-center hover:text-green-700 dark:text-gray-300">
    <BaseButton
      class="mx-10 flex h-10 w-full items-center justify-center rounded-xl bg-green-500 text-gray-50 transition duration-300 hover:bg-gray-800 lg:mx-0 dark:bg-green-700"
      @click="modalStore.openModal(formType)"
    >
      <span>{{ t(label) }}</span>
    </BaseButton>
  </div>
</template>
