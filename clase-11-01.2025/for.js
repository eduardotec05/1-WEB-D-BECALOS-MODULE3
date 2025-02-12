//Ejemplo 1: Contador simple con for

for (let i = 1; i <= 5; i++) {
  console.log("El contador está en el ciclo: ", i);
}

//Ejemplo 2: Contador inverso con for
for (let i = 1; i > 0; i--) {
  console.log("Cuenta atrás: ", i);
}

//Ejemplo 3: Saltarnos los números pares
for (let impar = 1; impar <= 10; impar++) {
  if (impar % 2 === 0) {
    continue;
  }
  console.log(impar);
}
