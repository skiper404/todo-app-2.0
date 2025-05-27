<script setup>
import { ChevronDoubleUpIcon } from "@heroicons/vue/24/outline";
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-2">
    <div class="flex gap-2">
      <div class="whitespace-nowrap text-[var(--color-primary-500)]">
        Sort by:
      </div>
      <select name="select" id="select" @change="">
        <option value="name" selected>Name</option>
        <option value="date">Date</option>
        <option value="category">Category</option>
        <option value="priority">Priority</option>
        <option value="status">Status</option>
      </select>
      <button @click="">
        <ChevronDoubleUpIcon class="size-6" />
      </button>
      <button @click="">
        <ChevronDoubleDownIcon class="size-6" />
      </button>
    </div>
  </div>
</template>
