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
  { label: "Critical", value: "critical", level: 1 },
  { label: "High", value: "high", level: 2 },
  { label: "Medium", value: "medium", level: 3 },
  { label: "Low", value: "low", level: 4 },
  { label: "Optional", value: "optional", level: 5 },
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
    color: "text-pink-400",
  },
  {
    label: "Backend",
    value: "backend",
    color: "text-indigo-400",
  },
  {
    label: "Database",
    value: "database",
    color: "text-emerald-400",
  },
  { label: "DevOps", value: "devops", color: "text-blue-400" },
  { label: "Testing", value: "testing", color: "text-rose-400" },
  { label: "Security", value: "security", color: "text-red-400" },
  { label: "UX", value: "ux", color: "text-yellow-400" },

  {
    label: "Integration",
    value: "integration",
    color: "text-teal-400",
  },

  { label: "Product", value: "product", color: "text-cyan-400" },

  {
    label: "Analytics",
    value: "analytics",
    color: "text-violet-400",
  },
  {
    label: "Marketing",
    value: "marketing",
    color: "text-amber-400",
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
