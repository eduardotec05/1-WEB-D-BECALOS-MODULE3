//FUNCIONES EN JAVASCRIPT

/*
  Funciones son bloques de código REUTILIZABLE que se pueden llamar desde cualquier parte del código
para realizar una tarea específica para evitar repetir código
*/

//Sintaxis de una función
//Paso 1: Definir la función
function saludar() {
  console.log("Hola");
}
//Paso 2: Llamar a la función
saludar();
saludar();
saludar(); //puedo llamarla cuantas veces quiera

//creo una funcion con parametros (argumentos)
function saludarPersona(nombre) {
  console.log("Hola " + nombre);
}
saludarPersona("Juan");
saludarPersona("Maria");
saludarPersona("Pedro");

function resta(numero1, numero2) {
  return numero1 - numero2;
}
console.log(resta(10, 5));

