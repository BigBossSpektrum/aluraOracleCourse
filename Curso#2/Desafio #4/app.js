//Desafio #4

// 1. Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguagesDeProgramacion);

// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');


// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function clickConsole() {
    console.log(lenguagesDeProgramacion);
}
clickConsole();

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function clickReverse() {
    console.log(lenguagesDeProgramacion.reverse());
}
clickReverse();

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.

listaNumeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(listaNumeros) ;

function clickPromedio() {
    let promedio = (10 + 20 + 30 + 40 + 50 + 60 + 70 + 80 + 90 + 100) / 10
    console.log(promedio);
}
clickPromedio();

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

listaGenerica = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(listaGenerica) ;

function clickMinMax() {
    console.log(Math.max(...listaGenerica));
    console.log(Math.min(...listaGenerica));
}
clickMinMax();

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.

listaSumatoria = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(listaSumatoria) ;  

function clickSuma() {
    let suma = (10 + 20 + 30 + 40 + 50 + 60 + 70 + 80 + 90 + 100)
    console.log(suma);
}
clickSuma();

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

lista = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(lista) ;

function clickIndexOf() {
    console.log(lista.indexOf(50));
}
clickIndexOf();

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

listaNumeroOne = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(listaNumeroOne) ;
listaNumeroTwo = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(listaNumeroTwo) ;

function clickSumaListas() {
    let sumaListas = [];
    for (let i = 0; i < listaNumeroOne.length; i++) {
        sumaListas.push(listaNumeroOne[i] + listaNumeroTwo[i]);
    }
    console.log(sumaListas);
}
clickSumaListas();

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

listaNumeroCuadrado = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(listaNumeroCuadrado) ;

function clickCuadrado() {
    let cuadrado = [];
    for (let i = 0; i < listaNumeroCuadrado.length; i++) {
        cuadrado.push(Math.pow(listaNumeroCuadrado[i], 2));
    }
    console.log(cuadrado);
}
clickCuadrado();
