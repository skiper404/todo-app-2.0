<script setup>
import { capitalize } from "vue";

const props = defineProps({
  id: String,
  i18nKey: String,
  classes: String,
});

const getClasses = (extraClasses) => ["text-indigo-400", extraClasses];
</script>

<template>
  <label :for="id" :class="getClasses(classes)">{{
    capitalize($t(i18nKey))
  }}</label>
</template>
