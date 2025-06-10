import { defineStore } from "pinia";
import { ref } from "vue";

export const useDragStore = defineStore("DragStore", () => {
  const isDraggableList = ref(false);
  const isDraggableTask = ref(false);

  const onDragListStart = () => {
    isDraggableList.value = true;
  };

  const onDragListEnd = () => {
    isDraggableList.value = false;
  };

  const onDragTaskStart = () => {
    isDraggableTask.value = true;
  };

  const onDragTaskEnd = () => {
    isDraggableTask.value = false;
  };

  return {
    isDraggableList,
    isDraggableTask,
    onDragListStart,
    onDragListEnd,
    onDragTaskStart,
    onDragTaskEnd,
  };
});
