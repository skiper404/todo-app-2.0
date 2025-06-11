<script setup>
const props = defineProps({ taskCategory: String });
</script>

<template>
  <div
    :class="{
      'text-pink-400': taskCategory === 'database',
      'text-indigo-400': taskCategory === 'backend',
      'text-emerald-400': taskCategory === 'frontend',
      'text-blue-400': taskCategory === 'devops',
      'text-rose-400': taskCategory === 'testing',
      'text-red-400': taskCategory === 'security',
      'text-yellow-400': taskCategory === 'ux',
      'text-teal-400': taskCategory === 'integration',
      'text-cyan-400': taskCategory === 'product',
      'text-violet-400': taskCategory === 'analytics',
      'text-amber-400': taskCategory === 'marketing',
    }"
  >
    {{ taskCategory }}
  </div>
</template>
