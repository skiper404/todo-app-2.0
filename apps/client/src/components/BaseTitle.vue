<script setup>
import { capitalizer } from "@/shared/utils/capitalizer";

const props = defineProps({ i18nKey: String });
</script>

<template>
  <div class="text-center text-xl text-indigo-500">
    {{ capitalizer($t(i18nKey)) }}
  </div>
</template>
