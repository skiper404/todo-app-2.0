<script setup>
import { useFilterStore, useModalStore, useTasksStore } from "@/stores";
import TaskName from "./TaskName.vue";
import TaskCategory from "./TaskCategory.vue";
import TaskStatus from "./TaskStatus.vue";
import TaskPriority from "./TaskPriority.vue";
import ItemActions from "../ItemActions.vue";
import TaskTime from "./TaskTime.vue";

const modalStore = useModalStore();
const filterStore = useFilterStore();
const tasksStore = useTasksStore();

const OnTaskClick = (task) => {
  tasksStore.setActiveTask(task);
};

const onEdit = (task) => {
  tasksStore.setActiveTask(task);
  modalStore.openModal("editTask");
};

const onRemove = (task) => {
  tasksStore.setActiveTask(task);
  modalStore.openModal("removeTask");
};

const getTaskClasses = (task) => [
  `flex items-center rounded-3xl px-4 py-2 transition duration-300 bg-gray-300 dark:text-gray-100 dark:bg-gray-800`,
];

const getEditClasses = (task) => [
  "size-6 hover:text-green-400 text-indigo-500",
];
const getRemoveClasses = (task) => [
  "text-indigo-500 size-6 hover:text-red-400",
];
</script>

<template>
  <li
    v-for="task in filterStore.filteredAndSearchedTasks"
    :key="task._id"
    :class="getTaskClasses(task)"
    @click="OnTaskClick(task)"
  >
    <section class="flex min-w-0 flex-1 flex-col gap-1">
      <TaskName :name="task.taskName" class="col-span-3" />
      <section class="flex gap-2">
        <TaskTime :time="task.createdAt" label="created" />
        <TaskTime :time="task.updatedAt" label="updated" />
      </section>
      <section class="flex gap-4">
        <TaskCategory :category="task.taskCategory" />
        <TaskStatus :status="task.taskStatus" />
        <TaskPriority :priority="task.taskPriority" />
      </section>
    </section>
    <ItemActions
      :editClasses="getEditClasses(task)"
      :removeClasses="getRemoveClasses(task)"
      @onEdit="onEdit(task)"
      @onRemove="onRemove(task)"
    />
  </li>
</template>
