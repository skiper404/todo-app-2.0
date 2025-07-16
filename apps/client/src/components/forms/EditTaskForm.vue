<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { useModalStore } from "@/stores/ModalStore";
import { categoryOptions, priorityOptions, statusOptions } from "@/constants";
const { t } = useI18n();

import BaseInput from "../BaseInput.vue";
import BaseButton from "../BaseButton.vue";
import BaseMessage from "../BaseMessage.vue";
import BaseSelect from "../BaseSelect.vue";
import BaseIcon from "../BaseIcon.vue";

const taskStore = useTaskStore();
const modalStore = useModalStore();
import { useI18n } from "vue-i18n";
import { onKeyStroke } from "@vueuse/core";

onKeyStroke("Escape", () => modalStore.closeModal());
onKeyStroke("Enter", () => taskStore.updateTask(modalStore.modalData));
</script>

<template>
  <div class="bg-primary-bg relative flex flex-col rounded-xl px-4">
    <div class="mt-14 flex flex-col gap-2">
      <div
        class="bg-secondary-bg text-secondary-text mx-2 flex items-center rounded-2xl px-2 py-1"
      >
        <BaseIcon name="app" />
        <BaseInput
          class="rounded-2xl px-2 py-1"
          id="taskName"
          label="labels.taskName"
          placeholder="Task name..."
          v-model="modalStore.modalData.taskName"
          @submit-enter="taskStore.updateTask(modalStore.modalData)"
        />
      </div>

      <div
        class="bg-secondary-bg text-secondary-text mx-2 flex items-center rounded-2xl px-2 py-1"
      >
        <BaseIcon
          name="category"
          :class="{
            'text-frontend-icon':
              modalStore.modalData.taskCategory === 'frontend',
            'text-backend-icon':
              modalStore.modalData.taskCategory === 'backend',
            'text-database-icon':
              modalStore.modalData.taskCategory === 'database',
            'text-devops-icon': modalStore.modalData.taskCategory === 'devops',
            'text-testing-icon':
              modalStore.modalData.taskCategory === 'testing',
            'text-security-icon':
              modalStore.modalData.taskCategory === 'security',
            'text-ux-icon': modalStore.modalData.taskCategory === 'ux',
            'text-integration-icon':
              modalStore.modalData.taskCategory === 'integration',
            'text-product-icon':
              modalStore.modalData.taskCategory === 'product',
            'text-analytics-icon':
              modalStore.modalData.taskCategory === 'analytics',
            'text-marketing-icon':
              modalStore.modalData.taskCategory === 'marketing',
          }"
        />
        <BaseSelect
          id="taskCategory"
          label="labels.category"
          i18n-path="category"
          :options="categoryOptions"
          v-model="modalStore.modalData.taskCategory"
        />
      </div>
      <div
        class="bg-secondary-bg text-secondary-text mx-2 flex items-center rounded-2xl px-2 py-1"
      >
        <BaseIcon
          name="priority"
          :class="{
            'text-critical-icon':
              modalStore.modalData.taskPriority === 'critical',
            'text-high-icon': modalStore.modalData.taskPriority === 'high',
            'text-medium-icon': modalStore.modalData.taskPriority === 'medium',
            'text-low-icon': modalStore.modalData.taskPriority === 'low',
            'text-optional-icon':
              modalStore.modalData.taskPriority === 'optional',
          }"
        />
        <BaseSelect
          id="taskPriority"
          label="labels.priority"
          i18n-path="priority"
          :options="priorityOptions"
          v-model="modalStore.modalData.taskPriority"
        />
      </div>
      <div
        class="bg-secondary-bg text-secondary-text mx-2 flex items-center rounded-2xl px-2 py-1"
      >
        <BaseIcon
          :name="modalStore.modalData.taskStatus"
          :class="{
            'text-pending-icon': modalStore.modalData.taskStatus === 'pending',
            'text-inProgress-icon':
              modalStore.modalData.taskStatus === 'inProgress',
            'text-done-icon': modalStore.modalData.taskStatus === 'done',
          }"
        />
        <BaseSelect
          id="taskStatus"
          label="labels.status"
          i18n-path="status"
          :options="statusOptions"
          v-model="modalStore.modalData.taskStatus"
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
        text="Save"
        @click="taskStore.updateTask(modalStore.modalData)"
        class="bg-create-button text-primary-text hover:bg-create-button-hover mx-auto my-4 w-fit rounded-xl p-2 transition duration-300"
      >
        {{ t("buttons.update") }}</BaseButton
      >
    </div>
  </div>
</template>
