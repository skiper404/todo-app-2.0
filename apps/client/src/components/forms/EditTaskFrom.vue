<script setup>
import BaseButton from "../BaseButton.vue";
import BaseInput from "../BaseInput.vue";
import BaseLabel from "../BaseLabel.vue";

import { useTasksStore, useModalStore } from "@/stores";
import BaseSelect from "../BaseSelect.vue";
import BaseIcon from "../BaseIcon.vue";

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
    class="absolute top-30 z-20 flex h-130 w-100 flex-col rounded-3xl bg-gray-800 p-4"
  >
    <BaseIcon
      name="close"
      classes="size-8 text-gray-500 transition duration-300 hover:text-red-400 absolute top-4 right-4"
      @click="modalStore.closeModal"
    />
    <div class="text-indigo-30 mt-2 text-center text-xl text-indigo-500">
      Edit Task
    </div>
    <div class="text-center text-sm text-gray-400">Edit tracking task</div>
    <BaseLabel
      for="name"
      classes="pl-4 mt-4 text-indigo-400"
      label="Task Name"
    />
    <BaseInput
      id="name"
      classes="outline-0 rounded-full bg-gray-900 py-2 px-4 w-full text-gray-400"
      v-model="modalStore.modalData.taskName"
      placeholder="Enter Task"
    />
    <BaseLabel
      for="category"
      classes="pl-4 mt-4 text-indigo-400"
      label="App Category"
    />
    <BaseSelect
      id="category"
      :options="categoryOptions"
      classes="bg-gray-900 flex rounded-full w-full py-2 px-4 text-gray-400"
      v-model="modalStore.modalData.taskCategory"
      @reset="modalStore.modalData.taskCategory = 'frontend'"
    />
    <BaseLabel
      for="priority"
      classes="pl-4 mt-4 text-indigo-400"
      label="Task Priority"
    />
    <BaseSelect
      id="priority"
      :options="priorityOptions"
      classes="bg-gray-900 rounded-full w-full py-2 px-4 text-gray-400 flex"
      v-model="modalStore.modalData.taskPriority"
      @reset="modalStore.modalData.taskPriority = 'medium'"
    />
    <BaseLabel
      for="status"
      classes="pl-4 mt-4 text-indigo-400"
      label="Task Status"
    />
    <BaseSelect
      id="status"
      :options="statusOptions"
      classes="bg-gray-900 rounded-full w-full py-2 px-4 text-gray-400 flex"
      v-model="modalStore.modalData.taskStatus"
      @reset="modalStore.modalData.taskStatus = 'pending'"
    />

    <BaseButton
      type="submit"
      label="Update"
      classes="rounded-full transition duration-300 text-gray-400 bg-gray-900 px-6 py-1 mt-auto hover:bg-green-600 transition duration-300 hover:text-gray-100"
    />
  </form>
</template>
