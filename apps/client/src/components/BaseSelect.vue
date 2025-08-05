<script setup>
import BaseIcon from "./BaseIcon.vue";
const props = defineProps({
  id: String,
  options: Array,
  error: String,
});

const modelValue = defineModel();

const getWrapperClasses = (error) => [
  "bg-modal-secondary text-primary-text relative flex rounded-2xl border-2 border-gray-900 px-4 py-2 transition duration-300",
  {
    "border-orange-500": error,
    "border-green-500": !error && modelValue.length,
  },
];

const iconClasses = "size-6 text-gray-500 top-2 right-2 hover:text-indigo-500";
</script>

<template>
  <div :class="getWrapperClasses(error)">
    <select :id="id" class="w-full" v-model="modelValue">
      <option disabled selected :value="null">Select option</option>
      <option v-for="{ label, value } in options" :value="value">
        {{ label }}
      </option>
    </select>
    <BaseIcon :classes="iconClasses" @click="modelValue = null" />
  </div>
</template>
