<script setup>
import { useRoute } from "vue-router";
import { useAsideStore } from "@/stores/asideLists";
import { computed } from "vue";
import CreateTaskBlock from "./CreateTaskBlock.vue";

const route = useRoute();
const store = useAsideStore();

const currentListId = computed(() => route.params.listId);

const tasks = computed(
  () =>
    store.asideTaskList.find(({ listId }) => listId === currentListId.value)
      .tasks || [],
);
</script>

<template>
  <CreateTaskBlock />
  <ul>
    <li
      v-for="{
        taskId,
        taskName,
        taskCategory,
        taskPriority,
        taskStatus,
      } in tasks"
      :key="taskId"
    >
      <div class="flex items-center gap-2">
        <div>{{ taskName }}</div>
        <div>{{ taskCategory }}</div>
        <div>{{ taskPriority }}</div>
        <div>{{ taskStatus }}</div>
      </div>
    </li>
  </ul>
</template>
