<script setup>
import { format } from "date-fns";

const props = defineProps({ updatedAt: { type: Number } });

const formattedDate = () =>
  format(new Date(props.updatedAt), "yyyy-MM-dd HH:MM:SS");
</script>

<template>
  <div class="text-sm">
    <span class="text-gray-500">Updated :</span>
    <span class="text-gray-400">
      {{ formattedDate() }}
    </span>
  </div>
</template>
