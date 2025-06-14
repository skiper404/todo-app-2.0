import CreateTrackedAppForm from "@/components/forms/CreateTrackedAppForm.vue";
import CreateTaskForm from "@/components/forms/CreateTaskForm.vue";
import EditTrackedAppForm from "@/components/forms/EditTrackedAppForm.vue";
import EditTaskForm from "@/components/forms/EditTaskForm.vue";
import DeleteTrackedAppForm from "./components/forms/RemoveTrackedAppForm.vue";
import DeleteTaskForm from "./components/forms/RemoveTaskForm.vue";

export const appInfo = {
  appName: "App Development Tracker",
  appVersion: "v2.0",
};

export const priorityOptions = [
  { label: "critical", value: "critical", level: 1 },
  { label: "high", value: "high", level: 2 },
  { label: "medium", value: "medium", level: 3 },
  { label: "low", value: "low", level: 4 },
  { label: "optional", value: "optional", level: 5 },
];

export const statusOptions = [
  { label: "Pending", value: "pending" },
  { label: "In Progress", value: "inProgress" },
  { label: "Done", value: "done" },
];

export const categoryOptions = [
  {
    label: "Frontend",
    value: "frontend",
  },
  {
    label: "Backend",
    value: "backend",
  },
  {
    label: "Database",
    value: "database",
  },
  { label: "DevOps", value: "devops" },
  { label: "Testing", value: "testing" },
  { label: "Security", value: "security" },
  { label: "UX", value: "ux" },

  {
    label: "Integration",
    value: "integration",
  },

  { label: "Product", value: "product" },

  {
    label: "Analytics",
    value: "analytics",
  },
  {
    label: "Marketing",
    value: "marketing",
  },
];

export const appCategories = [
  { label: "Desktop", value: "desktop" },
  { label: "Mobile", value: "mobile" },
  { label: "Web", value: "web" },
];

export const modalFormsMap = {
  createTrackedApp: CreateTrackedAppForm,
  createTask: CreateTaskForm,
  editTrackedApp: EditTrackedAppForm,
  editTask: EditTaskForm,
  removeTrackedApp: DeleteTrackedAppForm,
  removeTask: DeleteTaskForm,
};
