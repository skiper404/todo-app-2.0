<script setup>
import { capitalize } from "vue";

const props = defineProps({
  id: String,
  i18nKey: String,
  classes: String,
});
</script>

<template>
  <label :for="id" :class="['text-indigo-400', classes]">{{
    capitalize($t(i18nKey))
  }}</label>
</template>
