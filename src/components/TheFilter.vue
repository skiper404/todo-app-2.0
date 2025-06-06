<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { categoryOptions, priorityOptions, statusOptions } from "@/constants";

import BaseButton from "./BaseButton.vue";
import BaseSelect from "./BaseSelect.vue";

const taskStore = useTaskStore();
</script>

<template>
  <div class="mx-2 flex flex-col">
    <div class="flex">
      <BaseSelect
        id="categoryId"
        label="Category"
        :options="categoryOptions"
        v-model="taskStore.category"
      />
      <BaseButton name="xmark" @click="taskStore.resetFilter('category')" />
    </div>
    <div class="flex">
      <BaseSelect
        id="priorityId"
        label="Priority"
        :options="priorityOptions"
        v-model="taskStore.priority"
      />
      <BaseButton name="xmark" @click="taskStore.resetFilter('priority')" />
    </div>
    <div class="flex">
      <BaseSelect
        id="statusId"
        label="Status"
        :options="statusOptions"
        v-model="taskStore.status"
      />
      <BaseButton name="xmark" @click="taskStore.resetFilter('status')" />
    </div>
  </div>
</template>
