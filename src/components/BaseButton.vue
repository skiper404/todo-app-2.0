<script setup>
import BaseIcon from "./BaseIcon.vue";
const props = defineProps({
  name: { type: String },
  size: { type: Number, default: 6 },
});
</script>

<template>
  <button class="flex items-center justify-center">
    <BaseIcon :name="name" v-if="name" />
    <slot />
  </button>
</template>
