<script setup>
import { useSoundStore } from "@/stores/SoundStore";
import { computed } from "vue";
import BaseIcon from "./BaseIcon.vue";

const soundStore = useSoundStore();

const name = computed(() => (soundStore.isMuted ? "mute" : "unmute"));
</script>

<template>
  <div class="m-4">
    <div class="flex gap-2">
      <BaseIcon :name="name" classes="size-6" @click="soundStore.toggleMute" />
    </div>
  </div>
</template>
