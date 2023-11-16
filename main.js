/* PUNTO 1 */

/* let numero =  prompt("Ingrese un numero: ") ;
let contador = 0;

while (contador <= 10) {

    console.log(numero + " x " + contador + " = " + numero*contador)
    contador++
    
} */

/* PUNTO 2 */

/* let numero = parseInt(prompt("ingrese los numeros"));
let suma= 0;

while (numero !== 0) {
    numero = parseInt(prompt("ingrese los numeros")) ;
    suma += numero 
}

console.log("el total de los numeros= " + suma) */

/* PUNTO 3 */

/* let numero = Math.floor(Math.random() * 100) + 1;
let adivinado = false;

while (!adivinado) {
    let numeroIngresado = parseInt(prompt("Ingresa un número entre 1 y 100:"));

    if (numeroIngresado === numero) {
        adivinado = true;
        console.log("¡Felicidades! Adivinaste el número secreto");
    } else if (numeroIngresado < numero) {
        console.log("El número ingresado es menor");
    } else {
        console.log("El número ingresado es mayor");
    }
} */

/* PUNTO 4 */

/* function esPrimo(num) {
    if (num > 1) {
        for(let i = 2; i <= num / 2; i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

let num = prompt("Por favor, ingresa un número");
if (esPrimo(num)) {
    console.log(num + " es un número primo");
} else {
    console.log(num + " no es un número primo");
} */



/* PUNTO 5 */

/* function encontrarDivisores(num) {
    let divisores = [];
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

let num = prompt("Por favor, ingresa un número");
let divisores = encontrarDivisores(num);
console.log("Los divisores de " + num + " son: " + divisores.join(", ")); */

/* punto 6 */
/* 
let arroy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < arroy.length; i++) {
    console.log(arroy[i]);
} */

/* PUNTO 7 */

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
} */

/* PUNTO 8 */

/* let familia = [
    {nombre: "Juan", edad: 35, relacion: "padre", ocupacion: "ingeniero"},
    {nombre: "Ana", edad: 34, relacion: "madre", ocupacion: "doctora"},
    {nombre: "Pedro", edad: 10, relacion: "hijo", ocupacion: "estudiante"},
    {nombre: "Maria", edad: 8, relacion: "hija", ocupacion: "estudiante"},
    {nombre: "Carlos", edad: 65, relacion: "abuelo", ocupacion: "jubilado"}
];
for(let i = 0; i < familia.length; i++) {
    console.log(`Hola, soy ${familia[i].nombre}, tengo ${familia[i].edad} años, soy el ${familia[i].relacion} de la familia y trabajo como ${familia[i].ocupacion}.`);
} */

/* PUNTO 9 */

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
} */

/* PUNTO 10 */

/* let num;
let sumaPares = 0;
let sumaImpares = 0;
while (true) {
    let valor = prompt("Por favor, ingresa un número (0 para terminar)");
    if (valor === null || valor === '') {
        break;
    }
    num = Number(valor);
    if (isNaN(num)) {
        alert('Por favor, ingresa un número válido');
        continue;
    }
    if (num === 0) {
        break;
    }
    if (num % 2 === 0) {
        sumaPares += num;
    } else {
        sumaImpares += num;
    }
}
console.log("La suma de los números pares es: " + sumaPares);
console.log("La suma de los números impares es: " + sumaImpares); */

/* PUNTO 11 */

/* let arr = [1, 6, 16, 4, 5, 32, 7, 8, 9, 10];
let numeroMax = arr[0];
for(let i = 1; i < arr.length; i++) {
    if(arr[i] > numeroMax) {
        numeroMax = arr[i];
    }
}
console.log("El número más grande es: " + numeroMax);
 */

/* punto 12 */

/* let arr = [20, 35, 85, 45, 21, 58, 36, 20, 141, 101];
let min = arr[0];
for(let i = 1; i < arr.length; i++) {
    if(arr[i] < min) {
        min = arr[i];
    }
}
console.log("El número más pequeño es: " + min); */

/* PUNTO 13 */

/* let jugador1 = prompt("Nombre del jugador 1");
let jugador2 = prompt("Nombre del jugador 2");
let mano1, mano2;
do {
    mano1 = prompt(jugador1 + ", elige: piedra, papel o tijeras");
    mano2 = prompt(jugador2 + ", elige: piedra, papel o tijeras");
    if(mano1 === mano2) {
        console.log("Empate, sigan jugando");
    } else if((mano1 === "piedra" && mano2 === "tijeras") || (mano1 === "papel" && mano2 === "piedra") || (mano1 === "tijeras" && mano2 === "papel")) {
        console.log(jugador1 + " gana");
    } else {
        console.log(jugador2 + " gana");
    }
} while(mano1 === mano2); */

/* PUNTO 14 */

/* for(let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
} */

/* PUNTO 15 */

/* for(let i = 5; i >= 1; i--) {
    console.log("*".repeat(i));
}
 */

/* PUNTO 16 */

/* let arr = [5, 2, 8, 1, 3, 7, 6, 4, 9, 10];
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log("Array ordenado: " + arr.join(", ")); */







