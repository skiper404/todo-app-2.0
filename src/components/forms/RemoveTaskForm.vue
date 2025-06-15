<script setup>
import { useModalStore } from "@/stores/ModalStore";
import { useTaskStore } from "@/stores/TaskStore";

import BaseButton from "../BaseButton.vue";

const taskStore = useTaskStore();
const modalStore = useModalStore();

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div
    class="relative flex flex-col rounded-xl bg-gray-200 dark:bg-gray-900 dark:text-gray-400"
  >
    <div class="mt-12 flex flex-col gap-2 px-10">
      <div>
        {{ t("removeQuestion") }}
        <span class="font-bold dark:text-gray-300">{{
          modalStore.modalData.taskName
        }}</span>
        ?
      </div>
      <div class="flex">
        <BaseButton
          name="cancel"
          @click="modalStore.closeModal"
          class="mx-auto my-4 rounded-xl bg-gray-300 p-2 text-red-400 transition duration-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700"
        >
          <span class="pl-1">
            {{ t("buttons.no") }}
          </span>
        </BaseButton>
        <BaseButton
          name="done"
          @click="taskStore.removeTask(modalStore.modalData.taskId)"
          class="mx-auto my-4 rounded-xl bg-gray-300 p-2 text-green-400 transition duration-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700"
        >
          <span class="pl-1">
            {{ t("buttons.yes") }}
          </span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
