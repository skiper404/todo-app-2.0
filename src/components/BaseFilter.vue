<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useFilterStore } from "@/stores/filter";
const filterStore = useFilterStore();

const props = defineProps({ options: Object, category: String });
</script>
<template>
  <div class="flex w-60">
    <span class="capitalize">{{ category }}:</span>
    <select
      @change="filterStore.setFilter(category, $event.target.value)"
      v-model="filterStore.filtersOptions[category]"
      class="ml-auto w-36 pl-2"
    >
      <option v-for="{ label, value } in options" :value="value" :key="value">
        {{ label }}
      </option>
    </select>
    <button
      class="flex text-[var(--color-primary-600)] hover:border-amber-200 hover:text-[var(--color-primary-500)]"
      @click="filterStore.clearFilter(category)"
    >
      <XMarkIcon class="size-6" />
    </button>
  </div>
</template>
