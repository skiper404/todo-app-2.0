<script setup>
import BaseError from "./BaseError.vue";
import BaseLabel from "./BaseLabel.vue";
import BaseInput from "./BaseInput.vue";

const props = defineProps({
  id: String,
  type: String,
  error: String,
  i18nKeyLabel: String,
  i18nKeyInput: String,
});

const appName = defineModel();

const formItemClasses = "px-4 py-2";
</script>

<template>
  <div>
    <BaseLabel :for="id" :classes="formItemClasses" :i18nKey="i18nKeyLabel" />
    <BaseInput
      :id="id"
      :type="type"
      :error="error"
      v-model="appName"
      :i18nKey="i18nKeyInput"
    />
    <BaseError :i18nKey="error" :classes="formItemClasses" />
  </div>
</template>
