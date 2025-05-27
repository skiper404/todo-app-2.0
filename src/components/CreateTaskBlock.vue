<script setup>
import { useFilterStore } from "@/stores/filter";
import { useAsideStore } from "@/stores/asideLists";
import { useRoute } from "vue-router";
import { computed } from "vue";

const store = useAsideStore();
const storeFilter = useFilterStore();

const route = useRoute();
const listId = computed(() => route.params.listId);
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
          v-model="store.newTaskName"
          @keyup.enter="store.createTask(listId)"
      /></label>
    </div>
    <div>
      <label for="taskPriority">
        <span> Task Priority: </span>
        <select
          id="taskPriority"
          v-model="store.newTaskPriority"
          @keyup.enter="store.createTask(listId)"
        >
          <option
            :disabled="value === 'all'"
            v-for="{ label, value } in storeFilter.priorityOptions"
            :value="value"
          >
            {{ label }}
          </option>
        </select>
      </label>
    </div>
    <div>
      <label for="taskPriority">
        <span> Task Category: </span>
        <select
          id="taskSelect"
          v-model="store.newTaskCategory"
          @keyup.enter="store.createTask(listId)"
        >
          <option
            v-for="{ label, value } in storeFilter.categoryOptions"
            :key="value"
            :value="value"
            :disabled="value === 'all'"
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
          v-model="store.newTaskStatus"
          @keyup.enter="store.createTask(listId)"
        >
          <option
            v-for="{ label, value } in storeFilter.statusOptions"
            :value="value"
            :disabled="value === 'all'"
          >
            {{ label }}
          </option>
        </select>
      </label>
    </div>
    <div class="flex h-6 items-center justify-center">
      <transition
        mode="out-in"
        enter-active-class="transition duration-500"
        enter-from-class="opacity-0 -translate-y-5"
        enter-to-class=" opacity-100 translate-y-0"
        leave-active-class="transition duration-500"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-5"
      >
        <div
          class="text-center text-sm text-red-300"
          v-if="store.isShowEmptyNameError || store.isShowShortNameError"
          :key="store.errorMessage"
        >
          {{ store.errorMessage }}
        </div>
      </transition>
    </div>

    <button
      class="m-2 border border-green-400 hover:border-yellow-400"
      @click="store.createTask(listId)"
    >
      Create Task
    </button>
  </div>
</template>
