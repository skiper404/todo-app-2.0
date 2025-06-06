<script setup>
import { messages } from "@/messages";
import { useTaskStore } from "@/stores/TaskStore";
import { useModalStore } from "@/stores/ModalStore";
import { priorityOptions, statusOptions, categoryOptions } from "@/constants";

import BaseInput from "../BaseInput.vue";
import BaseButton from "../BaseButton.vue";
import BaseMessage from "../BaseMessage.vue";
import BaseSelect from "../BaseSelect.vue";

const taskStore = useTaskStore();
const { emptyName, shortName } = messages;
</script>

<template>
  <div
    class="relative flex h-1/2 w-1/2 flex-col rounded-xl bg-gray-900 text-red-500"
  >
    <div class="m-2 flex flex-col">
      <BaseButton name="plus" @click="taskStore.createTask"
        >Create task</BaseButton
      >

      <BaseInput
        id="taskName"
        label="Task name"
        placeholder="Task name..."
        v-model="taskStore.newTaskName"
        @submit-enter="taskStore.createTask"
      />

      <BaseSelect
        id="taskCategory"
        label="Task Category:"
        :options="categoryOptions"
        v-model="taskStore.newTaskCategory"
      />

      <BaseSelect
        id="taskPriority"
        label="Task Priority:"
        :options="priorityOptions"
        v-model="taskStore.newTaskPriority"
      />

      <BaseSelect
        id="taskStatus"
        label="Task Status:"
        :options="statusOptions"
        v-model="taskStore.newTaskStatus"
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
    </div>
  </div>
</template>
