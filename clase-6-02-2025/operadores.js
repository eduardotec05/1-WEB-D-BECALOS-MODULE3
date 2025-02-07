/* 
Operadores de JavaScript

Tipos: 
-Matemáticos: Para realizar calculos.
-Comparación: Para comparar valores.
-Lógicos: Para realizar operaciones lógicas.
*/

//operadores matemáticos
let suma = 5 + 3;
let resta = 6 - 2;
let multiplicacion = 5 * 12;
let division = 156 / 3;
let modulo = 10 % 4;
let exponente = 2 ** 3;

console.log(suma, resta, multiplicacion, division, modulo, exponente);

/* 
    Jerarquía de operadores matemáticos
    1. Parentesis()
    2. Exponentes **
    3. Multiplicación * y División /
    4. Suma + y Resta -
*/

//Ejemplos de jerarquía
let operacion1 = 10 + 5 * 2; //10+(5*2) = 20
let operacion2 = (10 + 5) * 2; //(10+5)*2 = 30

console.log(operacion1, operacion2);

/* 
    Operadores de comparación
    1. Mayor que >
    2. Menor que <
    3. Mayor o igual que >=
    4. Menor o igual que <=
*/

//Ejemplos de comparación
let mayor = 10 > 5; //mayor que
let menor = 10 < 5; //menor que
let igual = 5 == "5"; //igual
let estrictamenteIgual = 5 === "5"; //estrictamente igual
let diferente = 5 != "5"; //diferente (false)
let estrictamenteDiferente = 5 !== "5"; //estrictamente diferente (true)

console.log(
  mayor,
  menor,
  igual,
  estrictamenteIgual,
  diferente,
  estrictamenteDiferente
);

/* 
    Operadores logicos
*/

let and = 10 > 5 && 3 > 8; //AND false
let or = 10 > 5 || 3 > 8; //OR true
let not = !(10 > 5); //NOT false

console.log(and, or, not);

/* 
    Jerarquía de operadores lógicos
    1. NOT ! -> se evalua primero
    2. AND && -> se evalua segundo
    3. OR || -> se evalua tercero
*/
//ejemplo de jerarquía de operadores lógicos
let logic1 = true || (false && false); //primero evaluo AND = false || false && false = false
let logic2 = (true || false) && false; //primero evaluo OR = true || true && false = false

console.log(logic1, logic2);

