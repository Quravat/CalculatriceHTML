let screen = document.getElementById('screen');
let currentInput = '';

function clearScreen() {
    currentInput = '';
    screen.textContent = '0';
}

function appendToScreen(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    screen.textContent = currentInput;
}

function calculateResult() {
    try {
        let result = currentInput;

        result = result.replace(/sin\(([^)]+)\)/g, (match, p1) => Math.sin(toRadians(parseFloat(p1))));
        result = result.replace(/cos\(([^)]+)\)/g, (match, p1) => Math.cos(toRadians(parseFloat(p1))));
        result = result.replace(/tan\(([^)]+)\)/g, (match, p1) => Math.tan(toRadians(parseFloat(p1))));
        result = result.replace(/log\(([^)]+)\)/g, (match, p1) => Math.log10(parseFloat(p1)));
        result = result.replace(/√([^)]+)/g, (match, p1) => Math.sqrt(parseFloat(p1)));
        result = result.replace(/x²/g, (match) => Math.pow(parseFloat(currentInput), 2));
        result = result.replace(/π/g, Math.PI);

        screen.textContent = eval(result);
        currentInput = screen.textContent;
    } catch (error) {
        screen.textContent = 'Erreur';
    }
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
