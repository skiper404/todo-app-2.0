<script setup>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import BaseButton from "../BaseButton.vue";
import BaseInput from "../BaseInput.vue";
import BaseLabel from "../BaseLabel.vue";
import BaseSelect from "../BaseSelect.vue";
import BaseIcon from "../BaseIcon.vue";
import BaseError from "../BaseError.vue";
import BaseTitle from "../BaseTitle.vue";
import BaseDescription from "../BaseDescription.vue";

import { useAppsStore, useModalStore, useSoundStore } from "@/stores";

const appsStore = useAppsStore();
const modalStore = useModalStore();
const soundStore = useSoundStore();

const schema = yup.object({
  appName: yup
    .string()
    .required("Enter app name")
    .max(30, "Max length 30 characters"),
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

const options = [
  { label: "Desktop", value: "desktop" },
  { label: "Mobile", value: "mobile" },
  { label: "Web", value: "web" },
];

const submit = handleSubmit(async (newApp) => {
  await appsStore.createApp(newApp);
  modalStore.closeModal();
  soundStore.playSound("add");
  resetForm();
});
</script>

<template>
  <form
    @submit.prevent="submit"
    class="bg-modal-primary absolute top-30 z-20 flex h-1/2 w-100 flex-col rounded-3xl p-4"
  >
    <BaseIcon
      name="close"
      classes="size-8 absolute top-4 right-4"
      @click="modalStore.closeModal"
    />

    <BaseTitle i18nKey="app.new" />
    <BaseDescription i18nKey="app.create" />

    <BaseLabel for="name" classes="px-4 py-2" i18nKey="app.name" />
    <BaseInput
      id="name"
      type="text"
      v-model="appName"
      i18nKey="app.placeholder"
      :error="appNameError"
    />
    <BaseError :i18nKey="appNameError" classes="px-4 py-2" />

    <BaseLabel for="type" classes="px-4 py-2" i18nKey="app.type" />
    <BaseSelect
      id="type"
      :options="options"
      v-model="appType"
      :error="appTypeError"
    />
    <BaseError :i18nKey="appTypeError" classes="px-4 py-2" />

    <BaseButton type="submit" i18nKey="ui.create" classes="px-6 py-1 mt-auto" />
  </form>
</template>
