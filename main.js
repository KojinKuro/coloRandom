var allColorContainers = document.querySelectorAll(".color-container");
var randomButton = document.querySelector(".random-button");

randomButton.addEventListener('click', function(event){
  createColorBoxes();
  updateColorBoxes();
});

updateColorBoxes();

function updateColorBoxes() {
  allColorContainers.forEach((container) => {
    const colorBox = container.querySelector(".color-box");
    const colorHex = container.querySelector(".color-hex");
    const hexCode = colorHex.innerText;

    colorBox.style.backgroundColor = hexCode;
  });
}

function setBoxHex(index, color) {
  if (!isHexCode(color)) return;
  if (index >= allColorContainers.length) return;

  var colorHex = allColorContainers[index].querySelector(".color-hex");
  colorHex.innerText = color;
  updateColorBoxes();
}

function isHexCode(string) {
  const hexCodeRegex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
  return hexCodeRegex.test(string);
}


function randomHexGenerator() {
  const possibleInt = '0123456789abcdef';
  let hexCode = '#';
  for (let index = 0; index < 6; index++) {
    randInt = Math.floor(Math.random() * possibleInt.length);
    hexCode += possibleInt[randInt];
  }
  return hexCode;
}

function createColorBoxes() {
  for (var i = 0; i < allColorContainers.length; i++) {
    setBoxHex(i, randomHexGenerator());
  }
}