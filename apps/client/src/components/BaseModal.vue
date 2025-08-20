<script setup>
import { useModalStore } from "@/stores";
import CreateAppForm from "./modal-forms/CreateAppForm.vue";
import EditAppFrom from "./modal-forms/EditAppFrom.vue";
import RemoveAppForm from "./modal-forms/RemoveAppForm.vue";
import CreateTaskForm from "./modal-forms/CreateTaskForm.vue";
import EditTaskFrom from "./modal-forms/EditTaskFrom.vue";
import RemoveTaskForm from "./modal-forms/RemoveTaskForm.vue";

const modalStore = useModalStore();

const forms = {
  createApp: CreateAppForm,
  editApp: EditAppFrom,
  removeApp: RemoveAppForm,
  createTask: CreateTaskForm,
  editTask: EditTaskFrom,
  removeTask: RemoveTaskForm,
};

const wrapperClasses =
  "absolute inset-0 z-20 flex items-center justify-center backdrop-blur-2xl";
</script>

<template>
  <div :class="wrapperClasses">
    <component :is="forms[modalStore.modalType]" />
  </div>
</template>
