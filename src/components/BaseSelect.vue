<script setup>
const props = defineProps({ id: String, label: String, options: Object });
const model = defineModel();
</script>

<template>
  <div class="px-2">
    <label :for="id" class="pr-2">{{ label }}</label>
    <select :id="id" v-model="model" class="">
      <option v-for="{ label, value } in options" :value="value">
        {{ label }}
      </option>
    </select>
  </div>
</template>
