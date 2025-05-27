import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { v4 as uuid } from "uuid";
export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

  const newTaskName = ref("");
  const newTaskPriority = ref("medium");
  const newTaskStatus = ref("pending");
  const newTaskCategory = ref("frontend");

  const isShowShortNameError = ref(false);
  const isShowEmptyNameError = ref(false);

  const errorMessage = computed(() => {
    if (isShowEmptyNameError.value) {
      return "Task name cannot be empty.";
    }
    if (isShowShortNameError.value) {
      return "Task name should have at least 4 characters.";
    }
  });

  function createTask() {
    if (newTaskName.value.length === 0) {
      isShowEmptyNameError.value = true;
      isShowShortNameError.value = false;
    } else if (newTaskName.value.length < 4) {
      isShowEmptyNameError.value = false;
      isShowShortNameError.value = true;
    } else {
      tasks.value = [
        ...tasks.value,
        {
          taskId: uuid(),
          taskName: newTaskName.value,
          taskDate: new Date().getTime(),
          taskCategory: newTaskCategory.value,
          taskPriority: newTaskPriority.value,
          taskStatus: newTaskStatus.value,
        },
      ];
      isShowEmptyNameError.value = false;
      isShowShortNameError.value = false;
      resetInputs();
    }
  }

  function removeTask() {}

  function resetInputs() {
    newTaskName.value = "";
    newTaskCategory.value = "frontend";
    newTaskPriority.value = "medium";
    newTaskStatus.value = "pending";
  }

  return {
    tasks,
    newTaskName,
    newTaskPriority,
    newTaskCategory,
    newTaskStatus,
    isShowShortNameError,
    isShowEmptyNameError,
    errorMessage,
    createTask,
    removeTask,
    resetInputs,
  };
});
