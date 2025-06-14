import { Howl } from "howler";
import addApp from "@/assets/sounds/addApp.mp3";
import addTask from "@/assets/sounds/addTask.wav";
import removeApp from "@/assets/sounds/removeApp.mp3";
import removeTask from "@/assets/sounds/removeTask.mp3";
import { defineStore } from "pinia";
import { useSettingsStore } from "./SettingsStore";

const soundsMap = {
  addApp: new Howl({ src: addApp }),
  addTask: new Howl({ src: addTask }),
  removeApp: new Howl({ src: removeApp }),
  removeTask: new Howl({ src: removeTask }),
};

export const useSoundStore = defineStore("SoundStore", () => {
  const settingsStore = useSettingsStore();

  const playSound = (key) => {
    if (!settingsStore.isSoundOn) {
      return;
    }
    const sound = soundsMap[key];
    if (sound) {
      sound.play();
    }
  };

  return {
    playSound,
  };
});
