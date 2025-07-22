<script setup>
import TaskItem from "./TaskItem.vue";
import BaseButton from "../BaseButton.vue";
import TheFilter from "../TheFilter.vue";
import BaseIcon from "../BaseIcon.vue";
import BaseChart from "../BaseChart.vue";
import BaseTransitionUppearWrapper from "../BaseTransition.vue";

import { useAppsStore, useModalStore, useFilterStore } from "@/stores";

const appsStore = useAppsStore();
const modalStore = useModalStore();
const filterStore = useFilterStore();
</script>

<template>
  <div class="mb-10 px-4">
    <BaseTransitionUppearWrapper>
      <TheFilter v-if="filterStore.isShowFilters" />
    </BaseTransitionUppearWrapper>
    <BaseIcon
      classes="size-10 mx-auto text-indigo-500"
      :name="filterStore.isShowFilters ? 'show' : 'hide'"
      @click="filterStore.toggleFilters"
    />
    <BaseButton
      v-if="appsStore.activeAppId"
      label="Create Task"
      classes="mx-auto mb-2 h-10 w-full rounded-3xl bg-indigo-900 text-gray-100 transition duration-300 hover:bg-indigo-800"
      @click="modalStore.openModal('createTask')"
    />
    <div
      class="text-center"
      v-if="
        filterStore.filteredAndSearchedTasks.length === 0 &&
        appsStore.activeAppId
      "
    >
      <span class="text-indigo-500"> No results... </span>
      <BaseButton
        label="Reset Filters"
        class="mx-auto mt-2 rounded-2xl bg-indigo-800 px-4 py-2 text-xs transition duration-300 hover:bg-indigo-600"
        @click="filterStore.resetFilters"
      />
    </div>
    <BaseChart />
    <ul class="flex flex-col gap-2">
      <TaskItem />
    </ul>
  </div>
</template>
