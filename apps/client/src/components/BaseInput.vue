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
</script>

<template>
  <div
    :class="[
      'bg-modal-secondary text-primary-text relative rounded-2xl border-2 border-gray-900 transition duration-300',
      {
        'border-orange-500': error,
        'border-green-500': !error && modelValue,
      },
    ]"
  >
    <input
      :id="id"
      :type="type"
      v-model.trim="modelValue"
      maxlength="50"
      :placeholder="`${capitalize($t(i18nKey))}...`"
      class="w-80 px-4 py-2 outline-0"
    />
    <BaseIcon
      classes="absolute size-6 text-gray-500 top-2 right-4 hover:text-indigo-500"
      @click="modelValue = ''"
    />
  </div>
</template>
