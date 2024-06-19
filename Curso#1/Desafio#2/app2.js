// Desafíos:
// 1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let dia = prompt("¿Cual es el dia de la semana?")

if (dia == "sábado" || dia == "domingo") {
    alert("¡Buen fin de semana!")
} else {
    alert("¡Buena semana!")
}

// 2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numero = prompt("Ingresa un numero")
if (numero >= 0) {
    alert("El numero es positivo")
} else {
    alert("El numero es negativo")
}

// 3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntos = prompt("Ingresa tus puntos")
if (puntos >= 100) {
    alert("¡Felicidades, has ganado!")
} else {
    alert("Intentalo nuevamente para ganar.")
}

// 4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let tuSaldo = prompt("Ingresa tu saldo")
alert(`Tu saldo es de ${tuSaldo}`)
if (tuSaldo >= 0) {
    alert("Tu saldo es positivo")
} else {
    alert("Tu saldo es negativo")
}

// 5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let tuNombre = prompt("Ingresa tu nombre")
alert(`Bienvenido ${tuNombre}`)