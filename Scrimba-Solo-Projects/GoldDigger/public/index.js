const priceDisplay = document.getElementById("price-display");
const investButton = document.getElementById("invest-btn");
const investmentAmountInput = document.getElementById("investment-amount");
const dialog = document.querySelector(".outputs");
const dialogSummary = document.getElementById("investment-summary");
const dialogOkButton = dialog.querySelector("button");

// Update price
function updatePrice() {
    const randomPrice =
        Math.floor(Math.random() * (2200 - 1800 + 1)) + 1800;

    priceDisplay.textContent = randomPrice;
}

setInterval(updatePrice, 1000);

// Invest button
investButton.addEventListener("click", () => {
    const timeOfInvestment = new Date().toLocaleTimeString();
    const investmentAmount = Number(investmentAmountInput.value);
    const currentPrice = parseInt(priceDisplay.textContent);

    if (!investmentAmount || investmentAmount <= 0) {
        alert("Please enter a valid investment amount.");
        return;
    }

    const goldSold = investmentAmount / currentPrice;

    const data = {
        time: timeOfInvestment,
        amount: investmentAmount,
        price: currentPrice,
        goldSold: goldSold.toFixed(4)
    };

    // Send data to server
    fetch("/api/invest", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            console.log("Success:", result);

            // Update dialog content
            dialogSummary.textContent =
                `You just bought ${goldSold.toFixed(4)} ounces (ozt) for £${investmentAmount.toFixed(2)}. ` +
                `You will receive documentation shortly.`;

            // Open dialog
            dialog.showModal();
        })
        .catch(error => {
            console.error("Error:", error);
        });
});

// Close dialog
dialogOkButton.addEventListener("click", () => {
    dialog.close();
});