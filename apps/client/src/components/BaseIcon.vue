<script setup>
import { ICONS } from "@/shared/icons";
import { computed } from "vue";

const { name, classes } = defineProps({
  name: { type: String, default: "close" },
  classes: [String, Array],
});

const icon = computed(() => ICONS[name]);

const getClasees = (extraClasses) => [
  "text-gray-500 transition duration-300 hover:text-red-400",
  extraClasses,
];
</script>

<template>
  <div>
    <component :is="icon" :class="getClasees(classes)" />
  </div>
</template>
