<script setup>
const props = defineProps({ i18nKey: String, classes: String });
</script>
<template>
  <span :class="['h-10 w-fit text-xs text-orange-500', classes]">
    {{ i18nKey }}
  </span>
</template>
