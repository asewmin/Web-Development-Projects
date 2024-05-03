const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleButtonPress(button.textContent);
    });
});

document.addEventListener("keydown", event => {
    const key = event.key;

    if (key === "Enter") {
        handleButtonPress("=");
    } else if (key === "Escape" || key === "c" ) {
        handleButtonPress("C");
    } else if (key === "Backspace") {
        handleButtonPress("←");
    } else if (/[\d.()+\-*/]/.test(key)) {
        handleButtonPress(key);
    }
});

function handleButtonPress(value) {
    if (value === "C") {
        clear();
    } else if (value === "←") {
        backspace();
    } else if (value === "=") {
        calculate();
    } else {
        currentInput += value;
        display.value = currentInput;
    }
}

function clear() {
    currentInput = "";
    display.value = "";
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
    }
}
