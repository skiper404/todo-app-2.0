<script setup>
import { useMainStore } from "@/stores/MainStore";
import BaseButton from "../BaseButton.vue";
import BaseIcon from "../BaseIcon.vue";
import { useModalStore } from "@/stores/ModalStore";

const mainStore = useMainStore();
const modalStore = useModalStore();

const props = defineProps({ app: Object });
</script>

<template>
  <router-link
    :to="{ name: 'App', params: { appId: app.appId } }"
    :class="[
      'my-2 flex items-center justify-between rounded-xl px-2',
      {
        'bg-[#5184fd] dark:bg-gray-800': app.appId == mainStore.activeAppId,
        'bg-gray-100 dark:bg-gray-900': app.appId !== mainStore.activeAppId,
      },
    ]"
  >
    <div class="flex items-center gap-2 p-2">
      <BaseIcon name="drag" class="dragList" />
      <BaseIcon :name="app.appType" />
      <div
        :class="[
          'h-16 w-36 border',
          {
            'text-gray-100 dark:text-gray-400':
              app.appId === mainStore.activeAppId,
            'text-gray-500 dark:text-gray-500':
              app.appId !== mainStore.activeAppId,
          },
        ]"
      >
        <p class="line-clamp-2">
          {{ app.appName }}
        </p>
      </div>
    </div>
    <div class="flex gap-2">
      <BaseButton
        :class="{
          'text-black dark:text-gray-400': app.appId === mainStore.activeAppId,
        }"
        name="edit"
        @click="
          modalStore.openModal('editTrackedApp', {
            appId: app.appId,
            appName: app.appName,
            appType: app.appType,
          })
        "
      />
      <BaseButton
        name="trash"
        @click="
          modalStore.openModal('removeTrackedApp', {
            appId: app.appId,
            appName: app.appName,
          })
        "
      />
    </div>
  </router-link>
</template>

<style lang="css" scoped>
bg-green-500 text-gray-50 .dragList {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  touch-action: manipulation;
}
</style>
