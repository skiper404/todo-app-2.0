<script setup>
import { useRoute } from "vue-router";
import { useMainStore } from "@/stores/MainStore";
import { useTaskStore } from "@/stores/TaskStore";
import { messages } from "@/messages";
import { computed, watchEffect } from "vue";

import TaskItem from "./TaskItem.vue";
import BaseMessage from "./BaseMessage.vue";
import CreateTaskBlock from "./CreateTaskBlock.vue";

const route = useRoute();
const mainStore = useMainStore();
const taskStore = useTaskStore();

const activeListId = computed(() => route.params.listId);

watchEffect(async () => {
  await mainStore.setActiveId(activeListId.value);
});

const { noResults } = messages;
</script>

<template>
  <CreateTaskBlock />
  <TaskItem
    v-for="task in taskStore.finalTasks"
    :key="task.taskId"
    :task="task"
  />
  <transition
    enter-active-class="transition duration-1000"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <BaseMessage
      v-if="
        taskStore.finalTasks.length === 0 &&
        taskStore.tasksInActiveList.length !== 0
      "
      :message="noResults"
    />
  </transition>
</template>
