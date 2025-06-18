<script setup>
import { useModalStore } from "@/stores/ModalStore";
import { useMainStore } from "@/stores/MainStore";
import BaseButton from "../BaseButton.vue";
import { useI18n } from "vue-i18n";
import { onKeyStroke } from "@vueuse/core";
const { t } = useI18n();

const mainStore = useMainStore();
const modalStore = useModalStore();

onKeyStroke("Escape", () => modalStore.closeModal());
onKeyStroke("Enter", () => mainStore.removeApp(modalStore.modalData.appId));
</script>

<template>
  <div
    class="relative flex flex-col rounded-xl bg-gray-200 dark:bg-gray-900 dark:text-gray-400"
  >
    <div class="mt-12 flex flex-col gap-2 px-10">
      <div>
        {{ t("removeQuestion") }}
        <span class="font-bold dark:text-gray-300"
          >"{{ modalStore.modalData.appName }}"</span
        >
        ?
      </div>
      <div class="flex items-center justify-center gap-8">
        <BaseButton
          name="cancel"
          @click="modalStore.closeModal"
          class="my-4 rounded-xl bg-gray-300 p-2 text-red-400 transition duration-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700"
          ><span class="pl-1">
            {{ t("buttons.no") }}
          </span>
        </BaseButton>
        <BaseButton
          name="done"
          @click="mainStore.removeApp(modalStore.modalData.appId)"
          class="my-4 rounded-xl bg-gray-300 p-2 text-green-400 transition duration-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700"
          ><span class="pl-1">
            {{ t("buttons.yes") }}
          </span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
