import { defineStore } from "pinia";
import { useDark, useStorage } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import { useSoundStore } from "./SoundStore";
import { watch, ref } from "vue";

export const useSettingsStore = defineStore("SettingsStore", () => {
  const isSoundOn = ref(true);
  const isDark = useDark();
  const { locale } = useI18n();

  const storedSettings = useStorage("settings", {
    sound: true,
    theme: false,
    locale: "en",
  });

  isSoundOn.value = storedSettings.value.sound;
  isDark.value = storedSettings.value.theme;
  locale.value = storedSettings.value.locale;

  watch(
    () => [isSoundOn.value, isDark.value, locale.value],
    ([sound, theme, lang]) => {
      storedSettings.value = {
        sound: sound,
        theme: theme,
        locale: lang,
      };
    },
    { immediate: true },
  );

  const setLocale = (lang) => {
    locale.value = lang;
  };

  const toggleSound = () => {
    isSoundOn.value = !isSoundOn.value;
  };

  return {
    isSoundOn,
    isDark,
    locale,
    setLocale,
    toggleSound,
  };
});
