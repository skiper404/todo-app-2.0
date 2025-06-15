<script setup>
import { useI18n } from "vue-i18n";

const props = defineProps({ message: String });
const { t } = useI18n();
</script>

<template>
  <div class="py-1 text-center text-red-400">
    {{ t(message) }}
  </div>
</template>
