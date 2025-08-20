<script setup>
import { capitalize } from "vue";

const props = defineProps({ name: { type: String } });

const nameClasses = "text-lg overflow-ellipsis";
</script>

<template>
  <div :class="nameClasses">
    {{ capitalize(name) }}
  </div>
</template>
