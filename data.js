export function Color(hexcode = '#FFFFFF',isLocked = false) {
  this.hexcode = hexcode;
  this.isLocked = isLocked;
};

export let currentPalette = [];
export let paletteArray = [];