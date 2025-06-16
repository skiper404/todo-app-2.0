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
    class="no-reset-activeId overflow-hidden pt-16 lg:mx-4 lg:ml-88 lg:pt-24"
  >
    <div
      class="relative max-h-[calc(100vh-220px)] min-h-[calc(100vh-120px)] overflow-y-auto bg-gray-100 lg:max-h-[calc(100vh-180px)] lg:min-h-[calc(100vh-180px)] lg:rounded-3xl lg:p-4 lg:px-4 dark:bg-transparent"
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
