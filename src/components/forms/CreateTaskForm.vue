<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { priorityOptions, statusOptions, categoryOptions } from "@/constants";

import BaseInput from "../BaseInput.vue";
import BaseButton from "../BaseButton.vue";
import BaseMessage from "../BaseMessage.vue";
import BaseSelect from "../BaseSelect.vue";

const taskStore = useTaskStore();
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import { onKeyStroke } from "@vueuse/core";

onKeyStroke("Escape", () => modalStore.closeModal());
onKeyStroke("Enter", () => taskStore.createTask);
</script>

<template>
  <div
    class="relative flex flex-col rounded-xl bg-gray-200 dark:bg-gray-900 dark:text-gray-400"
  >
    <div class="mt-12 flex flex-col gap-2">
      <BaseInput
        class="mx-10 rounded-2xl bg-gray-300 px-2 py-1 dark:bg-gray-800"
        id="taskName"
        label="labels.taskName"
        icon="appName"
        placeholder="Task name..."
        v-model="taskStore.newTaskName"
        @submit-enter="taskStore.createTask"
      />

      <BaseSelect
        class="mx-10 rounded-2xl bg-gray-300 px-2 py-1 dark:bg-gray-800"
        id="taskCategory"
        label="labels.category"
        icon="category"
        i18n-path="category"
        :options="categoryOptions"
        v-model="taskStore.newTaskCategory"
      />

      <BaseSelect
        class="mx-10 rounded-2xl bg-gray-300 px-2 py-1 dark:bg-gray-800"
        id="taskPriority"
        label="labels.priority"
        icon="priority"
        i18n-path="priority"
        :options="priorityOptions"
        v-model="taskStore.newTaskPriority"
      />

      <BaseSelect
        class="mx-10 rounded-2xl bg-gray-300 px-2 py-1 dark:bg-gray-800"
        id="taskStatus"
        label="labels.status"
        i18n-path="status"
        :icon="taskStore.newTaskStatus"
        :options="statusOptions"
        v-model="taskStore.newTaskStatus"
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
        @click="taskStore.createTask"
        class="mx-auto my-4 rounded-xl bg-green-500 p-2 text-gray-50 transition duration-300 hover:bg-green-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-green-400"
        >{{ t("buttons.createTask") }}
      </BaseButton>
    </div>
  </div>
</template>
