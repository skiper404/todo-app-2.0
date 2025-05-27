<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useAsideStore } from "@/stores/asideLists";

const store = useAsideStore();
</script>

<template>
  <nav>
    <ul class="class flex flex-col gap-6">
      <li
        class="flex gap-3 rounded-full font-light text-gray-400 transition-shadow duration-150 ease-in-out"
        v-for="{ listId, listName, listStatus, tasks } in store.asideTaskList"
      >
        <div
          class="flex w-full items-center gap-2 rounded-full bg-[var(--color-primary-600)] px-4 py-2 hover:shadow-[0_0_5px_var(--color-primary-500)]"
        >
          <div
            :class="[
              'h-2 w-2 rounded-full',
              { 'bg-teal-500': listStatus === 'a' },
              { 'bg-orange-400': listStatus === 'b' },
              { 'bg-yellow-400': listStatus === 'c' },
            ]"
          ></div>
          <routerLink
            :to="{
              name: 'List',
              params: { listId: listId },
            }"
          >
            <span class="capitalize">
              {{ listName }} - {{ tasks.length }}
            </span>
          </routerLink>
        </div>
        <button
          class="rounded-full bg-[var(--color-primary-600)] px-2 hover:text-red-500 hover:shadow-[0_0_5px_#ff0000]"
          @click="store.removeList(listId)"
        >
          <XMarkIcon class="size-6" />
        </button>
      </li>
    </ul>
    <transition
      enter-active-class="transition duration-500"
      enter-from-class="opacity-0"
      enter-to-class=" opacity-100"
      leave-active-class="transition duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="store.asideTaskList.length === 0"
        class="py-2 text-center text-sm text-red-200"
      >
        You don't have any lists yet
      </div>
    </transition>
  </nav>
</template>
