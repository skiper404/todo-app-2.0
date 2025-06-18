<script setup>
import BaseChart from "./BaseChart.vue";
</script>

<template>
  <div class="grid grid-cols-1 gap-2 py-2 lg:grid-cols-2 xl:grid-cols-3">
    <BaseChart type="apps" />
    <BaseChart type="priority" />
    <BaseChart type="status" />
  </div>
</template>
