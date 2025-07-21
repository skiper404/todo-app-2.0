import { defineStore } from "pinia";
import { computed, ref } from "vue";
import {
  fetchTasksRequest,
  createTaskRequest,
  removeTaskRequest,
  updateTaskRequest,
} from "@/features/taskaAPi";
import { useAppsStore } from "./AppsStore";

export const useTasksStore = defineStore("TasksStore", () => {
  const appsStore = useAppsStore();
  const tasks = ref([]);
  const message = ref("");
  const newTaskName = ref("");
  const newTaskCategory = ref("frontend");
  const newTaskPriority = ref("medium");
  const newTaskStatus = ref("pending");

  const appId = computed(() => appsStore.activeAppId);

  const getNewTask = () => ({
    taskName: newTaskName.value,
    taskCategory: newTaskCategory.value,
    taskPriority: newTaskPriority.value,
    taskStatus: newTaskStatus.value,
    taskName: newTaskName.value,
    createdAt: Date.now(),
    updatedAt: null,
  });

  const resetNewTaskFields = () => {
    newTaskName.value = "";
    newTaskCategory.value = "frontend";
    newTaskPriority.value = "medium";
    newTaskStatus.value = "pending";
  };

  const getTasks = async (appId) => {
    try {
      const res = await fetchTasksRequest(appId);
      tasks.value = res.tasks;
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  const createTask = async () => {
    try {
      const task = getNewTask();
      const res = await createTaskRequest(task, appId.value);
      await getTasks(appId.value);
      resetNewTaskFields();
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  const removeTask = async (task) => {
    try {
      const res = await removeTaskRequest(task);
      await getTasks(appId.value);
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  const updateTask = async (data) => {
    try {
      const res = await updateTaskRequest(data);
      await getTasks(appId.value);
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  return {
    tasks,
    newTaskName,
    newTaskCategory,
    newTaskPriority,
    newTaskStatus,
    getTasks,
    createTask,
    removeTask,
    updateTask,
    message,
  };
});
