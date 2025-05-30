<script setup>
import AsideCreateButton from "./AsideCreateButton.vue";
import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore();
</script>

<template>
  <div class="flex flex-col whitespace-nowrap">
    <AsideCreateButton @click="mainStore.createList" />

    <div class="flex items-center">
      <label for="listName">List Name: </label>
      <input
        id="listName"
        type="text"
        class="mx-2 my-1 w-full outline-0"
        placeholder="List name..."
        v-model="mainStore.newListName"
        @keyup.enter="mainStore.createList"
      />
    </div>
    <div class="flex items-center">
      List Status:
      <select
        id="list"
        class="mx-2 my-1 w-full"
        @keyup.enter="mainStore.createList"
        v-model="mainStore.newListStatus"
      >
        <option value="a" selected>A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>
    </div>
  </div>
  <div class="h-6 text-center">
    <transition
      mode="out-in"
      enter-active-class="transition duration-200"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        class="text-xs text-orange-400"
        v-if="mainStore.errorType === 'list' && mainStore.showListErrorMessage"
        :key="mainStore.messageError"
      >
        {{ mainStore.messageError }}
      </div>
    </transition>
  </div>
</template>
