<script setup>
import BaseButton from "../BaseButton.vue";
import BaseInput from "../BaseInput.vue";
import BaseLabel from "../BaseLabel.vue";

import { useTasksStore, useModalStore, useSoundStore } from "@/stores";
import BaseSelect from "../BaseSelect.vue";
import BaseIcon from "../BaseIcon.vue";
import { capitalizer } from "@/shared/utils/capitalizer";

const modalStore = useModalStore();
const tasksStore = useTasksStore();
const soundStore = useSoundStore();

const handleSubmit = async () => {
  await tasksStore.createTask();
  modalStore.closeModal();
  soundStore.playSound("add");
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
      classes="size-8 text-gray-500 hover:text-red-400 absolute top-4 right-4 transition duration-300"
      @click="modalStore.closeModal"
    />
    <div class="text-indigo-30 mt-2 text-center text-xl text-indigo-500">
      {{ capitalizer($t("task.new")) }}
    </div>
    <div class="text-center text-sm text-gray-400">
      {{ capitalizer($t("task.create")) }}
    </div>
    <BaseLabel
      for="name"
      classes="pl-4 mt-4 text-indigo-400"
      :label="capitalizer($t('task.new'))"
    />
    <BaseInput
      id="name"
      classes="outline-0 rounded-full bg-modal-secondary py-2 px-4 w-full text-primary-text"
      v-model="tasksStore.newTaskName"
      :placeholder="`${capitalizer($t('task.placeholder'))}...`"
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
      v-model="tasksStore.newTaskCategory"
      @reset="tasksStore.newTaskCategory = 'frontend'"
    />
    <BaseLabel
      for="priority"
      classes="pl-4 mt-4 text-indigo-400"
      :label="capitalizer($t('task.priority'))"
    />
    <BaseSelect
      id="priority"
      :options="priorityOptions"
      classes="relative flex rounded-full bg-modal-secondary px-4 py-2 text-primary-text"
      v-model="tasksStore.newTaskPriority"
      @reset="tasksStore.newTaskPriority = 'medium'"
    />
    <BaseLabel
      for="status"
      classes="pl-4 mt-4 text-indigo-400"
      :label="capitalizer($t('task.status'))"
    />
    <BaseSelect
      id="status"
      :options="statusOptions"
      classes="bg-modal-secondary flex rounded-full w-full py-2 px-4 text-primary-text"
      v-model="tasksStore.newTaskStatus"
      @reset="tasksStore.newTaskStatus = 'pending'"
    />

    <BaseButton
      type="submit"
      :label="capitalizer($t('ui.create'))"
      classes="transition duration-300 rounded-full dark:text-primary-text text-secondary-text bg-btn-primary px-6 py-1 mt-auto hover:bg-btn-primary/70 transition duration-300 hover:text-gray-100"
    ></BaseButton>
  </form>
</template>
