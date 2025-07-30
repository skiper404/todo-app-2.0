import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("ModalStore", () => {
  const modalType = ref(null);
  const isShowModal = ref(false);

  const openModal = (type) => {
    isShowModal.value = true;
    modalType.value = type;
  };

  const closeModal = () => {
    isShowModal.value = false;
    modalType.value = null;
  };

  return { isShowModal, modalType, openModal, closeModal };
});
