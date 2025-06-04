import { watch } from "vue";

export const useLocalStorage = (data, dataName) => {
  const saveData = () => {
    localStorage.setItem(dataName, JSON.stringify(data.value));
  };

  const loadData = () => {
    const rawData = localStorage.getItem(dataName);
    try {
      data.value = JSON.parse(rawData) || [];
    } catch {
      data.value = [];
    }
  };

  watch(
    () => data.value,
    () => saveData(),
    { deep: true },
  );

  loadData();

  return { saveData, loadData };
};
