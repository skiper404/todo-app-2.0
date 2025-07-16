import { useChartsStore } from "@/stores/ChartsStore";
import { useSettingsStore } from "@/stores/SettingsStore";
import { computed } from "vue";
import { schemeTableau10 } from "d3-scale-chromatic";

const palette = schemeTableau10;

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
              itemStyle: { color: "#c7d1fb" },
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

      case "category":
        return {
          title: `Total ${capitalize(type)}`,
          data: [
            {
              name: "Frontend",
              value: chartsStore.totalFrontend,
              itemStyle: { color: palette[0] },
            },
            {
              name: "Backend",
              value: chartsStore.totalBackend,
              itemStyle: { color: palette[1] },
            },
            {
              name: "Database",
              value: chartsStore.totalDatabase,
              itemStyle: { color: palette[3] },
            },
            {
              name: "DevOps",
              value: chartsStore.totalDevops,
              itemStyle: { color: palette[4] },
            },
            {
              name: "Testing",
              value: chartsStore.totalTesting,
              itemStyle: { color: palette[5] },
            },
            {
              name: "Security",
              value: chartsStore.totalSecurity,
              itemStyle: { color: palette[6] },
            },
            {
              name: "UX",
              value: chartsStore.totalUX,
              itemStyle: { color: palette[7] },
            },
            {
              name: "Integration",
              value: chartsStore.totalIntegration,
              itemStyle: { color: palette[8] },
            },
            {
              name: "Product",
              value: chartsStore.totalProduct,
              itemStyle: { color: palette[9] },
            },
            {
              name: "Analytics",
              value: chartsStore.totalAnalytics,
              itemStyle: { color: palette[10] },
            },
            {
              name: "Marketing",
              value: chartsStore.totalMarketing,
              itemStyle: { color: palette[11] },
            },
          ],
        };

      default:
        break;
    }
  });

  const option = computed(() => ({
    backgroundColor: settingsStore.isDark ? "#222222" : "#dfeaff",

    title: {
      text: chartData.value.title,
      top: "2px",
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
        radius: [40, 60],
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
