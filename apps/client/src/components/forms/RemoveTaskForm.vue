<script setup>
import BaseTitle from "../BaseTitle.vue";
import BaseButton from "../BaseButton.vue";
import BaseIcon from "../BaseIcon.vue";

import { useModalStore, useSoundStore, useTasksStore } from "@/stores";
import { capitalizer } from "@/shared/utils/capitalizer";
const taskStore = useTasksStore();
const modalStore = useModalStore();
const soundStore = useSoundStore();

const submit = async () => {
  await taskStore.removeTask(taskStore.activeTask);
  modalStore.closeModal();
  soundStore.playSound("remove");
};
</script>

<template>
  <form
    @submit.prevent="submit"
    class="bg-primary-bg absolute top-30 z-20 flex h-1/6 w-100 flex-col rounded-3xl p-4"
  >
    <BaseIcon
      name="close"
      classes="size-8 text-gray-500 transition duration-300 hover:text-red-400 absolute top-4 right-4"
      @click="modalStore.closeModal"
    />
    <BaseTitle i18nKey="app.remove" />
    <div class="mt-2 text-center text-sm text-gray-400">
      {{ capitalizer($t("ui.confirmRemove")) }}
      <span class="text-indigo-400"> {{ taskStore.activeTask.taskName }} </span>
      ?
    </div>
    <div class="mt-auto flex items-center justify-center gap-6">
      <BaseButton
        classes="px-6 py-1 mt-auto"
        i18nKey="no"
        @click="modalStore.closeModal"
      />
      <BaseButton type="submit" classes="px-6 py-1 mt-auto" i18nKey="ui.yes" />
    </div>
  </form>
</template>
