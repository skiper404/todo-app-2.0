<script setup>
import { useMainStore } from "@/stores/MainStore";
import { appCategories } from "@/constants";

import BaseInput from "../BaseInput.vue";
import BaseButton from "../BaseButton.vue";
import BaseMessage from "../BaseMessage.vue";
import BaseSelect from "../BaseSelect.vue";

const mainStore = useMainStore();
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div
    class="relative flex flex-col rounded-xl bg-gray-200 dark:bg-gray-900 dark:text-gray-400"
  >
    <div class="mt-12 flex flex-col gap-2">
      <BaseInput
        class="mx-10 rounded-2xl bg-gray-300 px-2 py-1 dark:bg-gray-800"
        id="appName"
        label="labels.taskName"
        icon="appName"
        placeholder="App name..."
        v-model="mainStore.newAppName"
        @submit-enter="mainStore.createApp"
      />
      <BaseSelect
        id="appId"
        label="labels.appType"
        :icon="mainStore.newAppType"
        :options="appCategories"
        i18n-path="appType"
        v-model="mainStore.newAppType"
        class="mx-10 rounded-2xl bg-gray-300 py-1 dark:bg-gray-800"
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
          message="errors.emptyName"
        />
        <BaseMessage
          v-else-if="mainStore.showShortNameErrorMessage"
          message="errors.shortName"
        />
      </transition>
      <BaseButton
        @click="mainStore.createApp"
        class="mx-auto my-4 rounded-xl bg-green-500 p-2 text-gray-50 transition duration-300 hover:bg-green-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-green-400"
      >
        {{ t("buttons.createApp") }}
      </BaseButton>
    </div>
  </div>
</template>
