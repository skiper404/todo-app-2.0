import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuStore = defineStore("MenuStore", () => {
  const showMenu = ref(false);

  const openMenu = () => {
    showMenu.value = true;
  };

  const closeMenu = () => {
    showMenu.value = false;
  };

  return { showMenu, openMenu, closeMenu };
});
