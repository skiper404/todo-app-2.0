import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { v4 as uuid } from "uuid";
import { useLocalStorage } from "@/components/composables/useLocalStorage";
import { useValidation } from "@/components/composables/useValidation";
import { useSoundEffects } from "@/components/composables/useSoundEffects";

export const useMainStore = defineStore("MainStore", () => {
  const mainList = ref([]);
  const newListName = ref("");
  const newListStatus = ref("a");
  const activeListId = ref(null);
  const newTaskName = ref("");
  const newTaskCategory = ref("frontend");
  const newTaskStatus = ref("pending");
  const newTaskPriority = ref("medium");

  const { playSound } = useSoundEffects();

  useLocalStorage(mainList, "list");

  const {
    showListErrorMessage,
    showTaskErrorMessage,
    errorType,
    emptyListName,
    shortListName,
    emptyTaskName,
    shortTaskName,
    messageError,
  } = useValidation({ listName: newListName, taskName: newTaskName });

  const tasksInActiveList = computed(
    () =>
      mainList.value.find(({ listId }) => listId === activeListId.value)
        ?.listTasks || [],
  );

  const setActiveId = async (listId) => {
    activeListId.value = listId;
  };

  const createList = () => {
    if (!emptyListName.value && !shortListName.value) {
      mainList.value = [
        ...mainList.value,
        {
          listId: uuid(),
          listName: newListName.value,
          listStatus: newListStatus.value,
          listTasks: [],
        },
      ];
      showListErrorMessage.value = false;
      resetNewListInfo();
      playSound("addList");
    } else {
      errorType.value = "list";
      showListErrorMessage.value = true;
    }
  };

  const resetNewListInfo = () => {
    (newListName.value = ""), (newListStatus.value = "a");
  };

  const removeList = (listIdToRemove) => {
    mainList.value = mainList.value.filter(
      ({ listId }) => listId !== listIdToRemove,
    );
    playSound("removeList");
  };

  const createTask = () => {
    if (!emptyTaskName.value && !shortTaskName.value) {
      const activeList = mainList.value.find(
        ({ listId }) => listId === activeListId.value,
      );

      activeList.listTasks = [
        ...tasksInActiveList.value,
        {
          taskId: uuid(),
          taskName: newTaskName.value,
          taskDate: new Date().getTime(),
          taskCategory: newTaskCategory.value,
          taskStatus: newTaskStatus.value,
          taskPriority: newTaskPriority.value,
        },
      ];
      showTaskErrorMessage.value = false;
      resetNewTaskInfo();
      playSound("addTask");
    } else {
      errorType.value = "task";
      showTaskErrorMessage.value = true;
    }
  };

  const resetNewTaskInfo = () => {
    newTaskName.value = "";
    newTaskCategory.value = "frontend";
    newTaskStatus.value = "pending";
    newTaskPriority.value = "medium";
  };

  const removeTask = (taskIdToRemove) => {
    const activeList = mainList.value.find(
      ({ listId }) => listId === activeListId.value,
    );

    activeList.listTasks = [
      ...activeList.listTasks.filter(({ taskId }) => taskId !== taskIdToRemove),
    ];
    playSound("removeTask");
  };

  return {
    mainList,
    activeListId,
    tasksInActiveList,
    newListName,
    newListStatus,
    newTaskName,
    newTaskPriority,
    newTaskStatus,
    newTaskCategory,
    setActiveId,
    createList,
    removeList,
    emptyListName,
    shortListName,
    emptyTaskName,
    shortTaskName,
    messageError,
    errorType,
    removeTask,
    createTask,
    showListErrorMessage,
    showTaskErrorMessage,
  };
});
