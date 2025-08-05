<script setup>
import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import BaseButton from "../BaseButton.vue";
import BaseIcon from "../BaseIcon.vue";
import BaseTitle from "../BaseTitle.vue";
import BaseDescription from "../BaseDescription.vue";
import BaseFormInput from "../BaseFormInput.vue";
import BaseFormSelect from "../BaseFormSelect.vue";
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
const { value: taskPriority, errorMessage: taskPriorityError } = useField("taskPriority");
const { value: taskCategory, errorMessage: taskCategoryError } = useField("taskCategory");
const { value: taskStatus, errorMessage: taskStatusError } = useField("taskStatus");

const onSubmit = handleSubmit(async (newTask) => {
  await tasksStore.createTask(newTask);
  await tasksStore.getTasks(appsStore.activeApp);
  modalStore.closeModal();
  soundStore.playSound("add");
  handleReset();
});

const onClose = () => {
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

const formClasses =
  "bg-modal-primary absolute top-30 z-20 flex w-100 flex-col rounded-3xl p-4";
const iconClasses = "size-8 absolute top-4 right-4";
const buttonClasses = "px-6 py-1 mt-auto";
</script>

<template>
  <form @submit.prevent="onSubmit" :class="formClasses">
    <BaseIcon name="close" :classes="iconClasses" @click="onClose" />

    <BaseTitle i18nKey="task.edit" />
    <BaseDescription i18nKey="task.create" />

    <BaseFormInput
      id="name"
      type="text"
      v-model="taskName"
      i18nKeyLabel="task.new"
      i18nKeyInput="app.placeholder"
      :error="taskNameError"
    />

    <BaseFormSelect
      id="category"
      v-model="taskCategory"
      :error="taskCategoryError"
      :options="categoryOptions"
      i18nKeyLabel="task.category"
    />

    <BaseFormSelect
      id="priority"
      v-model="taskPriority"
      :error="taskPriorityError"
      :options="priorityOptions"
      i18nKeyLabel="task.priority"
    />

    <BaseFormSelect
      id="status"
      v-model="taskStatus"
      :error="taskStatusError"
      :options="statusOptions"
      i18nKeyLabel="task.status"
    />

    <BaseButton type="submit" i18nKey="ui.create" :classes="buttonClasses" />
  </form>
</template>
