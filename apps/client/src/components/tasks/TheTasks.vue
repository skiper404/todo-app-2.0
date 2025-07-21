<script setup>
import TaskItem from "./TaskItem.vue";
import BaseButton from "../BaseButton.vue";
import TheFilter from "../TheFilter.vue";
import TheSearch from "../TheSearch.vue";

import { useAppsStore, useModalStore, useFilterStore } from "@/stores";

const appsStore = useAppsStore();
const modalStore = useModalStore();
const filterStore = useFilterStore();
</script>

<template>
  <div class="flex flex-col gap-2 px-4 lg:ml-92">
    <TheSearch />
    <TheFilter />

    <BaseButton
      v-if="appsStore.activeAppId"
      label="Create Task"
      classes="mx-auto my-8 h-10 w-full rounded-3xl bg-indigo-900 text-gray-100 transition duration-300 hover:bg-indigo-800"
      @click="modalStore.openModal('createTask')"
    />
    <div class="text-center" v-if="!appsStore.activeAppId">Select App</div>
    <div
      class="text-center"
      v-if="filterStore.filteredAndSearchedTasks.length === 0"
    >
      No results
    </div>
    <ul class="flex flex-col gap-2">
      <TaskItem />
    </ul>
  </div>
</template>
