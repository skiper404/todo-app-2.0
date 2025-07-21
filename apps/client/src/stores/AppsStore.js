import { defineStore } from "pinia";
import { computed, ref } from "vue";
import {
  fetchAppsRequest,
  createAppRequest,
  removeAppRequest,
  updateAppRequest,
} from "@/features/appsAPI";

export const useAppsStore = defineStore("AppsStore", () => {
  const apps = ref([]);
  const activeAppId = ref(null);
  const message = ref("");
  const newAppName = ref("");
  const newAppType = ref("desktop");

  const newApp = computed(() => ({
    appName: newAppName.value,
    appType: newAppType.value,
  }));

  const setActiveAppId = (appId) => {
    activeAppId.value = appId;
  };

  const resetNewAppFields = () => {
    newAppName.value = "";
    newAppType.value = "desktop";
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

  const createApp = async () => {
    try {
      const res = await createAppRequest(newApp.value);
      await getApps();
      resetNewAppFields();
      message.value = res.message;
    } catch (e) {
      message.value = e.message;
    }
  };

  const updateApp = async (data) => {
    try {
      const res = await updateAppRequest(data);
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
    newApp,
    newAppName,
    newAppType,
    message,
    activeAppId,
    getApps,
    createApp,
    removeApp,
    setActiveAppId,
    updateApp,
  };
});
