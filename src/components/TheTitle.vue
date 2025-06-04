<script setup>
import { appInfo } from "@/constants";
const { appName, appVersion } = appInfo;
</script>

<template>
  <div
    class="bg-gradient-to-r from-green-500 to-indigo-500 bg-clip-text px-2 text-3xl font-extralight tracking-wide text-transparent"
  >
    {{ appName }}
  </div>
  <div
    class="hidden items-center rounded bg-clip-text px-2 text-sm font-thin text-gray-400 md:flex"
  >
    {{ appVersion }}
  </div>
</template>
