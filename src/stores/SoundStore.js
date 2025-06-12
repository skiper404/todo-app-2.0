import { Howl } from "howler";
import addApp from "@/assets/sounds/addApp.mp3";
import addTask from "@/assets/sounds/addTask.wav";
import removeApp from "@/assets/sounds/removeApp.mp3";
import removeTask from "@/assets/sounds/removeTask.mp3";
import { ref } from "vue";
import { defineStore } from "pinia";

const soundsMap = {
  addApp: new Howl({ src: addApp }),
  addTask: new Howl({ src: addTask }),
  removeApp: new Howl({ src: removeApp }),
  removeTask: new Howl({ src: removeTask }),
};

export const useSoundStore = defineStore("SoundStore", () => {
  const isSoundOn = ref(true);

  const toggleSound = () => {
    isSoundOn.value = !isSoundOn.value;
    console.log(isSoundOn.value);
  };

  const playSound = (key) => {
    if (!isSoundOn.value) {
      return;
    }
    const sound = soundsMap[key];
    if (sound) {
      sound.play();
    }
  };

  return {
    isSoundOn,
    playSound,
    toggleSound,
  };
});
