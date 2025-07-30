<script setup>
import { useFilterStore, useModalStore, useTasksStore } from "@/stores";
import BaseIcon from "../BaseIcon.vue";
import TaskName from "./TaskName.vue";
import TaskCategory from "./TaskCategory.vue";
import TaskStatus from "./TaskStatus.vue";
import TaskPriority from "./TaskPriority.vue";
import CreatedAt from "./CreatedAt.vue";
import UpdatedAt from "./UpdatedAt.vue";

const modalStore = useModalStore();
const filterStore = useFilterStore();
const tasksStore = useTasksStore();

const handleOnTaskClick = (task) => {
  tasksStore.setActiveTask(task);
};

const handleEdit = (task) => {
  tasksStore.setActiveTask(task);
  modalStore.openModal("editTask");
};

const handleRemove = (task) => {
  tasksStore.setActiveTask(task);
  modalStore.openModal("removeTask");
};
</script>

<template>
  <li
    v-for="task in filterStore.filteredAndSearchedTasks"
    :key="task._id"
    :class="[
      `flex items-center gap-2 rounded-3xl px-4 py-2 backdrop-blur-2xl transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-800`,
      {
        'bg-red-200 dark:bg-red-600/20': task.taskPriority === 'high',
        'bg-yellow-100 dark:bg-yellow-500/20': task.taskPriority === 'medium',
        'bg-green-200 dark:bg-green-500/20': task.taskPriority === 'low',
      },
    ]"
    @click="handleOnTaskClick(task)"
  >
    <BaseIcon
      name="drag"
      classes="drag cursor-grab text-primary-text hover:text-gray-300 size-6"
    />

    <div class="grid w-full grid-cols-3">
      <TaskName :name="task.taskName" class="col-span-3" />
      <div class="col-span-3 flex flex-col sm:flex-row sm:gap-2">
        <!-- <CreatedAt :createdAt="task.createdAt" />
        <UpdatedAt :updatedAt="task.updatedAt" /> -->
      </div>
      <div class="col-span-3 flex gap-4">
        <TaskCategory :category="task.taskCategory" />
        <TaskStatus :status="task.taskStatus" />
        <TaskPriority :priority="task.taskPriority" />
      </div>
    </div>

    <div class="ml-auto flex gap-2">
      <BaseIcon
        name="edit"
        classes="size-6 hover:text-green-400 text-green-500"
        @click.stop="handleEdit(task)"
      />
      <BaseIcon
        name="remove"
        classes="text-indigo-500 size-6 hover:text-indigo-400"
        @click.stop="handleRemove(task)"
      />
    </div>
  </li>
</template>
