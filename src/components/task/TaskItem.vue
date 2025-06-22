<script setup>
import BaseButton from "../BaseButton.vue";
import TaskName from "./TaskName.vue";
import TaskDate from "./TaskDate.vue";
import TaskCategory from "./TaskCategory.vue";
import TaskPriority from "./TaskPriority.vue";
import TaskStatus from "./TaskStatus.vue";
import { useModalStore } from "@/stores/ModalStore";
import BaseIcon from "../BaseIcon.vue";
import { useTaskStore } from "@/stores/TaskStore";

const modalStore = useModalStore();
const taskStore = useTaskStore();

const props = defineProps({ task: Object });
</script>

<template>
  <div
    :class="[
      'no-reset-activeId text-secondary-text m-3 flex rounded-xl text-xs capitalize',
      {
        'bg-task-pending-bg': task.taskStatus === 'pending',
        'bg-task-inProgress-bg': task.taskStatus === 'inProgress',
        'bg-task-done-bg': task.taskStatus === 'done',
      },
    ]"
  >
    <div class="flex items-center">
      <BaseIcon name="drag" class="dragTask mx-2" />
    </div>
    <div class="flex flex-col">
      <TaskName :taskName="task.taskName" />
      <div class="grid grid-cols-2 items-center gap-2 py-1 lg:flex">
        <TaskPriority :taskPriority="task.taskPriority" />
        <TaskCategory :taskCategory="task.taskCategory" />
        <TaskStatus :taskStatus="task.taskStatus" />
        <TaskDate :taskDate="task.taskDate" />
      </div>
    </div>
    <div class="no-reset-activeId ml-auto flex items-center gap-1 pr-2">
      <BaseButton
        :name="task.taskStatus"
        :class="{
          'text-pending-icon': task.taskStatus === 'pending',
          'text-inProgress-icon': task.taskStatus === 'inProgress',
          'text-done-icon': task.taskStatus === 'done',
        }"
        @click="taskStore.changeStatus(task)"
      >
      </BaseButton>
      <BaseButton
        name="edit"
        :class="'text-edit-icon'"
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
        class="text-remove-icon"
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
