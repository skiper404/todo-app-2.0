import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { v4 as uuid } from "uuid";

export const useAsideStore = defineStore("asideTasks", () => {
  const asideTaskList = ref([]);

  const newListName = ref("");
  const newListStatus = ref("a");

  const newTaskName = ref("");
  const newTaskCategory = ref("frontend");
  const newTaskPriority = ref("medium");
  const newTaskStatus = ref("pending");

  const isShowShortNameError = ref(false);
  const isShowEmptyNameError = ref(false);

  const errorMessage = computed(() => {
    if (isShowEmptyNameError.value) {
      return "List name cannot be empty.";
    }
    if (isShowShortNameError.value) {
      return "List name should have at least 4 characters.";
    }
  });

  function createList() {
    if (newListName.value.length === 0) {
      isShowEmptyNameError.value = true;
      isShowShortNameError.value = false;
    } else if (newListName.value.length < 4) {
      isShowShortNameError.value = true;
      isShowEmptyNameError.value = false;
    } else {
      asideTaskList.value = [
        ...asideTaskList.value,
        {
          listId: uuid(),
          listName: newListName.value,
          listStatus: newListStatus.value,
          tasks: [],
        },
      ];
      resetInputs();
      isShowShortNameError.value = false;
      isShowEmptyNameError.value = false;
    }
  }

  function removeList(id) {
    asideTaskList.value = asideTaskList.value.filter(
      ({ listId }) => listId !== id,
    );
  }

  function resetInputs() {
    (newListName.value = ""), (newListStatus.value = "a");
  }

  function createTask(id) {
    asideTaskList.value
      .find(({ listId }) => listId === id)
      .tasks.push({
        taskId: uuid(),
        taskName: newTaskName.value,
        taskStatus: newTaskStatus.value,
        taskPriority: newTaskPriority.value,
        taskCategory: newTaskCategory.value,
      });
    clearTaskInputs();
  }

  function clearTaskInputs() {
    newTaskName.value = "";
    newTaskCategory.value = "frontend";
    newTaskPriority.value = "medium";
    newTaskStatus.value = "pending";
  }

  return {
    asideTaskList,
    newListName,
    newListStatus,
    newTaskName,
    newTaskPriority,
    newTaskStatus,
    newTaskCategory,
    isShowEmptyNameError,
    isShowShortNameError,
    errorMessage,
    createList,
    removeList,
    createTask,
    clearTaskInputs,
  };
});
