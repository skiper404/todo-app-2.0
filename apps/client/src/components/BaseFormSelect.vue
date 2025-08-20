<script setup>
import BaseLabel from "./BaseLabel.vue";
import BaseSelect from "./BaseSelect.vue";
import BaseError from "./BaseError.vue";

const props = defineProps({
  id: String,
  error: String,
  options: Object,
  i18nKeyLabel: String,
});

const appType = defineModel();

const formItemClasses = "px-4 py-2";
</script>

<template>
  <div>
    <BaseLabel :for="id" :classes="formItemClasses" :i18nKey="i18nKeyLabel" />
    <BaseSelect :id="id" :options="options" v-model="appType" :error="error" />
    <BaseError :i18nKey="error" :classes="formItemClasses" />
  </div>
</template>
