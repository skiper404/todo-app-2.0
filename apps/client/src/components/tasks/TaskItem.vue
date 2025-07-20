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
      `flex items-center gap-2 rounded-3xl px-4 py-2 transition duration-300 hover:bg-gray-800`,
      {
        'bg-red-800/20': taskPriority === 'high',
        'bg-green-800/20': taskPriority === 'medium',
        'bg-blue-800/20': taskPriority === 'low',
      },
    ]"
  >
    <div class="grid w-full grid-cols-3">
      <TaskName :name="taskName" class="col-span-3" />
      <div class="col-span-3 flex flex-col sm:flex-row sm:gap-2">
        <CreatedAt :createdAt="createdAt" />
        <UpdatedAt :updatedAt="createdAt" />
      </div>
      <div class="col-span-3 flex gap-4 capitalize">
        <TaskCategory :category="taskCategory" />
        <TaskStatus :status="taskStatus" />
        <TaskPriority :priority="taskPriority" />
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
            updatedAt,
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
