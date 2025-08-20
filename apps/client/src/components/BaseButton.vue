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

const getClasses = (extraClasses) => [
  "dark:text-gray-100 dark:bg-indigo-700 bg-indigo-500 text-gray-100 flex items-center justify-center rounded-full transition duration-300",
  extraClasses,
];
</script>

<template>
  <button :class="getClasses(classes)" :type="type">
    {{ label }}
  </button>
</template>
