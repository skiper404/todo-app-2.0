<script setup>
import BaseButton from "../BaseButton.vue";
import BaseInput from "../BaseInput.vue";
import BaseLabel from "../BaseLabel.vue";

import { useAppsStore, useModalStore } from "@/stores";
import BaseSelect from "../BaseSelect.vue";
import BaseIcon from "../BaseIcon.vue";
const appsStore = useAppsStore();
const modalStore = useModalStore();

const handleSubmit = async () => {
  await appsStore.updateApp(modalStore.modalData);
  modalStore.closeModal();
};

const options = [
  { label: "Desktop", value: "desktop" },
  { label: "Mobile", value: "mobile" },
  { label: "Web", value: "web" },
];
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="absolute top-30 z-20 flex h-1/2 w-100 flex-col rounded-3xl bg-gray-800 p-4"
  >
    <BaseIcon
      name="close"
      classes="size-8 text-gray-500 hover:text-red-400 absolute top-4 right-4"
      @click="modalStore.closeModal"
    />
    <div class="text-indigo-30 mt-2 text-center text-xl text-indigo-500">
      Edit App
    </div>
    <div class="text-center text-sm text-gray-400">Edit tracking app</div>
    <BaseLabel
      for="name"
      classes="pl-4 mt-4 text-indigo-400"
      label="App Name"
    />
    <BaseInput
      id="name"
      classes="outline-0 rounded-full bg-gray-900 py-2 px-4 w-full text-gray-400"
      v-model="modalStore.modalData.appName"
      placeholder="Enter App"
    />
    <BaseLabel
      for="type"
      classes="pl-4 mt-4 text-indigo-400"
      label="App Type"
    />
    <BaseSelect
      id="type"
      :options="options"
      classes="bg-gray-900 rounded-full w-full py-2 px-4 text-gray-400 flex"
      v-model="modalStore.modalData.appType"
      @reset="modalStore.modalData.appType = 'desktop'"
    />
    <BaseIcon
      :name="modalStore.modalData.appType"
      :classes="[
        'absolute opacity-5 left-1/2 -translate-x-1/2 top-30 -translate-y-12 size-80  -z-10',
        {
          'text-orange-500': modalStore.modalData.appType === 'desktop',
          'text-teal-300': modalStore.modalData.appType === 'mobile',
          'text-yellow-400': modalStore.modalData.appType === 'web',
        },
      ]"
    />
    <BaseButton
      type="submit"
      label="Update"
      classes="rounded-full transition duration-300 text-gray-400 bg-gray-900 px-6 py-1 mt-auto hover:bg-green-600 transition duration-300 hover:text-gray-100"
    />
  </form>
</template>
