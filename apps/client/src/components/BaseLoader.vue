<script setup>
import BaseIcon from "./BaseIcon.vue";

const wrapperClasses = "flex h-screen items-center justify-center";

const iconClasses = "size-20 animate-spin text-indigo-500";
</script>

<template>
  <div :class="wrapperClasses">
    <BaseIcon name="cog" :classes="iconClasses" />
  </div>
</template>
