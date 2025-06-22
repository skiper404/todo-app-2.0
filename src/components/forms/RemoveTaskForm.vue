<script setup>
import { useModalStore } from "@/stores/ModalStore";
import { useTaskStore } from "@/stores/TaskStore";

import BaseButton from "../BaseButton.vue";

const taskStore = useTaskStore();
const modalStore = useModalStore();

import { useI18n } from "vue-i18n";
import { onKeyStroke } from "@vueuse/core";
const { t } = useI18n();

onKeyStroke("Escape", () => modalStore.closeModal());
onKeyStroke("Enter", () => taskStore.removeTask(modalStore.modalData.taskId));
</script>

<template>
  <div class="bg-primary-bg relative flex flex-col rounded-xl px-4">
    <div class="mt-14 flex flex-col gap-2">
      <div class="text-primary-text mx-6">
        {{ t("removeQuestion") }}
        <span class="font-bold">{{ modalStore.modalData.taskName }}</span>
        ?
      </div>
      <div class="flex items-center justify-center gap-8">
        <BaseButton
          name="clear"
          @click="modalStore.closeModal"
          class="text-clear-icon my-4 rounded-xl p-2 transition duration-300"
        >
          <span class="pl-1">
            {{ t("buttons.no") }}
          </span>
        </BaseButton>
        <BaseButton
          name="done"
          @click="taskStore.removeTask(modalStore.modalData.taskId)"
          class="text-done-icon my-4 rounded-xl transition duration-300"
        >
          <span class="pl-1">
            {{ t("buttons.yes") }}
          </span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
