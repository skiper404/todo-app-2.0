import { defineStore } from "pinia";
import { computed } from "vue";
import { useTaskStore } from "./tasks";
import { useSortStore } from "./sort";
import { useFilterStore } from "./filter";
import { useSearchStore } from "./search";

export const useStore = defineStore("root", () => {
  const taskStore = useTaskStore();
  const sortStore = useSortStore();
  const filterStore = useFilterStore();
  const searchStore = useSearchStore();

  const list = computed(() => taskStore.tasks);

  const globalResult = computed(() => {
    const { status, priority, category } = filterStore.filtersOptions;
    const { label, orderUp } = sortStore.sortOptions;

    const filtered = list.value.filter(
      ({ taskName, taskCategory, taskPriority, taskStatus }) => {
        const matchStatus = status === "all" || taskStatus === status; // ============== filter
        const matchPriority = priority === "all" || taskPriority === priority;
        const matchCategory = category === "all" || taskCategory === category;

        const matchedSearch = taskName.includes(searchStore.searchQuery); // ================= search

        return matchStatus && matchPriority && matchCategory && matchedSearch;
      },
    );

    const sorted = [...filtered]; // =================================================== sorting

    switch (label) {
      case "name":
        return sorted.sort((a, b) =>
          orderUp
            ? a.taskName.localeCompare(b.taskName)
            : b.taskName.localeCompare(a.taskName),
        );

      case "date":
        return sorted.sort((a, b) =>
          orderUp ? a.taskDate - b.taskDate : b.taskDate - a.taskDate,
        );

      case "category":
        return sorted.sort((a, b) =>
          orderUp
            ? a.taskCategory.localeCompare(b.taskCategory)
            : b.taskCategory.localeCompare(a.taskCategory),
        );

      case "status":
        return sorted.sort((a, b) =>
          orderUp
            ? a.taskStatus.localeCompare(b.taskStatus)
            : b.taskStatus.localeCompare(a.taskStatus),
        );

      case "priority":
        return sorted.sort((a, b) =>
          orderUp
            ? sortStore.priorityMap[a.taskPriority] -
              sortStore.priorityMap[b.taskPriority]
            : sortStore.priorityMap[b.taskPriority] -
              sortStore.priorityMap[a.taskPriority],
        );

      default:
        return sorted;
    }
  });

  return {
    list,
    globalResult,
  };
});
