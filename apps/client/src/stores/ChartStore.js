import { defineStore } from "pinia";
import { watch, ref, computed } from "vue";
import { useAppsStore } from "./AppsStore";
import { useTasksStore } from "./TasksStore";
import { useThemeStore } from "./ThemeStore";
import i18n from "@/shared/lib/i18n";

export const useChartStore = defineStore("ChartStore", () => {
  const appsStore = useAppsStore();
  const tasksStore = useTasksStore();
  const themeStore = useThemeStore();

  const appTypes = [
    { key: "desktop", color: "#ff6016" },
    { key: "mobile", color: "#3ae8ce" },
    { key: "web", color: "#e9b218" },
  ];
  const categories = [
    { key: "frontend", color: "#b36bfd" },
    { key: "backend", color: "#ff8520" },
    { key: "testing", color: "#4c52fd" },
  ];
  const priorities = [
    { key: "high", color: "#e71c37" },
    { key: "medium", color: "#fdb721" },
    { key: "low", color: "#a8ed44" },
  ];
  const statuses = [
    { key: "pending", color: "#fae1ff" },
    { key: "inProgress", color: "#ffe973" },
    { key: "done", color: "#a8ed44" },
  ];

  const appTypesData = ref([]);
  const categoriesData = ref([]);
  const prioritiesData = ref([]);
  const statusesData = ref([]);

  const generateData = (items, filters, itemField, translationPath) =>
    filters.map(({ key, color }) => ({
      name: i18n.global.t(`${translationPath}.${key}`),
      value: items.filter(
        (item) => item[itemField]?.toLowerCase() === key.toLowerCase(),
      ).length,
      itemStyle: { color },
    }));

  watch(
    [() => tasksStore.allTasks, () => appsStore.apps],
    () => {
      appTypesData.value = generateData(
        appsStore.apps,
        appTypes,
        "appType",
        "types",
      );
      categoriesData.value = generateData(
        tasksStore.allTasks,
        categories,
        "taskCategory",
        "categories",
      );
      prioritiesData.value = generateData(
        tasksStore.allTasks,
        priorities,
        "taskPriority",
        "priorities",
      );
      statusesData.value = generateData(
        tasksStore.allTasks,
        statuses,
        "taskStatus",
        "statuses",
      );
    },
    { immediate: true, deep: true },
  );

  const generateOptions = (titleKey, data) => {
    return {
      backgroundColor: themeStore.isDark ? "#1c2532" : "#c8d2fc",
      title: {
        text: i18n.global.t(titleKey),
        top: "5px",
        left: "center",
        textStyle: {
          fontSize: "16px",
          color: themeStore.isDark ? "#eeeeee" : "#222222",
        },
      },

      tooltip: {
        trigger: "item",
        formatter: "{b}, {c} ({d}%)",
        backgroundColor: themeStore.isDark ? "#101729" : "#f3f4f6",
        borderWidth: 2,
        extraCssText: `
          border-radius: 20px;
          padding: 10px;
        `,
        textStyle: {
          fontSize: 10,
          color: themeStore.isDark ? "#eeeeee" : "#222222",
        },
      },

      legend: {
        show: true,
        top: "bottom",
        left: "center",
        textStyle: {
          fontSize: "10px",
          color: themeStore.isDark ? "#eeeeee" : "#222222",
        },
      },

      series: [
        {
          type: "pie",
          radius: [30, 50],
          center: ["50%", "50%"],
          roseType: "rose",
          padAngle: 8,
          label: {
            formatter: "{b}, {c} ({d}%)",
            color: themeStore.isDark ? "#eeeeee" : "#222222",
          },
          itemStyle: {
            borderRadius: 4,
          },
          data: data,
        },
      ],
    };
  };

  const appsOptions = computed(() =>
    generateOptions("chart.totalApps", appTypesData.value),
  );

  const categoryOptions = computed(() =>
    generateOptions("chart.totalCategories", categoriesData.value),
  );

  const priorityOptions = computed(() =>
    generateOptions("chart.totalPriorities", prioritiesData.value),
  );

  const statusOptions = computed(() =>
    generateOptions("chart.totalStatuses", statusesData.value),
  );

  return { appsOptions, categoryOptions, priorityOptions, statusOptions };
});
