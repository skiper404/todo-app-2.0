<script setup>
import { capitalize } from "vue";
import BaseIndicator from "../BaseIndicator.vue";
import { statusesColors } from "@/shared/constants/constants";

const props = defineProps({ status: { type: String } });

const wrapperClasses = "flex items-center gap-1 text-blue-500";
</script>

<template>
  <div :class="wrapperClasses">
    <BaseIndicator :color="statusesColors[status]" />
    <div>
      {{ capitalize($t(`statuses.${status}`)) }}
    </div>
  </div>
</template>
