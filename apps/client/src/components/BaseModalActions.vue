<script setup>
const wrapperClasses = "mt-auto flex items-center justify-center gap-6";
</script>

<template>
  <div :class="wrapperClasses">
    <slot />
  </div>
</template>
