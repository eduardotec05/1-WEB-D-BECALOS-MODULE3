let frutas = ["manzana"]; //creamos el array
let otrasFrutas = ["uva", "aguacate"]; //creamos el array
//metodos comunes en arrays

//.push() -> agrega un elemento al final del array
frutas.push("limón");
frutas.push("pera");
frutas.push("uva");
frutas.push(otrasFrutas); //agrega un array dentro de otro array
//-> length: 4 porque agrega todo el arreglo completo en la ultima posición

console.log("Despues de agregar elementos: ", frutas);

//.pop() -> elimina el último elemento del array
console.log(frutas.pop());
console.log("Despues de eliminar el ultimo elemento: ", frutas);

//.unshift() -> agrega un elemento al principio del array
console.log(frutas.unshift("mango"));
console.log("Despues de agregar el primer elemento: ", frutas);

//.shift() -> elimina el primer elemento del array
console.log(frutas.shift());
console.log("Despues de eliminar el primer elemento: ", frutas);

//.map() -> mapea cada elemento del array | CREA un nuevo array transformando el array original

// Ejemplo 1: Multiplicar cada elemento (item) del array por 2
let numeros = [1, 2, 3, 4, 5];
console.log("Array original: ", numeros);
let numerosPorDos = numeros.map((numero) => numero * 2);

console.log("Despues de mapear: ", numerosPorDos);

// Ejemplo 2: Convertir a mayúsculas cada elemento del array
let frutasMayusculas = frutas.map(function (fruta) {
  return fruta.toUpperCase();
});

console.log("Despues de mapear: ", frutasMayusculas);

//Ejemplo 3: Convertir a minusculas cada elemento del array
let frutasMinusculas = frutasMayusculas.map((fruta) => fruta.toLowerCase());

console.log("Despues de mapear: ", frutasMinusculas);

/*.sort() -> ordena el array |
  crea un nuevo array ordenado de acuerdo a la función comparadora que se le pase | 
 si es String, se ordena alfabéticamente */

let frutasOrdenadas = frutas.sort();
console.log("Despues de ordenar: ", frutasOrdenadas);
//.reverse() -> invierte el orden del array | Crea un nuevo array con el mismo elementos del original pero invertido
console.log("Despues de invertir: ", frutasOrdenadas.reverse());

//.sort() con numeros -> IMPORTANTE que si usamos sort directamente con números, los ordenará alfabéticamente
let numeros2 = ["2", "10", "1", "3"];
console.log("Array original: ", numeros2);
let numerosOrdenados = numeros2.sort();
console.log("Despues de ordenar: ", numerosOrdenados);

//para ordenar numeros correctamente, debemos usar un comparador
function comparadorMenorQue(a, b) {
  return a - b;
}
/*La funcion de comparacion va a tomar dos números (a y b)
 * Sí a - b es negativo, a va antes que b
 * Sí a - b es positivo, a va después que b
 * Sí a - b es cero, a y b son iguales
 */

let numerosOrdenadosCorrectamente = numeros2.sort(comparadorMenorQue);
console.log("Despues de ordenar: ", numerosOrdenadosCorrectamente);

//ordenar de mayor a menor
function comparadorMayorQue(a, b) {
  return b - a;
}

let numerosOrdenadosReversido = numeros2.sort(comparadorMayorQue);
console.log("Despues de ordenar: ", numerosOrdenadosReversido);

