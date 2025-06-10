<script setup>
import { messages } from "@/messages";
import { useTaskStore } from "@/stores/TaskStore";
import { priorityOptions, statusOptions, categoryOptions } from "@/constants";

import BaseInput from "../BaseInput.vue";
import BaseButton from "../BaseButton.vue";
import BaseMessage from "../BaseMessage.vue";
import BaseSelect from "../BaseSelect.vue";

const taskStore = useTaskStore();
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
      <BaseButton
        name="plus"
        @click="taskStore.createTask"
        class="mx-auto my-4 rounded-xl bg-gray-600 p-2 text-gray-400 transition duration-300 hover:border-green-300 hover:bg-gray-700 hover:text-green-400"
      >
        Create task</BaseButton
      >
    </div>
  </div>
</template>
