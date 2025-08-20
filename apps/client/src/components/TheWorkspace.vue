<script setup>
import BaseButton from "./BaseButton.vue";
import TheFilter from "./TheFilter.vue";
import TasksList from "./tasks/TasksList.vue";
import BaseIcon from "./BaseIcon.vue";
import NoResult from "./NoResult.vue";
import {
  useAppsStore,
  useTasksStore,
  useFilterStore,
  useModalStore,
} from "@/stores";

const appsStore = useAppsStore();
const filterStore = useFilterStore();
const tasksStore = useTasksStore();
const modalStore = useModalStore();

const iconClasses = "size-10 mx-auto text-indigo-500";
const buttonClasses = "px-6 py-1 mx-auto my-2";
</script>

<template>
  <section v-if="appsStore.activeApp" class="px-2">
    <TheFilter v-if="filterStore.isShowFilters" />
    <BaseIcon
      :classes="iconClasses"
      :name="filterStore.isShowFilters ? 'show' : 'hide'"
      @click="filterStore.toggleFilters()"
    />
    <BaseButton
      v-if="appsStore.activeApp"
      i18nKey="task.new"
      :classes="buttonClasses"
      @click="modalStore.openModal('createTask')"
    />
    <NoResult
      v-if="
        !filterStore.filteredAndSearchedTasks.length && tasksStore.tasks.length
      "
    />
    <TasksList />
  </section>
</template>
