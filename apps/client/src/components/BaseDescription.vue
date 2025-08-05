<script setup>
import { capitalize } from "vue";

const props = defineProps({ i18nKey: String });

const wrapperClasses = "text-center text-sm text-gray-400 text";
</script>

<template>
  <div :class="wrapperClasses">
    {{ capitalize($t(i18nKey)) }}
  </div>
</template>
