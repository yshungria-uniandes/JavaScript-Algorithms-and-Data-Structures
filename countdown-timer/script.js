// script.js
document.getElementById("startButton").addEventListener("click", function () {
    // Get the value entered by the user
    const startValue = parseInt(document.getElementById("startValue").value);

    // Validate the input
    if (isNaN(startValue) || startValue < 0) {
        alert("Please enter a valid number.");
        return;
    }

    // Start the countdown
    startCountdown(startValue);
});

function startCountdown(startValue) {
    let currentValue = startValue;

    // Display the initial value
    document.getElementById("countdown").textContent = currentValue;

    // Use setInterval to update the countdown every second
    const interval = setInterval(() => {
        currentValue--;

        // Update the displayed value
        document.getElementById("countdown").textContent = currentValue;

        // Stop the countdown when it reaches 0
        if (currentValue <= 0) {
            clearInterval(interval);
            document.getElementById("countdown").textContent = "Time's up!";
        }
    }, 1000); // 1000 ms = 1 second
}