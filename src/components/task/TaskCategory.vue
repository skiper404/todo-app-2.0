<script setup>
const props = defineProps({ taskCategory: String });
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <span :class="{}">
    {{ t(`category.${taskCategory}`) }}
  </span>
</template>
