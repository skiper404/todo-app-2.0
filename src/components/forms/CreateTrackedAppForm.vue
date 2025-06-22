<script setup>
import { useMainStore } from "@/stores/MainStore";
import { appCategories } from "@/constants";

import BaseInput from "../BaseInput.vue";
import BaseIcon from "../BaseIcon.vue";
import BaseButton from "../BaseButton.vue";
import BaseMessage from "../BaseMessage.vue";
import BaseSelect from "../BaseSelect.vue";

const mainStore = useMainStore();
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import { onKeyStroke } from "@vueuse/core";

onKeyStroke("Escape", () => modalStore.closeModal());
onKeyStroke("Enter", () => mainStore.createApp());
</script>

<template>
  <div class="bg-primary-bg relative flex flex-col rounded-xl px-4">
    <div class="mt-14 flex flex-col gap-2">
      <div
        class="bg-secondary-bg text-secondary-text mx-2 flex items-center rounded-2xl px-2 py-1"
      >
        <BaseIcon name="app" />
        <BaseInput
          id="appName"
          label="labels.taskName"
          placeholder="App name..."
          v-model="mainStore.newAppName"
          @submit-enter="mainStore.createApp"
        />
      </div>
      <div
        class="bg-secondary-bg text-secondary-text mx-2 flex items-center rounded-2xl px-2 py-1"
      >
        <BaseIcon
          :name="mainStore.newAppType"
          :class="{
            'text-desktop-icon': mainStore.newAppType === 'desktop',
            'text-mobile-icon': mainStore.newAppType === 'mobile',
            'text-web-icon': mainStore.newAppType === 'web',
          }"
        />
        <BaseSelect
          id="appId"
          label="labels.appType"
          :icon="mainStore.newAppType"
          :options="appCategories"
          i18n-path="appType"
          v-model="mainStore.newAppType"
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
          message="errors.emptyName"
        />
        <BaseMessage
          v-else-if="mainStore.showShortNameErrorMessage"
          message="errors.shortName"
        />
      </transition>
      <BaseButton
        @click="mainStore.createApp"
        text="Create app"
        class="bg-create-button text-primary-text hover:bg-create-button-hover mx-auto my-4 w-fit rounded-xl p-2 transition duration-300"
      >
        {{ t("buttons.createApp") }}
      </BaseButton>
    </div>
  </div>
</template>
