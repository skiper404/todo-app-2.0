<script setup>
import { format } from "date-fns";

const props = defineProps({ updatedAt: { type: Number } });

const formattedDate = () =>
  format(new Date(props.updatedAt), "yyyy-MM-dd HH:MM");
</script>

<template>
  <div class="text-sm">
    <span class="text-gray-600">Updated: </span>
    <span class="text-gray-500">
      {{ formattedDate() }}
    </span>
  </div>
</template>
