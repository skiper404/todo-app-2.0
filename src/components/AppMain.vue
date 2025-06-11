<script setup>
import BaseCreateBlock from "./BaseCreateBlock.vue";
import MainHeader from "./MainHeader.vue";
</script>

<template>
  <main class="overflow-hidden pt-16 lg:mx-4 lg:ml-88 lg:pt-24">
    <div
      class="relative max-h-[calc(100vh-180px)] min-h-[calc(100vh-180px)] overflow-y-auto border-[var(--color-primary-600)] px-4 lg:rounded-3xl lg:border-2 lg:p-4"
    >
      <MainHeader />
      <BaseCreateBlock label="Create task" formType="createTask" />
      <routerView></routerView>
    </div>
  </main>
</template>
