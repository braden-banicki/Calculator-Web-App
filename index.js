// Access the display input element where the result is shown
const display = document.getElementById("display");

// Function to append the clicked button's value to the display
function appendToDisplay(input) {
    display.value += input; // Adds the clicked input (number or operator) to the display's current value
}

// Function to clear the display when the "CE" button is pressed
function clearDisplay() {
    display.value = ""; // Clears the content of the display
}

// Function to calculate the expression entered in the display when the "=" button is pressed
function calculate() {
    // Check if the display value is empty (i.e., no input is provided)
    if (display.value.trim() === "") {
        display.value = "Error"; // Set display to "Error" if no input is entered
    } else {
        // Evaluate the expression entered by the user and display the result
        display.value = eval(display.value); // Uses eval to calculate the result of the entered expression
    }
}