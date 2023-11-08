const operando1 = document.getElementById("operando1");
const operando2 = document.getElementById("operando2");
const sumarBtn = document.getElementById("sumar");
const restarBtn = document.getElementById("restar");
const multiplicarBtn = document.getElementById("multiplicar");
const dividirBtn = document.getElementById("dividir");
const resultado = document.getElementById("resultado");
function sumar() {
    const num1 = parseFloat(operando1.value);
    const num2 = parseFloat(operando2.value);
    resultado.textContent = num1 + num2;
}
function restar() {
    const num1 = parseFloat(operando1.value);
    const num2 = parseFloat(operando2.value);
    resultado.textContent = num1 - num2;
}
function multiplicar() {
    const num1 = parseFloat(operando1.value);
    const num2 = parseFloat(operando2.value);
    resultado.textContent = num1 * num2;
}
function dividir() {
    const num1 = parseFloat(operando1.value);
    const num2 = parseFloat(operando2.value);
    if (num2 !== 0) {
        resultado.textContent = num1 / num2;
    } else {
        resultado.textContent = "No divide con 0";
    }
}
sumarBtn.addEventListener("click", sumar);
restarBtn.addEventListener("click", restar);
multiplicarBtn.addEventListener("click", multiplicar);
dividirBtn.addEventListener("click", dividir);
