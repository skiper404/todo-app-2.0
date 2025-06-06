import { defineStore } from "pinia";
import { ref } from "vue";
import { useMainStore } from "./MainStore";
import { useTaskStore } from "./TaskStore";
import { modalFormsMap } from "@/constants";

export const useModalStore = defineStore("ModalStore", () => {
  const mainStore = useMainStore();
  const taskStore = useTaskStore();

  const activeForm = ref(null);

  const showModal = ref(false);

  const openModal = (form) => {
    showModal.value = true;
    activeForm.value = form;
  };

  const closeModal = () => {
    activeForm.value = null;
    showModal.value = false;
    mainStore.resetNewListInfo();
    taskStore.resetNewTaskInfo();
  };

  return { activeForm, showModal, modalFormsMap, openModal, closeModal };
});
