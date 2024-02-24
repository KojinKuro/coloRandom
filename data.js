export class Color {
  constructor(hexCode, isLocked = false) {
    if (this.isHexCode(hexCode)) this.hexCode = hexCode;
    else this.hexCode = this.randomHexGenerator();

    this.isLocked = isLocked;
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
