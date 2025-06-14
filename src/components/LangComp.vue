<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const setLang = (lang) => {
  locale.value = lang;
};
</script>

<template>
  <div class="flex gap-2 dark:text-gray-500">
    <button
      @click="setLang('en')"
      :class="{ 'text-gray-100': locale === 'en' }"
    >
      en
    </button>
    <button
      @click="setLang('ru')"
      :class="{ 'text-gray-100': locale === 'ru' }"
    >
      ru
    </button>
    <button
      @click="setLang('ua')"
      :class="{ 'text-gray-100': locale === 'ua' }"
    >
      ua
    </button>
  </div>
</template>
