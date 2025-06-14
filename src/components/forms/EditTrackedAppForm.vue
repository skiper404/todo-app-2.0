<script setup>
import { messages } from "@/messages";
import { useMainStore } from "@/stores/MainStore";
import { appCategories } from "@/constants";

import BaseInput from "../BaseInput.vue";
import BaseButton from "../BaseButton.vue";
import BaseMessage from "../BaseMessage.vue";
import BaseSelect from "../BaseSelect.vue";
import { useModalStore } from "@/stores/ModalStore";

const mainStore = useMainStore();
const modalStore = useModalStore();
const { emptyName, shortName } = messages;
</script>

<template>
  <div
    class="relative flex flex-col rounded-xl bg-gray-200 dark:bg-gray-900 dark:text-gray-400"
  >
    <div class="mt-10 flex flex-col gap-2 whitespace-nowrap">
      <BaseInput
        class="px-10"
        id="appId"
        label="labels.appName"
        icon="appName"
        placeholder="App name..."
        v-model="modalStore.modalData.appName"
        @submit-enter="mainStore.updateApp(modalStore.modalData)"
      />
      <BaseSelect
        id="appId"
        label="labels.appType"
        i18n-path="appType"
        :icon="modalStore.modalData.appType"
        :options="appCategories"
        v-model="modalStore.modalData.appType"
        class="px-10"
      />
      <transition
        mode="out-in"
        enter-active-class="transition duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <BaseMessage
          v-if="mainStore.showEmptyNameErrorMessage"
          :message="emptyName"
        />
        <BaseMessage
          v-else-if="mainStore.showShortNameErrorMessage"
          :message="shortName"
        />
      </transition>
      <BaseButton
        @click="mainStore.updateApp(modalStore.modalData)"
        class="mx-auto my-4 rounded-xl bg-gray-600 p-2 text-gray-400 transition duration-300 hover:border-green-300 hover:bg-gray-700 hover:text-green-400"
      >
        Update Tracked App
      </BaseButton>
    </div>
  </div>
</template>
