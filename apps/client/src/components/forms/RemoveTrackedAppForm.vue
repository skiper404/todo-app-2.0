<script setup>
import { useModalStore } from "@/stores/ModalStore";
import { useMainStore } from "@/stores/MainStore";
import BaseButton from "../BaseButton.vue";
import { useI18n } from "vue-i18n";
import { onKeyStroke } from "@vueuse/core";
import BaseIcon from "../BaseIcon.vue";
const { t } = useI18n();

const mainStore = useMainStore();
const modalStore = useModalStore();

onKeyStroke("Escape", () => modalStore.closeModal());
onKeyStroke("Enter", () => mainStore.removeApp(modalStore.modalData.appId));
</script>

<template>
  <div class="bg-primary-bg relative flex flex-col rounded-xl">
    <div class="mt-14 flex flex-col">
      <div class="text-primary-text mx-6">
        {{ t("removeQuestion") }}
        <span class="font-bold">"{{ modalStore.modalData.appName }}"</span>
        ?
      </div>
      <div class="flex items-center justify-center gap-8">
        <BaseButton
          name="clear"
          @click="modalStore.closeModal"
          class="text-clear-icon hover:text-clear-icon-hover my-4 rounded-xl p-2 transition duration-300"
        >
          <BaseIcon :name="name" />
          <span class="pl-1">
            {{ t("buttons.no") }}
          </span>
        </BaseButton>
        <BaseButton
          name="done"
          @click="mainStore.removeApp(modalStore.modalData.appId)"
          class="text-done-icon my-4 rounded-xl p-2 transition duration-300"
          ><span class="pl-1">
            {{ t("buttons.yes") }}
          </span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
