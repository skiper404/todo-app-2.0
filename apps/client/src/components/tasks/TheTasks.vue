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

const filterStore = useFilterStore();
const appsStore = useAppsStore();
const modalStore = useModalStore();
const tasksStore = useTasksStore();
</script>

<template>
  <transition name="fade">
    <TheFilter v-if="filterStore.isShowFilters" />
  </transition>

  <BaseIcon
    classes="size-10 mx-auto text-indigo-500"
    :name="filterStore.isShowFilters ? 'show' : 'hide'"
    @click="filterStore.toggleFilters"
  />

  <BaseButton
    v-if="appsStore.activeApp"
    i18nKey="task.new"
    classes="px-6 py-1 mx-auto my-2"
    @click="modalStore.openModal('createTask')"
  />

  <NoResult
    v-if="
      !filterStore.filteredAndSearchedTasks.length && tasksStore.tasks.length
    "
  />
  <TasksList />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 100ms linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
