<script setup>
import TaskItem from "./TaskItem.vue";

const listClasses = "mb-10 flex flex-col gap-2";
</script>

<template>
  <ul :class="listClasses">
    <TaskItem />
  </ul>
</template>
