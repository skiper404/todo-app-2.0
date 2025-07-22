import { defineStore } from "pinia";
import { ref } from "vue";

export const useDragStore = defineStore("GrabStore", () => {
  const isDraggingApp = ref(false);
  const isDraggingTask = ref(false);

  const onDragStart = (id) => {
    id === "app" ? (isDraggingApp.value = true) : (isDraggingTask.value = true);
  };

  const onDragEnd = (id) => {
    id === "app"
      ? (isDraggingApp.value = false)
      : (isDraggingTask.value = false);
  };

  return { isDraggingApp, isDraggingTask, onDragStart, onDragEnd };
});
