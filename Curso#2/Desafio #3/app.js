// Desafio #3

// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function IMC() {
    let altura = prompt('¿Cual es tu altura en metros?')
    let peso = prompt('¿Cual es tu peso en kilogramos?')
    let imc = (peso / (altura * altura)).toFixed(2)
    alert(`Tu Masa Corporal es ${imc}`)
}
IMC();
// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial() {
    let num = prompt('¿Cual es tu numero?')
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact = fact * i
    }
    alert(`Tu factorial es ${fact}`)
}
factorial();

// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function dolar() {
    let dolar = prompt('¿Conversion de dolares a reales?')
    let real = dolar * 4.8
    alert(`Tu dolar es ${real}`)
}
dolar();

// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function rectangulo() {
    let altura = prompt('¿Cual es la altura de la Sala?')
    let anchura = prompt('¿Cual es la anchura de la Sala?')
    alert(`Tu rectangulo es de ${altura} x ${anchura}`)
}
rectangulo();

// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function circulo() {
    let radio = prompt('¿Cual es tu radio?')
    let circulo = (radio * radio) * 3.14
    alert(`Tu circulo es de ${circulo}`)
}
circulo();
// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaDeMultiplicar() {
    let num = prompt('¿Cual es tu numero?')
    for (let i = 0; i <= 10; i++) {
        alert(`${num} x ${i} = ${num * i}`)
    }
}
tablaDeMultiplicar();