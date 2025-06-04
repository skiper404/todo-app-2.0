<script setup>
import { useMainStore } from "@/stores/MainStore";
import BaseButton from "./BaseButton.vue";

const mainStore = useMainStore();

const props = defineProps({ list: Object });
const { listId, listName, listStatus } = props.list;
</script>

<template>
  <div class="flex gap-1 rounded-xl bg-gray-900 px-2">
    <router-link
      :to="{ name: 'List', params: { listId: listId } }"
      class="w-full"
    >
      <div class="flex items-center gap-2 rounded-xl p-2">
        <div
          :class="[
            'h-2 w-2 rounded-full',
            { 'bg-orange-500': listStatus === 'a' },
            { 'bg-teal-500': listStatus === 'b' },
            { 'bg-yellow-500': listStatus === 'c' },
          ]"
        ></div>
        <div
          :class="{
            'text-violet-500': listId === mainStore.activeListId,
          }"
        >
          {{ listName }}
        </div>
      </div>
    </router-link>
    <BaseButton name="trash" @click="mainStore.removeList(listId)" />
  </div>
</template>

<style lang="scss" scoped></style>
