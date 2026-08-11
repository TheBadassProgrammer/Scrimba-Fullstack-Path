const priceDisplay = document.getElementById("price-display");

// Function to update the price display to any random number between 1800 and 2200
function updatePrice() {
  const randomPrice = Math.floor(Math.random() * (2200 - 1800 + 1)) + 1800;
  priceDisplay.textContent = `${randomPrice}`;
}

// Update the price every second
setInterval(updatePrice, 1000);



const investButton = document.getElementById("invest-button");
investButton.addEventListener("click", () => {
  const timeOfInvestment = new Date().toLocaleTimeString();
  const investmentAmount = document.getElementById("investment-amount").value;
  const currentPrice = parseInt(priceDisplay.textContent);
  const goldSold = investmentAmount / currentPrice;
  const data = {
    time: timeOfInvestment,
    amount: investmentAmount,
    price: currentPrice,
    goldSold: goldSold.toFixed(4)
  };

  // Send the data to the server
  fetch("/api/invest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });   
});