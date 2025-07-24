import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoaderStore = defineStore("LoaderStore", () => {
  const isLoading = ref(false);

  const setLoader = () => {
    isLoading.value = true;
  };

  const removeLoader = () => {
    isLoading.value = false;
  };

  return { isLoading, setLoader, removeLoader };
});
