<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="flex w-60">
    <span class="capitalize">category</span>
    <select
      @change=""
      class="ml-auto w-36 pl-2"
    </select>
    <button
      class="flex text-[var(--color-primary-600)] hover:border-amber-200 hover:text-[var(--color-primary-500)]"
      @click=""
    >
      <XMarkIcon class="size-6" />
    </button>
  </div>
</template>
