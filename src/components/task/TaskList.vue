<script setup>
import { useRoute } from "vue-router";
import { useMainStore } from "@/stores/MainStore";
import { useTaskStore } from "@/stores/TaskStore";
import { useDragStore } from "@/stores/DragStore";
import { messages } from "@/messages";
import { computed, watchEffect } from "vue";

import TaskItem from "./TaskItem.vue";
import BaseMessage from "../BaseMessage.vue";
import draggable from "vuedraggable";
import BaseButton from "../BaseButton.vue";

const route = useRoute();
const mainStore = useMainStore();
const taskStore = useTaskStore();
const dragStore = useDragStore();

const activeAppId = computed(() => route.params.appId);

watchEffect(async () => {
  await mainStore.setActiveAppId(activeAppId.value);
});

const { noResults, emptyTaskList } = messages;
</script>

<template>
  <div
    :class="[
      'flex flex-col rounded-xl p-1 transition duration-500',
      {
        'bg-blue-400/50': dragStore.isDraggableTask,
      },
    ]"
  >
    <transition
      name="fade"
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-300"
      move-class="transition duration-300"
    >
      <draggable
        v-model="taskStore.tasksInActiveApp"
        item-key="taskId"
        :handle="'.dragTask'"
        @start="dragStore.onDragTaskStart"
        @end="dragStore.onDragTaskEnd"
      >
        <template #item="{ element }">
          <TaskItem
            v-if="taskStore.finalTasks.includes(element)"
            :task="element"
            :key="element.taskId"
          />
        </template>
      </draggable>
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
        v-if="
          taskStore.finalTasks.length === 0 &&
          taskStore.tasksInActiveApp.length !== 0
        "
        message="noResults"
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
        v-if="taskStore.tasksInActiveApp.length === 0"
        message="noTasks"
      />
    </transition>
  </div>
</template>
