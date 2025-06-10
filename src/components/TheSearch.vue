<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import BaseIcon from "./BaseIcon.vue";
import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";

const taskStore = useTaskStore();
</script>

<template>
  <div class="relative mx-2 flex w-full items-center">
    <BaseIcon name="search" class="absolute left-4" />
    <BaseInput
      id="searchId"
      label=""
      placeholder="Search..."
      v-model="taskStore.searchQuery"
      class="w-full rounded-full bg-[var(--color-primary-800)] py-1 pl-10 ring-1 ring-[var(--color-primary-600)] outline-none"
    />
    <BaseButton
      name="xmark"
      class="absolute right-4"
      @click="taskStore.resetSearchQuery"
    />
  </div>
</template>
