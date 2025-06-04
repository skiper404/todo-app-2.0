<script setup>
import { icons } from "@/icons";
const props = defineProps({ name: String });
</script>

<template>
  <div
    :class="[
      'size-6',
      {
        'hover:text-green-300': name === 'plus',
        'hover:text-orange-300': name === 'xmark',
        'hover:text-red-300': name === 'trash',
        'hover:text-blue-300': name === 'search',
      },
    ]"
  >
    <component :is="icons[name]" />
  </div>
</template>
