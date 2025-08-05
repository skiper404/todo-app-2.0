<script setup>
import BaseIcon from "./BaseIcon.vue";

const wrapperClasses = "flex items-center gap-2";
const iconClasses = "size-10 text-indigo-500";
</script>

<template>
  <div :class="wrapperClasses">
    <BaseIcon name="logo" :classes="iconClasses" />
    <span class="text-xl">Skiper</span>
  </div>
</template>
