<script setup>
import { appInfo } from "@/constants";
const { appName, appVersion } = appInfo;
</script>

<template>
  <router-link :to="{ name: 'Home' }">
    <div
      class="text-2xl font-extralight tracking-wide text-amber-50 dark:text-indigo-500"
    >
      {{ appName }}
    </div>
  </router-link>
</template>
