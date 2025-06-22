<script setup>
import { messages } from "@/messages";
import { useMainStore } from "@/stores/MainStore";
import { appCategories } from "@/constants";

import BaseInput from "../BaseInput.vue";
import BaseButton from "../BaseButton.vue";
import BaseMessage from "../BaseMessage.vue";
import BaseSelect from "../BaseSelect.vue";
import BaseIcon from "../BaseIcon.vue";

import { useModalStore } from "@/stores/ModalStore";

const mainStore = useMainStore();
const modalStore = useModalStore();
const { emptyName, shortName } = messages;
import { useI18n } from "vue-i18n";
import { onKeyStroke } from "@vueuse/core";

const { t } = useI18n();

onKeyStroke("Escape", () => modalStore.closeModal());
onKeyStroke("Enter", () => mainStore.updateApp(modalStore.modalData));
</script>

<template>
  <div
    class="bg-primary-bg relative flex flex-col rounded-xl px-4 whitespace-nowrap"
  >
    <div class="mt-14 flex flex-col gap-2">
      <div
        class="bg-secondary-bg text-secondary-text mx-2 flex items-center rounded-2xl px-2 py-1"
      >
        <BaseIcon name="app" />
        <BaseInput
          id="appId"
          label="labels.appName"
          placeholder="App name..."
          v-model="modalStore.modalData.appName"
          @submit-enter="mainStore.updateApp(modalStore.modalData)"
        />
      </div>
      <div
        class="bg-secondary-bg text-secondary-text mx-2 flex items-center rounded-2xl px-2 py-1"
      >
        <BaseIcon
          :name="modalStore.modalData.appType"
          :class="{
            'text-[var(--color-desktop-icon)]':
              modalStore.modalData.appType === 'desktop',
            'text-[var(--color-mobile-icon)]':
              modalStore.modalData.appType === 'mobile',
            'text-[var(--color-web-icon)]':
              modalStore.modalData.appType === 'web',
          }"
        />
        <BaseSelect
          id="appId"
          label="labels.appType"
          i18n-path="appType"
          :options="appCategories"
          v-model="modalStore.modalData.appType"
        />
      </div>
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
        text="Save"
        @click="mainStore.updateApp(modalStore.modalData)"
        class="bg-create-button text-primary-text hover:bg-create-button-hover mx-auto my-4 w-fit rounded-xl p-2 transition duration-300"
      >
        {{ t("buttons.update") }}
      </BaseButton>
    </div>
  </div>
</template>
