<script setup>
import { useSettingsStore } from "@/stores/SettingsStore";

const settingsStore = useSettingsStore();
</script>

<template>
  <div class="flex gap-1 dark:text-gray-400">
    <button
      @click="settingsStore.setLocale('en')"
      :class="[
        'p-1',
        {
          'rounded bg-gray-100 p-1 text-gray-900 transition duration-500 dark:bg-gray-800 dark:text-gray-100':
            settingsStore.locale === 'en',
        },
      ]"
    >
      en
    </button>
    <button
      @click="settingsStore.setLocale('ru')"
      :class="[
        'p-1',
        {
          'rounded bg-gray-100 p-1 text-gray-900 transition duration-500 dark:bg-gray-800 dark:text-gray-100':
            settingsStore.locale === 'ru',
        },
      ]"
    >
      ru
    </button>
    <button
      @click="settingsStore.setLocale('ua')"
      :class="[
        'p-1',
        {
          'rounded bg-gray-100 p-1 transition duration-500 dark:bg-gray-800 dark:text-gray-100':
            settingsStore.locale === 'ua',
        },
      ]"
    >
      ua
    </button>
  </div>
</template>
