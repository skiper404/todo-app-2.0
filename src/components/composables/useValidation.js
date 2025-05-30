import { ref, computed } from "vue";

export const useValidation = ({ listName, taskName }) => {
  const errorType = ref(null);
  const showListErrorMessage = ref(false);
  const showTaskErrorMessage = ref(false);

  const emptyListName = computed(() => listName.value.length === 0);
  const shortListName = computed(() => listName.value.length < 4);
  const emptyTaskName = computed(() => taskName.value.length === 0);
  const shortTaskName = computed(() => taskName.value.length < 4);

  const messageError = computed(() => {
    if (errorType.value === "list") {
      if (emptyListName.value) {
        return "Enter list name.";
      }
      if (shortListName.value) {
        return "List name should have at least 4 characters.";
      }
    }

    if (errorType.value === "task") {
      if (emptyTaskName.value) {
        return "Enter task name.";
      }
      if (shortTaskName.value) {
        return "Task name should have at least 4 characters. ";
      }
    }

    return null;
  });

  return {
    showListErrorMessage,
    showTaskErrorMessage,
    errorType,

    emptyListName,
    shortListName,
    emptyTaskName,
    shortTaskName,
    messageError,
  };
};
