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
const emit = defineEmits(["remove"]);
</script>

<template>
  <div class="relative mt-2">
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="modelValue = $event.target.value"
      :class="classes"
    />
    <BaseIcon
      classes="absolute size-6 text-gray-500 top-2 right-2 hover:text-indigo-500"
      @click="emit('remove')"
    />
  </div>
</template>
