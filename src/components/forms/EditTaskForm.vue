<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { useModalStore } from "@/stores/ModalStore";
import { categoryOptions, priorityOptions, statusOptions } from "@/constants";

import BaseInput from "../BaseInput.vue";
import BaseButton from "../BaseButton.vue";
import BaseMessage from "../BaseMessage.vue";
import BaseSelect from "../BaseSelect.vue";

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
      <BaseInput
        class="mx-10 rounded-2xl bg-gray-300 px-2 py-1 dark:bg-gray-800"
        id="taskName"
        label="labels.taskName"
        icon="appName"
        placeholder="Task name..."
        v-model="modalStore.modalData.taskName"
        @submit-enter="taskStore.updateTask(modalStore.modalData)"
      />

      <BaseSelect
        class="mx-10 rounded-2xl bg-gray-300 px-2 py-1 dark:bg-gray-800"
        id="taskCategory"
        label="labels.category"
        icon="category"
        i18n-path="category"
        :options="categoryOptions"
        v-model="modalStore.modalData.taskCategory"
      />

      <BaseSelect
        class="mx-10 rounded-2xl bg-gray-300 px-2 py-1 dark:bg-gray-800"
        id="taskPriority"
        label="labels.priority"
        icon="priority"
        i18n-path="priority"
        :options="priorityOptions"
        v-model="modalStore.modalData.taskPriority"
      />

      <BaseSelect
        class="mx-10 rounded-2xl bg-gray-300 px-2 py-1 dark:bg-gray-800"
        id="taskStatus"
        label="labels.status"
        icon="status"
        i18n-path="status"
        :options="statusOptions"
        v-model="modalStore.modalData.taskStatus"
      />

      <transition
        enter-active-class="transition duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <BaseMessage
          v-if="taskStore.showEmptyNameErrorMessage"
          :key="'empty'"
          message="errors.emptyName"
        />
        <BaseMessage
          v-else-if="taskStore.showShortNameErrorMessage"
          :key="'short'"
          message="errors.shortName"
        />
      </transition>
      <BaseButton
        @click="taskStore.updateTask(modalStore.modalData)"
        class="mx-auto my-4 rounded-xl bg-green-500 p-2 text-gray-50 transition duration-300 hover:bg-green-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-green-400"
      >
        {{ t("buttons.update") }}</BaseButton
      >
    </div>
  </div>
</template>
