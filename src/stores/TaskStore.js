import { ref, computed } from "vue";
import { v4 as uuid } from "uuid";
import { defineStore } from "pinia";
import { useMainStore } from "./MainStore";
import { useValidation } from "@/composables/useValidation";
import { useSoundStore } from "@/stores/SoundStore";
import { useTaskProcessing } from "@/composables/useTaskProcessing";
import { useModalStore } from "./ModalStore";

export const useTaskStore = defineStore("TaskStore", () => {
  const mainStore = useMainStore();
  //refs
  const newTaskName = ref("");
  const newTaskCategory = ref("frontend");
  const newTaskStatus = ref("pending");
  const newTaskPriority = ref("medium");

  const searchQuery = ref("");
  const category = ref("");
  const status = ref("");
  const priority = ref("");

  const filterMap = { category, priority, status };

  //computed

  const activeApp = computed(() =>
    mainStore.appsList.find(({ appId }) => appId === mainStore.activeAppId),
  );

  const tasksInActiveApp = computed({
    get() {
      return activeApp.value ? activeApp.value.appTasks : [];
    },
    set(newTasks) {
      if (activeApp.value) {
        activeApp.value.appTasks = newTasks;
      }
    },
  });

  //stores, composables
  const modalStore = useModalStore();
  const soundStore = useSoundStore();
  const {
    shortName,
    emptyName,
    showEmptyNameErrorMessage,
    showShortNameErrorMessage,
    resetValidation,
  } = useValidation({ name: newTaskName });

  const { finalTasks } = useTaskProcessing(
    searchQuery,
    category,
    status,
    priority,
    tasksInActiveApp,
  );

  // methods

  const createTask = () => {
    modalStore.openModal("createTask");
    if (emptyName.value) {
      showEmptyNameErrorMessage.value = true;
      showShortNameErrorMessage.value = false;
      return;
    }

    if (shortName.value) {
      showEmptyNameErrorMessage.value = false;
      showShortNameErrorMessage.value = true;
      return;
    }

    if (!activeApp.value) return;

    activeApp.value.appTasks = [
      ...tasksInActiveApp.value,
      {
        taskId: uuid(),
        taskName: newTaskName.value,
        taskDate: new Date().getTime(),
        taskCategory: newTaskCategory.value,
        taskStatus: newTaskStatus.value,
        taskPriority: newTaskPriority.value,
      },
    ];
    showEmptyNameErrorMessage.value = false;
    showShortNameErrorMessage.value = false;
    modalStore.closeModal();
    soundStore.playSound("addTask");
  };

  const updateTask = (updatedTask) => {
    if (!activeApp.value) return;
    if (!updatedTask.taskName.length) return;

    const index = activeApp.value.appTasks.findIndex(
      ({ taskId }) => taskId === updatedTask.taskId,
    );

    if (index !== -1) {
      const updated = {
        ...tasksInActiveApp.value[index],
        taskName: updatedTask.taskName,
        taskCategory: updatedTask.taskCategory,
        taskStatus: updatedTask.taskStatus,
        taskPriority: updatedTask.taskPriority,
      };

      activeApp.value.appTasks.splice(index, 1, updated);
    }

    modalStore.closeModal();
  };

  const resetNewTaskInfo = () => {
    newTaskName.value = "";
    newTaskCategory.value = "frontend";
    newTaskStatus.value = "pending";
    newTaskPriority.value = "medium";
  };

  const removeTask = (taskIdToRemove) => {
    if (!activeApp.value) return;
    activeApp.value.appTasks = activeApp.value.appTasks.filter(
      ({ taskId }) => taskId !== taskIdToRemove,
    );
    soundStore.playSound("removeTask");
    modalStore.closeModal();
  };

  const resetSearchQuery = () => {
    searchQuery.value = "";
  };

  const resetFilter = (filter) => {
    filterMap[filter].value = "";
  };

  const resetAllFilters = () => {
    for (const key in filterMap) {
      filterMap[key].value = "";
    }
    resetSearchQuery();
  };

  return {
    //refs
    newTaskName,
    newTaskCategory,
    newTaskPriority,
    newTaskStatus,
    searchQuery,
    category,
    priority,
    status,

    //computed
    activeApp,
    tasksInActiveApp,

    //useValidation
    shortName,
    emptyName,
    showEmptyNameErrorMessage,
    showShortNameErrorMessage,
    resetValidation,

    //useTaskProcessing
    finalTasks,

    //methods
    createTask,
    resetNewTaskInfo,
    updateTask,
    removeTask,
    resetSearchQuery,
    resetFilter,
    resetAllFilters,
  };
});
