<script setup>
const props = defineProps({ i18nKey: String, classes: String });

const getClasses = (extraClasses) => [
  "h-10 w-fit text-xs text-orange-500",
  extraClasses,
];
</script>

<template>
  <span :class="getClasses(classes)">
    {{ i18nKey }}
  </span>
</template>
