import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchTasksRequest = async (appId) => {
  const { data } = await axios.get(`${API_URL}/api/v1/${appId}/tasks`);
  return { tasks: data.tasks, message: data.message };
};

export const fetchAllTasksRequest = async () => {
  const { data } = await axios.get(`${API_URL}/api/v1/tasks`);
  return { tasks: data.data.tasks, message: data.message };
};

export const createTaskRequest = async (task, appId) => {
  const { data } = await axios.post(`${API_URL}/api/v1/${appId}/tasks`, task);
  return { message: data.message };
};

export const removeTaskRequest = async (taskId) => {
  const { data } = await axios.delete(`${API_URL}/api/v1/tasks/${taskId}`);
  return { message: data.message };
};

export const updateTaskRequest = async (taskId, changes) => {
  const { data } = await axios.patch(
    `${API_URL}/api/v1/tasks/${taskId}`,
    changes,
  );
  return { message: data.message };
};
