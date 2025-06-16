<script setup>
import { icons } from "@/icons";
const props = defineProps({
  name: { type: String },
});
</script>

<template>
  <div
    :class="[
      `size-5 flex-shrink-0 transition duration-500`,
      {
        'text-gray-400': name === 'plus',
        'text-gray-400': name === 'cancel',
        'text-orange-400': name === 'web',
        'text-teal-500': name === 'mobile',
        'text-yellow-500': name === 'desktop',
        'text-blue-500 hover:text-blue-300': name === 'menu',
        'hover:text-red-300 dark:text-gray-400': name === 'trash',
        'text-gray-400': name === 'search',
        'dark:text-gray-200': name === 'soundOn',
        'text-gray-500': name === 'soundOff',
        'text-gray-900 hover:cursor-move dark:text-gray-100': name === 'drag',
        'text-blue-400 dark:text-blue-500': name === 'close',
        'text-gray-400 hover:text-violet-500': name === 'edit',
        'text-gray-300': name === 'dark',
        'text-gray-600': name === 'light',
        // 'text-gray-500': name === 'start',
        'text-gray-100 hover:text-gray-300 dark:text-gray-400':
          name === 'settings',
      },
    ]"
  >
    <component :is="icons[name]" />
  </div>
</template>
