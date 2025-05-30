<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { computed, watchEffect } from "vue";
import CreateTaskBlock from "./CreateTaskBlock.vue";
import { useRoute } from "vue-router";
import { useMainStore } from "@/stores/MainStore";
import { useTaskStore } from "@/stores/TaskStore";

const route = useRoute();
const mainStore = useMainStore();
const taskStore = useTaskStore();

const activeListId = computed(() => route.params.listId);

watchEffect(async () => {
  await mainStore.setActiveId(activeListId.value);
});
</script>

<template>
  <CreateTaskBlock />
  <ul>
    <li
      v-for="{
        taskId,
        taskName,
        taskPriority,
        taskCategory,
        taskStatus,
      } in taskStore.tasksInActiveList"
    >
      <div class="flex items-center justify-between gap-2 py-1">
        <div
          class="flex w-full gap-2 rounded-xl border p-2 hover:border-green-600"
        >
          <div>{{ taskName }}</div>
          <div>{{ taskPriority }}</div>
          <div>{{ taskCategory }}</div>
          <div>{{ taskStatus }}</div>
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
  </ul>
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
