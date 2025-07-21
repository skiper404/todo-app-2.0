<script setup>
import BaseButton from "../BaseButton.vue";
import BaseInput from "../BaseInput.vue";
import BaseLabel from "../BaseLabel.vue";

import { useAppsStore, useModalStore, useSoundStore } from "@/stores";
import BaseSelect from "../BaseSelect.vue";
import BaseIcon from "../BaseIcon.vue";

const appsStore = useAppsStore();
const modalStore = useModalStore();
const soundStore = useSoundStore();

const handleSubmit = async () => {
  await appsStore.createApp();
  modalStore.closeModal();
  soundStore.playSound("add");
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
    class="relative z-20 flex h-1/2 w-100 flex-col rounded-3xl bg-gray-800 p-4"
  >
    <BaseIcon
      name="close"
      classes="size-8 text-gray-500 hover:text-red-400 transition duration-300 absolute top-4 right-4"
      @click="modalStore.closeModal"
    />
    <div class="text-indigo-30 mt-2 text-center text-xl text-indigo-500">
      New App
    </div>
    <div class="text-center text-sm text-gray-400">
      Create new app for tracking
    </div>
    <BaseLabel
      for="name"
      classes="pl-4 mt-4 text-indigo-400"
      label="App Name"
    />
    <BaseInput
      id="name"
      classes="outline-0 rounded-full bg-gray-900 py-2 px-4 w-full text-gray-400"
      v-model="appsStore.newAppName"
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
      classes="relative flex rounded-full bg-gray-900 px-4 py-2 text-gray-400"
      v-model="appsStore.newAppType"
      @reset="appsStore.newAppType = 'desktop'"
    />
    <BaseIcon
      :name="appsStore.newAppType"
      :classes="[
        'absolute opacity-5 left-1/2 -translate-x-1/2 top-30 -translate-y-12 size-80  -z-10',
        {
          'text-orange-500': appsStore.newAppType === 'desktop',
          'text-teal-300': appsStore.newAppType === 'mobile',
          'text-yellow-400': appsStore.newAppType === 'web',
        },
      ]"
    />

    <BaseButton
      type="submit"
      label="Create"
      classes="transition duration-300 rounded-full text-gray-400 bg-gray-900 px-6 py-1 mt-auto hover:bg-green-600 transition duration-300 hover:text-gray-100"
    />
  </form>
</template>
