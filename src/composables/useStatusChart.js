import { useChartsStore } from "@/stores/ChartsStore";
import { useSettingsStore } from "@/stores/SettingsStore";
import { computed } from "vue";

export const useTasksStatus = () => {
  const chartStore = useChartsStore();
  const settingsStore = useSettingsStore();

  const totalTasksStatus = computed(() => ({
    backgroundColor: settingsStore.isDark ? "#111724" : "#d1f0ff",

    title: {
      text: `Total Tasks Status`,
      top: "4px",
      left: "center",
      textStyle: {
        fontSize: "16px",
        color: settingsStore.isDark ? "#aaaaaa" : "#666666",
      },
    },

    tooltip: {
      trigger: "item",
      formatter: chartStore.formatTooltip,
      backgroundColor: settingsStore.isDark ? "#333333" : "#eeeeee",
      borderWidth: 2,
      extraCssText: `
        border-radius: 20px;
        padding: 10px;
      `,
      textStyle: {
        fontSize: 10,
        color: settingsStore.isDark ? "#aaaaaa" : "#666666",
      },
    },

    legend: {
      show: chartStore.showLegend,
      top: "bottom",
      left: "center",
      textStyle: {
        fontSize: "10px",
        color: settingsStore.isDark ? "#aaaaaa" : "#666666",
      },
    },

    series: [
      {
        type: "pie",
        radius: [30, 50],
        center: ["50%", "50%"],
        roseType: "rose",
        padAngle: 4,
        itemStyle: {
          borderRadius: 4,
        },

        data: [
          {
            value: chartStore.totalPending,
            name: `Pending, ${chartStore.totalPending}`,
            itemStyle: { color: "#f3ce48" },
          },
          {
            value: chartStore.totalInProgress,
            name: `inProgress, ${chartStore.totalInProgress}`,
            itemStyle: { color: "#4699fe" },
          },
          {
            value: chartStore.totalDone,
            name: `Done, ${chartStore.totalDone}`,
            itemStyle: { color: "#00d967" },
          },
        ],
      },
    ],
  }));

  return { totalTasksStatus };
};
