import { ref, computed } from "vue";
import { v4 as uuid } from "uuid";
import { defineStore } from "pinia";
import { useMainStore } from "./MainStore";
import { useValidation } from "@/composables/useValidation";
import { useSoundEffects } from "@/composables/useSoundEffects";
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
  const category = ref("all");
  const status = ref("all");
  const priority = ref("all");

  const filterMap = { category, priority, status };

  //computed
  const activeList = computed(() =>
    mainStore.mainList.find(({ listId }) => listId === mainStore.activeListId),
  );

  const tasksInActiveList = computed({
    get() {
      return activeList.value ? activeList.value.listTasks || [] : [];
    },
    set(newTasks) {
      if (activeList.value) {
        activeList.value.listTasks = newTasks;
      }
    },
  });

  //stores, composables
  const modalStore = useModalStore();
  const { playSound } = useSoundEffects();
  const {
    shortName,
    emptyName,
    showEmptyNameErrorMessage,
    showShortNameErrorMessage,
  } = useValidation({ name: newTaskName });

  const { finalTasks } = useTaskProcessing(
    searchQuery,
    category,
    status,
    priority,
    tasksInActiveList,
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
    showEmptyNameErrorMessage.value = false;
    showShortNameErrorMessage.value = false;
    modalStore.closeModal();
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

  const resetSearchQuery = () => {
    searchQuery.value = "";
  };

  const resetFilter = (filter) => {
    filterMap[filter].value = "all";
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
    activeList,
    tasksInActiveList,

    //useValidation
    shortName,
    emptyName,
    showEmptyNameErrorMessage,
    showShortNameErrorMessage,

    //useTaskProcessing
    finalTasks,

    //methods
    createTask,
    resetNewTaskInfo,
    removeTask,
    resetSearchQuery,
    resetFilter,
  };
});
