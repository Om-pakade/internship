function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitSelect').value;
    let convertedTemperature;

    if (isNaN(inputTemperature)) {
        alert("Please enter a valid temperature.");
        return;
    }

    if (unit === 'celsius') {
        convertedTemperature = (inputTemperature * 9 / 5) + 32;
        document.getElementById('result').innerText = `${inputTemperature} °C is ${convertedTemperature.toFixed(2)} °F`;
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (inputTemperature - 32) * 5 / 9;
        document.getElementById('result').innerText = `${inputTemperature} °F is ${convertedTemperature.toFixed(2)} °C`;
    } else if (unit === 'kelvin') {
        convertedTemperature = inputTemperature - 273.15;
        document.getElementById('result').innerText = `${inputTemperature} K is ${convertedTemperature.toFixed(2)} °C`;
    }
}