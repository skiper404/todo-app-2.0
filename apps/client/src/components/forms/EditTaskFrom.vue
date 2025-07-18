<script setup>
import { useModalStore, useTasksStore } from "@/stores";
const modalStore = useModalStore();
const tasksStore = useTasksStore();

const handleClick = () => {
  tasksStore.updateTask(modalStore.modalData);
  modalStore.closeModal();
};
</script>

<template>
  <div class="h-1/2 border">
    <div>Edit App form</div>
    <pre>{{ modalStore.modalData }}</pre>
    <div class="p-2">
      <input
        type="text"
        v-model="modalStore.modalData.taskName"
        class="border"
      />
      <select v-model="modalStore.modalData.taskCategory">
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="testing">Testing</option>
      </select>
      <select v-model="modalStore.modalData.taskPriority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <select v-model="modalStore.modalData.taskStatus">
        <option value="pending">Pending</option>
        <option value="inProgress">InProgress</option>
        <option value="done">Done</option>
      </select>
      <button class="border hover:text-green-500" @click="handleClick">
        Edit
      </button>
    </div>
  </div>
</template>
