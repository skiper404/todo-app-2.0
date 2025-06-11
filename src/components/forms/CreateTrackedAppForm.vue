<script setup>
import { messages } from "@/messages";
import { useMainStore } from "@/stores/MainStore";
import { appCategories } from "@/constants";

import BaseInput from "../BaseInput.vue";
import BaseButton from "../BaseButton.vue";
import BaseMessage from "../BaseMessage.vue";
import BaseSelect from "../BaseSelect.vue";

const mainStore = useMainStore();
const { emptyName, shortName } = messages;
</script>

<template>
  <div class="relative flex flex-col rounded-xl bg-gray-900 text-gray-400">
    <div class="mt-10 flex flex-col gap-2 whitespace-nowrap">
      <BaseInput
        class="px-10"
        id="appName"
        label="App name:"
        icon="appName"
        placeholder="App name..."
        v-model="mainStore.newAppName"
        @submit-enter="mainStore.createApp"
      />
      <BaseSelect
        id="appId"
        label="App Type:"
        :icon="mainStore.newAppType"
        :options="appCategories"
        v-model="mainStore.newAppType"
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
        name="plus"
        @click="mainStore.createApp"
        class="mx-auto my-4 rounded-xl bg-gray-600 p-2 text-gray-400 transition duration-300 hover:border-green-300 hover:bg-gray-700 hover:text-green-400"
      >
        Create Tracked App
      </BaseButton>
    </div>
  </div>
</template>
