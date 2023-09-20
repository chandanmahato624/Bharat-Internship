document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusToFahrenheitButton = document.getElementById("celsius-to-fahrenheit-btn");
    const fahrenheitToCelsiusButton = document.getElementById("fahrenheit-to-celsius-btn");
    const resetButton = document.getElementById("reset-btn");

    celsiusToFahrenheitButton.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    });

    fahrenheitToCelsiusButton.addEventListener("click", function () {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5/9;
        celsiusInput.value = celsius.toFixed(2);
    });

    resetButton.addEventListener("click", function () {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
    });
});
