<script setup>
import { icons } from "@/icons";
const props = defineProps({
  name: { type: String },
});
</script>

<template>
  <div class="size-5 flex-shrink-0">
    <component :is="icons[name]" />
  </div>
</template>
