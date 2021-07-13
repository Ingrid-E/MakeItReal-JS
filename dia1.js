/**
 * Escribe un programa que le pida
 * al usuario ingresar una frase y
 * la imprima en la consola.
 */

let frase = prompt("Ingresa una frase") //Buenos dias Make It Real!
alert(`-> ${frase}`) // -> Buenos dias Make It Real!

/**
 * Escribe un programa que le pregunte al usuario su nombre e
 * imprima "Hola " seguido del nombre y un signo de exclamación.
 * Por ejemplo, si el usuario ingresa "Pedro" el programa debe
 * imprimir en la consola "Hola Pedro!".
 */

let saludo = prompt("Como te llamas?") //Ingrid E
alert(`Hola ${saludo}!`)//Hola Ingrid E!


/**
 * Escribe un programa que le pida al usuario ingresar un número,
 * luego le pide un segundo número, e imprima en la consola la
 * suma de los dos números que ingresó el usuario.
 */

let x = parseFloat(prompt("Numero 1")) // 5
let y = parseFloat(prompt("Numero 2")) // 8
let suma = x + y // 5 + 8
alert(suma)// 13


/**
 * Escribe un programa que le pida al usuario su año de nacimiento
 * e imprima su edad actual en la consola con la frase "Tienes X años".
 *Por ejemplo, asumiendo que el año actual es 2020 y el usuario ingresa
 *2000, el programa debe imprimir en la consola:
 */

let añoNacimiento = parseInt(prompt("En que año naciste?"))
let edad = 2021-añoNacimiento
alert(`Tienes ${edad} años`)


/**
 * El índice de masa corporal (IMC), o BMI por sus siglas en inglés,
 *  es un valor que determina la cantidad de grasa de una persona.
 * El BMI se calcula con la siguiente formula:
 */

let peso = parseFloat(prompt("Cuanto pesas?"))
let altura = parseFloat(prompt("Cual es tu altura?"))

let bmi = peso / Math.pow(altura,2)

alert(`Tu BMI es ${bmi}`)
