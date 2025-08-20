<script setup>
const wrapperClasses = "flex items-center justify-center gap-6";
</script>

<template>
  <div :class="wrapperClasses">
    <slot />
  </div>
</template>
