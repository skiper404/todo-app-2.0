<script setup>
import { useFilterStore, useModalStore, useDragStore } from "@/stores";
import BaseIcon from "../BaseIcon.vue";
import TaskName from "./TaskName.vue";
import TaskCategory from "./TaskCategory.vue";
import TaskStatus from "./TaskStatus.vue";
import TaskPriority from "./TaskPriority.vue";
import CreatedAt from "./CreatedAt.vue";
import UpdatedAt from "./UpdatedAt.vue";
import draggable from "vuedraggable";
import { watchEffect, ref } from "vue";

const modalStore = useModalStore();
const filterStore = useFilterStore();
const dragStore = useDragStore();

const localTasks = ref([]);

watchEffect(
  () => (localTasks.value = [...filterStore.filteredAndSearchedTasks]),
);
</script>

<template>
  <draggable
    v-model="localTasks"
    item-key="_id"
    handle=".drag"
    @start="dragStore.onDragStart('task')"
    @end="dragStore.onDragEnd('task')"
    :class="[
      `cursor-resize space-y-2 rounded-3xl p-1 transition duration-300`,
      { 'bg-indigo-300/30': dragStore.isDraggingTask },
    ]"
  >
    <template #item="{ element }">
      <li
        :key="element._id"
        :class="[
          `flex items-center gap-2 rounded-3xl px-4 py-2 backdrop-blur-2xl transition duration-300 hover:bg-gray-800`,
          {
            'bg-[#4d1d27]': element.taskPriority === 'high',
            'bg-[#36301d]': element.taskPriority === 'medium',
            'bg-[#103830]': element.taskPriority === 'low',
          },
        ]"
      >
        <BaseIcon
          name="drag"
          classes="drag cursor-grab text-gray-300 hover:text-gray-300 size-6"
        />

        <div class="grid w-full grid-cols-3">
          <TaskName :name="element.taskName" class="col-span-3" />
          <div class="col-span-3 flex flex-col sm:flex-row sm:gap-2">
            <CreatedAt :createdAt="element.createdAt" />
            <UpdatedAt :updatedAt="element.updatedAt" />
          </div>
          <div class="col-span-3 flex gap-4 capitalize">
            <TaskCategory :category="element.taskCategory" />
            <TaskStatus :status="element.taskStatus" />
            <TaskPriority :priority="element.taskPriority" />
          </div>
        </div>

        <div class="ml-auto flex gap-2">
          <BaseIcon
            name="edit"
            classes="size-6 hover:text-green-400 text-green-500"
            @click.stop="modalStore.openModal('editTask', element)"
          />
          <BaseIcon
            name="remove"
            classes="text-indigo-500 size-6 hover:text-indigo-400"
            @click.stop="
              modalStore.openModal('removeTask', {
                _id: element._id,
                taskName: element.taskName,
              })
            "
          />
        </div>
      </li>
    </template>
  </draggable>
</template>
