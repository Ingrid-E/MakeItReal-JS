/**
 * Escribe un programa que le pida al usuario ingresar
 * una frase. El programa debe imprimir la frase en la
 * consola 10 veces.


const fraseUsuario = prompt('Ingresa una frase');
for(let i = 0; i < 10; i++){
    console.log(fraseUsuario)
}
*/

/**
 * Escribe un programa que le pida al usuario una frase
 * y un número. El programa debe imprimir la frase en la
 * consola el número de veces que ingresó el usuario.
 *
 * Por ejemplo, si el usuario ingresó la frase "Hola Mundo"
 * y el número 5, el programa debe imprimir "Hola Mundo" 5
 * veces:
 *
 * Hola Mundo
 * Hola Mundo
 * Hola Mundo
 * Hola Mundo
 * Hola Mundo


const fraseUsuario = prompt('Ingresa una frase');
const numUsuario = prompt('Ingresa cuantas veces se repite la frase')

for(let i = 0; i < numUsuario; i++){
    console.log(fraseUsuario)
}
*/

/**
 * Escribe un programa para la consola que le pida al usuario
 * un número e imprima los números desde 1 hasta el número.Por
 * ejemplo, si el usuario ingresa el número 5, el programa de
 * be imprimir:
 * 1
 * 2
 * 3
 * 4
 * 5


const numUsuario = prompt("Ingresa un numero");
for(let i = 1; i <= numUsuario; i++){
    console.log(i)
}
*/

/**
 * Escribe un programa para la consola que le pida al usuario
 * dos números e imprima en la consola los números en ese rango.
 * Por ejemplo, si el usuario ingresa 5 como primer número y 10
 * como segundo número, el programa debe imprimir:
 * 5
 * 6
 * 7
 * 8
 * 9
 * 10

const minNum = parseInt(prompt('Inicio del rango'));
const maxNum = parseInt(prompt('Final del rango'));

for(let i = minNum; i<=maxNum; i++){
    console.log(i)
}
*/

/**
 * Escribe un programa que piense un número de forma aleatoria y
 * le pida al usuario que lo trate de adivinar (como en uno de los
 * ejercicios anteriores). La diferencia es que esta vez el usuario
 * puede intentar indefinidamente hasta que encuentre el número.
*/

const numAleatorio = Math.ceil(Math.random() * 10);
let numUsuario = parseInt(prompt('Intenta adivinar el numero, el rango es de 1-10'));
while(numUsuario != numAleatorio){
    console.log('Lo siento ese no era el numero, intenta nuevamente');
    numUsuario = parseInt(prompt('Intenta adivinar el numero, el rango es de 1-10'));
}
console.log(`Felicitaciones, el numero era ${numAleatorio}`)
