// Get DOM elements
const die1 = document.getElementById("die1");
const die2 = document.getElementById("die2");
const rollButton = document.getElementById("roll");
const result = document.getElementById("result");

// Function to roll the dice
function rollDice() {
    // Generate random numbers between 1 and 6
    const die1Value = Math.floor(Math.random() * 6) + 1;
    const die2Value = Math.floor(Math.random() * 6) + 1;

    // Display the values on the dice
    die1.textContent = die1Value;
    die2.textContent = die2Value;

    // Determine the result
    if (die1Value === die2Value) {
        result.textContent = "It's a tie!";
    } else if (die1Value > die2Value) {
        result.textContent = "Die 1 wins!";
    } else {
        result.textContent = "Die 2 wins!";
    }
}

// Add event listener to the button
rollButton.addEventListener("click", rollDice);