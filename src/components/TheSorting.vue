<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import BaseButton from "./BaseButton.vue";
import BaseSelect from "./BaseSelect.vue";
import { sortingOptions } from "@/constants";

const taskStore = useTaskStore();
</script>

<template>
  <div class="mx-2 flex">
    <BaseSelect
      id="sortingId"
      label="Sort By"
      :options="sortingOptions"
      v-model="taskStore.sortLabel"
    />
    <BaseButton
      name="arrowUp"
      :class="{ 'text-violet-400': taskStore.sortDirection }"
      @click="taskStore.sortDirection = true"
    />
    <BaseButton
      name="arrowDown"
      :class="{ 'text-violet-400': !taskStore.sortDirection }"
      @click="taskStore.sortDirection = false"
    />
  </div>
</template>
