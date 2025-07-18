import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("ModalStore", () => {
  const modalType = ref(null);
  const modalData = ref(null);
  const isShowModal = ref(false);

  const openModal = (type, payload = null) => {
    isShowModal.value = true;
    modalType.value = type;
    modalData.value = payload;
  };

  const closeModal = () => {
    isShowModal.value = false;
    modalType.value = null;
    modalData.value = null;
  };

  return { isShowModal, openModal, closeModal, modalType, modalData };
});
