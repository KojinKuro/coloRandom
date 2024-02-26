export class Color {
  constructor(hexCode, isLocked = false) {
    if (this.isHexCode(hexCode)) this.hexCode = hexCode;
    else this.hexCode = this.randomHexGenerator();

    this.isLocked = isLocked;
  }

  lock() {
    this.isLocked = true;
  }

  unlock() {
    this.isLocked = false;
  }

  toggleLock() {
    this.isLocked = !this.isLocked;
  }

  isHexCode(string) {
    const hexCodeRegex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
    return hexCodeRegex.test(string);
  }

  randomHexGenerator() {
    const possibleInt = "0123456789abcdef";
    let hexCode = "#";

    for (let index = 0; index < 6; index++) {
      let randInt = Math.floor(Math.random() * possibleInt.length);
      hexCode += possibleInt[randInt];
    }
    return hexCode;
  }
}

export let currentPalette = [
  new Color(),
  new Color(),
  new Color(),
  new Color(),
  new Color(),
];
export let paletteArray = [];

export const LOCKED_IMG_PATH = "./assets/locked.png";
export const UNLOCKED_IMG_PATH = "./assets/unlocked.png";
export const REMOVE_IMG_PATH = "./assets/delete.png";
