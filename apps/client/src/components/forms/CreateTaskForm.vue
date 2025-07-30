<script setup>
import BaseButton from "../BaseButton.vue";
import BaseInput from "../BaseInput.vue";
import BaseLabel from "../BaseLabel.vue";
import BaseSelect from "../BaseSelect.vue";
import BaseIcon from "../BaseIcon.vue";
import BaseError from "../BaseError.vue";
import BaseTitle from "../BaseTitle.vue";
import BaseDescription from "../BaseDescription.vue";

import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import {
  useTasksStore,
  useModalStore,
  useSoundStore,
  useAppsStore,
} from "@/stores";

const modalStore = useModalStore();
const tasksStore = useTasksStore();
const soundStore = useSoundStore();
const appsStore = useAppsStore();

const schema = yup.object({
  taskName: yup
    .string()
    .required("Enter task name")
    .max(30, "Max length 30 characters"),
  taskCategory: yup.string().required("Select task category"),
  taskPriority: yup.string().required("Select task priority"),
  taskStatus: yup.string().required("select task status"),
});

const { handleSubmit, handleReset } = useForm({
  validationSchema: schema,
  initialValues: {
    taskCategory: null,
    taskPriority: null,
    taskStatus: null,
  },
});

const { value: taskName, errorMessage: taskNameError } = useField("taskName");

const { value: taskPriority, errorMessage: taskPriorityError } =
  useField("taskPriority");

const { value: taskCategory, errorMessage: taskCategoryError } =
  useField("taskCategory");

const { value: taskStatus, errorMessage: taskStatusError } =
  useField("taskStatus");

const submit = handleSubmit(async (newTask) => {
  await tasksStore.createTask(newTask);
  await tasksStore.getTasks(appsStore.activeApp);
  modalStore.closeModal();
  soundStore.playSound("add");
  handleReset();
});

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
    @submit.prevent="submit"
    class="bg-modal-primary absolute top-30 z-20 flex w-100 flex-col rounded-3xl p-4"
  >
    <BaseIcon
      name="close"
      classes="size-8 absolute top-4 right-4"
      @click="modalStore.closeModal"
    />

    <BaseTitle i18nKey="task.edit" />
    <BaseDescription i18nKey="task.create" />

    <BaseLabel for="name" classes="px-4 py-2" i18nKey="task.new" />
    <BaseInput
      id="name"
      v-model="taskName"
      i18nKey="task.placeholder"
      :error="taskNameError"
    />
    <BaseError :i18nKey="taskNameError" classes="px-4 py-2" />

    <BaseLabel for="category" classes="px-4 py-2" i18nKey="task.category" />
    <BaseSelect
      id="category"
      :options="categoryOptions"
      v-model="taskCategory"
      :error="taskCategoryError"
    />
    <BaseError :i18nKey="taskCategoryError" classes="px-4 py-2" />

    <BaseLabel for="priority" classes="px-4 py-2" i18nKey="task.priority" />
    <BaseSelect
      id="priority"
      :options="priorityOptions"
      v-model="taskPriority"
      :error="taskPriorityError"
    />
    <BaseError :i18nKey="taskPriorityError" classes="px-4 py-2" />

    <BaseLabel for="status" classes="px-4 py-2" i18nKey="task.category" />
    <BaseSelect
      id="status"
      :options="statusOptions"
      v-model="taskStatus"
      :error="taskStatusError"
    />
    <BaseError :i18nKey="taskStatusError" classes="px-4 py-2" />

    <BaseButton type="submit" i18nKey="ui.create" classes="mt-auto px-6 py-1" />
  </form>
</template>
