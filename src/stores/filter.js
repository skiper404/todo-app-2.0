import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilterStore = defineStore("filter", () => {
  const filtersOptions = ref({
    status: "all",
    priority: "all",
    category: "all",
  });

  const statusOptions = ref([
    { label: "All", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "In Progress", value: "inProgress" },
    { label: "Done", value: "done" },
  ]);

  const priorityOptions = ref([
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Optional", value: "optional" },
  ]);

  const categoryOptions = ref([
    { label: "All", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Database", value: "database" },
    { label: "DevOps", value: "devops" },
    { label: "Testing", value: "testing" },
    { label: "Performance", value: "performance" },
    { label: "Security", value: "security" },
    { label: "UX", value: "ux" },
    { label: "Documentation", value: "documentation" },
    { label: "Code Review", value: "code review" },
    { label: "Integration", value: "integration" },
    { label: "Deployment", value: "deployment" },
    { label: "Product", value: "product" },
    { label: "Maintenance", value: "maintenance" },
    { label: "Analytics", value: "analytics" },
    { label: "Marketing", value: "marketing" },
    { label: "Collaboration", value: "collaboration" },
  ]);

  function setFilter(label, value) {
    filtersOptions.value[label] = value;
  }

  function clearFilter(label) {
    filtersOptions.value[label] = "all";
  }

  return {
    filtersOptions,
    statusOptions,
    priorityOptions,
    categoryOptions,
    setFilter,
    clearFilter,
  };
});
