<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import BaseButton from "./BaseButton.vue";
import BaseSelect from "./BaseSelect.vue";
import { sortingOptions } from "@/constants";

const taskStore = useTaskStore();
</script>

<template>
  <BaseSelect
    id="sortingId"
    label="Sort By:"
    :options="sortingOptions"
    v-model="taskStore.sortLabel"
  />
  <BaseButton name="arrowUp" @click="taskStore.sortDirection = true" />
  <BaseButton name="arrowDown" @click="taskStore.sortDirection = false" />
</template>
