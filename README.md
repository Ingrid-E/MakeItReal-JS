# MakeItReal-JS
Curso por Make It Real-Introducción a JavaScript

## Lógica booleana y declaraciones if

### Comparación

*   '< '
*   '<='
*   '> '
*   '>='

### Booleano
*   true : Verdad
*   false: No es Verdad

```javascript
console.log(2>1) // True
console.log(2 == 1) //False

const result = 5 > 4
console.log(result) //True
```

JS automáticamente convierte los tipos de datos que puede generar error. <br>
'42' == 42 es **true**<br>
'42 === 42 es **false** <- Lo mejor es usar este para comparaciónes <br>

Para el operador de desigualdad es lo mismo<br>
'55' != 55 es **false**<br>
'55'!== 55 es **true** <- Lo mejor es usar este<br>

**Valores falsos implícitos**
*   Una cadena vaciá
*   Un valor nulo
*   0

### Combinando comparaciones

*   And &-&&
*   Or |-||

La diferencia entre doble & o doble | es: <br>
No revisa los dos valores solo revisa el primero y si es false se lo salta de una.

```javascript
const x = 0;
if(x) {
    console.log('x contains a value'); //No sale porque x es false
}
```

### Declaraciónes If

```javascript
const status = 200;

if(status === 200){
    console.log('OK!');
}else if(status === 400){
    console.log('Error!');
}else {
    console.log('Unknown status')
}
```
Formas alternativas de escribir declaraciónes <br>
*   Si solo se usa una sola línea no es necesario poner {} de forma anidada
    *   ```javascript
        const status = 200;

        if(status === 200) console.log('OK!');
        else if(status === 400) console.log('Error!');
        else console.log('Unknown status')
        ```
* Operador Ternario: declaración if instantánea
    * ? -> Condición
    * : -> Else
    *   ```javascript
        const message = (status == 200) ? 'Verdadero' : 'False'
        ```

### Switch(case)

```javascript
const status = 200;
switch (status) {
    case 200:
        console.log('OK!');
        break; //Siempre usar break
    case 400: //Esta parte es un o || con 500
    case 500:
        console.log('Error');
        break;
    default:
        console.log('Unknown value');
        break;
}
```

**numero aleatorio** <br>
*   Math.random()


# Guiá Subir Ejercicios

* Github: [@Ingrid-E](https://github.com/Ingrid-E)
Enunciado...
```javascript
```
Retorna:
```
```
