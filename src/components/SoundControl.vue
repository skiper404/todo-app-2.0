<script setup>
import { computed } from "vue";
import BaseButton from "./BaseButton.vue";
import { useSoundStore } from "@/stores/SoundStore";

const soundStore = useSoundStore();

const name = computed(() => (soundStore.isSoundOn ? "soundOn" : "soundOff"));
</script>

<template>
  <div class="flex">
    <BaseButton :name="name" @click="soundStore.toggleSound" />
  </div>
</template>
