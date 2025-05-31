<script setup>
import { categoryOptions, statusOptions, priorityOptions } from "@/constants";
import { useTaskStore } from "@/stores/TaskStore";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const taskStore = useTaskStore();
</script>

<template>
  <div class="flex w-60 flex-col items-center text-sm">
    <div class="flex w-60">
      <span class="capitalize">Category</span>
      <select class="ml-auto w-36 pl-2" v-model="taskStore.category">
        <option value="all" selected>All</option>
        <option v-for="{ label, value } in categoryOptions" :value="value">
          {{ label }}
        </option>
      </select>

      <button
        class="flex text-[var(--color-primary-600)] hover:border-amber-200 hover:text-[var(--color-primary-500)]"
      >
        <XMarkIcon class="size-6" />
      </button>
    </div>
    <div class="flex w-60">
      <span class="capitalize">Status</span>
      <select class="ml-auto w-36 pl-2" v-model="taskStore.status">
        <option value="all" selected>All</option>
        <option v-for="{ label, value } in statusOptions" :value="value">
          {{ label }}
        </option>
      </select>

      <button
        class="flex text-[var(--color-primary-600)] hover:border-amber-200 hover:text-[var(--color-primary-500)]"
      >
        <XMarkIcon class="size-6" />
      </button>
    </div>
    <div class="flex w-60">
      <span class="capitalize">Priority</span>
      <select class="ml-auto w-36 pl-2" v-model="taskStore.priority">
        <option value="all" selected>All</option>
        <option v-for="{ label, value } in priorityOptions" :value="value">
          {{ label }}
        </option>
      </select>

      <button
        class="flex text-[var(--color-primary-600)] hover:border-amber-200 hover:text-[var(--color-primary-500)]"
      >
        <XMarkIcon class="size-6" />
      </button>
    </div>
  </div>
</template>
