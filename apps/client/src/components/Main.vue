<script setup>
import { useAppsStore } from "@/stores";
import { useTasksStore } from "@/stores";

import { onMounted } from "vue";
import BaseButton from "./BaseButton.vue";

const appsStore = useAppsStore();
const tasksStore = useTasksStore();

onMounted(() => {
  appsStore.getApps();
  tasksStore.getTasks();
});
</script>

<template>
  <main class="pt-16">
    <div class="p-4">Apps</div>
    <div>{{ appsStore.message }}</div>
    <div class="flex gap-2">
      <input type="text" class="border" v-model="appsStore.newAppName" />
      <select v-model="appsStore.newAppType">
        <option value="desktop">Desktop</option>
        <option value="mobile">Mobile</option>
        <option value="web">Web</option>
      </select>
      <button class="border hover:text-green-500" @click="appsStore.createApp">
        Create
      </button>
    </div>
    <ul class="flex flex-col gap-2">
      <li
        v-for="{ _id, appName, appType } in appsStore.apps"
        :key="_id"
        class="flex gap-2 border p-2"
      >
        <div class="text-blue-500">{{ appName }}</div>
        <div class="text-indigo-300">{{ appType }}</div>
        <BaseButton
          classes="hover:text-red-400 ml-auto"
          label="remove"
          @click="appsStore.removeApp({ _id, appName })"
        />
      </li>
    </ul>

    <div class="p-4">Tasks</div>
    <div class="p-2">
      <input type="text" v-model="tasksStore.newTaskName" class="border" />
      <select v-model="tasksStore.newTaskCategory">
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="testing">Testing</option>
      </select>
      <select v-model="tasksStore.newTaskPriority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <select v-model="tasksStore.newTaskStatus">
        <option value="pending">Pending</option>
        <option value="inProgress">InProgress</option>
        <option value="done">Done</option>
      </select>
      <button
        class="border hover:text-green-500"
        @click="tasksStore.createTask"
      >
        Create
      </button>
    </div>
    <div>{{ tasksStore.message }}</div>
    <ul>
      <li
        v-for="{
          _id,
          taskName,
          taskCategory,
          taskPriority,
          taskStatus,
          taskCreatedAt,
        } in tasksStore.tasks"
        class="flex gap-2 border p-2"
      >
        <div class="text-blue-500">{{ taskName }}</div>
        <div class="text-indigo-300">{{ taskCategory }}</div>
        <div class="text-indigo-300">{{ taskPriority }}</div>
        <div class="text-indigo-300">{{ taskStatus }}</div>
        <div class="text-indigo-300">{{ taskCreatedAt }}</div>
        <BaseButton
          classes="hover:text-red-400 ml-auto"
          label="remove"
          @click="tasksStore.removeTask({ _id, taskName })"
        />
      </li>
    </ul>
  </main>
</template>
