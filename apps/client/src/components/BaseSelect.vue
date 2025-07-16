<script setup>
import { useI18n } from "vue-i18n";

const props = defineProps({
  id: String,
  label: String,
  options: Object,
  i18nPath: String,
});
const model = defineModel();

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-1 px-2 text-lg">
    <label :for="id" class="flex items-center gap-2">
      {{ t(label) }}
    </label>
    <select :id="id" v-model="model" class="flex-1 text-right">
      <option v-for="{ value } in options" :value="value">
        {{ t(`${i18nPath}.${value}`) }}
      </option>
    </select>
  </div>
</template>
