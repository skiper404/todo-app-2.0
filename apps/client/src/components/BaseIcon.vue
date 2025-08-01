<script setup>
import { ICONS } from "@/shared/icons";
import { computed } from "vue";


const { name, classes } = defineProps({
  name: { type: String, default: "close" },
  classes: [String, Array],
});

const icon = computed(() => ICONS[name]);
</script>

<template>
  <div>
    <component
      :is="icon"
      :class="[
        'text-gray-500 transition duration-300 hover:text-red-400',
        classes,
      ]"
    />
  </div>
</template>
