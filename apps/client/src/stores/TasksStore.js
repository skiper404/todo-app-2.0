import { defineStore } from "pinia";
import { ref } from "vue";
import {
  fetchTasksRequest,
  createTaskRequest,
  removeTaskRequest,
  updateTaskRequest,
  fetchAllTasksRequest,
} from "@/api/taskaAPi";
import { useAppsStore } from "./AppsStore";

export const useTasksStore = defineStore("TasksStore", () => {
  const tasks = ref([]);
  const allTasks = ref([]);
  const message = ref("");
  const activeTask = ref(null);

  const setActiveTask = (task) => {
    activeTask.value = task;
  };

  const getAllTasks = async () => {
    try {
      const res = await fetchAllTasksRequest();
      allTasks.value = res.tasks;
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
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

  const createTask = async (task) => {
    const appsStore = useAppsStore();
    try {
      const res = await createTaskRequest(task, appsStore.activeApp._id);
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  const removeTask = async () => {
    const appsStore = useAppsStore();
    try {
      const res = await removeTaskRequest(activeTask.value._id);
      await getTasks(appsStore.activeApp._id);
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  const updateTask = async (taskId, changes) => {
    const appsStore = useAppsStore();
    try {
      const res = await updateTaskRequest(taskId, changes);
      await getTasks(appsStore.activeApp._id);
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  return {
    tasks,
    allTasks,
    message,
    activeTask,
    setActiveTask,
    getTasks,
    getAllTasks,
    createTask,
    removeTask,
    updateTask,
  };
});
