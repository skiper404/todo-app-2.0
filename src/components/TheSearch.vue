<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import BaseIcon from "./BaseIcon.vue";
import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";
import { useI18n } from "vue-i18n";
const taskStore = useTaskStore();

const { t } = useI18n();
</script>

<template>
  <div class="relative flex w-full items-center">
    <BaseIcon
      name="search"
      :class="[
        'absolute left-4 text-gray-900',
        {
          'dark:text-gray-400': taskStore.searchQuery,
          'dark:text-gray-600': !taskStore.searchQuery,
        },
      ]"
    />
    <BaseInput
      id="searchId"
      label=""
      :placeholder="t('labels.search')"
      v-model="taskStore.searchQuery"
      :class="[
        'w-full rounded-full bg-gray-50 py-1 pl-4 text-lg outline-none',
        {
          'bg-gray-300 dark:bg-gray-800 dark:text-gray-400':
            taskStore.searchQuery,
          'bg-gray-200 dark:bg-gray-900 dark:text-gray-500':
            !taskStore.searchQuery,
        },
      ]"
    />
    <BaseButton
      name="cancel"
      :class="[
        'absolute right-2',
        {
          'dark:text-gray-400': taskStore.searchQuery,
          'dark:text-gray-600': !taskStore.searchQuery,
        },
      ]"
      @click="taskStore.resetSearchQuery"
    />
  </div>
</template>
