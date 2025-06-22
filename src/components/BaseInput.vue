<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const props = defineProps({
  id: String,
  label: String,
  placeholder: String,
});
const emit = defineEmits(["submit-enter"]);
const model = defineModel();
</script>

<template>
  <div class="rounded-full px-2 text-lg">
    <label :for="id" class="flex items-center gap-2">
      {{ label ? t(label) : "" }}
      <input
        maxlength="100"
        :id="id"
        type="text"
        class="w-full outline-0"
        :placeholder="`${t('labels.appName')}...`"
        v-model="model"
        @keyup.enter="emit('submit-enter')"
      />
    </label>
  </div>
</template>
