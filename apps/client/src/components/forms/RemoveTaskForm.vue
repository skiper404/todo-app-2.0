<script setup>
import { useTasksStore, useModalStore } from "@/stores";
import BaseButton from "../BaseButton.vue";

const tasksStore = useTasksStore();
const modalStore = useModalStore();

const handlerClick = () => {
  tasksStore.removeTask(modalStore.modalData);
  modalStore.closeModal();
};
</script>

<template>
  <div class="border">
    <div>Remove Task form</div>
    <pre>{{ modalStore.modalData }}</pre>
    <div class="flex gap-10">
      <BaseButton label="cancel" />
      <BaseButton label="confirm" @click="handlerClick" />
    </div>
  </div>
</template>
