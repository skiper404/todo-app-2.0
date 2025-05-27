<script setup>
import { useAsideStore } from "@/stores/asideLists";
import AsideCreateButton from "./AsideCreateButton.vue";

const store = useAsideStore();
</script>

<template>
  <div class="flex flex-col whitespace-nowrap">
    <AsideCreateButton @click="store.createList" />

    <div class="flex items-center">
      <label for="listName">List Name: </label>
      <input
        id="listName"
        type="text"
        class="mx-2 my-1 w-full outline-0"
        v-model="store.newListName"
        placeholder="List name..."
        @keyup.enter="store.createList"
      />
    </div>
    <div class="flex items-center">
      List Status:
      <select
        id="list"
        class="mx-2 my-1 w-full"
        v-model="store.newListStatus"
        @keyup.enter="store.createList()"
      >
        <option value="a" selected>A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>
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
  </div>
</template>
