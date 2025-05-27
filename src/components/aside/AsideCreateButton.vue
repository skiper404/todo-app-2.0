<script setup>
import { PlusIcon } from "@heroicons/vue/16/solid";
</script>

<template>
  <button
    class="flex cursor-pointer items-center justify-center rounded-full bg-[var(--color-primary-700)] py-2 font-light transition-shadow duration-300 hover:shadow-[0_0_10px_var(--color-primary-500)]"
  >
    <PlusIcon class="size-6 text-green-600" />
    <span class="text-gray-400"> Create New list </span>
  </button>
</template>
