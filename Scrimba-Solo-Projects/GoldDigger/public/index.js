const priceDisplay = document.getElementById("price-display");

// Function to update the price display to any random number between 1800 and 2200
function updatePrice() {
  const randomPrice = Math.floor(Math.random() * (2200 - 1800 + 1)) + 1800;
  priceDisplay.textContent = `${randomPrice}`;
}

// Update the price every second
setInterval(updatePrice, 1000);