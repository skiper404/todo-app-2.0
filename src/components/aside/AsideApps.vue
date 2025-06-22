<script setup>
import { useMainStore } from "@/stores/MainStore";
import AppItem from "./AppItem.vue";
import BaseMessage from "../BaseMessage.vue";
import draggable from "vuedraggable";
import { useDragStore } from "@/stores/DragStore";

const mainStore = useMainStore();
const dragStore = useDragStore();
</script>

<template>
  <nav
    :class="[
      'rounded-xl p-1 transition duration-500',
      { 'bg-blue-400/80': dragStore.isDraggableList },
    ]"
  >
    <draggable
      v-model="mainStore.appsList"
      item-key="appId"
      :delay="100"
      :touchStartThreshold="5"
      :handle="'.dragList'"
      @start="dragStore.onDragListStart"
      @end="dragStore.onDragListEnd"
    >
      <template #item="{ element }">
        <AppItem :app="element" />
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
      <BaseMessage v-if="mainStore.appsList.length === 0" message="noApps" />
    </transition>
  </nav>
</template>

<style></style>
