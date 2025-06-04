import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuid } from "uuid";
import { useLocalStorage } from "@/composables/useLocalStorage";
import { useValidation } from "@/composables/useValidation";
import { useSoundEffects } from "@/composables/useSoundEffects";

export const useMainStore = defineStore("MainStore", () => {
  const mainList = ref([]);
  const newListName = ref("");
  const newListStatus = ref("a");
  const activeListId = ref(null);

  const { playSound } = useSoundEffects();

  useLocalStorage(mainList, "list");

  const {
    showShortNameErrorMessage,
    showEmptyNameErrorMessage,
    emptyName,
    shortName,
  } = useValidation({
    name: newListName,
  });

  const setActiveId = async (listId) => {
    activeListId.value = listId;
  };

  const createList = () => {
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

    mainList.value = [
      ...mainList.value,
      {
        listId: uuid(),
        listName: newListName.value,
        listStatus: newListStatus.value,
        listTasks: [],
      },
    ];
    resetNewListInfo();
    playSound("addList");
    showEmptyNameErrorMessage.value = false;
    showShortNameErrorMessage.value = false;
  };

  const resetNewListInfo = () => {
    (newListName.value = ""), (newListStatus.value = "a");
  };

  const removeList = (listIdToRemove) => {
    mainList.value = mainList.value.filter(
      ({ listId }) => listId !== listIdToRemove,
    );
    playSound("removeList");
  };

  return {
    mainList,
    activeListId,
    newListName,
    newListStatus,

    setActiveId,
    createList,
    removeList,

    emptyName,
    shortName,
    showShortNameErrorMessage,
    showEmptyNameErrorMessage,
  };
});
