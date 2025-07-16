<script setup>
import { useSettingsStore } from "@/stores/SettingsStore";
import BaseButton from "./BaseButton.vue";

const settingsStore = useSettingsStore();
</script>

<template>
  <div class="text-default-locale flex gap-2">
    <BaseButton
      text="en"
      @click="settingsStore.setLocale('en')"
      :class="[
        {
          'text-primary-text bg-gray-500': settingsStore.locale === 'en',
        },
      ]"
    />
    <BaseButton
      text="ru"
      @click="settingsStore.setLocale('ru')"
      :class="{
        'text-primary-text bg-gray-500': settingsStore.locale === 'ru',
      }"
    />
    <BaseButton
      text="ua"
      @click="settingsStore.setLocale('ua')"
      :class="{
        'text-primary-text bg-gray-500': settingsStore.locale === 'ua',
      }"
    />
  </div>
</template>
