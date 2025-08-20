export const appName = "Task Manager";

export const apps = [
  { label: "Desktop", value: "desktop" },
  { label: "Mobile", value: "mobile" },
  { label: "Web", value: "web" },
];

export const categoryOptions = [
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Testing", value: "testing" },
  { label: "DevOps", value: "devops" },
  { label: "Design", value: "design" },
  { label: "Research", value: "research" },
  { label: "Documentation", value: "documentation" },
];

export const categoriesColors = {
  frontend: "#8B5CF6", // фиолетовый
  backend: "#F97316", // оранжевый
  testing: "#3B82F6", // синий
  devops: "#10B981", // зелёный
  design: "#EC4899", // розовый
  research: "#FACC15", // желтый
  documentation: "#60A5FA", // голубой
};

export const priorityOptions = [
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
  { label: "Urgent", value: "urgent" },
  { label: "Optional", value: "optional" },
];

export const prioritiesColors = {
  high: "#EF4444", // красный
  medium: "#FBBF24", // жёлто-оранжевый
  low: "#10B981", // зелёный
  urgent: "#DC2626", // ярко-красный
  optional: "#3B82F6", // синий
};

export const statusOptions = [
  { label: "Pending", value: "pending" },
  { label: "In Progress", value: "inProgress" },
  { label: "Review", value: "review" },
  { label: "Blocked", value: "blocked" },
  { label: "Done", value: "done" },
];

export const statusesColors = {
  pending: "#FDE68A", // светлый жёлтый
  inProgress: "#60A5FA", // синий
  review: "#F472B6", // розовый
  blocked: "#F87171", // красноватый
  done: "#34D399", // зелёный
};
