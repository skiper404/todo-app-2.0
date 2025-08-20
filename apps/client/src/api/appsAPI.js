import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchAppsRequest = async () => {
  const { data } = await axios.get(`${API_URL}/api/v1/apps`);
  return { message: data.message, apps: data.apps };
};

export const createAppRequest = async (app) => {
  const { data } = await axios.post(`${API_URL}/api/v1/apps`, app);
  return { message: data.message };
};

export const updateAppRequest = async (appId, changes) => {
  const { data } = await axios.patch(
    `${API_URL}/api/v1/apps/${appId}`,
    changes,
  );
  return { message: data.message };
};

export const removeAppRequest = async (appId) => {
  const { data } = await axios.delete(`${API_URL}/api/v1/apps/${appId}`);
  return { message: data.message };
};
