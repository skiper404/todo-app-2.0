<script setup>
import BaseIcon from "../BaseIcon.vue";
import BaseInput from "../BaseInput.vue";
import BaseLabel from "../BaseLabel.vue";
import BaseTitle from "../BaseTitle.vue";
import BaseButton from "../BaseButton.vue";
import BaseSelect from "../BaseSelect.vue";
import BaseError from "../BaseError.vue";
import BaseDescription from "../BaseDescription.vue";

import { useAppsStore, useModalStore } from "@/stores";
import * as yup from "yup";
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

const submit = handleSubmit(async (updatedApp) => {
  await appsStore.updateApp(updatedApp);
  modalStore.closeModal();
});

const options = [
  { label: "Desktop", value: "desktop" },
  { label: "Mobile", value: "mobile" },
  { label: "Web", value: "web" },
];

onMounted(() => {
  setFieldValue("appName", appsStore.activeApp.appName);
  setFieldValue("appType", appsStore.activeApp.appType);
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
    <BaseTitle i18nKey="app.edit" />
    <BaseDescription i18nKey="app.editTitle" />

    <BaseLabel for="name" classes="px-4 py-2" i18nKey="app.name" />
    <BaseInput
      id="name"
      v-model="appName"
      :error="appNameError"
      i18nKey="app.placeholder"
    />
    <BaseError classes="px-4 py-2" :i18nKey="appNameError" />

    <BaseLabel for="type" classes="px-4 py-2" i18nKey="app.type" />
    <BaseSelect
      id="type"
      :options="options"
      v-model="appType"
      :error="appTypeError"
    />
    <BaseError classes="px-4 py-2" :i18nKey="appTypeError" />

    <BaseButton type="submit" classes="px-6 py-1 mt-auto" i18nKey="ui.create" />
  </form>
</template>
