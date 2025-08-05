<script setup>
import { format } from "date-fns";

const props = defineProps({ updatedAt: { type: Number } });

const formattedDate = () =>
  format(new Date(props.updatedAt), "yyyy-MM-dd HH:MM");
</script>

<template>
  <div class="">
    <span class="">Updated: </span>
    <span class="">
      {{ formattedDate() }}
    </span>
  </div>
</template>
