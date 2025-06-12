<script setup>
import BaseIcon from "./BaseIcon.vue";

const props = defineProps({
  id: String,
  label: String,
  options: Object,
  icon: String,
});
const model = defineModel();
</script>

<template>
  <div class="flex w-full items-center justify-between px-2 capitalize">
    <label :for="id" class="flex items-center gap-2">
      <BaseIcon
        :name="icon"
        :class="{
          'text-red-500': model === 'critical',
          'text-orange-500': model === 'high',
          'text-yellow-500': model === 'medium',
          'text-lime-500': model === 'low',
          'text-white': model === 'optional',
          'text-amber-400': model === 'pending',
          'text-blue-400': model === 'inProgress',
          'text-green-400': model === 'done',
          'text-emerald-400': model === 'frontend',
          'text-indigo-400': model === 'backend',
          'text-pink-400': model === 'database',
          'text-blue-500': model === 'devops',
          'text-rose-400': model === 'testing',
          'text-red-400': model === 'security',
          'text-yellow-400': model === 'ux',
          'text-teal-400': model === 'integration',
          'text-cyan-400': model === 'product',
          'text-violet-400': model === 'analytics',
          'text-amber-500': model === 'marketing',
        }"
      />
      {{ label }}
    </label>
    <select :id="id" v-model="model" class="flex-1 text-right">
      <option v-for="{ label, value } in options" :value="value">
        {{ label }}
      </option>
    </select>
  </div>
</template>
