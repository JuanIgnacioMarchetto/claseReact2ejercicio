const operando1 = document.getElementById("operando1");
const operando2 = document.getElementById("operando2");
const sumaBtn = document.getElementById("Suma");
const restaBtn = document.getElementById("resta");
const multiplicarBtn = document.getElementById("multiplica");
const divisionBtn = document.getElementById("divicion");
const resultado = document.getElementById("resultado");

function validarEntrada() {
    const num1 = Number(operando1.value);
    const num2 = Number(operando2.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Ingresa números en ambos campos";
        return false;
    }
    return true;
}

function Suma() {
    if (validarEntrada()) {
        const num1 = Number(operando1.value);
        const num2 = Number(operando2.value);
        resultado.textContent = num1 + num2;
    }
}

function resta() {
    if (validarEntrada()) {
        const num1 = Number(operando1.value);
        const num2 = Number(operando2.value);
        resultado.textContent = num1 - num2;
    }-
}

function multiplicar() {
    if (validarEntrada()) {
        const num1 = Number(operando1.value);
        const num2 = Number(operando2.value);
        resultado.textContent = num1 * num2;
    }
}

function division() {
    if (validarEntrada()) {
        const num1 = Number(operando1.value);
        const num2 = Number(operando2.value);

        if (num2 !== 0) {
            resultado.textContent = num1 / num2;
        } else {
            resultado.textContent = "No se puede dividir por 0";
        }
    }
}

sumaBtn.addEventListener("click", Suma);
restaBtn.addEventListener("click", resta);
multiplicarBtn.addEventListener("click", multiplicar);
divisionBtn.addEventListener("click", division);
