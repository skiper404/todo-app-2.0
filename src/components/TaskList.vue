<script setup>
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { computed, watchEffect } from "vue";
import CreateTaskBlock from "./CreateTaskBlock.vue";
import { useRoute } from "vue-router";
import { useMainStore } from "@/stores/MainStore";
import { useTaskStore } from "@/stores/TaskStore";
import { useTaskProcessing } from "./composables/useTaskProcessing";

const route = useRoute();
const mainStore = useMainStore();
const taskStore = useTaskStore();
const taskProcessing = useTaskProcessing();

const activeListId = computed(() => route.params.listId);

watchEffect(async () => {
  await mainStore.setActiveId(activeListId.value);
});

const formatDate = (taskDate) => {
  const date = new Date(taskDate);
  return format(date, "E, d MMMM HH:mm:ss", { locale: enUS });
};
</script>

<template>
  <CreateTaskBlock />
  <TransitionGroup
    tag="ul"
    name="fade"
    enter-active-class="transition duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <li
      v-for="{
        taskId,
        taskName,
        taskDate,
        taskPriority,
        taskCategory,
        taskStatus,
      } in taskStore.finalTasks"
      :key="taskId"
    >
      <div class="flex items-center justify-between gap-2 py-1">
        <div
          class="flex w-full gap-2 rounded-xl border p-2 hover:border-green-600"
        >
          <div>{{ taskName }}</div>
          <div>{{ formatDate(taskDate) }}</div>
          <div>{{ taskProcessing.getPriorityOption(taskPriority).label }}</div>
          <div class="flex items-center gap-2">
            <div
              :class="[
                'h-2 w-2 rounded-full',
                {
                  'bg-red-500': taskPriority === 'critical',
                  'bg-orange-500': taskPriority === 'high',
                  'bg-yellow-500': taskPriority === 'medium',
                  'bg-lime-500': taskPriority === 'low',
                  'bg-white': taskPriority === 'optional',
                },
              ]"
            ></div>
            <div>
              {{ taskProcessing.getPriorityOption(taskPriority).level }}
            </div>
          </div>
          <div class="flex items-center">
            <div>{{ taskCategory }}</div>
          </div>
          <div class="flex items-center gap-2">
            <div
              :class="[
                'h-2 w-2 rounded-full',
                {
                  'bg-green-300': taskStatus === 'pending',
                  'bg-teal-500': taskStatus === 'inProgress',
                  'bg-orange-500': taskStatus === 'done',
                },
              ]"
            ></div>
            <div>{{ taskStatus }}</div>
          </div>
        </div>
        <div class>
          <button
            class="flex rounded-xl border border-blue-500 p-2 text-blue-500 hover:border-red-300 hover:text-red-300"
            @click="taskStore.removeTask(taskId)"
          >
            <XMarkIcon class="size-6" />
          </button>
        </div>
      </div>
    </li>
  </TransitionGroup>
  <transition
    enter-active-class="transition duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-50"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="
        taskStore.finalTasks.length === 0 &&
        taskStore.tasksInActiveList.length !== 0
      "
      class="text-center text-red-300"
    >
      No results
    </div>
  </transition>
  <transition
    enter-active-class="transition duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-50"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="taskStore.tasksInActiveList.length === 0"
      class="py-1 text-center text-red-400"
    >
      You don't have any task.
    </div>
  </transition>
</template>

<style>
.fade-move {
  transition: transform 0.2s ease;
}
</style>
