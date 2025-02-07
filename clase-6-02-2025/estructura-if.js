/* 
    Estructura de control if en JavaScript
    -Permite ejecutar codigo solo si una condición es verdadera.
    -Permite ejecutar múltiples condiciones.
    -Puede usarse con operadores de comparación y lógicos.
*/

let edad = 12;
let tieneINE = false;

//condicional simple
if (edad >= 18 && tieneINE) {
  console.log("Tienes los requisitos para votar");
}

//condicional con else
if (edad >= 18 && tieneINE) {
  console.log("Tienes los requisitos para votar");
} else {
  console.log(
    "Uno o más de los requisitos no se cumplen, verifica tu información"
  );
}

//condicional con else if
if (edad < 13) {
  console.log("Eres un niño");
} else if (edad < 18) {
  console.log("Eres un adolescente");
} else {
  console.log("Eres mayor de edad");
}

let tieneEntrada = false;

if (!tieneEntrada) {
  console.log("No tienes entrada");
}

console.log("Fin de la ejecución");
