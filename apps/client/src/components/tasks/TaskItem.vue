<script setup>
import { useAppsStore, useModalStore, useTasksStore } from "@/stores";
import BaseIcon from "../BaseIcon.vue";
import TaskName from "./TaskName.vue";
import TaskCategory from "./TaskCategory.vue";
import TaskStatus from "./TaskStatus.vue";
import TaskPriority from "./TaskPriority.vue";
import CreatedAt from "./CreatedAt.vue";
import UpdatedAt from "./UpdatedAt.vue";

const modalStore = useModalStore();
const appsStore = useAppsStore();
const tasksStore = useTasksStore();
</script>

<template>
  <li
    v-for="{
      _id,
      taskName,
      taskCategory,
      taskPriority,
      taskStatus,
      createdAt,
      updatedAt,
      appId,
    } in tasksStore.tasks"
    :key="_id"
    :class="[
      `flex items-center gap-2 rounded-3xl px-4 py-2 transition duration-150 ${_id === appsStore.activeAppId ? 'bg-blue-900' : 'bg-gray-800 hover:bg-gray-700'}`,
    ]"
  >
    <div class="flex flex-col">
      <TaskName :name="taskName" />
      <div class="flex gap-4">
        <TaskCategory :category="taskCategory" />
        <TaskStatus :status="taskStatus" />
        <TaskPriority :priority="taskPriority" />
        <CreatedAt :createdAt="createdAt" />
        <UpdatedAt :updatedAt="createdAt" />
      </div>
    </div>

    <div class="ml-auto flex gap-2">
      <BaseIcon
        name="edit"
        classes="size-6 hover:text-green-400 text-green-500"
        @click="
          modalStore.openModal('editTask', {
            _id,
            taskName,
            taskCategory,
            taskPriority,
            taskStatus,
            createdAt,
            updateddAt,
            appId,
          })
        "
      />
      <BaseIcon
        name="remove"
        classes="text-indigo-500 size-6 hover:text-indigo-400"
        @click="
          modalStore.openModal('removeTask', {
            _id,
            taskName,
          })
        "
      />
    </div>
  </li>
</template>
