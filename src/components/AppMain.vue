<script setup>
import BaseCreateBlock from "./BaseCreateBlock.vue";
import MainHeader from "./MainHeader.vue";
</script>

<template>
  <main class="overflow-hidden pt-26 lg:mx-6 lg:ml-94">
    <div
      class="relative max-h-[calc(100vh-200px)] min-h-[calc(100vh-200px)] overflow-y-auto border-[var(--color-primary-600)] p-4 lg:rounded-3xl lg:border-2"
    >
      <MainHeader />
      <BaseCreateBlock label="Create task" formType="createTask" />
      <routerView></routerView>
    </div>
  </main>
</template>
