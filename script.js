function openTab(event, tabName) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.classList.remove("active"));

    const buttons = document.querySelectorAll(".tab");
    buttons.forEach(button => button.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

function convertLength() {
    const input = document.getElementById("lengthInput").value;
    const unit = document.getElementById("lengthUnit").value;
    const resultElement = document.getElementById("lengthResult");
    let result = "";

    if (input !== "") {
        const value = parseFloat(input);
        if (unit === "meters") {
            result = `${value} meters = ${(value * 3.28084).toFixed(2)} feet`;
        } else if (unit === "feet") {
            result = `${value} feet = ${(value / 3.28084).toFixed(2)} meters`;
        }
    }

    resultElement.textContent = result;
}

function convertWeight() {
    const input = document.getElementById("weightInput").value;
    const unit = document.getElementById("weightUnit").value;
    const resultElement = document.getElementById("weightResult");
    let result = "";

    if (input !== "") {
        const value = parseFloat(input);
        if (unit === "kilograms") {
            result = `${value} kilograms = ${(value * 2.20462).toFixed(2)} pounds`;
        } else if (unit === "pounds") {
            result = `${value} pounds = ${(value / 2.20462).toFixed(2)} kilograms`;
        }
    }

    resultElement.textContent = result;
}

function convertTemperature() {
    const input = document.getElementById("temperatureInput").value;
    const unit = document.getElementById("temperatureUnit").value;
    const resultElement = document.getElementById("temperatureResult");
    let result = "";

    if (input !== "") {
        const value = parseFloat(input);
        if (unit === "celsius") {
            result = `${value}°C = ${(value * 9/5 + 32).toFixed(2)}°F`;
        } else if (unit === "fahrenheit") {
            result = `${value}°F = ${((value - 32) * 5/9).toFixed(2)}°C`;
        }
    }

    resultElement.textContent = result;
}
