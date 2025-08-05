<script setup>
import BaseButton from "../BaseButton.vue";
import BaseIcon from "../BaseIcon.vue";
import BaseTitle from "../BaseTitle.vue";
import BaseDescription from "../BaseDescription.vue";
import BaseFormInput from "../BaseFormInput.vue";
import BaseFormSelect from "../BaseFormSelect.vue";
import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import { useTasksStore, useModalStore, useSoundStore } from "@/stores";
import { onMounted } from "vue";

const modalStore = useModalStore();
const tasksStore = useTasksStore();
const soundStore = useSoundStore();

const schema = yup.object({
  taskName: yup
    .string()
    .required("Enter task name")
    .max(30, "Max length 30 characters"),
  taskCategory: yup.string().required("Select category"),
  taskPriority: yup.string().required("Select priority"),
  taskStatus: yup.string().required("Select status"),
});

const { handleSubmit, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    taskName: "",
    taskCategory: null,
    taskPriority: null,
    taskStatus: null,
  },
});

const { value: taskName, errorMessage: taskNameError } = useField("taskName");
const { value: taskCategory, errorMessage: taskCategoryError } = useField("taskCategory");
const { value: taskPriority, errorMessage: taskPriorityError } = useField("taskPriority");
const { value: taskStatus, errorMessage: taskStatusError } = useField("taskStatus");

const onSubmit = handleSubmit(async (updatedTask) => {
  await tasksStore.updateTask(updatedTask);
  modalStore.closeModal();
  soundStore.playSound("add");
});

const onClose = () => {
  modalStore.closeModal();
};

onMounted(() => {
  setFieldValue("taskName", tasksStore.activeTask.taskName);
  setFieldValue("taskCategory", tasksStore.activeTask.taskCategory);
  setFieldValue("taskPriority", tasksStore.activeTask.taskPriority);
  setFieldValue("taskStatus", tasksStore.activeTask.taskStatus);
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

const formClasses =
  "bg-modal-primary absolute top-30 z-20 flex w-100 flex-col rounded-3xl p-4";
const iconClasses = "size-8 absolute top-4 right-4";
const buttonClasses = "px-6 py-1 mt-auto";
</script>

<template>
  <form @submit.prevent="onSubmit" :class="formClasses">
    <BaseIcon name="close" :classes="iconClasses" @click="onClose" />
    <BaseTitle i18nKey="task.edit" />
    <BaseDescription i18nKey="task.editTitle" />

    <BaseFormInput
      id="name"
      type="text"
      v-model="taskName"
      i18nKeyLabel="task.name"
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

    <BaseButton type="submit" :classes="buttonClasses" i18nKey="task.update" />
  </form>
</template>
