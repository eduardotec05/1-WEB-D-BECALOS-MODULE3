//ejemplo 1: contador simple con while

let contador = 1;

while (contador <= 5) {
  console.log("El contador está en el ciclo: ", contador);
  contador++;
}

//Ejemplo 2: contador en reversa

let cuentaRegresiva = 10;

while (cuentaRegresiva > 0) {
  console.log("El contador en reversa es: ", cuentaRegresiva);
  cuentaRegresiva--;
}

//ejemplo 3: Solicitar confirmación hasta que el usuario acepte

let confirmacion = false;

while (!confirmacion) {
  //Otras tareas dentro del ciclo
  confirmacion = confirm("¿Quieres realizar otra operación?"); //confirm devuelve un booleano
  console.log("Confirmación: ", confirmacion);
}
