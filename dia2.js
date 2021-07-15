/**
 * Ejercicio 6
 * Escribe un programa que le pida un número al usuario e
 * imprima en la consola si el número es mayor a menor/igual
 * a 10.
 * Si es mayor debe imprimir "El número es mayor a 10"
 * Si es menor debe imprimir "El número es menor o igual a 10"
 */

const numUsuario = parseFloat(prompt('Ingresa un numero'))

const rango = (numUsuario > 10) ? 'El número es mayor a 10' : 'El numero es menor o igual a 10'

console.log(rango)

/**
 * Escribe un programa que piense un número de forma
 * aleatoria del 1 al 10 y le pida al usuario que lo
 *  trate de adivinar. Si el número es correcto debe
 *  imprimir en la consola "Felicitaciones, ese era!",
 *  de lo contrario debe imprimir "Lo siento, intenta
 *  nuevamente!"
*/


const numAleatorio = Math.ceil(Math.random() * 10);
let numUsuario = parseInt(prompt('Intenta adivinar el numero, el rango es de 1-10'));
const resultado = (numUsuario == numAleatorio)
    ? 'Felicitaciones, ese era'
    :`Lo siento el numero era ${numAleatorio}, intenta nuevamente`;
console.log(resultado)


/**
 * Un múltiplo de 5 es aquel que dividido por 5 da
 * por resultado un número entero (sin residuo). Por
 *  ejemplo 10, 15, 20, etc. son múltiplos de 5. 11
 *  no es múltiplo de 5 porque quedaría un residuo
 *  de 1. Escribe un programa que le pida al usuario
 *  un número e imprima si es un múltiplo de 5 o no.
 * Si es múltiplo debe imprimir "Si, el número x es
 *  múltiplo 5", de lo contrario debe imprimir "No,
 *  el número x no es múltiplo de 5".
*/
const numUsuario = parseFloat(prompt('Ingresa un número'));
const multiploCinco = (numUsuario%5 == 0)
    ? `Si, el número ${numUsuario} es múltiplo de 5`
    : `No, el número ${numUsuario} no es múltiplo de 5`;
console.log(multiploCinco);


/**
 * Escribe un programa que le pida un número al
 * usuario e imprima en la consola si el número
 *  si es mayor, menor o igual que 10.
 *
 * Si el número es menor a 10 debe imprimir
 * "El número es menor que 10".
 *
 * Si el número es mayor a 10 debe imprimir
 * "El número es mayor que 10".
 *
 * Si el número es igual a 10 debe imprimir
 *  "El número es igual a 10".
 */

const numUsuario = parseFloat(prompt('Ingresa un número'));

if (numUsuario < 10) console.log("El número es menor que 10");
else if (numUsuario > 10) console.log("El número es mayor que 10");
else console.log("El número es igual a 10");

console.log(resultado)


/**
 * El índice de masa corporal (IMC), o BMI por
 *  sus siglas en inglés, es un valor que determina
 *  la cantidad de grasa de una persona.
 * El BMI se calcula con la siguiente formula:
 * peso / altura^2
 * Escribe un programa que le pida al usuario su peso
 * y altura. El programa deberá calcular el BMI e imprimir:
 * "Bajo de peso" si el BMI < 18.5
 * "Normal" si está entre 18.5 y 24.9
 * "Sobrepeso" si está entre 25 y 29.9
 * "Obeso" si es igual o mayor a 30
 */

const pesoUsuario = parseFloat(prompt('Ingrese su peso'))
const alturaUsuario = parseFloat(prompt('Ingrese su Altura'))
const bmi = pesoUsuario/Math.pow(alturaUsuario,2)

if(bmi < 18.5) console.log("Bajo de peso")
else if(bmi >= 18.5 && bmi < 25 ) console.log("Normal")
else if(bmi >= 25 && bmi < 30) console.log("Sobrepeso")
else console.log("Obeso")

/**
 * Escribe un programa que le pida al usuario ingresar un número.
 * Si el número es múltiplo de 3 debe imprimir en la consola "bing".
 * Si el número es múltiplo de 5 debe imprimir en la consola "bong".
 * Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la
 * consola "bingbong".
 * Si no cumple ninguna de las condiciones anteriores debe imprimir
 *  el mismo número.
 */

const numUsuario = parseFloat(prompt('Ingresa un numero'));
let resultado = '';

if(numUsuario%3 == 0) resultado += 'bing';
if(numUsuario%5 == 0) resultado += 'bong';
if(numUsuario%3 != 0 && numUsuario%5 != 0) resultado = numUsuario;

console.log(resultado)
