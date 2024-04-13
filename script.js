let lastPressedEquals = false;

function appendToDisplay(value) {
    if(value >= '0' && value <= '9') {
        if(lastPressedEquals == true) {
            clearDisplay();
        }
    }
    else {
        if(display.textContent.slice(-1) >= '0' && display.textContent.slice(-1) <= '9'){}
        else {
            display.textContent = display.textContent.slice(0,-1)
        }
    }
    if (display.textContent === '0' && value !== '.') {
        display.textContent = '';
    }
    lastPressedEquals = false;
    display.textContent += value;
}

function clearDisplay() {
    display.textContent = '0';
}

function deleteLastCharacter() {
    lastPressedEquals = false;
    let currentValue = display.textContent;
    display.textContent = currentValue.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
}
function calculateResult() {
    lastPressedEquals = true;
    let result;
    try {
        result = eval(display.textContent);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Ошибка';
    }
}

function calculateSquareRoot() {
    calculateResult();
    let currentValue = parseFloat(display.textContent);
    if (currentValue >= 0) {
        display.textContent = Math.sqrt(currentValue);
    } else {
        display.textContent = 'Ошибка';
    }
}

function changeSign() {
    calculateResult();
    let currentValue = display.textContent;
    if (currentValue !== '0') {
        if (currentValue.charAt(0) === '-') {
            display.textContent = currentValue.slice(1);
        } else {
            display.textContent = '-' + currentValue;
        }
}
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')' || key === ' ') {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'C' || key === 'c') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLastCharacter();
    }
});