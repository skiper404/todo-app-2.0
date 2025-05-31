<script setup>
import { ChevronDoubleUpIcon } from "@heroicons/vue/24/outline";
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/outline";
import { sortingOptions } from "@/constants";
import { useTaskStore } from "@/stores/TaskStore";

const taskStore = useTaskStore();
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-2">
    <div class="flex gap-2">
      <div class="whitespace-nowrap text-[var(--color-primary-500)]">
        Sort by:
      </div>
      <select name="select" id="select" v-model="taskStore.sortLabel">
        <option v-for="{ label, value } in sortingOptions" :value="value">
          {{ label }}
        </option>
      </select>
      <button @click="taskStore.sortDirection = true">
        <ChevronDoubleUpIcon class="size-6" />
      </button>
      <button @click="taskStore.sortDirection = false">
        <ChevronDoubleDownIcon class="size-6" />
      </button>
    </div>
  </div>
</template>
