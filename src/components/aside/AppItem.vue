<script setup>
import { useMainStore } from "@/stores/MainStore";
import BaseButton from "../BaseButton.vue";
import BaseIcon from "../BaseIcon.vue";
import { useModalStore } from "@/stores/ModalStore";
import { useMenuStore } from "@/stores/MenuStore";
import { useRouter } from "vue-router";

const menuStore = useMenuStore();
const mainStore = useMainStore();
const modalStore = useModalStore();
const props = defineProps({ app: Object });

const router = useRouter();

const selectApp = () => {
  router.push({ name: "App", params: { appId: props.app.appId } });
  mainStore.setActiveAppId(props.app.appId);
  menuStore.closeMenu();
};
</script>

<template>
  <div
    @click="selectApp"
    :class="[
      'no-reset-activeId my-2 flex cursor-pointer items-center justify-between rounded-xl px-2',
      app.appId === mainStore.activeAppId
        ? 'bg-primary-bg text-primary-text'
        : 'bg-accent-bg text-secondary-text',
    ]"
  >
    <div class="flex items-center gap-2 overflow-hidden p-2">
      <BaseIcon
        name="drag"
        :class="[
          'dragList hover:cursor-move',
          {
            'text-drag-active': app.appId === mainStore.activeAppId,
            'text-drag-no-active': app.appId !== mainStore.activeAppId,
          },
        ]"
      />

      <BaseIcon
        :name="app.appType"
        :class="{
          'text-desktop-icon': app.appType === 'desktop',
          'text-mobile-icon': app.appType === 'mobile',
          'text-web-icon': app.appType === 'web',
        }"
      />

      <div class="w-full truncate lg:w-36">
        {{ app.appName }}
      </div>
    </div>
    <div class="flex gap-2">
      <BaseButton
        name="edit"
        :class="'text-edit-icon'"
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
        class="text-remove-icon"
        @click="
          modalStore.openModal('removeTrackedApp', {
            appId: app.appId,
            appName: app.appName,
          })
        "
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.dragList {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  touch-action: manipulation;
}
</style>
