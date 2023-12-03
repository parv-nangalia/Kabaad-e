import react from "react";

import { FaMobile } from "react-icons/fa";
import { HiCamera } from "react-icons/hi";
import { GiLaptop } from "react-icons/gi";
import { IoGameControllerSharp } from "react-icons/io5";
import { FaTabletScreenButton } from "react-icons/fa";
import { BsMusicPlayerFill } from "react-icons/bs";
import { FcKindle } from "react-icons/fc";
import { BsSmartwatch } from "react-icons/bs";
import { FaHeadphonesAlt } from "react-icons/fa";
import { GiVrHeadset } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";
import { BsSpeakerFill } from "react-icons/bs";
import { BsFillRouterFill } from "react-icons/bs";
import { BsFillMouse2Fill } from "react-icons/bs";
import { BsFillKeyboardFill } from "react-icons/bs";
import { HiPrinter } from "react-icons/hi";
import { FaRadio } from "react-icons/fa";
import { BsFillProjectorFill } from "react-icons/bs";
import { MdAdfScanner } from "react-icons/md";
// import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdCable } from "react-icons/md";
import { RiSdCardMiniFill } from "react-icons/ri";
import { BsFillUsbDriveFill } from "react-icons/bs";
// import { PiPlugChargingFill } from "react-icons";

const commonIcons = {
  Mobile: FaMobile,
  Camera: HiCamera,
  Laptop: GiLaptop,
  GameController: IoGameControllerSharp,
  //Tablet: FaTabletScreenButton,
  MusicPlayer: BsMusicPlayerFill,
  Kindle: FcKindle,
};

const wearableIcons = {
  Smartwatch: BsSmartwatch,
  Headphones: FaHeadphonesAlt,
  VrHeadset: GiVrHeadset,
};

const householdIcons = {
  Monitor: FiMonitor,
  Speaker: BsSpeakerFill,
  Router: BsFillRouterFill,
  Mouse: BsFillMouse2Fill,
  Keyboard: BsFillKeyboardFill,
  Printer: HiPrinter,
  // radio: FaRadio,
  Projector: BsFillProjectorFill,
  Scanner: MdAdfScanner,
  //television: PiTelevisionSimpleFill,
};

const miscIcons = {
  Cable: MdCable,
  SdCard: RiSdCardMiniFill,
  UsbDrive: BsFillUsbDriveFill,
  //plugCharging: PiPlugChargingFill,
};

const all = {
  Mobile: FaMobile,
  Camera: HiCamera,
  Laptop: GiLaptop,
  GameController: IoGameControllerSharp,
  //Tablet: FaTabletScreenButton,
  MusicPlayer: BsMusicPlayerFill,
  Kindle: FcKindle,
  Smartwatch: BsSmartwatch,
  Headphones: FaHeadphonesAlt,
  VrHeadset: GiVrHeadset,
  Monitor: FiMonitor,
  Speaker: BsSpeakerFill,
  Router: BsFillRouterFill,
  Mouse: BsFillMouse2Fill,
  Keyboard: BsFillKeyboardFill,
  Printer: HiPrinter,
  // radio: FaRadio,
  Projector: BsFillProjectorFill,
  Scanner: MdAdfScanner,
  Cable: MdCable,
  SdCard: RiSdCardMiniFill,
  UsbDrive: BsFillUsbDriveFill,
};

export { commonIcons, wearableIcons, householdIcons, miscIcons, all };

