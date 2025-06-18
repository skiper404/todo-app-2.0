import { useChartsStore } from "@/stores/ChartsStore";
import { useSettingsStore } from "@/stores/SettingsStore";
import { computed } from "vue";

export const useChartOptions = (type) => {
  const chartsStore = useChartsStore();
  const settingsStore = useSettingsStore();

  const capitalize = (text) => text.slice(0, 1).toUpperCase() + text.slice(1);

  const chartData = computed(() => {
    switch (type) {
      case "apps":
        return {
          title: `Total ${capitalize(type)}`,
          data: [
            {
              name: "Desktop",
              value: chartsStore.totalDesktop,
              itemStyle: { color: "#ffd927" },
            },
            {
              name: "Mobile",
              value: chartsStore.totalMobile,
              itemStyle: { color: "#00b29d" },
            },
            {
              name: "Web",
              value: chartsStore.totalWeb,
              itemStyle: { color: "#ff7e18" },
            },
          ],
        };

      case "priority":
        return {
          title: `Total ${capitalize(type)}`,
          data: [
            {
              name: "Critical",
              value: chartsStore.totalCritical,
              itemStyle: { color: "#ff5c5e" },
            },
            {
              name: "High",
              value: chartsStore.totalHigh,
              itemStyle: { color: "#ff7e18" },
            },
            {
              name: "Medium",
              value: chartsStore.totalMedium,
              itemStyle: { color: "#ffd927" },
            },
            {
              name: "Low",
              value: chartsStore.totalLow,
              itemStyle: { color: "#8fe012" },
            },
            {
              name: "Optional",
              value: chartsStore.totalOptional,
              itemStyle: { color: "#8e97a5" },
            },
          ],
        };

      case "status":
        return {
          title: `Total ${capitalize(type)}`,
          data: [
            {
              name: "Pending",
              value: chartsStore.totalPending,
              itemStyle: { color: "#f3ce48" },
            },
            {
              name: "InProgress",
              value: chartsStore.totalInProgress,
              itemStyle: { color: "#4699fe" },
            },
            {
              name: "Done",
              value: chartsStore.totalDone,
              itemStyle: { color: "#00d967" },
            },
          ],
        };

      default:
        break;
    }
  });

  const option = computed(() => ({
    backgroundColor: settingsStore.isDark ? "#111724" : "#d1f0ff",

    title: {
      text: chartData.value.title,
      top: "5px",
      left: "center",
      textStyle: {
        fontSize: "16px",
        color: settingsStore.isDark ? "#aaaaaa" : "#666666",
      },
    },

    tooltip: {
      trigger: "item",
      formatter: "{b}, {c} ({d}%)",
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
      show: chartsStore.showLegend,
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
          formatter: "{b}, {c} ({d}%)",
          color: settingsStore.isDark ? "#aaaaaa" : "#666666",
        },
        itemStyle: {
          borderRadius: 4,
        },

        data: chartData.value.data,
      },
    ],
  }));

  return { option };
};
