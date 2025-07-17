import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuStore = defineStore("MenuStore", () => {
  const isShowMenu = ref(false);

  const openMenu = () => {
    isShowMenu.value = true;
  };

  const closeMenu = () => {
    isShowMenu.value = false;
  };

  return { isShowMenu, openMenu, closeMenu };
});
