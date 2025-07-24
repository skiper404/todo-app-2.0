<script setup>
import { useSoundStore } from "@/stores/SoundStore";
import { computed } from "vue";
import BaseIcon from "./BaseIcon.vue";
import { SwitchRoot } from "radix-vue";
import { SwitchThumb } from "radix-vue";

const soundStore = useSoundStore();

const name = computed(() => (soundStore.isMuted ? "mute" : "unmute"));
</script>

<template>
  <div class="m-4">
    <div class="flex gap-2">
      <BaseIcon :name="name" classes="size-6" />
      <span class="capitalize"> {{ $t("ui.sound") }}: </span>
      <SwitchRoot
        id="airplane-mode"
        v-model:checked="soundStore.isMuted"
        class="relative flex h-[25px] w-[42px] cursor-default rounded-full bg-black/50 shadow-sm focus-within:outline focus-within:outline-black data-[state=checked]:bg-indigo-500"
      >
        <SwitchThumb
          class="my-auto block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-white shadow-sm transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]"
        />
      </SwitchRoot>
    </div>
  </div>
</template>
