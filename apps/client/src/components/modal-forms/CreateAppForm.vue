<script setup>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import BaseButton from "../BaseButton.vue";
import BaseIcon from "../BaseIcon.vue";
import BaseTitle from "../BaseTitle.vue";
import BaseFormInput from "../BaseFormInput.vue";
import BaseFormSelect from "../BaseFormSelect.vue";
import BaseDescription from "../BaseDescription.vue";
import { useAppsStore, useModalStore, useSoundStore } from "@/stores";
import { apps } from "@/shared/constants/constants";

const appsStore = useAppsStore();
const modalStore = useModalStore();
const soundStore = useSoundStore();

const schema = yup.object({
  appName: yup
    .string()
    .required("Enter app name")
    .max(100, "Max length 100 characters"),
  appType: yup.string().required("Select app type"),
});

const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    appType: null,
  },
});

const { value: appName, errorMessage: appNameError } = useField("appName");
const { value: appType, errorMessage: appTypeError } = useField("appType");

const onSubmit = handleSubmit(async (newApp) => {
  await appsStore.createApp(newApp);
  modalStore.closeModal();
  soundStore.playSound("add");
  resetForm();
});

const onClose = () => {
  modalStore.closeModal();
};

const formClasses =
  "dark:bg-gray-800 absolute top-30 z-20 flex h-1/2 w-100 flex-col rounded-3xl p-4 bg-gray-200";
const iconClasses = "size-8 absolute top-4 right-4";
const buttonClasses = "px-6 py-1 mt-auto";
</script>

<template>
  <form @submit.prevent="onSubmit" :class="formClasses">
    <BaseIcon name="close" :classes="iconClasses" @click="onClose" />
    <BaseTitle i18nKey="app.new" />
    <BaseDescription i18nKey="app.create" />
    <BaseFormInput
      id="name"
      type="text"
      v-model="appName"
      i18nKeyLabel="app.name"
      i18nKeyInput="app.placeholder"
      :error="appNameError"
    />
    <BaseFormSelect
      id="type"
      v-model="appType"
      :error="appTypeError"
      :options="apps"
      i18nKeyLabel="app.type"
    />
    <BaseButton type="submit" i18nKey="ui.create" :classes="buttonClasses" />
  </form>
</template>
