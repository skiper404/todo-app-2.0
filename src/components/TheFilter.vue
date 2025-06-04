<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { categoryOptions, priorityOptions, statusOptions } from "@/constants";

import BaseButton from "./BaseButton.vue";
import BaseSelect from "./BaseSelect.vue";

const taskStore = useTaskStore();
</script>

<template>
  <div>
    <BaseSelect
      id="categoryId"
      label="Category"
      :options="categoryOptions"
      v-model="taskStore.category"
    />
    <BaseButton name="xmark" @click="taskStore.resetFilter('category')" />

    <BaseSelect
      id="priorityId"
      label="Priority"
      :options="priorityOptions"
      v-model="taskStore.priority"
    />
    <BaseButton name="xmark" @click="taskStore.resetFilter('priority')" />

    <BaseSelect
      id="statusId"
      label="Status"
      :options="statusOptions"
      v-model="taskStore.status"
    />
    <BaseButton name="xmark" @click="taskStore.resetFilter('status')" />
  </div>
</template>
