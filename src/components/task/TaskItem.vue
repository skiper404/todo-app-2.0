<script setup>
import BaseButton from "../BaseButton.vue";
import TaskName from "./TaskName.vue";
import TaskDate from "./TaskDate.vue";
import TaskCategory from "./TaskCategory.vue";
import TaskPriority from "./TaskPriority.vue";
import TaskStatus from "./TaskStatus.vue";
import { useModalStore } from "@/stores/ModalStore";
import BaseIcon from "../BaseIcon.vue";

const modalStore = useModalStore();

const props = defineProps({ task: Object });
</script>

<template>
  <div
    class="m-3 flex rounded-xl bg-[#dff0f0] text-xs capitalize dark:bg-gray-900"
  >
    <div class="flex items-center">
      <BaseIcon name="drag" class="dragTask mx-2" />
    </div>
    <div class="flex flex-col">
      <TaskName :taskName="task.taskName" />
      <div class="flex items-center gap-2 py-1">
        <TaskPriority :taskPriority="task.taskPriority" />
        <TaskStatus :taskStatus="task.taskStatus" />
        <TaskCategory :taskCategory="task.taskCategory" />
        <TaskDate :taskDate="task.taskDate" />
      </div>
    </div>
    <div class="ml-auto flex gap-1 pr-2">
      <BaseButton
        name="edit"
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
