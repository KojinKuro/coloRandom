import { currentPalette, paletteArray, Color } from "/data.js";

var allImages = document.querySelectorAll('img');
var allColorContainers = document.querySelectorAll(".color-container");
var randomButton = document.querySelector(".random-button");
var saveButton = document.querySelector(".save-button");

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

// function savePalette() {
//   const paletteToSave = document.querySelector(".save-buttons");
//   paletteToSave.innerText = '';
//   for (var i = 0; i < currentPalette.length; i++) {
//     const paletteListItem = document.createElement("li");
//   }
// }


// 1. save the current palette
    // 1. save currentPalette 
    // get the Save Button dom element. (document.querySelector('.save-button'))
    // 2. addEventHandler to the save button activating it on click to run savePalette()
    /* make a function called savePalette()
      put currentPalette into paletteArray with what method .push()
      run upSavePalettes() everytime you save
    */

// Shoot it to the DOM
    // create function updateSavePalettes()
  /*
    for every single element in the palette Array. 
    display them to the DOM

    for loop that runs through each paletteArray[]

    // CREATE THIS HTML ELEMENT as an <li></li> before appendChild is run
    // class of mini-color-container
    // 5 boxes 
    // - will hold just colors
    // every single one of these will have thier backhgroundColor set to w.e hexcode
  */