<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();
</script>

<template>
  <nav>
    <ul>
      <li v-for="{ listId, listName, listStatus } in mainStore.mainList">
        <div class="flex gap-1 py-1">
          <router-link
            :to="{ name: 'List', params: { listId: listId } }"
            class="w-full"
          >
            <div
              class="flex items-center gap-2 rounded-xl border p-2 hover:border-orange-400"
            >
              <div
                :class="[
                  'h-2 w-2 rounded-full',
                  { 'bg-orange-500': listStatus === 'a' },
                  { 'bg-teal-500': listStatus === 'b' },
                  { 'bg-yellow-500': listStatus === 'c' },
                ]"
              ></div>
              <div>{{ listName }}</div>
            </div>
          </router-link>
          <div>
            <button
              class="rounded-xl border p-2 hover:border-red-300 hover:text-red-300"
              @click="mainStore.removeList(listId)"
            >
              <XMarkIcon class="size-6" />
            </button>
          </div>
        </div>
      </li>
    </ul>
    <transition
      enter-active-class="transition duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mainStore.mainList.length === 0"
        class="py-1 text-center text-red-400"
      >
        You don't have any task.
      </div>
    </transition>
  </nav>
</template>
