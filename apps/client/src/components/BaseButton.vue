<script setup>
import { capitalize, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  i18nKey: String,
  type: { type: String, default: "button" },
  classes: String,
});

const label = computed(() => {
  if (!props.i18nKey) {
    return "===";
  }
  return capitalize(t(props.i18nKey));
});
</script>

<template>
  <button
    :class="[
      'dark:text-primary-text hover:bg-btn-primary/70 text-secondary-text bg-btn-primary flex items-center justify-center rounded-full transition duration-300 hover:text-gray-100',
      classes,
    ]"
    :type="type"
  >
    {{ label }}
  </button>
</template>
