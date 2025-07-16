import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuid } from "uuid";
import { useLocalStorage } from "@/composables/useLocalStorage";
import { useValidation } from "@/composables/useValidation";
import { useSoundStore } from "@/stores/SoundStore";
import { useModalStore } from "./ModalStore";
import { useRouter } from "vue-router";

export const useMainStore = defineStore("MainStore", () => {
  const router = useRouter();
  const appsList = ref([]);

  const newAppName = ref("");
  const newAppType = ref("web");
  const activeAppId = ref(null);

  const modalStore = useModalStore();
  const soundStore = useSoundStore();

  useLocalStorage(appsList, "AppTracker");

  const {
    showShortNameErrorMessage,
    showEmptyNameErrorMessage,
    emptyName,
    shortName,
    resetValidation,
  } = useValidation({
    name: newAppName,
  });

  const resetNewAppInfo = () => {
    newAppName.value = "";
    newAppType.value = "desktop";
  };

  const setActiveAppId = async (appId) => {
    activeAppId.value = appId;
  };

  const createApp = () => {
    if (emptyName.value) {
      showEmptyNameErrorMessage.value = true;
      showShortNameErrorMessage.value = false;
      return;
    }

    if (shortName.value) {
      showEmptyNameErrorMessage.value = false;
      showShortNameErrorMessage.value = true;
      return;
    }

    appsList.value = [
      ...appsList.value,
      {
        appId: uuid(),
        appName: newAppName.value,
        appType: newAppType.value,
        appTasks: [],
      },
    ];
    showEmptyNameErrorMessage.value = false;
    showShortNameErrorMessage.value = false;
    modalStore.closeModal();
    soundStore.playSound("addApp");
    router.push({ name: "App", params: { appId: activeAppId.value } });
  };

  const updateApp = (updatedApp) => {
    const targetApp = appsList.value.find(
      (app) => app.appId === updatedApp.appId,
    );

    if (targetApp) {
      targetApp.appName = updatedApp.appName;
      targetApp.appType = updatedApp.appType;
    }

    modalStore.closeModal();
  };

  const removeApp = (appIdToRemove) => {
    appsList.value = appsList.value.filter(
      ({ appId }) => appId !== appIdToRemove,
    );
    soundStore.playSound("removeApp");
    modalStore.closeModal();
  };

  const resetActiveAppId = () => (activeAppId.value = null);

  return {
    appsList,
    activeAppId,
    newAppName,
    newAppType,

    setActiveAppId,
    createApp,
    updateApp,
    removeApp,
    resetNewAppInfo,
    resetActiveAppId,

    emptyName,
    shortName,
    showShortNameErrorMessage,
    showEmptyNameErrorMessage,
    resetValidation,
  };
});
