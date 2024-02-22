import { currentPalette, paletteArray, Color } from "/data.js";

var allImages = document.querySelectorAll('img');
var allColorContainers = document.querySelectorAll(".color-container");
var randomButton = document.querySelector(".random-button");

allImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentPalette[index].toggleLock();
    updateColorBoxes();
  });
})
randomButton.addEventListener('click', function(event){
  createColorBoxes();
  updateColorBoxes();
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

    if(currentPalette[index].isLocked) {
      colorLock.src = './assests/locked.png';
    } else {
      colorLock.src = './assests/unlocked.png';
    }

    colorBox.style.backgroundColor = hexCode;
    colorHex.innerText = hexCode;
  });
}

function setBoxHex(index, colorObject) {
  if (index >= allColorContainers.length) return;
  if (currentPalette[index].isLocked) return;

  var colorHex = allColorContainers[index].querySelector(".color-hex");
  currentPalette[index] = colorObject;
  updateColorBoxes();
}

function createColorBoxes() {
  for (var i = 0; i < allColorContainers.length; i++) {
    setBoxHex(i, new Color());
  }
}


// FOR LATER
// eventListener for locks
// function need to change src of lock image on click 
// checks locked status of all palettes
// if isLocked is checked, keep color and hex, rest randomize
// need to update palette 