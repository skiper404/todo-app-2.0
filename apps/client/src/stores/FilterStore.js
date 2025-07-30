import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useTasksStore } from "./TasksStore";

export const useFilterStore = defineStore("FilterStore", () => {
  const isShowFilters = ref(false);
  const category = ref(null);
  const priority = ref(null);
  const status = ref(null);
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
    category.value = null;
  };

  const resetPriority = () => {
    priority.value = null;
  };

  const resetStatus = () => {
    status.value = null;
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
