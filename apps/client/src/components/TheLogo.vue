<script setup>
import { appName } from "@/shared/constants/constants";
import BaseIcon from "./BaseIcon.vue";

const wrapperClasses =
  "flex items-center gap-2 dark:text-indigo-500 text-white transition duration-300";
const iconClasses = "size-10";
</script>

<template>
  <div :class="wrapperClasses">
    <BaseIcon name="logo" :classes="iconClasses" />
    <span>{{ appName }}</span>
  </div>
</template>
