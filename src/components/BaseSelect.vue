<script setup>
const props = defineProps({ id: String, label: String, options: Object });
const emit = defineEmits(["keyupEnter"]);
const model = defineModel();
</script>

<template>
  <div>
    <label :for="id">
      <span>
        {{ label }}
      </span>
      <select :id="id" v-model="model">
        <option v-for="{ label, value } in options" :value="value">
          {{ label }}
        </option>
      </select>
    </label>
  </div>
</template>
