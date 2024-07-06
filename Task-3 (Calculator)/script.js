let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    display.innerText = currentInput;
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    display.innerText = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch (e) {
        display.innerText = 'Error';
    }
}
