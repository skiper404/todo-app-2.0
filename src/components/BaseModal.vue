<script setup>
import { useModalStore } from "@/stores/ModalStore";
import BaseButton from "./BaseButton.vue";
import { modalFormsMap } from "@/constants";
const modalStore = useModalStore();
</script>

<template>
  <transition
    enter-active-class="transition duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      class="no-reset-activeId absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/50"
      @click.self="modalStore.closeModal"
    >
      <transition
        enter-active-class="transition duration-300"
        enter-from-class="opacity-0 scale-0"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-300"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-0"
      >
        <div
          v-if="modalStore.showModal"
          class="relative -top-30 mx-2 flex flex-col rounded-xl dark:bg-gray-900"
        >
          <BaseButton
            class="absolute top-4 right-4 z-10 rounded bg-gray-50 p-1 text-white dark:bg-gray-800 dark:text-gray-950"
            name="close"
            @click="modalStore.closeModal"
          />
          <component
            v-if="modalStore.activeForm"
            :is="modalFormsMap[modalStore.activeForm]"
          ></component>
        </div>
      </transition>
    </div>
  </transition>
</template>
