<script setup>
import BaseIcon from "./BaseIcon.vue";
const props = defineProps({
  id: String,
  options: Array,
  error: String,
});

const modelValue = defineModel();

const getWrapperClasses = (error) => [
  "relative flex rounded-2xl px-4 py-2 transition duration-300 bg-gray-300 border-2 border-gray-300 dark:bg-gray-900 dark:text-gray-500 dark:border-gray-800",
  {
    "border-orange-500 dark:border-orange-500": error,
    "border-green-500 dark:border-green-500": !error && modelValue.value,
  },
];

const iconClasses = "size-6 text-gray-500 top-2 right-2 hover:text-indigo-500";
</script>

<template>
  <div :class="getWrapperClasses(error)">
    <select :id="id" class="w-full active:ring-1" v-model="modelValue">
      <option disabled selected :value="null">Select option</option>
      <option v-for="{ label, value } in options" :value="value">
        {{ label }}
      </option>
    </select>
    <BaseIcon :classes="iconClasses" @click="modelValue = null" />
  </div>
</template>
