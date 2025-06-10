<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import BaseButton from "../BaseButton.vue";
import TaskName from "./TaskName.vue";
import TaskDate from "./TaskDate.vue";
import TaskCategory from "./TaskCategory.vue";
import TaskPriority from "./TaskPriority.vue";
import TaskStatus from "./TaskStatus.vue";
import { useModalStore } from "@/stores/ModalStore";
import BaseIcon from "../BaseIcon.vue";

const taskStore = useTaskStore();
const modalStore = useModalStore();

const props = defineProps({ task: Object });
</script>

<template>
  <div
    class="mb-4 flex rounded-xl border border-blue-700 px-4 py-2 text-xs text-gray-400 capitalize"
  >
    <div class="flex items-center pr-4">
      <BaseIcon name="drag" class="dragTask" />
    </div>
    <div class="flex flex-col">
      <TaskName :taskName="task.taskName" />
      <div class="flex items-center gap-4">
        <TaskPriority :taskPriority="task.taskPriority" />
        <TaskStatus :taskStatus="task.taskStatus" />
        <TaskCategory :taskCategory="task.taskCategory" />
        <TaskDate :taskDate="task.taskDate" />
      </div>
    </div>
    <div class="ml-auto flex items-center justify-center gap-2">
      <BaseButton
        name="pencil"
        @click="
          modalStore.openModal('editTask', {
            taskId: task.taskId,
            taskName: task.taskName,
            taskCategory: task.taskCategory,
            taskPriority: task.taskPriority,
            taskStatus: task.taskStatus,
          })
        "
      />
      <BaseButton
        name="trash"
        @click="
          modalStore.openModal('removeTask', {
            taskId: task.taskId,
            taskName: task.taskName,
          })
        "
      />
    </div>
  </div>
</template>

<style>
.fade-move {
  transition: transform 0.2s ease;
}
</style>
