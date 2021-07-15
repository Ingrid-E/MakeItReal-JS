const numUsuario = parseFloat(prompt('Ingresa un numero'));
let resultado = '';

if(numUsuario%3 == 0) resultado += 'bing';
if(numUsuario%5 == 0) resultado += 'bong';
if(numUsuario%3 != 0 && numUsuario%5 != 0) resultado = numUsuario;

console.log(resultado)