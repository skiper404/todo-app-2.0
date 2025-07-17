import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchTasksRequest = async () => {
  const { data } = await axios.get(`${API_URL}/api/tasks`);
  return { tasks: data.data.tasks, message: data.message };
};

export const createTaskRequest = async (task) => {
  const { data } = await axios.post(`${API_URL}/api/create-task`, { task });
  return { message: data.message };
};

export const removeTaskRequest = async ({ _id, taskName }) => {
  const { data } = await axios.delete(`${API_URL}/api/remove-task/${_id}`, {
    data: { taskName },
  });
  return { message: data.message };
};
