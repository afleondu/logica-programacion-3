function calcularFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = num; i > 1; i--) {
            factorial *= i;
        }
        return factorial;
    }
}

function pedirNumero() {
    let input = prompt("Ingresa un número para calcular su factorial:");

    if (input === null) {
        console.log("Operación cancelada.");
        return;
    }

    let numero = parseInt(input);

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, ingresa un número entero positivo.");
        pedirNumero();
    } else {
        let resultado = calcularFactorial(numero);
        document.getElementById('resultado').innerText = "El factorial de " + numero + " es: " + resultado;
    }
}

document.getElementById('calcular-btn').addEventListener('click', pedirNumero);