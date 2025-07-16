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
  <div
    class="bg-secondary-bg text-secondary-text relative flex w-full items-center rounded-2xl"
  >
    <BaseIcon
      name="search"
      :class="[
        'absolute left-2',
        {
          'text-search-icon': taskStore.searchQuery,
        },
      ]"
    />
    <BaseInput
      id="searchId"
      label=""
      :placeholder="t('labels.search')"
      v-model="taskStore.searchQuery"
      :class="[
        'w-full rounded-full px-10 py-1 text-lg',
        {
          'bg-accent-bg': taskStore.searchQuery,
        },
      ]"
    />
    <BaseButton
      name="clear"
      :class="[
        'absolute right-2 hover:text-[var(--color-clear-icon-hover)]',
        taskStore.searchQuery
          ? 'text-[var(--color-clear-icon)]'
          : 'text-[var(--color-clear-default-icon)]',
      ]"
      @click="taskStore.resetSearchQuery"
    />
  </div>
</template>
