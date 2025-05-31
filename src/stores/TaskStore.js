import { ref, computed } from "vue";
import { v4 as uuid } from "uuid";
import { defineStore } from "pinia";
import { useMainStore } from "./MainStore";
import { useValidation } from "@/components/composables/useValidation";
import { useSoundEffects } from "@/components/composables/useSoundEffects";
import { useTaskProcessing } from "@/components/composables/useTaskProcessing";

export const useTaskStore = defineStore("taskStore", () => {
  const mainStore = useMainStore();
  //refs
  const newTaskName = ref("");
  const newTaskCategory = ref("frontend");
  const newTaskStatus = ref("pending");
  const newTaskPriority = ref("medium");

  const sortLabel = ref("name");
  const sortDirection = ref(true);
  const searchQuery = ref("");
  const category = ref("all");
  const status = ref("all");
  const priority = ref("all");

  //computed
  const activeList = computed(() =>
    mainStore.mainList.find(({ listId }) => listId === mainStore.activeListId),
  );

  const tasksInActiveList = computed(() => activeList.value?.listTasks || []);

  //stores, composables
  const { playSound } = useSoundEffects();
  const {
    showTaskErrorMessage,
    errorType,
    emptyTaskName,
    shortTaskName,
    messageError,
  } = useValidation({ taskName: newTaskName });

  const { finalTasks } = useTaskProcessing(
    sortLabel,
    sortDirection,
    searchQuery,
    category,
    status,
    priority,
    tasksInActiveList,
  );

  // methods
  const createTask = () => {
    if (emptyTaskName.value || shortTaskName.value) {
      errorType.value = "task";
      showTaskErrorMessage.value = true;
      return;
    }
    if (!activeList.value) return;
    activeList.value.listTasks = [
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
  };

  const resetNewTaskInfo = () => {
    newTaskName.value = "";
    newTaskCategory.value = "frontend";
    newTaskStatus.value = "pending";
    newTaskPriority.value = "medium";
  };

  const removeTask = (taskIdToRemove) => {
    if (!activeList.value) return;
    activeList.value.listTasks = activeList.value.listTasks.filter(
      ({ taskId }) => taskId !== taskIdToRemove,
    );
    playSound("removeTask");
  };

  return {
    //refs
    newTaskName,
    newTaskCategory,
    newTaskPriority,
    newTaskStatus,
    sortDirection,
    sortLabel,
    searchQuery,
    category,
    priority,
    status,

    //computed
    activeList,
    tasksInActiveList,

    //useValidation
    errorType,
    messageError,
    emptyTaskName,
    shortTaskName,
    showTaskErrorMessage,

    //useTaskProcessing
    finalTasks,

    //methods
    createTask,
    resetNewTaskInfo,
    removeTask,
  };
});
