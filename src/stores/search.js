import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useTaskStore } from "./tasks";

export const useSearchStore = defineStore("search", () => {
  const useTask = useTaskStore();
  const searchQuery = ref("");

  const resultSearchQuery = computed(() =>
    useTask.tasks.filter((item) => item.name.includes(searchQuery.value)),
  );

  const resetQuery = () => (searchQuery.value = "");

  return { searchQuery, resultSearchQuery, resetQuery };
});
