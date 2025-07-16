<script setup>
import { useI18n } from "vue-i18n";
import BaseButton from "./BaseButton.vue";
import BaseCreate from "./BaseCreate.vue";
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
      class="relative max-h-[calc(100vh-100px)] min-h-[calc(100vh-200px)] overflow-y-auto md:max-h-[calc(100vh-154px)] lg:max-h-[calc(100vh-180px)]"
    >
      <MainHeader />
      <BaseCreate
        label="buttons.createTask"
        formType="createTask"
        v-if="mainStore.activeAppId"
      />
      <BaseButton
        v-if="
          taskStore.finalTasks.length === 0 &&
          taskStore.tasksInActiveApp.length !== 0
        "
        text="Reset filters"
        class="text-primary-text hover:bg-accent-bg mx-auto w-fit rounded-xl bg-gray-500 p-2 transition duration-300"
        @click="taskStore.resetAllFilters"
        >{{ t("buttons.resetFilters") }}</BaseButton
      >
      <routerView></routerView>
    </div>
  </main>
</template>
