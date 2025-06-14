import { ref, computed } from "vue";

export const useValidation = ({ name }) => {
  const showEmptyNameErrorMessage = ref(false);
  const showShortNameErrorMessage = ref(false);

  const emptyName = computed(() => name.value.length === 0);
  const shortName = computed(() => name.value.length < 3);

  return {
    emptyName,
    shortName,
    showShortNameErrorMessage,
    showEmptyNameErrorMessage,
  };
};
