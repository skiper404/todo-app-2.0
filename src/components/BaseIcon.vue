<script setup>
import { icons } from "@/icons";
const props = defineProps({
  name: { type: String },
});
</script>

<template>
  <div
    :class="[
      `size-6 transition duration-300`,
      {
        'text-green-400': name === 'plus',
        'text-blue-300': name === 'pending',
        'text-teal-300': name === 'inProgress',
        'text-green-500': name === 'done',
        'text-blue-500': name === 'cancel',
        'text-orange-400': name === 'web',
        'text-teal-500': name === 'mobile',
        'text-yellow-500': name === 'desktop',
        'text-blue-500 hover:text-blue-300': name === 'menu',
        'text-red-400 hover:text-red-300': name === 'trash',
        'text-blue-500': name === 'search',
        'text-blue-500 hover:cursor-move': name === 'drag',
        'text-blue-500 hover:text-blue-400': name === 'close',
        'text-blue-500 hover:text-orange-500': name === 'pencil',
      },
    ]"
  >
    <component :is="icons[name]" />
  </div>
</template>
