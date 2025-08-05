<script setup>
import { format } from "date-fns";

const props = defineProps({ createdAt: { type: Number } });

const formattedDate = () =>
  format(new Date(props.createdAt), "yyyy-MM-dd HH:MM");
</script>

<template>
  <div class="">
    <span class="">Created: </span>
    <span class="">
      {{ formattedDate() }}
    </span>
  </div>
</template>
