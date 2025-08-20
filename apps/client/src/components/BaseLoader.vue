<script setup>
import { useLoaderStore } from "@/stores";
import BaseIcon from "./BaseIcon.vue";
const loaderStore = useLoaderStore();

const wrapperClasses = "flex h-screen items-center justify-center";
const iconClasses = "size-20 animate-spin text-indigo-500";
</script>

<template>
  <section :class="wrapperClasses" v-if="loaderStore.isLoading">
    <BaseIcon name="cog" :classes="iconClasses" />
  </section>
</template>
