import CreateListForm from "@/components/forms/CreateListForm.vue";
import CreateTaskForm from "@/components/forms/CreateTaskForm.vue";
import EditListForm from "@/components/forms/EditListForm.vue";
import EditTaskForm from "@/components/forms/EditTaskForm.vue";
import DeleteListForm from "./components/forms/DeleteListForm.vue";
import DeleteTaskForm from "./components/forms/DeleteTaskForm.vue";

export const appInfo = { appName: "Task Manager", appVersion: "v2.0" };

export const priorityOptions = [
  { label: "Critical", value: "critical", level: 1 },
  { label: "High", value: "high", level: 2 },
  { label: "Medium", value: "medium", level: 3 },
  { label: "Low", value: "low", level: 4 },
  { label: "Optionsl", value: "optional", level: 5 },
];

export const statusOptions = [
  { label: "Pending", value: "pending" },
  { label: "In Progress", value: "inProgress" },
  { label: "Done", value: "done" },
];

export const categoryOptions = [
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Database", value: "database" },
  { label: "DevOps", value: "devops" },
  { label: "Testing", value: "testing" },
  { label: "Performance", value: "performance" },
  { label: "Security", value: "security" },
  { label: "UX", value: "ux" },
  { label: "Documentation", value: "documentation" },
  { label: "Code Review", value: "codeReview" },
  { label: "Integration", value: "integration" },
  { label: "Deployment", value: "deployment" },
  { label: "Product", value: "product" },
  { label: "Maintenance", value: "maintenance" },
  { label: "Analytics", value: "analytics" },
  { label: "Marketing", value: "marketing" },
  { label: "Collaboration", value: "collaboration" },
];

export const sortingOptions = [
  { label: "Name", value: "name" },
  { label: "Date", value: "date" },
  { label: "Category", value: "category" },
  { label: "Status", value: "status" },
  { label: "Priority", value: "priority" },
];

export const listCategories = [
  { label: "A", value: "a" },
  { label: "B", value: "b" },
  { label: "C", value: "c" },
];

export const modalFormsMap = {
  createList: CreateListForm,
  createTask: CreateTaskForm,
  editList: EditListForm,
  editTask: EditTaskForm,
  deleteList: DeleteListForm,
  deletaTask: DeleteTaskForm,
};
