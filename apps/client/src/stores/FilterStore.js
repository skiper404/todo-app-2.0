import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useTasksStore } from "./TasksStore";

export const useFilterStore = defineStore("FilterStore", () => {
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

  const filteredAndSearchedTasks = computed(() =>
    filteredTasks.value.filter(({ taskName }) =>
      taskName.toLowerCase().includes(searchQuery.value.toLowerCase()),
    ),
  );

  const resetCategory = () => {
    category.value = "";
  };

  const resetPriority = () => {
    priority.value = "";
  };

  const resetStatus = () => {
    status.value = "";
  };

  return {
    category,
    priority,
    status,
    searchQuery,
    filteredTasks,
    filteredAndSearchedTasks,
    resetCategory,
    resetPriority,
    resetStatus,
  };
});
