<script setup>
import { useI18n } from "vue-i18n";
import BaseButton from "./BaseButton.vue";
import BaseCreateBlock from "./BaseCreateBlock.vue";
import MainHeader from "./MainHeader.vue";
import { useTaskStore } from "@/stores/TaskStore";
import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore();
const taskStore = useTaskStore();
const { t } = useI18n();
</script>

<template>
  <main
    class="no-reset-activeId overflow-hidden pt-16 md:mx-4 md:ml-86 md:pt-24"
  >
    <div
      class="relative max-h-[calc(100vh-220px)] min-h-[calc(100vh-160px)] overflow-y-auto md:min-h-[calc(100vh-160px)] lg:max-h-[calc(100vh-140px)] dark:bg-transparent"
    >
      <MainHeader />
      <BaseCreateBlock
        label="buttons.createTask"
        formType="createTask"
        v-if="mainStore.activeAppId"
      />
      <BaseButton
        v-if="
          taskStore.finalTasks.length === 0 &&
          taskStore.tasksInActiveApp.length !== 0
        "
        class="mx-auto rounded-xl bg-blue-500 p-2 text-gray-50 transition duration-300 hover:bg-blue-400 dark:bg-gray-700 dark:hover:bg-gray-800"
        @click="taskStore.resetAllFilters"
        >{{ t("buttons.resetFilters") }}</BaseButton
      >
      <routerView></routerView>
    </div>
  </main>
</template>
