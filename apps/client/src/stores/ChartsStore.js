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

  const getTotalTasksByCategory = (category) => {
    return computed(
      () =>
        mainStore.appsList.flatMap(({ appTasks }) =>
          appTasks.filter(({ taskCategory }) => taskCategory === category),
        ).length,
    );
  };

  const showLegend = ref(false);

  const totalApps = computed(() => mainStore.appsList.length);
  const totalDesktop = getTotalByType("desktop");
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

  const totalFrontend = getTotalTasksByCategory("frontend");
  const totalBackend = getTotalTasksByCategory("backend");
  const totalDatabase = getTotalTasksByCategory("database");
  const totalDevops = getTotalTasksByCategory("devops");
  const totalTesting = getTotalTasksByCategory("testing");
  const totalSecurity = getTotalTasksByCategory("security");
  const totalUX = getTotalTasksByCategory("ux");
  const totalIntegration = getTotalTasksByCategory("integration");
  const totalProduct = getTotalTasksByCategory("product");
  const totalAnalytics = getTotalTasksByCategory("analytics");
  const totalMarketing = getTotalTasksByCategory("marketing");

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
    totalFrontend,
    totalBackend,
    totalDatabase,
    totalDevops,
    totalTesting,
    totalSecurity,
    totalUX,
    totalIntegration,
    totalProduct,
    totalAnalytics,
    totalMarketing,
    showLegend,
  };
});
