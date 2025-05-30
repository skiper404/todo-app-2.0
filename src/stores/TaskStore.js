import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMainStore } from "./MainStore";
import { useSoundEffects } from "@/components/composables/useSoundEffects";
import { useValidation } from "@/components/composables/useValidation";
import { v4 as uuid } from "uuid";

export const useTaskStore = defineStore("taskStore", () => {
  const mainStore = useMainStore();
  const { playSound } = useSoundEffects();

  const newTaskName = ref("");
  const newTaskCategory = ref("frontend");
  const newTaskStatus = ref("pending");
  const newTaskPriority = ref("medium");

  const {
    showTaskErrorMessage,
    errorType,
    emptyTaskName,
    shortTaskName,
    messageError,
  } = useValidation({ taskName: newTaskName });

  const tasksInActiveList = computed(() => {
    const activeList = mainStore.mainList.find(
      ({ listId }) => listId === mainStore.activeListId,
    );

    return activeList?.listTasks || [];
  });

  const createTask = () => {
    if (!emptyTaskName.value && !shortTaskName.value) {
      const activeList = mainStore.mainList.find(
        ({ listId }) => listId === mainStore.activeListId,
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
    const activeList = mainStore.mainList.find(
      ({ listId }) => listId === mainStore.activeListId,
    );

    activeList.listTasks = activeList.listTasks.filter(
      ({ taskId }) => taskId !== taskIdToRemove,
    );
    playSound("removeTask");
  };

  return {
    newTaskName,
    newTaskCategory,
    newTaskPriority,
    newTaskStatus,
    tasksInActiveList,
    createTask,
    removeTask,
    errorType,
    messageError,
    emptyTaskName,
    shortTaskName,
    showTaskErrorMessage,
  };
});
