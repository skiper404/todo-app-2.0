<script setup>
import BaseIcon from "./BaseIcon.vue";
const props = defineProps({ name: { type: String, default: "plus" } });
</script>

<template>
  <button class="flex items-center justify-center">
    <BaseIcon :name="name" />
    <slot />
  </button>
</template>
