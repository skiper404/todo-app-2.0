<script setup>
import {
  categoryOptions,
  priorityOptions,
  statusOptions,
} from "@/shared/constants/constants";
import BaseInput from "./BaseInput.vue";
import BaseSelect from "./BaseSelect.vue";

import { useFilterStore } from "@/stores";

const filterStore = useFilterStore();

const wrapperClasses =
  "bg-indigo-200 dark:bg-indigo-900 my-2 flex flex-col gap-2 rounded-2xl p-2";
</script>

<template>
  <div :class="wrapperClasses">
    <BaseInput
      id="search"
      type="text"
      i18nKey="search"
      v-model="filterStore.searchQuery"
    />
    <BaseSelect :options="categoryOptions" v-model="filterStore.category" />
    <BaseSelect :options="priorityOptions" v-model="filterStore.priority" />
    <BaseSelect :options="statusOptions" v-model="filterStore.status" />
  </div>
</template>
