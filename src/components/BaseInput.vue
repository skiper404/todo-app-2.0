<script setup>
import BaseIcon from "./BaseIcon.vue";

const props = defineProps({
  id: String,
  label: String,
  placeholder: String,
  icon: String,
});
const emit = defineEmits(["submit-enter"]);
const model = defineModel();
</script>

<template>
  <div class="capitalize">
    <label :for="id" class="flex items-center gap-2">
      <div>
        <BaseIcon :name="icon" />
      </div>
      {{ label }}
      <input
        :id="id"
        type="text"
        class="w-full outline-0"
        :placeholder="placeholder"
        v-model="model"
        @keyup.enter="emit('submit-enter')"
      />
    </label>
  </div>
</template>
