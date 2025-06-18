import { useChartsStore } from "@/stores/ChartsStore";
import { useSettingsStore } from "@/stores/SettingsStore";
import { computed } from "vue";

export const useTasksPriority = () => {
  const chartStore = useChartsStore();
  const settingsStore = useSettingsStore();

  const totalTasksPriority = computed(() => ({
    backgroundColor: settingsStore.isDark ? "#111724" : "#d1f0ff",

    title: {
      text: `Total Tasks Priority`,
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
        label: {
          color: settingsStore.isDark ? "#aaaaaa" : "#666666",
        },
        itemStyle: {
          borderRadius: 4,
        },

        data: [
          {
            value: chartStore.totalCritical,
            name: `Critical, ${chartStore.totalCritical}`,
            itemStyle: { color: "#ff5c5e" },
          },
          {
            value: chartStore.totalHigh,
            name: `High, ${chartStore.totalHigh}`,
            itemStyle: { color: "#ff7e18" },
          },
          {
            value: chartStore.totalMedium,
            name: `Medium, ${chartStore.totalMedium}`,
            itemStyle: { color: "#ffd927" },
          },
          {
            value: chartStore.totalLow,
            name: `Low, ${chartStore.totalLow}`,
            itemStyle: { color: "#8fe012" },
          },
          {
            value: chartStore.totalOptional,
            name: `Optional, ${chartStore.totalOptional}`,
            itemStyle: { color: "#8e97a5" },
          },
        ],
      },
    ],
  }));

  return { totalTasksPriority };
};
