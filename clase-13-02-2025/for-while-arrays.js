//combinando while y for con arrays

//ejemplo 1: recorrer un arreglo con while
let frutas = ["manzana", "limón", "pera", "uva"];

let index = 0;

//recorrer el array con while
while (index < frutas.length) {
  console.log("Fruta " + index + ": " + frutas[index]);
  index++;
}

//ejemplo 2: recorrer un arreglo con for
for (let i = 0; i < frutas.length - 1; i++) {
  console.log("Fruta " + i + ": " + frutas[i]);
}
