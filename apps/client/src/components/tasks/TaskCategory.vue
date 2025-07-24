<script setup>
import { capitalizer } from "@/shared/utils/capitalizer";
import BaseIndicator from "../BaseIndicator.vue";

const props = defineProps({ category: { type: String } });

const colors = { frontend: "#bb72fe", backend: "#ff9017", testing: "#5658fe" };
</script>

<template>
  <div class="flex items-center gap-1 text-blue-500">
    <BaseIndicator :color="colors[category]" />
    <div>
      {{ capitalizer($t(`categories.${category}`)) }}
    </div>
  </div>
</template>
