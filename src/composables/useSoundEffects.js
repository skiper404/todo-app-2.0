import { Howl } from "howler";
import addList from "@/assets/sounds/addList.mp3";
import addTask from "@/assets/sounds/addTask.wav";
import removeList from "@/assets/sounds/removeList.mp3";
import removeTask from "@/assets/sounds/removeTask.mp3";

const soundsMap = {
  addList: new Howl({ src: addList }),
  addTask: new Howl({ src: addTask }),
  removeList: new Howl({ src: removeList }),
  removeTask: new Howl({ src: removeTask }),
};

export const useSoundEffects = () => {
  const playSound = (key) => {
    const sound = soundsMap[key];
    if (sound) {
      sound.play();
    }
  };

  return {
    playSound,
  };
};
