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
import { onMounted } from "vue";

const schema = yup.object({
  appName: yup
    .string()
    .required("Enter app name")
    .max(30, "Max length 30 char"),
  appType: yup.string().required("Select app type"),
});

const { handleSubmit, setFieldValue } = useForm({ validationSchema: schema });

const { value: appName, errorMessage: appNameError } = useField("appName");
const { value: appType, errorMessage: appTypeError } = useField("appType");

const appsStore = useAppsStore();
const modalStore = useModalStore();
const soundStore = useSoundStore();

const onSubmit = handleSubmit(async (updatedApp) => {
  await appsStore.updateApp(updatedApp);
  modalStore.closeModal();
  soundStore.playSound("add");
});

const onClose = () => {
  modalStore.closeModal();
};

const options = [
  { label: "Desktop", value: "desktop" },
  { label: "Mobile", value: "mobile" },
  { label: "Web", value: "web" },
];

onMounted(() => {
  setFieldValue("appName", appsStore.activeApp.appName);
  setFieldValue("appType", appsStore.activeApp.appType);
});

const formClasses =
  "bg-modal-primary absolute top-30 z-20 flex w-100 flex-col rounded-3xl p-4";
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
      :options="options"
      i18nKeyLabel="app.type"
    />

    <BaseButton type="submit" :classes="buttonClasses" i18nKey="ui.create" />
  </form>
</template>
