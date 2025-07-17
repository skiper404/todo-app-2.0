import { defineStore } from "pinia";
import { computed, ref } from "vue";
import {
  fetchAppsRequest,
  createAppRequest,
  removeAppRequest,
} from "@/features/appsAPI";

export const useAppsStore = defineStore("AppsStore", () => {
  const apps = ref([]);

  const newAppName = ref("");
  const newAppType = ref("desktop");

  const newApp = computed(() => ({
    appName: newAppName.value,
    appType: newAppType.value,
  }));

  const resetNewAppFields = () => {
    newAppName.value = "";
    newAppType.value = "desktop";
  };

  const message = ref("");

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
    getApps,
    createApp,
    removeApp,
  };
});
