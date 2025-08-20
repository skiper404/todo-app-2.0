<script setup>
import { format } from "date-fns";
import BaseIcon from "../BaseIcon.vue";

const props = defineProps({ time: { type: Number }, label: { type: String } });

const formattedDate = () => format(new Date(props.time), "yy-MM-dd HH:mm");
</script>

<template>
  <p class="flex items-center gap-2 text-sm" v-if="props.time">
    <BaseIcon :name="label" class="size-4 text-gray-400" />
    <time class="text-gray-500">
      {{ formattedDate() }}
    </time>
  </p>
</template>
