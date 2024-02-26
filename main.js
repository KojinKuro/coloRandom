import {
  createColorContainer,
  createRemovePaletteButton,
} from "./components.js";
import {
  Color,
  LOCKED_IMG_PATH,
  UNLOCKED_IMG_PATH,
  currentPalette,
  paletteArray,
} from "./data.js";

const allLockImages = document.querySelectorAll("img.lock");
const allColorContainers = document.querySelectorAll(".color-container");
const randomButton = document.querySelector(".random-button");
const saveButton = document.querySelector(".save-button");
const savedView = document.querySelector(".saved-view");

savedView.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("remove-button")) {
    paletteArray.splice(element.dataset.id, 1);
    updateSavedPalettes();
  } else if (
    element.classList.contains("mini-colors") ||
    element.classList.contains("mini-color-box")
  ) {
    let id = element.parentNode.dataset.id;
    loadPalette(paletteArray[id]);
  }
});

saveButton.addEventListener("click", function () {
  savePalette();
  generateNewPalette();
});

allLockImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentPalette[index].toggleLock();
    updateCurrentPalette();
  });
});

randomButton.addEventListener("click", generateNewPalette);

init();

function init() {
  updateCurrentPalette();
}

function setPaletteIndex(index, colorObject) {
  if (index >= allColorContainers.length) return;
  if (currentPalette[index].isLocked) return;

  currentPalette[index] = colorObject;
  updateCurrentPalette();
}

function generateNewPalette() {
  for (var i = 0; i < currentPalette.length; i++) {
    setPaletteIndex(i, new Color());
  }
}

function loadPalette(paletteArray) {
  for (let i = 0; i < paletteArray.length; i++) {
    currentPalette[i].unlock();
    setPaletteIndex(i, paletteArray[i]);
  }
}

function savePalette() {
  const savedPalette = currentPalette.map(
    (color) => new Color(color.hexCode, color.isLocked)
  );
  paletteArray.push(savedPalette);
  updateSavedPalettes();
}

function updateCurrentPalette() {
  allColorContainers.forEach((container, index) => {
    const colorBox = container.querySelector(".color-box");
    const colorHex = container.querySelector(".color-hex");
    const colorLock = container.querySelector("img");

    const hexCode = currentPalette[index].hexCode;
    const isLocked = currentPalette[index].isLocked;

    colorLock.src = isLocked ? LOCKED_IMG_PATH : UNLOCKED_IMG_PATH;
    colorBox.style.backgroundColor = hexCode;
    colorHex.innerText = hexCode;
  });
}

function updateSavedPalettes() {
  const savedPalettesNode = document.querySelector(".saved-palettes");
  savedPalettesNode.innerHTML = "";

  paletteArray.forEach((palette, index) => {
    const paletteListItem = document.createElement("li");
    paletteListItem.dataset.id = index;
    paletteListItem.classList.add("mini-color-container");

    paletteListItem.appendChild(createColorContainer(index, palette));
    paletteListItem.appendChild(createRemovePaletteButton(index));
    savedPalettesNode.appendChild(paletteListItem);
  });
}
