import { defineStore } from "pinia";
import addSound from "@/shared/sounds/addSound.mp3";
import removeSound from "@/shared/sounds/removeSound.wav";
import { Howl } from "howler";
import { ref } from "vue";

const howls = {
  add: new Howl({ src: [addSound], volume: 1, mute: false }),
  remove: new Howl({ src: [removeSound], volume: 1, mute: false }),
};

export const useSoundStore = defineStore("SoundStore", () => {
  const isMuted = ref(false);

  const playSound = (key) => {
    const sound = howls[key];
    if (!isMuted.value) {
      sound.play();
    }
  };

  const toggleMute = () => {
    isMuted.value = !isMuted.value;
  };

  return { playSound, isMuted, toggleMute };
});
