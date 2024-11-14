let scientificMode = false;
function clearEntry() {
    result.value = '';
}

function appendToDisplay(value) {
    result.value += value;
}

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(op) {
    document.getElementById('result').value += op;
}

function toggleSign() {
    if (result.value) {
        if (result.value.startsWith('-')) {
            result.value = result.value.slice(1); // Remove the minus sign
        } else {
            result.value = '-' + result.value; // Add the minus sign
        }
    }
}

function calculate() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch {
        document.getElementById('result').value = "Error";
    }
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function appendDecimal() {
    let result = document.getElementById('result');
    if (!result.value.includes('.')) {
        result.value += '.';
    }
}

function backspace() {
    let result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

// Scientific operations
function calculateSquareRoot() {
    document.getElementById('result').value = Math.sqrt(eval(document.getElementById('result').value));
}

function calculateSquare() {
    document.getElementById('result').value = Math.pow(eval(document.getElementById('result').value), 2);
}

function calculateSine() {
    document.getElementById('result').value = Math.sin(eval(document.getElementById('result').value));
}

function calculateCosine() {
    document.getElementById('result').value = Math.cos(eval(document.getElementById('result').value));
}

function calculateTangent() {
    document.getElementById('result').value = Math.tan(eval(document.getElementById('result').value));
}

function calculateLog() {
    document.getElementById('result').value = Math.log10(eval(document.getElementById('result').value));
}

function calculateExp() {
    document.getElementById('result').value = Math.exp(eval(document.getElementById('result').value));
}

function calculateFactorial() {
    let number = eval(document.getElementById('result').value);
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById('result').value = factorial;
}// Toggle scientific mode
document.getElementById('toggleScientific').addEventListener('click', function() {
    scientificMode = !scientificMode;

    // Toggle the visibility of the scientific operations
    let scientificDiv = document.getElementById('scientific');
    if (scientificMode) {
        scientificDiv.classList.add('active'); // Show scientific mode
    } else {
        scientificDiv.classList.remove('active'); // Hide scientific mode
    }
});

// Toggle dark mode
document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
