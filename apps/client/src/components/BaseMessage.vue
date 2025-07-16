<script setup>
import { useI18n } from "vue-i18n";

const props = defineProps({ message: String });
const { t } = useI18n();
</script>

<template>
  <div class="text-warning-text py-1 text-center">
    {{ t(message) }}
  </div>
</template>
