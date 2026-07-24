const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const themeToggle = document.getElementById("theme-toggle");

let expression = "";

// Button Clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        switch (value) {
            case "AC":
                expression = "";
                break;

            case "DEL":
                expression = expression.slice(0, -1);
                break;

            case "=":
                calculate();
                return;

            default:
                expression += value;
        }

        updateDisplay();
    });
});

// Calculate
function calculate() {
    try {
        expression = eval(expression).toString();
    } catch {
        expression = "Error";
    }

    updateDisplay();
}

// Update Display
function updateDisplay() {
    display.value = expression || "0";
}

// Keyboard Support
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if ("0123456789+-*/.%".includes(key)) {
        expression += key;
        updateDisplay();
    }

    if (key === "Enter") {
        e.preventDefault();
        calculate();
    }

    if (key === "Backspace") {
        expression = expression.slice(0, -1);
        updateDisplay();
    }

    if (key === "Escape") {
        expression = "";
        updateDisplay();
    }
});

// Default Display
updateDisplay();
