import { Color, currentPalette, paletteArray } from "./data.js";

var allLockImages = document.querySelectorAll("img.lock");
var allColorContainers = document.querySelectorAll(".color-container");
var randomButton = document.querySelector(".random-button");
var saveButton = document.querySelector(".save-button");
var savedView = document.querySelector(".saved-view");

savedView.addEventListener("click", function (event) {
  var element = event.target;
  if (element.classList.contains("remove-button")) {
    paletteArray.splice(element.dataset.id, 1);
    updateSavedPalettes();
  }
});

savedView.addEventListener("click", function (event) {
  var element = event.target;
  if (
    element.classList.contains("mini-colors") ||
    element.classList.contains("mini-color-box")
  ) {
    let colorObject = paletteArray[element.parentNode.dataset.miniColorId];
    fromSavedPalette(colorObject);
  }
});

saveButton.addEventListener("click", function () {
  savePalette();
  updateSavedPalettes();
  createColorBoxes();
});

allLockImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentPalette[index].toggleLock();
    updateColorBoxes();
  });
});
randomButton.addEventListener("click", function (event) {
  createColorBoxes();
});

init();

function init() {
  updateColorBoxes();
}

function updateColorBoxes() {
  allColorContainers.forEach((container, index) => {
    const colorBox = container.querySelector(".color-box");
    const colorHex = container.querySelector(".color-hex");
    const colorLock = container.querySelector("img");
    const hexCode = currentPalette[index].hexCode;

    if (currentPalette[index].isLocked) {
      colorLock.src = "./assets/locked.png";
    } else {
      colorLock.src = "./assets/unlocked.png";
    }

    colorBox.style.backgroundColor = hexCode;
    colorHex.innerText = hexCode;
  });
}

function setBoxHex(index, colorObject) {
  if (index >= allColorContainers.length) return;
  if (currentPalette[index].isLocked) return;

  currentPalette[index] = colorObject;
  updateColorBoxes();
}

function createColorBoxes() {
  for (var i = 0; i < allColorContainers.length; i++) {
    setBoxHex(i, new Color());
  }
}

function fromSavedPalette(colorObject) {
  for (let i = 0; i < colorObject.length; i++) {
    currentPalette[i].unlock();
    setBoxHex(i, colorObject[i]);
  }
  updateColorBoxes();
}

function savePalette() {
  let newCurrentPalette = currentPalette.map(
    (color) => new Color(color.hexCode, color.isLocked)
  );
  paletteArray.push(newCurrentPalette);
}

function updateSavedPalettes() {
  var updatedPalettes = document.querySelector(".saved-palettes");
  updatedPalettes.innerHTML = "";
  for (var i = 0; i < paletteArray.length; i++) {
    const newPalette = document.createElement("li");
    newPalette.dataset.miniColorId = i;
    newPalette.classList.add("mini-color-container");

    const divContainer = document.createElement("div");
    divContainer.classList.add("mini-colors");
    divContainer.dataset.miniColorId = i;
    for (let j = 0; j < paletteArray[i].length; ++j) {
      var currentColor = paletteArray[i][j];
      const miniColorBox = document.createElement("div");

      miniColorBox.classList.add("mini-color-box");
      miniColorBox.style.backgroundColor = currentColor.hexCode;
      divContainer.appendChild(miniColorBox);
    }
    newPalette.appendChild(divContainer);

    const removeButton = document.createElement("img");
    removeButton.src = "./assets/delete.png";
    removeButton.classList.add("remove-button");
    removeButton.dataset.id = i;
    newPalette.appendChild(removeButton);

    updatedPalettes.appendChild(newPalette);
  }
}
