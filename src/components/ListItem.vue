<script setup>
import { useMainStore } from "@/stores/MainStore";
import BaseButton from "./BaseButton.vue";
import { useModalStore } from "@/stores/ModalStore";
import { useMenuStore } from "@/stores/MenuStore";

const mainStore = useMainStore();
const modalStore = useModalStore();
const menuStore = useMenuStore();

const props = defineProps({ list: Object });
const { listId, listName, listStatus } = props.list;
</script>

<template>
  <router-link
    :to="{ name: 'List', params: { listId: listId } }"
    :class="[
      'mb-4 flex items-center justify-between rounded-xl border px-2',
      {
        'bg-gray-800': listId === mainStore.activeListId,
        'border-violet-800': listId === mainStore.activeListId,
      },
    ]"
    @click="menuStore.closeMenu"
  >
    <div class="flex w-full items-center gap-2 p-2">
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
    <div class="flex gap-2">
      <BaseButton
        name="pencil"
        :size="4"
        @click="modalStore.openModal('editList')"
      />
      <BaseButton name="trash" @click="mainStore.removeList(listId)" />
    </div>
  </router-link>
</template>

<style lang="scss" scoped></style>
