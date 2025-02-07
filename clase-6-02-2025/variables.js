/* 
    Diferencias entre var, let y const en JavaScript
    -var: se puede reasignar y redeclarar en cualquier parte del código. 
    -let: se puede reasignar pero no se puede redeclarar en cualquier parte del código.
    -const: No se puede reasignar ni se puede redeclarar.

*/
//var
var nombre = "Jonathan"; //declaramos una variable con var
nombre = "Gilean"; //reasignamos el valor de la variable
var nombre = "Luis"; //dereclaro la variable sin problemas
console.log(nombre);

//let
let apellido = "Villanueva"; //declaramos una variable con let
apellido = "Corona"; //reasignamos el valor de la variable

//const
const gravedad = 9.81; //declaramos una variable con const
gravedad = 9.82; //reasignamos el valor de la variable
