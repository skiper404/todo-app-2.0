import { defineStore } from "pinia";
import { usePreferredDark, useStorage } from "@vueuse/core";
import { computed, watch } from "vue";

export const useThemeStore = defineStore("ThemeStore", () => {
  const preferredDark = usePreferredDark();

  const mode = useStorage("theme-mode", "system");

  const isDark = computed(() => {
    if (mode.value === "system") return preferredDark.value;
    return mode.value === "dark";
  });

  watch(
    isDark,
    (value) => {
      document.documentElement.classList.toggle("dark", value);
    },
    { immediate: true },
  );

  return {
    mode,
    isDark,
  };
});
