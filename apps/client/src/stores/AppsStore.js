import { defineStore } from "pinia";
import { ref } from "vue";
import {
  fetchAppsRequest,
  createAppRequest,
  removeAppRequest,
  updateAppRequest,
} from "@/features/appsAPI";

export const useAppsStore = defineStore("AppsStore", () => {
  const apps = ref([]);
  const activeApp = ref(null);
  const message = ref("");

  const setActiveApp = (app) => {
    activeApp.value = app;
  };

  const getApps = async () => {
    try {
      const res = await fetchAppsRequest();
      apps.value = res.apps;
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  const createApp = async (app) => {
    try {
      const res = await createAppRequest(app);
      await getApps();
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  const updateApp = async (app) => {
    try {
      const res = await updateAppRequest({ _id: activeApp.value._id, ...app });
      await getApps();
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  const removeApp = async (app) => {
    try {
      const res = await removeAppRequest(app);
      await getApps();
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  return {
    apps,
    message,
    activeApp,
    getApps,
    createApp,
    removeApp,
    setActiveApp,
    updateApp,
  };
});
