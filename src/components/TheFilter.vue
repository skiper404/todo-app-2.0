<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { categoryOptions, priorityOptions, statusOptions } from "@/constants";
import { useI18n } from "vue-i18n";
import BaseButton from "./BaseButton.vue";
import BaseSelect from "./BaseSelect.vue";

const taskStore = useTaskStore();
const { t } = useI18n();
</script>

<template>
  <div
    class="mt-2 flex w-full flex-col items-center justify-between gap-2 text-lg lg:flex-row"
  >
    <div
      :class="[
        'flex w-full flex-1 items-center justify-between rounded-2xl bg-gray-50 px-2 py-1 transition duration-300',
        {
          'bg-gray-300 dark:bg-gray-800 dark:text-gray-400': taskStore.category,
          'bg-gray-200 dark:bg-gray-900 dark:text-gray-600':
            !taskStore.category,
        },
      ]"
    >
      <BaseSelect
        id="categoryId"
        :label="t('labels.category')"
        icon="category"
        i18nPath="category"
        :options="categoryOptions"
        v-model="taskStore.category"
      />
      <BaseButton
        name="cancel"
        @click="taskStore.resetFilter('category')"
        class="hover:text-red-400"
      />
    </div>
    <div
      :class="[
        'flex w-full flex-1 items-center justify-between rounded-2xl bg-gray-50 px-2 py-1 transition duration-300',
        {
          'bg-gray-300 dark:bg-gray-800 dark:text-gray-400': taskStore.priority,
          'bg-gray-200 dark:bg-gray-900 dark:text-gray-600':
            !taskStore.priority,
        },
      ]"
    >
      <BaseSelect
        id="priorityId"
        :label="t('labels.priority')"
        icon="priority"
        i18nPath="priority"
        :options="priorityOptions"
        v-model="taskStore.priority"
      />
      <BaseButton
        name="cancel"
        @click="taskStore.resetFilter('priority')"
        class="hover:text-red-400"
      />
    </div>
    <div
      :class="[
        'flex w-full flex-1 items-center justify-between rounded-2xl bg-gray-50 px-2 py-1 transition duration-300',
        {
          'bg-gray-300 dark:bg-gray-800 dark:text-gray-400': taskStore.status,
          'bg-gray-200 dark:bg-gray-900 dark:text-gray-600': !taskStore.status,
        },
      ]"
    >
      <BaseSelect
        id="statusId"
        :label="t('labels.status')"
        icon="status"
        i18nPath="status"
        :options="statusOptions"
        v-model="taskStore.status"
      />
      <BaseButton
        name="cancel"
        @click="taskStore.resetFilter('status')"
        class="hover:text-red-400"
      />
    </div>
  </div>
</template>
