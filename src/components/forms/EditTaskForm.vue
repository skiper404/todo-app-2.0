<script setup>
import { messages } from "@/messages";
import { useTaskStore } from "@/stores/TaskStore";
import { useModalStore } from "@/stores/ModalStore";
import { categoryOptions, priorityOptions, statusOptions } from "@/constants";

import BaseInput from "../BaseInput.vue";
import BaseButton from "../BaseButton.vue";
import BaseMessage from "../BaseMessage.vue";
import BaseSelect from "../BaseSelect.vue";

const taskStore = useTaskStore();
const modalStore = useModalStore();
const { emptyName, shortName } = messages;
</script>

<template>
  <div class="relative flex flex-col rounded-xl bg-gray-900 text-gray-500">
    <div class="mt-10 flex flex-col gap-2 px-10">
      <BaseInput
        class="px-2"
        id="taskName"
        label="Task name"
        placeholder="Task name..."
        v-model="modalStore.modalData.taskName"
        @submit-enter="taskStore.updateTask(modalStore.modalData)"
      />

      <BaseSelect
        id="taskCategory"
        label="Task Category:"
        :options="categoryOptions"
        v-model="modalStore.modalData.taskCategory.label"
      />

      <BaseSelect
        id="taskPriority"
        label="Task Priority:"
        :options="priorityOptions"
        v-model="modalStore.modalData.taskPriority"
      />

      <BaseSelect
        id="taskStatus"
        label="Task Status:"
        :options="statusOptions"
        v-model="modalStore.modalData.taskStatus"
      />

      <transition
        enter-active-class="transition duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <BaseMessage
          v-if="taskStore.showEmptyNameErrorMessage"
          :key="'empty'"
          :message="emptyName"
        />
        <BaseMessage
          v-else-if="taskStore.showShortNameErrorMessage"
          :key="'short'"
          :message="shortName"
        />
      </transition>
      <BaseButton
        name="plus"
        @click="taskStore.updateTask(modalStore.modalData)"
        class="mx-auto my-4 rounded-xl bg-gray-600 p-2 text-gray-400 transition duration-300 hover:border-green-300 hover:bg-gray-700 hover:text-green-400"
      >
        Update task</BaseButton
      >
    </div>
  </div>
</template>
