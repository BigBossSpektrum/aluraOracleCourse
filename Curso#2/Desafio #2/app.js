// Desafio #2

// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo () {
    alert("¡Hola, mundo!")
    console.log("¡Hola, mundo!")
}

saludo()

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludoUsuario () {
    let nombreUsuario = prompt ("Como te llamas?")
    alert (`¡Hola, ${nombreUsuario}!`)
}

saludoUsuario()

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function multiplicador () {
    let numero = prompt ("Inserte un numero!")
    doble = numero * 2
    alert (doble)
    console.log(doble)
}

multiplicador()

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio () {
    let num1 = prompt ("Inserte un numero!")
    let num2 = prompt ("Inserte un numero!")
    let num3 = prompt ("Inserte un numero!")
    let prom = (num1 + num2 + num3) / 3
    alert (prom)
    console.log(prom)
}

promedio()

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor (){
    let num1 = prompt ("Inserte un numero!")
    let num2 = prompt ("Inserte un numero!")
        if (num1 > num2) {
            alert (num1)
        } else {
            alert (num2)
        }
}

mayor()

// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado () {
    let num = prompt ("Inserte un numero!")
    let cuadrado = num * num
    alert (cuadrado)
    console.log(cuadrado)
}

cuadrado()