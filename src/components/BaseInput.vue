<script setup>
const props = defineProps({
  id: String,
  label: String,
  placeholder: String,
});
const emit = defineEmits(["submit-enter"]);
const model = defineModel();
</script>

<template>
  <div class="flex items-center">
    <label :for="id">
      <span>
        {{ label }}
      </span>
      <input
        :id="id"
        type="text"
        class="mx-2 my-1 w-full outline-0"
        :placeholder="placeholder"
        v-model="model"
        @keyup.enter="emit('submit-enter')"
      />
    </label>
  </div>
</template>
