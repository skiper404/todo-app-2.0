import { priorityOptions } from "@/constants";
import { computed } from "vue";

export const useTaskProcessing = (
  sortLabel,
  sortDirection,
  searchQuery,
  category,
  status,
  priority,
  tasksInActiveList,
) => {
  const getPriorityOption = (value) =>
    priorityOptions.find((option) => option.value === value);

  const sorters = {
    name: (a, b) => a.taskName.localeCompare(b.taskName),
    date: (a, b) => a.taskDate - b.taskDate,
    category: (a, b) => a.taskCategory.localeCompare(b.taskCategory),
    status: (a, b) => a.taskStatus.localeCompare(b.taskStatus),
    priority: (a, b) =>
      getPriorityOption(a.taskPriority).level -
      getPriorityOption(b.taskPriority).level,
  };

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

    const sorter = sorters[sortLabel.value];
    const sortResult = [...searchResult].sort((a, b) => {
      if (!sorter) {
        return 0;
      }
      return sortDirection.value ? sorter(a, b) : sorter(b, a);
    });

    return sortResult;
  });

  return { finalTasks, getPriorityOption, matchesFilter };
};
