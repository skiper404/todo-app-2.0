<script setup>
import BaseIcon from "./BaseIcon.vue";
const props = defineProps({
  options: { type: Array },
  classes: {
    type: String,
  },
});

const modelValue = defineModel();
const emit = defineEmits(["reset"]);
</script>

<template>
  <div :class="classes">
    <select v-model="modelValue" class="w-full">
      <option v-for="{ label, value } in options" :value="value">
        {{ label }}
      </option>
    </select>
    <BaseIcon
      classes="size-6 text-gray-500 top-2 right-2 hover:text-indigo-500"
      @click="emit('reset')"
    />
  </div>
</template>
