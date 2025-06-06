<script setup>
const props = defineProps({ id: String, label: String, options: Object });
const model = defineModel();
</script>

<template>
  <div class="flex w-full items-center">
    <label :for="id" class="whitespace-nowrap text-violet-400">{{
      label
    }}</label>
    <select :id="id" v-model="model" class="w-full p-1 text-right">
      <option v-for="{ label, value } in options" :value="value">
        {{ label }}
      </option>
    </select>
  </div>
</template>
