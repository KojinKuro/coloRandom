import { REMOVE_IMG_PATH } from "./data.js";

export function createColorContainer(index, palette) {
  const colorContainer = document.createElement("div");
  colorContainer.classList.add("mini-colors");
  colorContainer.dataset.id = index;

  palette.forEach((color) => {
    colorContainer.appendChild(createMiniColorBox(color.hexCode));
  });

  return colorContainer;
}

function createMiniColorBox(hexCode) {
  const miniColorBox = document.createElement("div");
  miniColorBox.classList.add("mini-color-box");
  miniColorBox.style.backgroundColor = hexCode;
  return miniColorBox;
}

export function createRemovePaletteButton(index) {
  const removePaletteImage = document.createElement("img");
  removePaletteImage.src = REMOVE_IMG_PATH;
  removePaletteImage.classList.add("remove-button");
  removePaletteImage.dataset.id = index;
  return removePaletteImage;
}
