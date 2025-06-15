import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useMainStore } from "./MainStore";
import { useTaskStore } from "./TaskStore";
import { modalFormsMap } from "@/constants";

export const useModalStore = defineStore("ModalStore", () => {
  const mainStore = useMainStore();
  const taskStore = useTaskStore();

  const activeForm = ref(null);
  const showModal = ref(false);
  const modalData = ref(null);

  const openModal = (form, data = null) => {
    showModal.value = true;
    activeForm.value = form;
    modalData.value = data ? reactive({ ...data }) : reactive({});
  };

  const closeModal = () => {
    activeForm.value = null;
    showModal.value = false;
    modalData.value = null;
    mainStore.resetNewAppInfo();
    taskStore.resetNewTaskInfo();
    mainStore.resetValidation();
    taskStore.resetValidation();
  };

  return {
    activeForm,
    showModal,
    modalData,
    modalFormsMap,
    openModal,
    closeModal,
  };
});
