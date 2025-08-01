<script setup>
import AppItem from "./AppItem.vue";

const classes = "flex flex-col gap-4";
</script>

<template>
  <ul :class="classes">
    <AppItem />
  </ul>
</template>
