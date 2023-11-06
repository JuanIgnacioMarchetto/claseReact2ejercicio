
        function sumar() {
            const op1 = parseFloat(document.getElementById("operando1").value);
            const op2 = parseFloat(document.getElementById("operando2").value);
            const resultado = op1 + op2;
            document.getElementById("resultado").textContent = "Resultado: " + resultado;
        }

        function restar() {
            const op1 = parseFloat(document.getElementById("operando1").value);
            const op2 = parseFloat(document.getElementById("operando2").value);
            const resultado = op1 - op2;
            document.getElementById("resultado").textContent = "Resultado: " + resultado;
        }

        function multiplicar() {
            const op1 = parseFloat(document.getElementById("operando1").value);
            const op2 = parseFloat(document.getElementById("operando2").value);
            const resultado = op1 * op2;
            document.getElementById("resultado").textContent = "Resultado: " + resultado;
        }

        function dividir() {
            const op1 = parseFloat(document.getElementById("operando1").value);
            const op2 = parseFloat(document.getElementById("operando2").value);
            if (op2 === 0) {
                document.getElementById("resultado").textContent = "Resultado: No se puede dividir por cero";
            } else {
                const resultado = op1 / op2;
                document.getElementById("resultado").textContent = "Resultado: " + resultado;
            }
        }
   