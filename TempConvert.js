document.addEventListener("DOMContentLoaded", function () {
    const tempForm = document.getElementById('tempForm');
    const resultDiv = document.getElementById('result');

    tempForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const tempType = document.querySelector('input[name="type"]:checked').value;
        const inputValue = parseFloat(document.getElementById('temp-inp').value);

        if (tempType === 'celsius') {
            const convertedValue = (inputValue - 32) * (5 / 9);
            resultDiv.textContent = `Converted Temperature in Celsius: ${convertedValue.toFixed(2)} °C`;
        } else if (tempType === 'fahrenheit') {
            const convertedValue = (inputValue * (9 / 5)) + 32;
            resultDiv.textContent = `Converted Temperature in Fahrenheit: ${convertedValue.toFixed(2)} °F`;
        }
    });
});
