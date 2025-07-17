import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore('MainStore', () => {
  const message = ref(null);
  const isShowMenu = ref(false);

  const openMenu = () => {
    isShowMenu.value = true;
  };

  const closeMenu = () => {
    isShowMenu.value = false;
  };

  const apps = ref([]);

  return { isShowMenu, openMenu, closeMenu, apps, message };
});
