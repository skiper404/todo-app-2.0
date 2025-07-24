import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingStore = defineStore("SettingStore", () => {
  const showSettings = ref(false);

  const openSettings = () => {
    showSettings.value = true;
  };

  const closeSettings = () => {
    showSettings.value = false;
  };

  return { showSettings, openSettings, closeSettings };
});
