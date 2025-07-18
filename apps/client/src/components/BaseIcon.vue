<script setup>
import { ICONS } from "@/shared/icons";
import { computed } from "vue";

const { name, classes } = defineProps({
  name: { type: String, default: "close" },
  classes: { type: [Array, String], default: "size-10" },
});

const icon = computed(() => ICONS[name]);
</script>

<template>
  <component :is="icon" :class="classes" />
</template>
