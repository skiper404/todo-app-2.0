<script setup>
import { priorityOptions, statusOptions, categoryOptions } from "@/constants";
import { useTaskStore } from "@/stores/TaskStore";

const taskStore = useTaskStore();
</script>

<template>
  <div class="relative m-2 border">
    <div>Create Task</div>
    <div>
      <label for="taskName"
        >Task Name:<input
          type="text"
          id="taskName"
          class="border"
          placeholder="Task name..."
          v-model="taskStore.newTaskName"
          @keyup.enter="taskStore.createTask"
      /></label>
    </div>
    <div>
      <label for="taskPriority">
        <span> Task Priority: </span>
        <select
          id="taskPriority"
          v-model="taskStore.newTaskPriority"
          @keyup.enter="taskStore.createTask"
        >
          <option
            v-for="{ label, value } in priorityOptions"
            :key="value"
            :value="value"
          >
            {{ label }}
          </option>
        </select>
      </label>
    </div>
    <div>
      <label for="taskCategory">
        <span> Task Category: </span>
        <select
          id="taskCategory"
          @keyup.enter="taskStore.createTask"
          v-model="taskStore.newTaskCategory"
        >
          <option
            v-for="{ label, value } in categoryOptions"
            :key="value"
            :value="value"
          >
            {{ label }}
          </option>
        </select>
      </label>
    </div>
    <div>
      <label for="taskStatus">
        <span> Task Status: </span>
        <select
          id="taskStatus"
          @keyup.enter="taskStore.createTask"
          v-model="taskStore.newTaskStatus"
        >
          <option
            v-for="{ label, value } in statusOptions"
            :key="value"
            :value="value"
          >
            {{ label }}
          </option>
        </select>
      </label>
    </div>
    <div class="h-6 text-center">
      <transition
        mode="out-in"
        enter-active-class="transition duration-200"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          class="text-xs text-orange-400"
          v-if="
            taskStore.errorType === 'task' && taskStore.showTaskErrorMessage
          "
          :key="taskStore.messageError"
        >
          {{ taskStore.messageError }}
        </div>
      </transition>
    </div>

    <button
      class="m-2 border border-green-400 hover:border-yellow-400"
      @click="taskStore.createTask"
    >
      Create Task
    </button>
  </div>
</template>
