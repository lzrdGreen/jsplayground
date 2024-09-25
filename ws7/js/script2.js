/*
function togg() {
document.getElementById('toggle-btn').addEventListener('click', function() {
    const body = document.body;
    // Toggle between the default and high-contrast color schemes
    if (body.classList.contains('default-scheme')) {
        body.classList.remove('default-scheme');
        body.classList.add('high-contrast-scheme');
    } else {
        body.classList.remove('high-contrast-scheme');
        body.classList.add('default-scheme');
    }
});
}
*/

document.addEventListener('DOMContentLoaded', function() {
    // Attach the event listener directly when the DOM is ready
    document.getElementById('toggle-btn').addEventListener('click', function() {
        const body = document.body;
        // Toggle between the default and high-contrast color schemes
        if (body.classList.contains('default-scheme')) {
            body.classList.remove('default-scheme');
            body.classList.add('new-scheme');
        } else {
            body.classList.remove('new-scheme');
            body.classList.add('default-scheme');
        }
    });
});

function func3() {
    document.write('Nice try! Now reload the page!<h3>And do not click that blood red colour button again, OK?</h3>')
    alert('Such a silly alert! Unexpected?');    
}

let startTime = 0;
        let updatedTime = 0;
        let difference = 0;
        let interval = null;
        let running = false;

        function start() {
            if (!running) {
                startTime = Date.now() - difference;
                interval = setInterval(updateDisplay, 10); // Update every 10ms
                running = true;
            }
        }

        function stop() {
            if (running) {
                clearInterval(interval);
                difference = Date.now() - startTime;
                running = false;
            }
        }

        function reset() {
            clearInterval(interval);
            startTime = 0;
            updatedTime = 0;
            difference = 0;
            running = false;
            document.getElementById("display").innerHTML = "00:00:00.00";
        }

        function updateDisplay() {
            updatedTime = Date.now() - startTime;

            let hours = Math.floor((updatedTime / (1000 * 60 * 60)) % 24);
            let minutes = Math.floor((updatedTime / (1000 * 60)) % 60);
            let seconds = (updatedTime / 1000) % 60;

            document.getElementById("display").innerHTML =
                (hours < 10 ? "0" + hours : hours) + ":" +
                (minutes < 10 ? "0" + minutes : minutes) + ":" +
                (seconds < 10 ? "0" + seconds.toFixed(2) : seconds.toFixed(2));
        }




        let operation = null; // Store the selected operation

        function setOperation(op) {
            operation = op;
        }

        function calculate() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const decimals = parseInt(document.getElementById('decimals').value);
            let result = 0;

            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById('result').textContent = "Please enter valid numbers.";
                return;
            }

            if (!operation) {
                document.getElementById('result').textContent = "Please select an operation.";
                return;
            }

            switch (operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        document.getElementById('result').textContent = "Cannot divide by zero.";
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    document.getElementById('result').textContent = "Invalid operation.";
                    return;
            }

            // Apply rounding based on decimal places
            result = result.toFixed(decimals);
            document.getElementById('result').textContent = `Result: ${result}`;
        }

        function clearFields() {
            document.getElementById('num1').value = "";
            document.getElementById('num2').value = "";
            document.getElementById('result').textContent = "";
            operation = null;
        }

        let operation0 = null;
        let memory = 0; // Memory storage

        function setOperation0(op) {
            operation0 = op;
        }

        function calculate0() {
            const num10 = parseFloat(document.getElementById('num10').value);
            const num20 = parseFloat(document.getElementById('num20').value);
            const decimals0 = parseInt(document.getElementById('decimals0').value);
            let result0 = 0;

            if (isNaN(num10) || isNaN(num20)) {
                document.getElementById('result').textContent = "Please enter valid numbers.";
                return;
            }

            if (!operation0) {
                document.getElementById('result').textContent = "Please select an operation.";
                return;
            }

            switch (operation0) {
                case '+':
                    result0 = num10 + num20;
                    break;
                case '-':
                    result0 = num10 - num20;
                    break;
                case '*':
                    result0 = num10 * num20;
                    break;
                case '/':
                    if (num20 === 0) {
                        document.getElementById('result').textContent = "Cannot divide by zero.";
                        return;
                    }
                    result0 = num10 / num20;
                    break;
                default:
                    document.getElementById('result').textContent = "Invalid operation.";
                    return;
            }

            // Apply rounding based on decimal places
            result0 = result0.toFixed(decimals0);
            document.getElementById('result0').textContent = `Result: ${result0}`;
        }

        function saveToMemory() {
            const resultText = document.getElementById('result0').textContent;
            if (resultText.startsWith("Result: ")) {
                const resultValue = parseFloat(resultText.replace("Result: ", ""));
                memory = resultValue;
                updateMemoryDisplay();
            } else {
                document.getElementById('result0').textContent = "No result to save.";
            }
        }

        function addMemoryTo(inputId) {
            const inputElement = document.getElementById(inputId);
            const currentValue = parseFloat(inputElement.value) || 0;
            inputElement.value = (currentValue + memory).toFixed(6);
        }

        function clearMemory() {
            memory = 0;
            updateMemoryDisplay();
        }

        function updateMemoryDisplay() {
            const memoryDisplay = document.getElementById('memory-display');
            if (memory === 0) {
                memoryDisplay.textContent = "Memory: 0";
            } else {
                memoryDisplay.textContent = `Memory: ${memory.toFixed(6)}`;
            }
        }

        function clearCalculations() {
            document.getElementById('num10').value = "";
            document.getElementById('num20').value = "";
            document.getElementById('result0').textContent = "";
            operation0 = null;
        }

        function clearAll() {
            document.getElementById('num10').value = "";
            document.getElementById('num20').value = "";
            document.getElementById('result0').textContent = "";
            operation0 = null;
            clearMemory(); // Also clears memory when clearing all
        }
    