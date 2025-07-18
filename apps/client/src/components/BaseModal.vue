<script setup>
import { useModalStore } from "@/stores";
import BaseIcon from "./BaseIcon.vue";
import CreateAppForm from "./forms/CreateAppForm.vue";
import EditAppFrom from "./forms/EditAppFrom.vue";
import RemoveAppForm from "./forms/RemoveAppForm.vue";
import CreateTaskForm from "./forms/CreateTaskForm.vue";
import EditTaskFrom from "./forms/EditTaskFrom.vue";
import RemoveTaskForm from "./forms/RemoveTaskForm.vue";

const modalStore = useModalStore();

const forms = {
  createApp: CreateAppForm,
  editApp: EditAppFrom,
  removeApp: RemoveAppForm,
  createTask: CreateTaskForm,
  editTask: EditTaskFrom,
  removeTask: RemoveTaskForm,
};
</script>

<template>
  <div
    class="absolute inset-0 z-20 flex items-center justify-center bg-gray-900"
  >
    <component :is="forms[modalStore.modalType]" />
    <BaseIcon
      name="close"
      classes="size-8 text-red-500 hover:text-red-400 absolute top-4 right-4"
      @click="modalStore.closeModal"
    />
  </div>
</template>
