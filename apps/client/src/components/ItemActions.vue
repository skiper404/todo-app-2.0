<script setup>
import BaseIcon from "./BaseIcon.vue";

const props = defineProps({
  editClasses: {
    type: Array,
    default: "size-6 hover:text-green-300 text-green-400",
  },
  removeClasses: {
    type: Array,
    default: "size-6 hover:text-indigo-400 text-indigo-500",
  },
});

const emit = defineEmits(["onEdit", "onRemove"]);

const onEdit = () => emit("onEdit");
const onRemove = () => emit("onRemove");

const classes = "ml-auto flex gap-2";
</script>

<template>
  <div :class="classes">
    <BaseIcon name="edit" :classes="editClasses" @click.stop="onEdit" />
    <BaseIcon name="remove" :classes="removeClasses" @click.stop="onRemove" />
  </div>
</template>
