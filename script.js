document.addEventListener("DOMContentLoaded", function() {
  const colorPicker = document.getElementById('color-picker');
  const redInputRange = document.getElementById('red');
  const redInput = document.getElementById('red-value');
  const greenInputRange = document.getElementById('green');
  const greenInput = document.getElementById('green-value');
  const blueInputRange = document.getElementById('blue');
  const blueInput = document.getElementById('blue-value');
  const colorBox = document.getElementById('color-box');
  const hexCode = document.getElementById('hex-code');

  function updateColor() {
    const redValue = redInputRange.value;
    const greenValue = greenInputRange.value;
    const blueValue = blueInputRange.value;
    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    const hexColor = rgbToHex(redValue, greenValue, blueValue);
    colorBox.style.backgroundColor = rgbColor;
    hexCode.textContent = `Código Hexadecimal: ${hexColor}`;
    redInput.value = redValue;
    greenInput.value = greenValue;
    blueInput.value = blueValue;
  }

  function rgbToHex(r, g, b) {
    const redHex = componentToHex(r);
    const greenHex = componentToHex(g);
    const blueHex = componentToHex(b);
    return `#${redHex}${greenHex}${blueHex}`;
  }

  function componentToHex(c) {
    const hex = Math.max(0, Math.min(255, c)).toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
  }

  redInputRange.addEventListener('input', updateColor);
  redInput.addEventListener('input', function() {
    redInputRange.value = redInput.value;
    updateColor();
  });

  greenInputRange.addEventListener('input', updateColor);
  greenInput.addEventListener('input', function() {
    greenInputRange.value = greenInput.value;
    updateColor();
  });

  blueInputRange.addEventListener('input', updateColor);
  blueInput.addEventListener('input', function() {
    blueInputRange.value = blueInput.value;
    updateColor();
  });

  colorPicker.addEventListener('input', function() {
    const colorValue = colorPicker.value;
    const redValue = parseInt(colorValue.substr(1, 2), 16);
    const greenValue = parseInt(colorValue.substr(3, 2), 16);
    const blueValue = parseInt(colorValue.substr(5, 2), 16);
    redInputRange.value = redValue;
    greenInputRange.value = greenValue;
    blueInputRange.value = blueValue;
    updateColor();
  });

  // Inicializar el color
  updateColor();
});
