import { priorityOptions } from "@/constants";
import { computed } from "vue";

export const useTaskProcessing = (
  searchQuery,
  category,
  status,
  priority,
  tasksInActiveList,
) => {
  const getPriorityOption = (value) =>
    priorityOptions.find((option) => option.value === value);

  const matchesFilter = (value, filterValue) =>
    filterValue === "all" || filterValue === value;

  const finalTasks = computed(() => {
    const filterResult = tasksInActiveList.value.filter(
      ({ taskCategory, taskStatus, taskPriority }) =>
        matchesFilter(taskCategory, category.value) &&
        matchesFilter(taskStatus, status.value) &&
        matchesFilter(taskPriority, priority.value),
    );

    const searchResult = filterResult.filter(({ taskName }) =>
      taskName.toLowerCase().includes(searchQuery.value.toLowerCase()),
    );

    return searchResult;
  });

  return { finalTasks, getPriorityOption, matchesFilter };
};
