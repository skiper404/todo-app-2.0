import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useTasksStore } from "./TasksStore";

export const useFilterStore = defineStore("FilterStore", () => {
  const isShowFilters = ref(false);
  const category = ref("");
  const priority = ref("");
  const status = ref("");
  const searchQuery = ref("");

  const filteredTasks = computed(() => {
    const tasksStore = useTasksStore();
    return tasksStore.tasks.filter(
      ({ taskCategory, taskPriority, taskStatus }) => {
        return (
          (!category.value || taskCategory === category.value) &&
          (!priority.value || taskPriority === priority.value) &&
          (!status.value || taskStatus === status.value)
        );
      },
    );
  });

  const toggleFilters = () => {
    isShowFilters.value = !isShowFilters.value;
  };

  const filteredAndSearchedTasks = computed(() =>
    filteredTasks.value.filter(({ taskName }) =>
      taskName.toLowerCase().includes(searchQuery.value.toLowerCase()),
    ),
  );

  const resetSearch = () => {
    searchQuery.value = "";
  };

  const resetCategory = () => {
    category.value = "";
  };

  const resetPriority = () => {
    priority.value = "";
  };

  const resetStatus = () => {
    status.value = "";
  };

  const resetFilters = () => {
    resetSearch();
    resetCategory();
    resetPriority();
    resetStatus();
  };

  return {
    category,
    priority,
    status,
    searchQuery,
    filteredTasks,
    filteredAndSearchedTasks,
    isShowFilters,
    resetCategory,
    resetPriority,
    resetStatus,
    resetFilters,
    toggleFilters,
  };
});
