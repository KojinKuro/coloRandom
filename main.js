var allColorContainers = document.querySelectorAll(".color-container");

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

/* - add a button that generates 5 hex codes
grab 6 characters from a string that contains valid hexcode integers
  done in a for loop that loops 6 times each time adding a new character to the string
  return hexcode*/

/* function that  calls hexcode generator and set hexbox 5 times*/
/* event that calls that function when a button is clicked */