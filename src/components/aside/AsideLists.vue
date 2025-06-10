<script setup>
import { messages } from "@/messages";
import { useMainStore } from "@/stores/MainStore";
import ListItem from "../ListItem.vue";
import BaseMessage from "../BaseMessage.vue";
import draggable from "vuedraggable";
import { useDragStore } from "@/stores/DragStore";

const mainStore = useMainStore();
const dragStore = useDragStore();
const { emptyMainList } = messages;
</script>

<template>
  <nav
    :class="[
      'rounded-xl border p-1 transition duration-500',
      { 'border-green-300 bg-green-300/10': dragStore.isDraggableList },
    ]"
  >
    <draggable
      v-model="mainStore.mainList"
      item-key="listId"
      :handle="'.dragList'"
      @start="dragStore.onDragListStart"
      @end="dragStore.onDragListEnd"
    >
      <template #item="{ element }">
        <ListItem :list="element" />
      </template>
    </draggable>

    <transition
      enter-active-class="transition duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <BaseMessage
        v-if="mainStore.mainList.length === 0"
        :message="emptyMainList"
      />
    </transition>
  </nav>
</template>
