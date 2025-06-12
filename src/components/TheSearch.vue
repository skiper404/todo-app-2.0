<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import BaseIcon from "./BaseIcon.vue";
import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";

const taskStore = useTaskStore();
</script>

<template>
  <div class="relative flex w-full items-center">
    <BaseIcon name="search" class="absolute left-2" />
    <BaseInput
      id="searchId"
      label=""
      placeholder="Search..."
      v-model="taskStore.searchQuery"
      class="w-full rounded-full bg-gray-900 py-1 pl-3 text-lg outline-none"
    />
    <BaseButton
      name="cancel"
      class="absolute right-1 hover:text-red-400"
      @click="taskStore.resetSearchQuery"
    />
  </div>
</template>
