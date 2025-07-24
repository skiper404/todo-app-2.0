<script setup>
import { useLocaleStore } from "@/stores/LocaleStore";
import BaseIcon from "./BaseIcon.vue";

const localeStore = useLocaleStore();

const locales = ["en", "ru", "ua"];
</script>

<template>
  <div class="m-4">
    <div class="flex gap-2">
      <BaseIcon name="locale" classes="size-6" />
      <span class="capitalize"> {{ $t("ui.lang") }}: </span>
      <div class="flex items-center gap-2">
        <div
          v-for="locale in locales"
          :class="[
            'flex w-6 cursor-pointer items-center justify-center rounded-full',
            { 'bg-indigo-500': localeStore.locale === locale },
          ]"
          @click="localeStore.setLocale(locale)"
        >
          {{ locale }}
        </div>
      </div>
    </div>
  </div>
</template>
