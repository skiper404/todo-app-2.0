<script setup>
import { format } from "date-fns";

const props = defineProps({ createdAt: { type: Number } });

const formattedDate = () =>
  format(new Date(props.createdAt), "yyyy-MM-dd HH:MM:SS");
</script>

<template>
  <div class="text-sm">
    <span class="text-gray-500">Created :</span>
    <span class="text-gray-400">
      {{ formattedDate() }}
    </span>
  </div>
</template>
