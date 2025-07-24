import {
  XMarkIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  TrashIcon,
  MusicalNoteIcon,
  NoSymbolIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/vue/16/solid";

import {
  PencilIcon,
  MoonIcon,
  SunIcon,
  Cog6ToothIcon,
  MapPinIcon,
  Square3Stack3DIcon,
} from "@heroicons/vue/24/solid";
import { GlobeAltIcon, Bars3Icon, Bars2Icon } from "@heroicons/vue/24/outline";

export const ICONS = {
  logo: Square3Stack3DIcon,
  menu: Bars3Icon,
  close: XMarkIcon,
  desktop: ComputerDesktopIcon,
  mobile: DevicePhoneMobileIcon,
  web: GlobeAltIcon,
  edit: PencilIcon,
  remove: TrashIcon,
  mute: NoSymbolIcon,
  unmute: MusicalNoteIcon,
  show: ChevronUpIcon,
  hide: ChevronDownIcon,
  drag: Bars2Icon,
  cog: Cog6ToothIcon,
  light: SunIcon,
  dark: MoonIcon,
  locale: MapPinIcon,
};
