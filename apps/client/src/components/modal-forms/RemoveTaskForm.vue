<script setup>
import BaseTitle from "../BaseTitle.vue";
import BaseButton from "../BaseButton.vue";
import BaseIcon from "../BaseIcon.vue";
import BaseQuestion from "../BaseQuestion.vue";
import BaseModalActions from "../BaseModalActions.vue";
import { useModalStore, useSoundStore, useTasksStore } from "@/stores";

const taskStore = useTasksStore();
const modalStore = useModalStore();
const soundStore = useSoundStore();

const onSubmit = async () => {
  await taskStore.removeTask();
  modalStore.closeModal();
  soundStore.playSound("remove");
};

const onClose = () => {
  modalStore.closeModal();
};

const formClasses =
  "dark:bg-gray-800 bg-gray-200 absolute top-30 z-20 flex w-100 flex-col rounded-3xl p-4";
const iconClasses = "size-8 absolute top-4 right-4";
const buttonClasses = "px-6 py-1 mt-6";
</script>

<template>
  <form @submit.prevent="onSubmit" :class="formClasses">
    <BaseIcon name="close" :class="iconClasses" @click="onClose" />
    <BaseTitle i18nKey="task.remove" />
    <BaseQuestion
      :name="taskStore.activeTask.taskName"
      i18nKey="ui.confirmRemove"
    />
    <BaseModalActions>
      <BaseButton :classes="buttonClasses" i18nKey="ui.no" @click="onClose" />
      <BaseButton type="submit" :classes="buttonClasses" i18nKey="ui.yes" />
    </BaseModalActions>
  </form>
</template>
