<script setup>
import { useRoute } from "vue-router";
import { useMainStore } from "@/stores/MainStore";
import { useTaskStore } from "@/stores/TaskStore";
import { messages } from "@/messages";
import { computed, watchEffect } from "vue";

import TaskItem from "./TaskItem.vue";
import BaseMessage from "../BaseMessage.vue";
import BaseCreateBlock from "../BaseCreateBlock.vue";

const route = useRoute();
const mainStore = useMainStore();
const taskStore = useTaskStore();

const activeListId = computed(() => route.params.listId);

watchEffect(async () => {
  await mainStore.setActiveId(activeListId.value);
});

const { noResults, emptyTaskList } = messages;
</script>

<template>
  <div class="">
    <transition-group
      tag="div"
      name="fade"
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-300"
      move-class="transition duration-300"
    >
      <TaskItem
        v-for="task in taskStore.finalTasks"
        :key="task.taskId"
        :task="task"
      />
    </transition-group>
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
    <transition
      enter-active-class="transition duration-1000"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <BaseMessage
        v-if="taskStore.tasksInActiveList.length === 0"
        :message="emptyTaskList"
      />
    </transition>
  </div>
</template>
