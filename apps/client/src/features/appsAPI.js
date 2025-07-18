import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchAppsRequest = async () => {
  const { data } = await axios.get(`${API_URL}/api/apps`);
  return { apps: data.data.apps, message: data.message };
};

export const createAppRequest = async (app) => {
  const { data } = await axios.post(`${API_URL}/api/create-app`, { app });
  return { message: data.message };
};

export const removeAppRequest = async ({ _id, appName }) => {
  const { data } = await axios.delete(`${API_URL}/api/remove-app/${_id}`, {
    data: { appName },
  });
  return { message: data.message };
};

export const updateAppRequest = async (app) => {
  const { data } = await axios.post(`${API_URL}/api/update-app/${app._id}`, {
    app,
  });
  return { message: data.message };
};
