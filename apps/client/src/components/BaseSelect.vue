<script setup>
const props = defineProps({
  options: { type: Array },
  classes: {
    type: String,
  },
});

const modelValue = defineModel();
</script>

<template>
  <div class="mt-2">
    <select
      :class="classes"
      :value="modelValue"
      @input="modelValue = $event.target.value"
    >
      <option v-for="{ label, value } in options" :value="value">
        {{ label }}
      </option>
    </select>
  </div>
</template>
