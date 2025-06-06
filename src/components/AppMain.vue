<script setup>
import BaseCreateBlock from "./BaseCreateBlock.vue";
import MainHeader from "./MainHeader.vue";
</script>

<template>
  <main class="mx-6 overflow-hidden pt-26 md:ml-94">
    <div
      class="relative max-h-[calc(100vh-200px)] min-h-[calc(100vh-200px)] overflow-y-auto rounded-3xl border-2 border-[var(--color-primary-600)] p-4"
    >
      <MainHeader />
      <BaseCreateBlock label="Create task" formType="createTask" />
      <routerView></routerView>
    </div>
  </main>
</template>
