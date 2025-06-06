<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import BaseButton from "../BaseButton.vue";
import TaskName from "./TaskName.vue";
import TaskDate from "./TaskDate.vue";
import TaskCategory from "./TaskCategory.vue";
import TaskPriority from "./TaskPriority.vue";
import TaskStatus from "./TaskStatus.vue";
import { useModalStore } from "@/stores/ModalStore";

const taskStore = useTaskStore();
const modalStore = useModalStore();

const props = defineProps({ task: Object });

const { taskId, taskName, taskDate, taskCategory, taskStatus, taskPriority } =
  props.task;
</script>

<template>
  <div
    class="flex w-full gap-2 truncate rounded-xl border p-2 hover:border-green-600"
  >
    <TaskName :taskName />
    <TaskDate :taskDate />
    <TaskCategory :taskCategory />
    <TaskPriority :taskPriority />
    <TaskStatus :taskStatus />
    <BaseButton name="pencil" @click="modalStore.openModal('editTask')" />
    <BaseButton name="trash" @click="taskStore.removeTask(taskId)" />
  </div>
</template>

<style>
.fade-move {
  transition: transform 0.2s ease;
}
</style>
