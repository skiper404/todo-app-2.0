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
import {
  categoryOptions,
  priorityOptions,
  statusOptions,
} from "@/shared/constants/constants";

const modalStore = useModalStore();
const tasksStore = useTasksStore();
const soundStore = useSoundStore();

const schema = yup.object({
  taskName: yup
    .string()
    .required("Enter task name")
    .max(100, "Max length 100 characters"),
  taskCategory: yup.string().required("Select category"),
  taskPriority: yup.string().required("Select priority"),
  taskStatus: yup.string().required("Select status"),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    taskName: tasksStore.activeTask.taskName,
    taskCategory: tasksStore.activeTask.taskCategory,
    taskPriority: tasksStore.activeTask.taskPriority,
    taskStatus: tasksStore.activeTask.taskStatus,
  },
});

const {
  value: taskName,
  errorMessage: taskNameError,
  meta: taskNameMeta,
} = useField("taskName");

const {
  value: taskCategory,
  errorMessage: taskCategoryError,
  meta: taskCategoryMeta,
} = useField("taskCategory");

const {
  value: taskPriority,
  errorMessage: taskPriorityError,
  meta: taskPriorityMeta,
} = useField("taskPriority");

const {
  value: taskStatus,
  errorMessage: taskStatusError,
  meta: taskStatusMeta,
} = useField("taskStatus");

const onSubmit = handleSubmit(async (updatedTask) => {
  const changes = {};

  if (taskNameMeta.dirty) {
    changes.taskName = updatedTask.taskName;
  }

  if (taskCategoryMeta.dirty) {
    changes.taskCategory = updatedTask.taskCategory;
  }

  if (taskPriorityMeta.dirty) {
    changes.taskPriority = updatedTask.taskPriority;
  }

  if (taskStatusMeta.dirty) {
    changes.taskStatus = updatedTask.taskStatus;
  }

  await tasksStore.updateTask(tasksStore.activeTask._id, changes);
  modalStore.closeModal();
  soundStore.playSound("add");
});

const onClose = () => {
  modalStore.closeModal();
};

const formClasses =
  "dark:bg-gray-800 bg-gray-200  absolute top-30 z-20 flex w-100 flex-col rounded-3xl p-4";
const iconClasses = "size-8 absolute top-4 right-4";
const buttonClasses = "px-6 py-1 mt-10";
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
