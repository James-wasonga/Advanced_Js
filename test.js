// Function to evaluate the expression
function calculate() {
    // Get the input from the user
    const expression = prompt("Enter a mathematical expression:");

    // Use try-catch to handle any errors
    try {
        // Evaluate the expression
        const result = eval(expression);

        // Display the result
        alert(`Result: ${result}`);
    } catch (error) {
        // If there's an error, display an error message
        alert("Error: Invalid expression");
    }
}

// Run the calculator function
calculate();
