const textBox = document.getElementById("textBox");
const optionsBox = document.getElementById("optionsBox");
const Result = document.getElementById("Result");

let temp;

function convert (){

    if (optionsBox.value === "Celsius") {
        temp = Number(textBox.value);
        temp = temp * 9/5 + 32;
        Result.textContent = temp.toFixed(1) + "°F";

    } else if (optionsBox.value === "Farenheit") {
        temp = Number(textBox.value);
        temp = (temp - 32 ) * (5 / 9);
        Result.textContent = temp.toFixed(1) + "°C";
    } else {
        Result.textContent = "Select a Unit";
    }
}
