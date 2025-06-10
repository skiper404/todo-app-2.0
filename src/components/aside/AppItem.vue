<script setup>
import { useMainStore } from "@/stores/MainStore";
import BaseButton from "../BaseButton.vue";
import BaseIcon from "../BaseIcon.vue";
import { useMenuStore } from "@/stores/MenuStore";
import { useModalStore } from "@/stores/ModalStore";

const mainStore = useMainStore();
const modalStore = useModalStore();
const menuStore = useMenuStore();

const props = defineProps({ app: Object });
</script>

<template>
  <router-link
    :to="{ name: 'App', params: { appId: app.appId } }"
    :class="[
      'my-2 flex items-center justify-between rounded-xl border px-2',
      {
        'bg-gray-800': app.appId === mainStore.activeAppId,
        'border-violet-800': app.appId === mainStore.activeAppId,
      },
    ]"
    @click="menuStore.closeMenu"
  >
    <div class="flex w-full items-center gap-2 p-2">
      <BaseIcon name="drag" class="dragList" />

      <BaseIcon
        :name="app.appType"
        :class="[
          { 'text-orange-500': app.appType === 'web' },
          { 'text-teal-500': app.appType === 'mobile' },
          { 'text-yellow-500': app.appType === 'desktop' },
        ]"
      />
      <div
        :class="{
          'text-violet-500': app.appId === mainStore.activeAppId,
        }"
      >
        {{ app.appName }}
      </div>
    </div>
    <div class="flex gap-2">
      <BaseButton
        name="pencil"
        :size="4"
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
.dragList {
  -webkit-touch-callout: none; /* отключает callout */
  -webkit-user-select: none; /* отключает выделение */
  user-select: none;
  touch-action: manipulation; /* ускоряет отклик на touch */
}
</style>
