// script.js
function changeBackgroundColor() {
    // Generate a random hex color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Apply the new color to the body background
    document.body.style.backgroundColor = randomColor;
}
