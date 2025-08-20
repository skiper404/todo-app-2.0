<script setup>
import BaseIcon from "../BaseIcon.vue";
import BaseTitle from "../BaseTitle.vue";
import BaseButton from "../BaseButton.vue";
import BaseDescription from "../BaseDescription.vue";
import BaseFormInput from "../BaseFormInput.vue";
import BaseFormSelect from "../BaseFormSelect.vue";
import * as yup from "yup";
import { useAppsStore, useModalStore, useSoundStore } from "@/stores";
import { useForm, useField } from "vee-validate";
import { apps } from "@/shared/constants/constants";

const appsStore = useAppsStore();
const modalStore = useModalStore();
const soundStore = useSoundStore();

const schema = yup.object({
  appName: yup
    .string()
    .required("Enter app name")
    .max(100, "Max length 100 char"),
  appType: yup.string().required("Select app type"),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    appName: appsStore.activeApp.appName,
    appType: appsStore.activeApp.appType,
  },
});

const {
  value: appName,
  errorMessage: appNameError,
  meta: appNameMeta,
} = useField("appName");

const {
  value: appType,
  errorMessage: appTypeError,
  meta: appTypeMeta,
} = useField("appType");

const onSubmit = handleSubmit(async (updatedApp) => {
  const changes = {};
  if (appNameMeta.dirty) {
    changes.appName = updatedApp.appName;
  }

  if (appTypeMeta.dirty) {
    changes.appType = updatedApp.appType;
  }

  await appsStore.updateApp(appsStore.activeApp._id, changes);
  modalStore.closeModal();
  soundStore.playSound("add");
});

const onClose = () => {
  modalStore.closeModal();
};

const formClasses =
  "dark:bg-gray-800 bg-gray-200 absolute top-30 z-20 flex h-1/2 w-100 flex-col rounded-3xl p-4";
const iconClasses = "size-8 absolute top-4 right-4";
const buttonClasses = "px-6 py-1 mt-auto";
</script>

<template>
  <form @submit.prevent="onSubmit" :class="formClasses">
    <BaseIcon name="close" :classes="iconClasses" @click="onClose" />
    <BaseTitle i18nKey="app.edit" />
    <BaseDescription i18nKey="app.editTitle" />

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

    <BaseButton type="submit" :classes="buttonClasses" i18nKey="ui.create" />
  </form>
</template>
