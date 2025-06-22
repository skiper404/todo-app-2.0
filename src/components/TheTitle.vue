<script setup>
import { appInfo } from "@/constants";
const { appName } = appInfo;
</script>

<template>
  <router-link :to="{ name: 'Home' }">
    <div class="text-primary-text text-xl font-extralight">
      {{ appName }}
    </div>
  </router-link>
</template>
