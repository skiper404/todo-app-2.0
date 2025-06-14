<script setup>
import { useModalStore } from "@/stores/ModalStore";
import { useMainStore } from "@/stores/MainStore";
import BaseButton from "../BaseButton.vue";
import { messages } from "@/messages";
import { useI18n } from "vue-i18n";

const mainStore = useMainStore();
const modalStore = useModalStore();

const { t } = useI18n();
</script>

<template>
  <div
    class="relative flex flex-col rounded-xl bg-gray-200 dark:bg-gray-900 dark:text-gray-400"
  >
    <div class="mt-10 flex flex-col gap-2 px-10">
      <div>
        {{ t("removeQuestion") }}
        <span class="font-bold text-gray-400">{{
          modalStore.modalData.appName
        }}</span>
        ?
      </div>
      <div class="flex">
        <BaseButton
          name="cancel"
          @click="modalStore.closeModal"
          class="mx-auto my-4 rounded-xl bg-gray-600 p-2 text-red-400 transition duration-300 hover:bg-gray-700"
        >
          No</BaseButton
        >
        <BaseButton
          name="done"
          @click="mainStore.removeApp(modalStore.modalData.appId)"
          class="mx-auto my-4 rounded-xl bg-gray-600 p-2 text-green-400 transition duration-300 hover:bg-gray-700"
        >
          Yes</BaseButton
        >
      </div>
    </div>
  </div>
</template>
