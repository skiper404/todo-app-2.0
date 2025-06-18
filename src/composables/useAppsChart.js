import { useChartsStore } from "@/stores/ChartsStore";
import { useSettingsStore } from "@/stores/SettingsStore";
import { computed } from "vue";

export const useAppsOptions = () => {
  const chartStore = useChartsStore();
  const settingsStore = useSettingsStore();

  const totalAppsType = computed(() => ({
    backgroundColor: settingsStore.isDark ? "#111724" : "#d1f0ff",

    title: {
      text: `Total Apps, ${chartStore.totalApps}`,
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
            value: chartStore.totalDesktop,
            name: `Desktop, ${chartStore.totalDesktop}`,
            itemStyle: { color: "#ffd927" },
          },
          {
            value: chartStore.totalMobile,
            name: `Mobile, ${chartStore.totalMobile}`,
            itemStyle: { color: "#00b29d" },
          },
          {
            value: chartStore.totalWeb,
            name: `Web, ${chartStore.totalWeb}`,
            itemStyle: {
              color: "#ff7e18",
            },
          },
        ],
      },
    ],
  }));

  return { totalAppsType };
};
