import { ref, computed } from "vue";

export const useValidation = ({ name }) => {
  const showEmptyNameErrorMessage = ref(false);
  const showShortNameErrorMessage = ref(false);

  const emptyName = computed(() => name.value.length === 0);
  const shortName = computed(() => name.value.length < 3);

  const resetValidation = () => {
    showEmptyNameErrorMessage.value = false;
    showShortNameErrorMessage.value = false;
  };

  return {
    emptyName,
    shortName,
    resetValidation,
    showEmptyNameErrorMessage,
    showShortNameErrorMessage,
  };
};
