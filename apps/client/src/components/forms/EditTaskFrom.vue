<script setup>
import BaseButton from "../BaseButton.vue";
import BaseInput from "../BaseInput.vue";
import BaseLabel from "../BaseLabel.vue";

import { useTasksStore, useModalStore } from "@/stores";
import BaseSelect from "../BaseSelect.vue";
import BaseIcon from "../BaseIcon.vue";
import { capitalizer } from "@/shared/utils/capitalizer";

const modalStore = useModalStore();
const tasksStore = useTasksStore();

const handleSubmit = async () => {
  await tasksStore.updateTask(modalStore.modalData);
  modalStore.closeModal();
};

const categoryOptions = [
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Testing", value: "testing" },
];

const priorityOptions = [
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
];

const statusOptions = [
  { label: "Pending", value: "pending" },
  { label: "In Progress", value: "inProgress" },
  { label: "Done", value: "done" },
];
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-modal-primary absolute top-30 z-20 flex h-130 w-100 flex-col rounded-3xl p-4"
  >
    <BaseIcon
      name="close"
      classes="size-8 text-gray-500 transition duration-300 hover:text-red-400 absolute top-4 right-4"
      @click="modalStore.closeModal"
    />
    <div class="text-indigo-30 mt-2 text-center text-xl text-indigo-500">
      {{ capitalizer($t("task.edit")) }}
    </div>
    <div class="text-center text-sm text-gray-400">
      {{ capitalizer($t("task.editTitle")) }}
    </div>
    <BaseLabel
      for="name"
      classes="pl-4 mt-4 text-indigo-400"
      :label="capitalizer($t('task.name'))"
    />
    <BaseInput
      id="name"
      classes="outline-0 rounded-full bg-modal-secondary py-2 px-4 w-full text-primary-text"
      v-model="modalStore.modalData.taskName"
      :placeholder="`${capitalizer($t('app.placeholder'))}...`"
    />
    <BaseLabel
      for="category"
      classes="pl-4 mt-4 text-indigo-400"
      :label="capitalizer($t('task.category'))"
    />
    <BaseSelect
      id="category"
      :options="categoryOptions"
      classes="bg-modal-secondary flex rounded-full w-full py-2 px-4 text-primary-text"
      v-model="modalStore.modalData.taskCategory"
      @reset="modalStore.modalData.taskCategory = 'frontend'"
    />
    <BaseLabel
      for="priority"
      classes="pl-4 mt-4 text-indigo-400"
      :label="capitalizer($t('task.priority'))"
    />
    <BaseSelect
      id="priority"
      :options="priorityOptions"
      classes="bg-modal-secondary rounded-full w-full py-2 px-4 text-primary-text flex"
      v-model="modalStore.modalData.taskPriority"
      @reset="modalStore.modalData.taskPriority = 'medium'"
    />
    <BaseLabel
      for="status"
      classes="pl-4 mt-4 text-indigo-400"
      :label="capitalizer($t('task.status'))"
    />
    <BaseSelect
      id="status"
      :options="statusOptions"
      classes="bg-modal-secondary rounded-full w-full py-2 px-4 text-primary-text flex"
      v-model="modalStore.modalData.taskStatus"
      @reset="modalStore.modalData.taskStatus = 'pending'"
    />

    <BaseButton
      type="submit"
      :label="capitalizer($t('task.update'))"
      classes="transition duration-300 rounded-full dark:text-primary-text text-secondary-text bg-btn-primary px-6 py-1 mt-auto hover:bg-btn-primary/70 transition duration-300 hover:text-gray-100"
    />
  </form>
</template>
