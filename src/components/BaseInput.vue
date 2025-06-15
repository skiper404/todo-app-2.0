<script setup>
import BaseIcon from "./BaseIcon.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const props = defineProps({
  id: String,
  label: String,
  placeholder: String,
  icon: String,
});
const emit = defineEmits(["submit-enter"]);
const model = defineModel();
</script>

<template>
  <div>
    <label :for="id" class="flex items-center gap-2">
      <div>
        <BaseIcon :name="icon" />
      </div>
      {{ t(label) }}
      <input
        maxlength="30"
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
