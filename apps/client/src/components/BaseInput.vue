<script setup>
import BaseIcon from "./BaseIcon.vue";

const { label, classes } = defineProps({
  type: { type: String, default: "text" },
  placeholder: { type: String },
  classes: {
    type: String,
    default: "flex items-center justify-center capitalize",
  },
});
const modelValue = defineModel();
</script>

<template>
  <div class="relative">
    <input
      :type="type"
      v-model="modelValue"
      :placeholder="placeholder"
      :class="classes"
    />
    <BaseIcon
      classes="absolute size-6 text-gray-500 top-2 right-4 hover:text-indigo-500"
      @click="modelValue = ''"
    />
  </div>
</template>
