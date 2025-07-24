<script setup>
import TasksList from "./TasksList.vue";
import BaseButton from "../BaseButton.vue";
import TheFilter from "../TheFilter.vue";
import BaseIcon from "../BaseIcon.vue";
import NoResult from "../NoResult.vue";

import {
  useFilterStore,
  useAppsStore,
  useModalStore,
  useTasksStore,
} from "@/stores";
import { capitalizer } from "@/shared/utils/capitalizer";

const filterStore = useFilterStore();
const appsStore = useAppsStore();
const modalStore = useModalStore();
const tasksStore = useTasksStore();
</script>

<template>
  <TheFilter v-if="filterStore.isShowFilters" />

  <BaseIcon
    classes="size-10 mx-auto text-indigo-500"
    :name="filterStore.isShowFilters ? 'show' : 'hide'"
    @click="filterStore.toggleFilters"
  />
  <BaseButton
    v-if="appsStore.activeAppId"
    :label="capitalizer($t('task.new'))"
    classes="bg-btn-primary hover:bg-btn-primary/70 mt-2 mb-4 h-10 w-full rounded-3xl text-gray-100 transition duration-300"
    @click="modalStore.openModal('createTask')"
  />
  <NoResult
    v-if="
      !filterStore.filteredAndSearchedTasks.length && tasksStore.tasks.length
    "
  />
  <TasksList />
</template>
