<script setup>
import { useLocaleStore } from "@/stores/LocaleStore";
import BaseIcon from "./BaseIcon.vue";

const localeStore = useLocaleStore();

const locales = ["en", "ru", "ua"];

const getLocaleClasses = (locale) => [
  "flex w-6 cursor-pointer items-center justify-center rounded-full",
  { "bg-indigo-500": localeStore.locale === locale },
];

const wrapperClasses = "flex items-center gap-2";
</script>

<template>
  <div class="flex gap-2">
    <BaseIcon name="locale" classes="size-6" />
    <span class="capitalize"> {{ $t("ui.lang") }}: </span>
    <div :class="wrapperClasses">
      <div
        v-for="locale in locales"
        :class="getLocaleClasses(locale)"
        @click="localeStore.setLocale(locale)"
      >
        {{ locale }}
      </div>
    </div>
  </div>
</template>
