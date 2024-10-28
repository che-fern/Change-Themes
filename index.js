const header = document.getElementById("header");

// Get buttons by their IDs
const pinkButton = document.getElementById("pink-button");
const purpleButton = document.getElementById("purple-button");

// Add event listeners to change header color
pinkButton.addEventListener("click", function() {
    header.style.color = "pink";
});

purpleButton.addEventListener("click", function() {
    header.style.color = "purple";
});