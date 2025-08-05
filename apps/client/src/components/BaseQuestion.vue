<script setup>
import { capitalize } from "vue";
const props = defineProps({ i18nKey: String, name: String });

const wrapperClasses = "mt-2 text-center text-sm text-gray-400";
</script>

<template>
  <div :class="wrapperClasses">
    {{ capitalize($t(i18nKey)) }}
    <span class="text-indigo-400"> {{ name }} </span> ?
  </div>
</template>
