<script setup>
import { icons } from "@/icons";
const props = defineProps({ name: String, size: { type: Number, default: 6 } });
</script>

<template>
  <div
    :class="[
      `size-6 transition duration-300`,
      {
        'hover:text-green-300': name === 'plus',
        'hover:text-orange-300': name === 'xmark',
        'hover:text-red-300': name === 'trash',
        'hover:text-blue-300': name === 'search',
        'hover:text-yellow-500': name === 'pencil' || 'menu',
        'hover:cursor-move': name === 'drag',
      },
    ]"
  >
    <component :is="icons[name]" />
  </div>
</template>
