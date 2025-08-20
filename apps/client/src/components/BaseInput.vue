<script setup>
import { capitalize } from "vue";
import BaseIcon from "./BaseIcon.vue";

const props = defineProps({
  id: String,
  type: String,
  i18nKey: String,
  error: String,
});

const modelValue = defineModel();

const getWrapperClasses = (error) => [
  "relative rounded-2xl transition duration-300 bg-gray-300 border-2 border-gray-300 dark:bg-gray-900 dark:text-gray-500 dark:border-gray-800",
  {
    "border-orange-500 dark:border-orange-500": error,
    "border-green-500 dark:border-green-500": !error && modelValue.value,
  },
];

const inputClasses = "w-80 px-4 py-2 outline-0";

const iconClasses =
  "absolute size-6 text-gray-500 top-2 right-4 hover:text-indigo-500";
</script>

<template>
  <div :class="getWrapperClasses(error)">
    <input
      :id="id"
      :type="type"
      v-model.trim="modelValue"
      maxlength="101"
      :placeholder="`${capitalize($t(i18nKey))}...`"
      :class="inputClasses"
    />
    <BaseIcon :class="iconClasses" @click="modelValue = ''" />
  </div>
</template>
