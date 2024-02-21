export function Color(hexCode = '#FFFFFF',isLocked = false) {
  if(isHexCode(hexCode)) this.hexCode = hexCode;
  else this.hexCode = '#FFFFFF';

  this.isLocked = isLocked;

  function isHexCode(string) {
    const hexCodeRegex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
    return hexCodeRegex.test(string);
  }
};

export let currentPalette = [];
export let paletteArray = [];