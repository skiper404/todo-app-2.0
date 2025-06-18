import { defineStore } from "pinia";
import { useMainStore } from "./MainStore";
import { computed, ref } from "vue";

export const useChartsStore = defineStore("ChartsStore", () => {
  const mainStore = useMainStore();

  const getTotalByType = (type) => {
    return computed(
      () => mainStore.appsList.filter(({ appType }) => appType === type).length,
    );
  };

  const getTotalTasksByPriority = (priority) => {
    return computed(
      () =>
        mainStore.appsList.flatMap(({ appTasks }) =>
          appTasks.filter(({ taskPriority }) => taskPriority === priority),
        ).length,
    );
  };

  const getTotalTasksByStatus = (status) => {
    return computed(
      () =>
        mainStore.appsList.flatMap(({ appTasks }) =>
          appTasks.filter(({ taskStatus }) => taskStatus === status),
        ).length,
    );
  };

  const formatTooltip = (params) => {
    return `${params.name.split(",")[0]}: ${params.value} (${params.percent})%`;
  };

  const showLegend = ref(false);

  const totalDesktop = getTotalByType("desktop");
  const totalApps = computed(() => mainStore.appsList.length);
  const totalMobile = getTotalByType("mobile");
  const totalWeb = getTotalByType("web");
  const totalCritical = getTotalTasksByPriority("critical");
  const totalHigh = getTotalTasksByPriority("high");
  const totalMedium = getTotalTasksByPriority("medium");
  const totalLow = getTotalTasksByPriority("low");
  const totalOptional = getTotalTasksByPriority("optional");
  const totalPending = getTotalTasksByStatus("pending");
  const totalInProgress = getTotalTasksByStatus("inProgress");
  const totalDone = getTotalTasksByStatus("done");

  return {
    totalApps,
    totalDesktop,
    totalMobile,
    totalWeb,
    totalCritical,
    totalHigh,
    totalMedium,
    totalLow,
    totalOptional,
    totalPending,
    totalInProgress,
    totalDone,
    showLegend,
    formatTooltip,
  };
});
