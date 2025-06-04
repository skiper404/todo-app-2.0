<script setup>
import { messages } from "@/messages";
import { useMainStore } from "@/stores/MainStore";
import ListItem from "../ListItem.vue";
import BaseMessage from "../BaseMessage.vue";

const mainStore = useMainStore();
const { emptyMainList } = messages;
</script>

<template>
  <nav>
    <ListItem
      v-for="list in mainStore.mainList"
      :key="list.listId"
      :list="list"
    />

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
