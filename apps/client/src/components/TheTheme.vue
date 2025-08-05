<script setup>
import { useThemeStore } from "@/stores";
import BaseIcon from "./BaseIcon.vue";
import { capitalize, computed } from "vue";

const themeStore = useThemeStore();

const name = computed(() => (themeStore.isDark ? "dark" : "light"));
</script>

<template>
  <div class="flex items-center gap-2">
    <BaseIcon :name="name" classes="size-6" />
    <span class="capitalize"> {{ $t("ui.theme") }}: </span>

    <select v-model="themeStore.mode" class="rounded px-2 py-1 text-white">
      <option value="system">
        {{ capitalize($t("ui.system")) }}
      </option>
      <option value="dark">{{ capitalize($t("ui.dark")) }}</option>
      <option value="light">{{ capitalize($t("ui.light")) }}</option>
    </select>
  </div>
</template>
