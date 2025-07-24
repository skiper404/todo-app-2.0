import { defineStore } from "pinia";
import i18n from "@/shared/lib/i18n";
import { ref, watch } from "vue";

export const useLocaleStore = defineStore("LocaleStore", () => {
  const locale = ref(i18n.global.locale);

  watch(
    () => locale.value,
    (newLocale) => {
      i18n.global.locale = newLocale;
    },
  );

  const setLocale = (l) => {
    locale.value = l;
  };

  return { locale, setLocale };
});
