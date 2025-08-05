<script setup>
import { useFilterStore, useModalStore, useTasksStore } from "@/stores";
import TaskName from "./TaskName.vue";
import TaskCategory from "./TaskCategory.vue";
import TaskStatus from "./TaskStatus.vue";
import TaskPriority from "./TaskPriority.vue";
import ItemActions from "../ItemActions.vue";

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
  `flex items-center gap-2 rounded-3xl px-4 py-2 backdrop-blur-2xl transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-800`,
  {
    "bg-red-200 dark:bg-red-600/20": task.taskPriority === "high",
    "bg-yellow-100 dark:bg-yellow-500/20": task.taskPriority === "medium",
    "bg-green-200 dark:bg-green-500/20": task.taskPriority === "low",
  },
];

const getEditClasses = (task) => ["size-6 hover:text-green-400 text-green-500"];
const getRemoveClasses = (task) => [
  "text-indigo-500 size-6 hover:text-indigo-400",
];
</script>

<template>
  <li
    v-for="task in filterStore.filteredAndSearchedTasks"
    :key="task._id"
    :class="getTaskClasses(task)"
    @click="OnTaskClick(task)"
  >
    <div class="grid w-full grid-cols-3">
      <TaskName :name="task.taskName" class="col-span-3" />
      <div class="col-span-3 flex gap-4">
        <TaskCategory :category="task.taskCategory" />
        <TaskStatus :status="task.taskStatus" />
        <TaskPriority :priority="task.taskPriority" />
      </div>
    </div>
    <ItemActions
      :editClasses="getEditClasses(task)"
      :removeClasses="getRemoveClasses(task)"
      @onEdit="onEdit(task)"
      @onRemove="onRemove(task)"
    />
  </li>
</template>
