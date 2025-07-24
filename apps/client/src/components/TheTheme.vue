<script setup>
import { useThemeStore } from "@/stores";
import BaseIcon from "./BaseIcon.vue";
import { computed } from "vue";
import { capitalizer } from "@/shared/utils/capitalizer";

const themeStore = useThemeStore();

const name = computed(() => (themeStore.isDark ? "dark" : "light"));
</script>

<template>
  <div class="m-4">
    <div class="flex items-center gap-2">
      <BaseIcon :name="name" classes="size-6" />
      <span class="capitalize"> {{ $t("ui.theme") }}: </span>

      <select v-model="themeStore.mode" class="rounded px-2 py-1 text-white">
        <option value="system">
          {{ capitalizer($t("ui.system")) }}
        </option>
        <option value="dark">{{ capitalizer($t("ui.dark")) }}</option>
        <option value="light">{{ capitalizer($t("ui.light")) }}</option>
      </select>
    </div>
  </div>
</template>
