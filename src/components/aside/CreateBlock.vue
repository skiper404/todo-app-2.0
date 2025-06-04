<script setup>
import { messages } from "@/messages";
import { useMainStore } from "@/stores/MainStore";
import { listCategories } from "@/constants";
import BaseButton from "../BaseButton.vue";
import BaseInput from "../BaseInput.vue";
import BaseMessage from "../BaseMessage.vue";
import BaseSelect from "../BaseSelect.vue";

const mainStore = useMainStore();
const { emptyName, shortName } = messages;
</script>

<template>
  <div class="flex flex-col whitespace-nowrap">
    <BaseButton name="plus" @click="mainStore.createList">
      Create List
    </BaseButton>
    <BaseInput
      id="listName"
      label="List name:"
      placeholder="List name..."
      v-model="mainStore.newListName"
      @submit-enter="mainStore.createList"
    />
    <BaseSelect
      id="listId"
      label="List Status:"
      :options="listCategories"
      v-model="mainStore.newListStatus"
    />
    <transition
      mode="out-in"
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <BaseMessage
        v-if="mainStore.showEmptyNameErrorMessage"
        :message="emptyName"
      />
      <BaseMessage
        v-else-if="mainStore.showShortNameErrorMessage"
        :message="shortName"
      />
    </transition>
  </div>
</template>
