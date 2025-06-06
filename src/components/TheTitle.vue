<script setup>
import { appInfo } from "@/constants";
const { appName, appVersion } = appInfo;
</script>

<template>
  <router-link class="flex items-center" :to="{ name: 'Home' }">
    <div
      class="bg-gradient-to-r from-green-500 to-indigo-500 bg-clip-text text-3xl font-extralight tracking-wide text-transparent"
    >
      {{ appName }}
    </div>
    <div
      class="hidden items-center rounded bg-clip-text px-2 text-sm font-thin text-gray-400 md:flex"
    >
      {{ appVersion }}
    </div>
  </router-link>
</template>
