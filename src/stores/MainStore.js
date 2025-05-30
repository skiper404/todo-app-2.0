import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { v4 as uuid } from "uuid";
import { useLocalStorage } from "@/components/composables/useLocalStorage";
import { useValidation } from "@/components/composables/useValidation";
import { useSoundEffects } from "@/components/composables/useSoundEffects";

export const useMainStore = defineStore("MainStore", () => {
  const mainList = ref([]);
  const newListName = ref("");
  const newListStatus = ref("a");
  const activeListId = ref(null);

  const { playSound } = useSoundEffects();

  useLocalStorage(mainList, "list");

  const {
    showListErrorMessage,
    errorType,
    emptyListName,
    shortListName,
    messageError,
  } = useValidation({ listName: newListName });

  const setActiveId = async (listId) => {
    activeListId.value = listId;
  };

  const createList = () => {
    if (!emptyListName.value && !shortListName.value) {
      mainList.value = [
        ...mainList.value,
        {
          listId: uuid(),
          listName: newListName.value,
          listStatus: newListStatus.value,
          listTasks: [],
        },
      ];
      showListErrorMessage.value = false;
      resetNewListInfo();
      playSound("addList");
    } else {
      errorType.value = "list";
      showListErrorMessage.value = true;
    }
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
    emptyListName,
    shortListName,

    messageError,
    errorType,

    showListErrorMessage,
  };
});
