<script setup>
import { useModalStore } from "@/stores/ModalStore";
import { useI18n } from "vue-i18n";
const props = defineProps({
  label: { type: String },
  formType: { type: String },
});

const modalStore = useModalStore();
const { t } = useI18n();
</script>
<template>
  <div
    class="bg-create-button text-primary-text hover:bg-create-button-hover m-2 flex items-center justify-center rounded-2xl py-2"
    @click="modalStore.openModal(formType)"
  >
    {{ t(label) }}
  </div>
</template>
