<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { XMarkIcon } from "@heroicons/vue/16/solid";
import { useTaskStore } from "@/stores/TaskStore";

const taskStore = useTaskStore();
</script>

<template>
  <div
    class="flex w-[600px] min-w-[200px] items-center justify-center gap-2 px-4"
  >
    <div class="relative w-full">
      <input
        type="text"
        class="w-full rounded-full bg-[var(--color-primary-800)] py-1 pl-10 ring-2 ring-[var(--color-primary-600)] outline-none"
        v-model="taskStore.searchQuery"
      />

      <button
        class="absolute top-0 right-2 p-1 text-[var(--color-primary-600)] hover:scale-110 hover:text-[var(--color-primary-500)] hover:ring-[var(--color-primary-500)]"
        @click="taskStore.clearSearch"
      >
        <XMarkIcon class="size-6" />
      </button>
    </div>
  </div>
</template>
