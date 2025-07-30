<script setup>
import BaseButton from "../BaseButton.vue";
import BaseInput from "../BaseInput.vue";
import BaseLabel from "../BaseLabel.vue";
import BaseSelect from "../BaseSelect.vue";
import BaseIcon from "../BaseIcon.vue";
import BaseError from "../BaseError.vue";
import BaseTitle from "../BaseTitle.vue";
import BaseDescription from "../BaseDescription.vue";
import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import { useTasksStore, useModalStore, useAppsStore } from "@/stores";
import { onMounted } from "vue";

const modalStore = useModalStore();
const tasksStore = useTasksStore();
const appsStore = useAppsStore();

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

const { value: taskCategory, errorMessage: taskCategoryError } =
  useField("taskCategory");

const { value: taskPriority, errorMessage: taskPriorityError } =
  useField("taskPriority");

const { value: taskStatus, errorMessage: taskStatusError } =
  useField("taskStatus");

const submit = handleSubmit(async (updatedTask) => {
  await tasksStore.updateTask(updatedTask);
  modalStore.closeModal();
});

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
    <BaseDescription i18nKey="task.editTitle" />

    <BaseLabel for="name" classes="px-4 py-2" i18nKey="task.name" />
    <BaseInput
      id="name"
      v-model="taskName"
      :error="taskNameError"
      i18nKey="app.placeholder"
    />
    <BaseError classes="px-4 py-2" :i18nKey="taskNameError" />

    <BaseLabel for="category" classes="px-4 py-2" i18nKey="task.category" />
    <BaseSelect
      id="category"
      :options="categoryOptions"
      v-model="taskCategory"
      :error="taskCategoryError"
    />
    <BaseError classes="px-4 py-2" :i18nKey="taskCategoryError" />

    <BaseLabel for="priority" classes="px-4 py-2" i18nKey="task.priority" />
    <BaseSelect
      id="priority"
      :options="priorityOptions"
      v-model="taskPriority"
      :error="taskPriorityError"
    />
    <BaseError classes="px-4 py-2" :i18nKey="taskPriorityError" />

    <BaseLabel for="status" classes="px-4 py-2" i18nKey="task.status" />
    <BaseSelect
      id="status"
      :options="statusOptions"
      v-model="taskStatus"
      :error="taskStatusError"
    />
    <BaseError classes="px-4 py-2" :i18nKey="taskStatusError" />

    <BaseButton
      type="submit"
      classes="px-6 py-1 mt-auto"
      i18nKey="task.update"
    />
  </form>
</template>
