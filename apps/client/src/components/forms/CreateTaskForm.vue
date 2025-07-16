<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { priorityOptions, statusOptions, categoryOptions } from "@/constants";

import BaseInput from "../BaseInput.vue";
import BaseButton from "../BaseButton.vue";
import BaseMessage from "../BaseMessage.vue";
import BaseSelect from "../BaseSelect.vue";
import BaseIcon from "../BaseIcon.vue";

const taskStore = useTaskStore();
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import { onKeyStroke } from "@vueuse/core";

onKeyStroke("Escape", () => modalStore.closeModal());
onKeyStroke("Enter", () => taskStore.createTask);
</script>

<template>
  <div class="bg-primary-bg relative flex flex-col rounded-xl px-4">
    <div class="mt-14 flex flex-col gap-2">
      <div
        class="bg-secondary-bg text-secondary-text mx-2 flex items-center rounded-2xl px-2 py-1"
      >
        <BaseIcon name="app" />
        <BaseInput
          id="taskName"
          label="labels.taskName"
          placeholder="Task name..."
          v-model="taskStore.newTaskName"
          @submit-enter="taskStore.createTask"
        />
      </div>

      <div
        class="bg-secondary-bg text-secondary-text mx-2 flex items-center rounded-2xl px-2 py-1"
      >
        <BaseIcon
          name="category"
          :class="{
            'text-frontend-icon': taskStore.newTaskCategory === 'frontend',
            'text-backend-icon': taskStore.newTaskCategory === 'backend',
            'text-database-icon': taskStore.newTaskCategory === 'database',
            'text-devops-icon': taskStore.newTaskCategory === 'devops',
            'text-testing-icon': taskStore.newTaskCategory === 'testing',
            'text-security-icon': taskStore.newTaskCategory === 'security',
            'text-ux-icon': taskStore.newTaskCategory === 'ux',
            'text-integration-icon':
              taskStore.newTaskCategory === 'integration',
            'text-product-icon': taskStore.newTaskCategory === 'product',
            'text-analytics-icon': taskStore.newTaskCategory === 'analytics',
            'text-marketing-icon': taskStore.newTaskCategory === 'marketing',
          }"
        />

        <BaseSelect
          id="taskCategory"
          label="labels.category"
          i18n-path="category"
          :options="categoryOptions"
          v-model="taskStore.newTaskCategory"
        />
      </div>

      <div
        class="bg-secondary-bg text-secondary-text mx-2 flex items-center rounded-2xl px-2 py-1"
      >
        <BaseIcon
          name="priority"
          :class="{
            'text-critical-icon': taskStore.newTaskPriority === 'critical',
            'text-high-icon': taskStore.newTaskPriority === 'high',
            'text-medium-icon': taskStore.newTaskPriority === 'medium',
            'text-low-icon': taskStore.newTaskPriority === 'low',
            'text-optional-icon': taskStore.newTaskPriority === 'optional',
          }"
        />
        <BaseSelect
          id="taskPriority"
          label="labels.priority"
          i18n-path="priority"
          :options="priorityOptions"
          v-model="taskStore.newTaskPriority"
        />
      </div>

      <div
        class="bg-secondary-bg text-secondary-text mx-2 flex items-center rounded-2xl px-2 py-1"
      >
        <BaseIcon
          :name="taskStore.newTaskStatus"
          :class="{
            'text-pending-icon': taskStore.newTaskStatus === 'pending',
            'text-inProgress-icon': taskStore.newTaskStatus === 'inProgress',
            'text-done-icon': taskStore.newTaskStatus === 'done',
          }"
        />
        <BaseSelect
          id="taskStatus"
          label="labels.status"
          i18n-path="status"
          :icon="taskStore.newTaskStatus"
          :options="statusOptions"
          v-model="taskStore.newTaskStatus"
        />
      </div>

      <transition
        enter-active-class="transition duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <BaseMessage
          v-if="taskStore.showEmptyNameErrorMessage"
          :key="'empty'"
          message="errors.emptyName"
        />
        <BaseMessage
          v-else-if="taskStore.showShortNameErrorMessage"
          :key="'short'"
          message="errors.shortName"
        />
      </transition>
      <BaseButton
        @click="taskStore.createTask"
        text="Create Task"
        class="bg-create-button text-primary-text hover:bg-create-button-hover mx-auto my-4 w-fit rounded-xl p-2 transition duration-300"
        >{{ t("buttons.createTask") }}
      </BaseButton>
    </div>
  </div>
</template>
