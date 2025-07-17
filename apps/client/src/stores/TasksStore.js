import { defineStore } from "pinia";
import { ref, computed } from "vue";
import {
  fetchTasksRequest,
  createTaskRequest,
  removeTaskRequest,
} from "@/features/taskaAPi";

export const useTasksStore = defineStore("TasksStore", () => {
  const tasks = ref([]);
  const message = ref("");

  const newTask = computed(() => ({
    taskName: newTaskName.value,
    taskCategory: newTaskCategory.value,
    taskPriority: newTaskPriority.value,
    taskStatus: newTaskStatus.value,
  }));

  const newTaskName = ref("");
  const newTaskCategory = ref("frontend");
  const newTaskPriority = ref("medium");
  const newTaskStatus = ref("pending");

  const resetNewTaskFields = () => {
    newTaskName.value = "";
    newTaskCategory.value = "frontend";
    newTaskPriority.value = "medium";
    newTaskStatus.value = "pending";
  };

  const getTasks = async () => {
    try {
      const res = await fetchTasksRequest();
      tasks.value = res.tasks;
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  const createTask = async () => {
    try {
      const res = await createTaskRequest(newTask.value);
      await getTasks();
      resetNewTaskFields();
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  const removeTask = async (task) => {
    try {
      const res = await removeTaskRequest(task);
      await getTasks();
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  return {
    tasks,
    newTask,
    newTaskName,
    newTaskCategory,
    newTaskPriority,
    newTaskStatus,
    getTasks,
    createTask,
    removeTask,
    message,
  };
});
