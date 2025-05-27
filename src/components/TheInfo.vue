<script setup>
import { useStore } from "@/stores/main";
import { computed } from "vue";

const store = useStore();

const inProgress = computed(() =>
  store.list.filter((task) => task.status === "inProgress"),
);

const pending = computed(() =>
  store.list.filter((task) => task.status === "pending"),
);

const done = computed(() =>
  store.list.filter((task) => task.status === "done"),
);
</script>

<template>
  <div
    class="bg-gradient-to-r from-green-500 to-indigo-500 bg-clip-text px-2 text-3xl font-extralight tracking-wide text-transparent"
  >
    Total Tasks: {{ store.list.length }}
  </div>
  <div
    class="bg-gradient-to-r from-green-500 to-indigo-500 bg-clip-text px-2 text-3xl font-extralight tracking-wide text-transparent"
  >
    In Progress: {{ inProgress.length }}
  </div>
  <div
    class="bg-gradient-to-r from-green-500 to-indigo-500 bg-clip-text px-2 text-3xl font-extralight tracking-wide text-transparent"
  >
    Pending: {{ pending.length }}
  </div>
  <div
    class="bg-gradient-to-r from-green-500 to-indigo-500 bg-clip-text px-2 text-3xl font-extralight tracking-wide text-transparent"
  >
    Done: {{ done.length }}
  </div>
</template>
