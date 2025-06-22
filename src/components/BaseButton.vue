<script setup>
import BaseIcon from "./BaseIcon.vue";
const props = defineProps({
  name: { type: String },
  text: { text: String },
});
</script>

<template>
  <button
    class="bg-button-default hover:bg-button-hover flex h-7 w-7 items-center justify-center rounded-full"
  >
    <span>
      {{ text }}
    </span>
    <BaseIcon :name="name" v-if="name" />
  </button>
</template>
