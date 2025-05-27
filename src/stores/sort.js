import { defineStore } from "pinia";
import { ref } from "vue";

export const useSortStore = defineStore("sort", () => {
  const priorityMap = { critical: 1, high: 2, medium: 3, low: 4, optional: 5 };
  const sortOptions = ref({ label: "name", orderUp: true });

  function changeSortLabel(value) {
    sortOptions.value.label = value;
  }

  function changeSortOrder(value) {
    sortOptions.value.orderUp = value;
  }

  return { priorityMap, sortOptions, changeSortLabel, changeSortOrder };
});
